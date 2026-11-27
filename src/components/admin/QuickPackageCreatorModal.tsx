'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HolidayPackage } from '@/data/packagesData';
import { cloudStore } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';
import {
  X,
  Sparkles,
  Plus,
  Trash2,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  Hotel,
  Calendar,
  MapPin,
  Tag,
  DollarSign,
  FileText,
  ExternalLink,
  Loader2,
  Wand2,
  ShieldCheck,
  Check,
  Pencil,
  Edit3,
} from 'lucide-react';

interface QuickPackageCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPackageCreated?: (pkg: HolidayPackage) => void;
  packageToEdit?: HolidayPackage | null;
}

interface HotelEntry {
  city: string;
  name: string;
  nights: number;
  rating?: string;
}

interface DayEntry {
  dayNumber: number;
  title: string;
  description: string;
  hotel: string;
  meals: string[];
  activities: string;
}

export function QuickPackageCreatorModal({
  isOpen,
  onClose,
  onPackageCreated,
  packageToEdit,
}: QuickPackageCreatorModalProps) {
  // 1. Basic Package Details
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('Andhra Pradesh');
  const [durationDays, setDurationDays] = useState(5);
  const [durationNights, setDurationNights] = useState(4);
  const [baselineTier, setBaselineTier] = useState<'3-Star Standard' | '4-Star Deluxe' | '5-Star Luxury'>('3-Star Standard');
  const [theme, setTheme] = useState('Pilgrimage & Heritage');
  const [departureCity, setDepartureCity] = useState('');
  const [mealPlan, setMealPlan] = useState('Breakfast & Dinner Included (MAP)');

  // 2. Pricing
  const [startingPrice, setStartingPrice] = useState<number | ''>(25000);
  const [discountPrice, setDiscountPrice] = useState<number | ''>(29999);

  // 3. Hotel Details
  const [hotels, setHotels] = useState<HotelEntry[]>([
    { city: 'Chennai', name: 'Kansone Hotel And Banquets', nights: 1, rating: '4.8' },
    { city: 'Tirupati', name: 'Hotel MountView Comforts', nights: 2, rating: '4.8' },
    { city: 'Mahabalipuram', name: 'Mamalla Beach Resort', nights: 1, rating: '4.8' },
  ]);

  // 4. Photos & Instant Upload
  const [heroImage, setHeroImage] = useState(
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80&fm=webp&fit=crop'
  );
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);

  const PRESET_DESTINATION_PHOTOS = [
    { label: '🏔️ Kashmir', url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🏖️ Goa', url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🏙️ Dubai', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🌴 Bali', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🛕 Ayodhya', url: 'https://images.unsplash.com/photo-1707056507457-3f338d3878b2?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🎿 Auli', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🐘 Kerala', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🏰 Rajasthan', url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🏯 Thailand', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fm=webp&fit=crop' },
    { label: '🏝️ Andaman', url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80&fm=webp&fit=crop' },
  ];

  const handleDevicePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingPhoto(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxW = 1200;
        const maxH = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxW) {
            height = Math.round((height * maxW) / width);
            width = maxW;
          }
        } else {
          if (height > maxH) {
            width = Math.round((width * maxH) / height);
            height = maxH;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/webp', 0.85);
          setHeroImage(dataUrl);
        }
        setIsUploadingPhoto(false);
      };
      img.onerror = () => setIsUploadingPhoto(false);
      img.src = event.target?.result as string;
    };
    reader.onerror = () => setIsUploadingPhoto(false);
    reader.readAsDataURL(file);
  };

  const handleGalleryDeviceUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingGallery(true);
    const newPhotos: string[] = [];

    const processFile = (file: File): Promise<string> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const maxW = 1200;
            const maxH = 800;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > maxW) {
                height = Math.round((height * maxW) / width);
                width = maxW;
              }
            } else {
              if (height > maxH) {
                width = Math.round((width * maxH) / height);
                height = maxH;
              }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0, width, height);
              resolve(canvas.toDataURL('image/webp', 0.82));
            } else {
              resolve('');
            }
          };
          img.onerror = () => resolve('');
          img.src = event.target?.result as string;
        };
        reader.onerror = () => resolve('');
        reader.readAsDataURL(file);
      });
    };

    for (let i = 0; i < files.length; i++) {
      const dataUrl = await processFile(files[i]);
      if (dataUrl) newPhotos.push(dataUrl);
    }

    setGalleryImages((prev) => [...prev, ...newPhotos]);
    setIsUploadingGallery(false);
    e.target.value = '';
  };

  const removeGalleryPhoto = (indexToRemove: number) => {
    setGalleryImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const clearAllGalleryPhotos = () => {
    setGalleryImages([]);
  };

  const handleAddGalleryUrl = () => {
    if (newGalleryUrl.trim()) {
      setGalleryImages((prev) => [...prev, newGalleryUrl.trim()]);
      setNewGalleryUrl('');
    }
  };

  // 5. Itinerary
  const [rawItineraryText, setRawItineraryText] = useState('');
  const [itineraryDays, setItineraryDays] = useState<DayEntry[]>([
    {
      dayNumber: 1,
      title: 'Arrival & City Heritage Exploration',
      description: 'Pickup from airport or railway station. Check-in to hotel and relax. Afternoon sightseeing of major local landmarks, temples, and beaches. Savor local dinner and overnight stay.',
      hotel: 'Kansone Hotel And Banquets',
      meals: ['Dinner'],
      activities: 'Airport Pickup, Hotel Check-in, Local Sightseeing, Evening Promenade',
    },
    {
      dayNumber: 2,
      title: 'Intercity Scenic Drive & Temple Darshan',
      description: 'Morning breakfast at hotel, check out and embark on a scenic drive to next destination. En-route temple darshan and sightseeing stops. Evening hotel check-in and leisure.',
      hotel: 'Hotel MountView Comforts',
      meals: ['Breakfast', 'Dinner'],
      activities: 'Scenic Interstate Transfer, En-route Darshan, Hotel Check-in, Temple Aarti',
    },
    {
      dayNumber: 3,
      title: 'Full Day Sacred Darshan & Pilgrimage Highlights',
      description: 'Early morning sacred temple visit and special darshan. Collect divine prasadam, explore spiritual landmarks, viewpoints, and evening temple ceremonies. Return to hotel for dinner.',
      hotel: 'Hotel MountView Comforts',
      meals: ['Breakfast', 'Dinner'],
      activities: 'Morning Sacred Darshan, Holy Pushkarini Walk, Spiritual Sightseeing, Evening Leisure',
    },
    {
      dayNumber: 4,
      title: 'Coastal Heritage & UNESCO Monument Tour',
      description: 'After breakfast, drive to UNESCO World Heritage coastal town. Check-in to beachside resort. Marvel at ancient rock carvings, shore monuments, and enjoy relaxed sea-breeze evening.',
      hotel: 'Mamalla Beach Resort',
      meals: ['Breakfast', 'Dinner'],
      activities: 'Coastal Scenic Drive, UNESCO Shore Temple Tour, Beachside Walk, Sunset Relaxation',
    },
    {
      dayNumber: 5,
      title: 'Resort Breakfast & Departure Transfer',
      description: 'Morning coastal breeze and resort breakfast. Check out and transfer smoothly to airport or railway station for return journey with blessings and beautiful memories.',
      hotel: 'Check-out completed (Departure Day)',
      meals: ['Breakfast'],
      activities: 'Resort Breakfast, Check-out Formalities, Private AC Drop to Airport / Station',
    },
  ]);

  // 6. Highlights & Inclusions Custom Notes
  const [customHighlights, setCustomHighlights] = useState('');
  const [customInclusions, setCustomInclusions] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [publishedPackage, setPublishedPackage] = useState<HolidayPackage | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Synchronize state when packageToEdit changes or modal opens
  useEffect(() => {
    if (packageToEdit && isOpen) {
      setName(packageToEdit.name || '');
      setDestination(packageToEdit.destination || 'Andhra Pradesh');
      setDurationDays(packageToEdit.durationDays || 5);
      setDurationNights(packageToEdit.durationNights || Math.max(0, (packageToEdit.durationDays || 5) - 1));

      const cat = packageToEdit.hotelCategory || '3-Star Standard';
      if (cat.includes('5') || cat.toLowerCase().includes('luxury')) {
        setBaselineTier('5-Star Luxury');
      } else if (cat.includes('4') || cat.toLowerCase().includes('deluxe')) {
        setBaselineTier('4-Star Deluxe');
      } else {
        setBaselineTier('3-Star Standard');
      }

      setTheme(packageToEdit.theme || 'Pilgrimage & Heritage');
      setDepartureCity(packageToEdit.departureCity || '');
      setMealPlan(packageToEdit.mealPlan || 'Breakfast & Dinner Included (MAP)');
      setStartingPrice(packageToEdit.startingPrice || 25000);
      setDiscountPrice(packageToEdit.discountPrice || '');

      if (Array.isArray(packageToEdit.hotels) && packageToEdit.hotels.length > 0) {
        setHotels(
          packageToEdit.hotels.map((h) => ({
            city: h.city || packageToEdit.destination || '',
            name: h.name || '',
            nights: Number(h.nights) || 1,
            rating: h.rating || '4.8',
          }))
        );
      } else {
        setHotels([
          {
            city: packageToEdit.destination || 'Destination',
            name: 'Standard Hotel',
            nights: packageToEdit.durationNights || 1,
            rating: '4.8',
          },
        ]);
      }

      const img =
        packageToEdit.heroImage ||
        (packageToEdit as any).image ||
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80&fm=webp&fit=crop';
      setHeroImage(img);

      const gList =
        Array.isArray(packageToEdit.gallery) && packageToEdit.gallery.length > 0
          ? packageToEdit.gallery.filter(Boolean)
          : [];
      setGalleryImages(gList);

      if (Array.isArray(packageToEdit.itinerary) && packageToEdit.itinerary.length > 0) {
        setItineraryDays(
          packageToEdit.itinerary.map((d) => ({
            dayNumber: d.dayNumber,
            title: d.title || `Day ${d.dayNumber} Sightseeing`,
            description: d.description || '',
            hotel: d.hotel || '',
            meals: Array.isArray(d.meals) ? d.meals : ['Breakfast', 'Dinner'],
            activities: Array.isArray(d.activities) ? d.activities.join(', ') : d.activities || '',
          }))
        );
      }

      if (Array.isArray(packageToEdit.highlights) && packageToEdit.highlights.length > 0) {
        setCustomHighlights(packageToEdit.highlights.join('\n'));
      }
      if (Array.isArray(packageToEdit.inclusions) && packageToEdit.inclusions.length > 0) {
        setCustomInclusions(packageToEdit.inclusions.join('\n'));
      }
      setPublishedPackage(null);
      setSubmitError(null);
    } else if (!packageToEdit && isOpen) {
      setPublishedPackage(null);
      setSubmitError(null);
    }
  }, [packageToEdit, isOpen]);

  if (!isOpen) return null;

  // Helper: Synchronize itinerary days count dynamically with duration
  const syncItineraryDays = (targetCount: number) => {
    const safeCount = Math.max(1, Math.min(30, targetCount));
    setItineraryDays((prev) => {
      if (prev.length === safeCount) return prev;
      if (prev.length < safeCount) {
        const added: DayEntry[] = [];
        for (let i = prev.length + 1; i <= safeCount; i++) {
          const hotelName = hotels[Math.min(i - 1, hotels.length - 1)]?.name || hotels[0]?.name || 'Standard Hotel';
          added.push({
            dayNumber: i,
            title: i === safeCount ? 'Departure & Onward Journey' : `Day ${i} Sightseeing & Experiences`,
            description:
              i === safeCount
                ? 'Enjoy breakfast at the hotel, complete check-out formalities, and transfer smoothly to the airport or railway station with sweet memories.'
                : 'Morning breakfast at hotel, embark on full day local sightseeing, landmark visits, and evening leisure.',
            hotel: i === safeCount ? 'Check-out completed (Departure Day)' : hotelName,
            meals: safeCount <= 1 ? ['Welcome Refreshments', 'Lunch'] : i === 1 ? ['Dinner'] : i === safeCount ? ['Breakfast'] : ['Breakfast', 'Dinner'],
            activities: i === safeCount ? 'Hotel Breakfast, Check-out Formalities, Airport / Station Transfer' : 'Guided Sightseeing & Local Attractions',
          });
        }
        const combined = [...prev, ...added];
        return combined.map((d, i) => {
          const dayNum = i + 1;
          const isFinal = dayNum === safeCount;
          return {
            ...d,
            dayNumber: dayNum,
            meals:
              safeCount <= 1
                ? ['Welcome Refreshments', 'Lunch']
                : dayNum === 1
                ? ['Dinner']
                : isFinal
                ? ['Breakfast']
                : ['Breakfast', 'Dinner'],
          };
        });
      } else {
        const sliced = prev.slice(0, safeCount);
        return sliced.map((d, i) => {
          const dayNum = i + 1;
          const isFinal = dayNum === safeCount;
          return {
            ...d,
            dayNumber: dayNum,
            meals:
              safeCount <= 1
                ? ['Welcome Refreshments', 'Lunch']
                : dayNum === 1
                ? ['Dinner']
                : isFinal
                ? ['Breakfast']
                : ['Breakfast', 'Dinner'],
          };
        });
      }
    });
  };

  const handleDurationChange = (days: number, nights?: number) => {
    const safeDays = Math.max(1, Math.min(30, days));
    const safeNights = nights !== undefined ? Math.max(0, nights) : Math.max(0, safeDays - 1);
    setDurationDays(safeDays);
    setDurationNights(safeNights);
    syncItineraryDays(safeDays);
  };

  const addDay = () => {
    const nextDayNumber = itineraryDays.length + 1;
    const hotelName = hotels[Math.min(nextDayNumber - 1, hotels.length - 1)]?.name || hotels[0]?.name || 'Standard Hotel';
    const totalDays = nextDayNumber;

    // Previous days become middle days (except Day 1 which stays Dinner)
    const updated = itineraryDays.map((d, idx) => ({
      ...d,
      meals: idx === 0 ? ['Dinner'] : ['Breakfast', 'Dinner'],
    }));

    const newDay: DayEntry = {
      dayNumber: nextDayNumber,
      title: `Day ${nextDayNumber} Sightseeing & Departure`,
      description: 'Morning breakfast at hotel, complete check-out formalities, and transfer smoothly to airport or railway station.',
      hotel: 'Check-out completed (Departure Day)',
      meals: ['Breakfast'],
      activities: 'Hotel Breakfast, Check-out Formalities, Airport / Station Transfer',
    };
    updated.push(newDay);
    setItineraryDays(updated);
    setDurationDays(updated.length);
    setDurationNights(Math.max(0, updated.length - 1));
  };

  const removeDay = (idxToRemove?: number) => {
    if (itineraryDays.length <= 1) {
      alert('A package must have at least 1 day.');
      return;
    }
    let updated: DayEntry[];
    if (typeof idxToRemove === 'number') {
      updated = itineraryDays.filter((_, idx) => idx !== idxToRemove);
    } else {
      updated = itineraryDays.slice(0, -1);
    }
    const totalCount = updated.length;
    const renumbered = updated.map((d, i) => {
      const dayNum = i + 1;
      return {
        ...d,
        dayNumber: dayNum,
        meals:
          totalCount <= 1
            ? ['Welcome Refreshments', 'Lunch']
            : dayNum === 1
            ? ['Dinner']
            : dayNum === totalCount
            ? ['Breakfast']
            : ['Breakfast', 'Dinner'],
      };
    });
    setItineraryDays(renumbered);
    setDurationDays(renumbered.length);
    setDurationNights(Math.max(0, renumbered.length - 1));
  };

  // Smart Parser for pasted raw itinerary text (Lenient & Multi-format: WhatsApp, Markdown, Numbers, Paragraphs)
  const handleSmartParseItinerary = () => {
    if (!rawItineraryText.trim()) {
      const sample = `Day 1: Arrival & Hotel Check-in
Pickup from airport/station. Check-in to hotel and evening Marina Beach or local temple walk. Stay at ${hotels[0]?.name || 'Kansone Hotel'}.

Day 2: Full Day Sightseeing & Heritage Exploration
Breakfast at hotel. Visit major monuments, museums, and local markets. Overnight stay at hotel.

Day 3: Scenic Drive & Departure
Morning breakfast, check out from hotel and transfer smoothly to airport/railway station.`;
      setRawItineraryText(sample);
      alert('💡 A sample template has been loaded into the text box!\n\nYou can edit it or paste your WhatsApp text, then click "Parse & Generate Days".');
      return;
    }

    // Strip markdown formatting (* or ** or #) commonly in WhatsApp/Docs
    const cleanedText = rawItineraryText.replace(/[*_#]/g, '');
    const lines = cleanedText.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);

    const parsed: DayEntry[] = [];
    let currentDay: Partial<DayEntry> | null = null;

    // Matches: Day 1, Day 01, Day-1, D1, 1., 1), Day 1: Title, etc.
    const dayRegex = /^(?:Day\s*(\d+)|Day-(\d+)|D(\d+)|(\d+)\s*[\.\)])\s*[:\-–—\.]*\s*(.*)/i;

    lines.forEach((line) => {
      const match = line.match(dayRegex);
      if (match) {
        if (currentDay && currentDay.dayNumber) {
          parsed.push({
            dayNumber: currentDay.dayNumber,
            title: currentDay.title || `Day ${currentDay.dayNumber} Sightseeing`,
            description: currentDay.description || currentDay.title || '',
            hotel: currentDay.hotel || (hotels[Math.min(currentDay.dayNumber - 1, hotels.length - 1)]?.name || hotels[0]?.name || 'Standard Hotel'),
            meals: ['Breakfast', 'Dinner'],
            activities: currentDay.activities || currentDay.title || 'Sightseeing & Transfers',
          });
        }

        const dayNum = parseInt(match[1] || match[2] || match[3] || match[4], 10) || (parsed.length + 1);
        const titlePart = match[5]?.trim() || '';

        // Auto-detect hotel mention in line if present (e.g. "Stay at X", "Hotel: X", "Overnight at X")
        let detectedHotel = '';
        const hotelMatch = line.match(/(?:stay at|overnight at|hotel[:\s]+)\s*([^.,;\n]+)/i);
        if (hotelMatch) {
          detectedHotel = hotelMatch[1].trim();
        }

        currentDay = {
          dayNumber: dayNum,
          title: titlePart || `Day ${dayNum} Sightseeing`,
          description: line,
          hotel: detectedHotel || (hotels[Math.min(dayNum - 1, hotels.length - 1)]?.name || hotels[0]?.name || 'Standard Hotel'),
          meals: dayNum === 1 ? ['Dinner'] : ['Breakfast', 'Dinner'],
          activities: titlePart || 'Sightseeing & Transfers',
        };
      } else if (currentDay) {
        currentDay.description = `${currentDay.description} ${line}`.trim();
        const subHotel = line.match(/(?:stay at|overnight at|hotel[:\s]+)\s*([^.,;\n]+)/i);
        if (subHotel && !currentDay.hotel) {
          currentDay.hotel = subHotel[1].trim();
        }
      }
    });

    if (currentDay && (currentDay as any).dayNumber) {
      parsed.push({
        dayNumber: (currentDay as any).dayNumber,
        title: (currentDay as any).title || `Day ${(currentDay as any).dayNumber}`,
        description: (currentDay as any).description || '',
        hotel: (currentDay as any).hotel || (hotels[0]?.name || 'Standard Hotel'),
        meals: ['Breakfast', 'Dinner'],
        activities: (currentDay as any).activities || 'Sightseeing & Transfers',
      });
    }

    // Fallback: If no "Day X" keyword was matched, convert each non-empty block/line into a day!
    if (parsed.length === 0 && lines.length > 0) {
      lines.forEach((line, index) => {
        const dayNum = index + 1;
        const parts = line.split(/[.:\-–]/);
        const title = parts[0]?.trim() || `Day ${dayNum}`;
        const desc = parts.slice(1).join('. ').trim() || line;
        parsed.push({
          dayNumber: dayNum,
          title: title.length > 60 ? `Day ${dayNum} Exploration` : title,
          description: desc || line,
          hotel: hotels[Math.min(dayNum - 1, hotels.length - 1)]?.name || hotels[0]?.name || 'Standard Hotel',
          meals: dayNum === 1 ? ['Dinner'] : dayNum === lines.length ? ['Breakfast'] : ['Breakfast', 'Dinner'],
          activities: title,
        });
      });
    }

    if (parsed.length > 0) {
      // Renumber sequentially 1..N and enforce strict MAP meal schedule:
      // Day 1: Dinner, Day N: Breakfast, Middle Days: Breakfast & Dinner
      const totalCount = parsed.length;
      const normalized = parsed.map((d, i) => {
        const dayNumber = i + 1;
        const meals =
          totalCount <= 1
            ? ['Welcome Refreshments', 'Lunch']
            : dayNumber === 1
            ? ['Dinner']
            : dayNumber === totalCount
            ? ['Breakfast']
            : ['Breakfast', 'Dinner'];

        // Clean activities: don't default to 'Sightseeing & Transfers'
        const act =
          d.activities && !/sightseeing\s*(&|\+|and)?\s*transfers?/i.test(d.activities)
            ? d.activities
            : d.title && !/^Day\s*\d+/i.test(d.title)
            ? d.title
            : dayNumber === 1
            ? 'Airport / Station Pickup, Hotel Check-in, Evening Sightseeing'
            : dayNumber === totalCount
            ? 'Hotel Breakfast, Check-out Formalities, Airport / Station Transfer'
            : 'Guided Full Day Sightseeing & Local Attractions';

        return {
          ...d,
          dayNumber,
          meals,
          activities: act,
        };
      });
      setItineraryDays(normalized);
      setDurationDays(normalized.length);
      setDurationNights(Math.max(0, normalized.length - 1));
      alert(`✨ Successfully generated ${normalized.length} Days Itinerary!\nDuration set to ${Math.max(0, normalized.length - 1)}N / ${normalized.length}D.`);
    } else {
      alert('Could not parse text. Please enter at least 1 line or click again to view the sample template.');
    }
  };

  // Quick Preset Photo Switcher
  const applyPhotoPreset = (type: 'temple' | 'valley' | 'beach' | 'heritage') => {
    if (type === 'temple') {
      setHeroImage('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80&fm=webp&fit=crop');
    } else if (type === 'valley') {
      setHeroImage('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&fm=webp&fit=crop');
    } else if (type === 'beach') {
      setHeroImage('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fm=webp&fit=crop');
    } else {
      setHeroImage('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop');
    }
  };

  // Add hotel row
  const addHotelRow = () => {
    setHotels([...hotels, { city: '', name: '', nights: 1, rating: '4.8' }]);
  };

  const removeHotelRow = (idx: number) => {
    setHotels(hotels.filter((_, i) => i !== idx));
  };

  const updateHotelRow = (idx: number, field: keyof HotelEntry, val: any) => {
    const updated = [...hotels];
    const prevHotelName = updated[idx]?.name;
    updated[idx] = { ...updated[idx], [field]: val };
    setHotels(updated);

    // If hotel name changed, sync with itinerary days that had the old name or default name
    if (field === 'name' && typeof val === 'string' && val.trim().length > 1) {
      setItineraryDays((prevDays) =>
        prevDays.map((day) => {
          if (
            !day.hotel ||
            day.hotel === prevHotelName ||
            day.hotel.toLowerCase().includes('hotel') ||
            day.hotel.toLowerCase().includes('standard') ||
            day.hotel.toLowerCase().includes('kansone')
          ) {
            return { ...day, hotel: val.trim() };
          }
          return day;
        })
      );
    }
  };

  // Submit and Publish Package
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter a Package Name.');
      return;
    }
    if (!startingPrice || Number(startingPrice) <= 0) {
      alert('Please enter a valid Starting Price.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Generate clean slug
      const destinationSlug = destination
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const baseSlug = name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const finalSlug = baseSlug.startsWith(destinationSlug)
        ? baseSlug
        : `${destinationSlug}-${baseSlug}`;

      const galleryList = galleryImages
        .map((s) => s.trim())
        .filter((s) => s.startsWith('http') || s.startsWith('/') || s.startsWith('data:image'));

      // 2. Prepare structured itinerary
      const totalItineraryDays = itineraryDays.length;
      const finalItinerary = itineraryDays.map((d) => {
        const dayNumber = d.dayNumber;
        const sanitizedMeals =
          totalItineraryDays <= 1
            ? ['Welcome Refreshments', 'Lunch']
            : dayNumber === 1
            ? ['Dinner']
            : dayNumber === totalItineraryDays
            ? ['Breakfast']
            : ['Breakfast', 'Dinner'];

        const rawActs = d.activities ? d.activities.split(',').map((a) => a.trim()).filter(Boolean) : [];
        const cleanActs = rawActs.filter((a) => !/sightseeing\s*(&|\+|and)?\s*transfers?/i.test(a));
        const finalActs =
          cleanActs.length > 0
            ? cleanActs
            : d.title && !/^Day\s*\d+/i.test(d.title)
            ? [d.title]
            : dayNumber === 1
            ? ['Airport / Station Pickup', 'Hotel Check-in', 'Evening Sightseeing']
            : dayNumber === totalItineraryDays
            ? ['Hotel Breakfast', 'Check-out Formalities', 'Airport / Station Drop']
            : ['Guided Sightseeing', 'Local Attractions Visit'];

        return {
          dayNumber: d.dayNumber,
          title: d.title,
          description: d.description,
          hotel: d.hotel,
          meals: sanitizedMeals,
          activities: finalActs,
          transfers: 'Private AC Dedicated Cab Transfers',
        };
      });

      // 3. Prepare hotel list
      const finalHotels = hotels
        .filter((h) => h.name.trim().length > 0)
        .map((h) => ({
          name: h.name.trim(),
          city: h.city.trim() || destination,
          nights: Number(h.nights) || 1,
          rating: h.rating || '4.8',
        }));

      // 4. Prepare highlights, inclusions & FAQs dynamically reflecting live hotels, meals & nights
      const hotelHighlights = finalHotels
        .filter((h) => h.name)
        .map((h) => `${h.city}: ${h.name} (${h.nights}N)`)
        .join(' • ');

      // Extract top sightseeing from itinerary
      const itinerarySightseeingList: string[] = [];
      finalItinerary.forEach((d) => {
        const act: any = d.activities;
        if (Array.isArray(act) && act.length > 0) {
          itinerarySightseeingList.push(act.join(', '));
        } else if (typeof act === 'string' && act.trim()) {
          itinerarySightseeingList.push(act.trim());
        } else if (d.title) {
          itinerarySightseeingList.push(d.title);
        }
      });
      const topSightseeing = itinerarySightseeingList.slice(0, 3);

      const dynamicHotelInclusion = hotelHighlights
        ? `${durationNights} Nights accommodation at verified properties: ${hotelHighlights} (${baselineTier})`
        : `${durationNights} Nights verified hotel accommodation as per ${baselineTier} category`;

      const dynamicMealInclusion = `Daily Meals Included: ${mealPlan}`;
      const dynamicTransportInclusion = `Dedicated Private AC Vehicle for all transfers & complete sightseeing itinerary`;
      const dynamicSightseeingInclusion = `All sightseeing excursions & transfers: ${finalItinerary.map((d) => d.title).filter(Boolean).slice(0, 4).join(', ')}`;
      const dynamicTaxesInclusion = `Driver night allowance, interstate border taxes, toll fees, parking charges & 5% GST included`;
      const dynamicConciergeInclusion = `Dedicated 24x7 personal concierge on call throughout your journey`;

      const inclusions: string[] = [
        dynamicHotelInclusion,
        dynamicMealInclusion,
        dynamicTransportInclusion,
        dynamicSightseeingInclusion,
        dynamicTaxesInclusion,
        dynamicConciergeInclusion,
      ];

      const highlights: string[] = [
        ...topSightseeing,
        `Verified Stay: ${hotelHighlights || `${baselineTier} Handpicked Hotels`}`,
        `Dedicated Private AC Cab for all Transfers & Sightseeing`,
        `Daily ${mealPlan}`,
        `24x7 Trip Customizer On-Trip Emergency Support`,
      ];

      const exclusions = [
        'Airfare or train tickets (available upon request at live rates)',
        'Monument camera tickets, special pooja/abhishekam tickets, joyrides, and watersports',
        'Personal expenses like room service, laundry, extra snacks, and tips',
        'Any services or meals not explicitly mentioned in inclusions',
      ];

      const faqs = [
        {
          question: `Which hotels are included in ${name}?`,
          answer: `This package includes verified ${baselineTier} properties: ${hotelHighlights || `${baselineTier} accommodations`}. You can also request upgrades to 4★ Deluxe or 5★ Luxury on live rates.`,
        },
        {
          question: 'Is private transportation included?',
          answer: `Yes! A dedicated private AC vehicle is provided throughout the entire tour for all transfers and sightseeing.`,
        },
        {
          question: 'Can this itinerary and hotels be customized?',
          answer: `Yes, 100%! All our packages are fully customizable. You can modify hotel choices, add extra nights, or add custom sightseeing activities with our travel desk.`,
        },
      ];

      const targetId = packageToEdit?.id || `pkg-admin-${finalSlug}`;
      const targetSlug = packageToEdit?.slug || finalSlug;

      const newPackage: HolidayPackage = {
        id: targetId,
        slug: targetSlug,
        name: name.trim(),
        destination: destination.trim(),
        destinationSlug: destinationSlug,
        state: destination.trim(),
        stateSlug: destinationSlug,
        country: packageToEdit?.country || 'India',
        region: packageToEdit?.region || 'India',
        isInternational: Boolean(packageToEdit?.isInternational),
        durationDays: Number(durationDays),
        durationNights: Number(durationNights),
        startingPrice: Number(startingPrice),
        discountPrice: discountPrice ? Number(discountPrice) : Math.round(Number(startingPrice) * 1.2),
        rating: packageToEdit?.rating || 4.8,
        reviewsCount: packageToEdit?.reviewsCount || 125,
        heroImage: heroImage.trim() || `/destinations/${destinationSlug}.jpg`,
        gallery: galleryList,
        highlights,
        inclusions,
        exclusions,
        itinerary: finalItinerary,
        hotels: finalHotels,
        faqs,
        theme: theme,
        hotelCategory: baselineTier,
        mealPlan: mealPlan,
        flightsIncluded: Boolean(packageToEdit?.flightsIncluded),
        transfersIncluded: true,
        departureCity: departureCity || `${destination} Pickup & Drop`,
        batch_source: 'mmt_sync',
        updated_at: new Date().toISOString(),
        user_edited: true,
      };

      // 5. Submit to Server API (/api/packages) & persistent client CloudStore
      cloudStore.saveCustomPackages([newPackage]);

      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packages: [newPackage] }),
      }).catch(() => null);

      if (onPackageCreated) {
        onPackageCreated(newPackage);
      }

      setPublishedPackage(newPackage);
      setIsSubmitting(false);
    } catch (err: any) {
      console.error('[QuickPackageCreatorModal] Save error:', err);
      setSubmitError(err?.message || 'Failed to save package. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className={`p-1.5 rounded-xl text-slate-950 ${packageToEdit ? 'bg-gradient-to-tr from-sky-400 to-blue-500 text-white' : 'bg-gradient-to-tr from-amber-500 to-amber-400'}`}>
              {packageToEdit ? <Pencil className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                <span>{packageToEdit ? 'Edit Holiday Package' : 'Quick Package Creator'}</span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  packageToEdit ? 'bg-sky-400 text-slate-950' : 'bg-amber-400 text-slate-950'
                }`}>
                  {packageToEdit ? 'EDIT MODE' : 'ADMIN AI'}
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                {packageToEdit
                  ? `Editing live details & pricing for: "${packageToEdit.name}" (ID: ${packageToEdit.id})`
                  : 'Enter itinerary, hotels, pricing & photos — automatically published to live website with Upgrade on Request!'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {publishedPackage ? (
            /* Success State */
            <div className="text-center py-10 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {packageToEdit ? 'Package Updated Successfully!' : 'Package Published Live!'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{publishedPackage.name}</strong> {packageToEdit ? 'has been updated live on the platform!' : 'is now live on the platform!'} All changes to price, hotels, meals, and itinerary are active immediately.
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-1 text-xs font-mono break-all">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Live URL:</span>
                <span className="text-brand-700 font-bold">
                  https://www.tripcustomizer.com/holidays/{publishedPackage.destinationSlug}/{publishedPackage.slug}
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`/holidays/${publishedPackage.destinationSlug}/${publishedPackage.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Package ↗</span>
                </a>
                <Button
                  onClick={() => {
                    setPublishedPackage(null);
                    if (!packageToEdit) {
                      setName('');
                      setStartingPrice(25000);
                    } else {
                      onClose();
                    }
                  }}
                  variant="outline"
                  className="text-xs font-bold py-3"
                >
                  {packageToEdit ? 'Done & Close' : '+ Create Another Package'}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePublish} className="space-y-6">
              {submitError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl font-bold">
                  ⚠️ {submitError}
                </div>
              )}

              {/* 1. Basic Package Details Card */}
              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-brand-600" />
                  <span>1. Basic Package Information</span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="md:col-span-8">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Package Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sacred Tirupati, Mahabalipuram & Chennai Trip (4N/5D)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">State / Destination *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Andhra Pradesh, Kerala, Kashmir"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="md:col-span-12 space-y-1.5">
                    <span className="block text-[11px] font-bold text-slate-700">Duration Presets (1-Click Days & Nights Sync):</span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { label: 'Same Day (1D)', days: 1, nights: 0 },
                        { label: '1N / 2D', days: 2, nights: 1 },
                        { label: '2N / 3D', days: 3, nights: 2 },
                        { label: '3N / 4D', days: 4, nights: 3 },
                        { label: '4N / 5D', days: 5, nights: 4 },
                        { label: '5N / 6D', days: 6, nights: 5 },
                        { label: '6N / 7D', days: 7, nights: 6 },
                        { label: '7N / 8D', days: 8, nights: 7 },
                        { label: '9N / 10D', days: 10, nights: 9 },
                        { label: '14N / 15D', days: 15, nights: 14 },
                      ].map((preset) => {
                        const isActive = durationDays === preset.days && durationNights === preset.nights;
                        return (
                          <button
                            key={preset.label}
                            type="button"
                            onClick={() => handleDurationChange(preset.days, preset.nights)}
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                              isActive
                                ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Duration Days</label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={durationDays}
                      onChange={(e) => {
                        const days = Number(e.target.value);
                        handleDurationChange(days, durationNights);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-center"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Duration Nights</label>
                    <input
                      type="number"
                      min={0}
                      max={30}
                      value={durationNights}
                      onChange={(e) => setDurationNights(Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-center"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Baseline Hotel Category *</label>
                    <select
                      value={baselineTier}
                      onChange={(e: any) => setBaselineTier(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold focus:outline-none focus:border-brand-500 cursor-pointer"
                    >
                      <option value="3-Star Standard">3★ Standard (Base included • 4★ & 5★ Upgrade on Request)</option>
                      <option value="4-Star Deluxe">4★ Deluxe (Base included • 5★ Upgrade on Request)</option>
                      <option value="5-Star Luxury">5★ Luxury (Top Luxury Tier Included)</option>
                    </select>
                  </div>

                  <div className="md:col-span-6">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Theme</label>
                    <input
                      type="text"
                      placeholder="e.g. Pilgrimage & Heritage, Nature & Hills"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Departure / Pickup City</label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai Pickup & Drop"
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Pricing & Meal Plan Card */}
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
                  <span>2. Pricing & Meal Plan</span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-emerald-950 mb-1">
                      Starting Price (₹ / Adult) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 font-bold text-emerald-700">₹</span>
                      <input
                        type="number"
                        required
                        min={1000}
                        placeholder="25000"
                        value={startingPrice}
                        onChange={(e) => setStartingPrice(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-white border border-emerald-300 rounded-xl pl-7 pr-3 py-2 text-emerald-950 font-black text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Discounted / Original Price (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        placeholder="29999"
                        value={discountPrice}
                        onChange={(e) => setDiscountPrice(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-7 pr-3 py-2 text-slate-800 font-bold focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Meal Plan</label>
                    <select
                      value={mealPlan}
                      onChange={(e) => setMealPlan(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-brand-500 cursor-pointer"
                    >
                      <option value="Breakfast & Dinner Included (MAP)">Breakfast & Dinner Included (MAP)</option>
                      <option value="Breakfast Included (CP)">Breakfast Included (CP)</option>
                      <option value="All Meals Included (AP)">All Meals Included (AP)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Hotel Details Card */}
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-amber-700" />
                    <span>3. Hotel Details (City-wise)</span>
                  </span>
                  <button
                    type="button"
                    onClick={addHotelRow}
                    className="text-[10px] font-bold bg-amber-200 hover:bg-amber-300 text-amber-950 px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add City Hotel</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {hotels.map((h, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 bg-white p-2.5 rounded-xl border border-amber-200 items-center">
                      <div className="col-span-3">
                        <input
                          type="text"
                          placeholder="City (e.g. Chennai)"
                          value={h.city}
                          onChange={(e) => updateHotelRow(idx, 'city', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-slate-900"
                        />
                      </div>
                      <div className="col-span-5">
                        <input
                          type="text"
                          placeholder="Hotel Name (e.g. Kansone Hotel And Banquets)"
                          value={h.name}
                          onChange={(e) => updateHotelRow(idx, 'name', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-brand-700"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            min={1}
                            placeholder="Nights"
                            value={h.nights}
                            onChange={(e) => updateHotelRow(idx, 'nights', Number(e.target.value))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-center font-bold text-slate-800"
                          />
                          <span className="text-[10px] text-slate-400 font-bold">N</span>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-end gap-2">
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                          ★ {h.rating || '4.8'}
                        </span>
                        {hotels.length > 1 && (
                          <button
                            type="button"
                            title="Remove this hotel"
                            onClick={() => removeHotelRow(idx)}
                            className="text-rose-500 hover:text-white hover:bg-rose-600 p-1 rounded-md transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Add Another Hotel Button */}
                  <button
                    type="button"
                    onClick={addHotelRow}
                    className="w-full py-2.5 px-3 bg-white hover:bg-amber-100 border-2 border-dashed border-amber-300 hover:border-amber-400 rounded-xl text-amber-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.99] shadow-sm"
                  >
                    <Plus className="w-4 h-4 text-amber-700" />
                    <span>+ Add Another Hotel ({hotels.length + 1})</span>
                  </button>
                </div>
              </div>

              {/* 4. Package Photography (Front & Inside Photos) */}
              <div className="p-4 bg-indigo-50/40 rounded-2xl border border-indigo-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-indigo-600" />
                      4. Package Photography (Front & Inside Photos)
                    </span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">
                      HD WebP Compressed
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-indigo-700 font-bold">Front Presets:</span>
                    <button
                      type="button"
                      onClick={() => applyPhotoPreset('temple')}
                      className="text-[10px] bg-white border border-indigo-200 hover:bg-indigo-100 px-2 py-0.5 rounded-md font-semibold text-indigo-900 cursor-pointer"
                    >
                      🛕 Temple
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPhotoPreset('valley')}
                      className="text-[10px] bg-white border border-indigo-200 hover:bg-indigo-100 px-2 py-0.5 rounded-md font-semibold text-indigo-900 cursor-pointer"
                    >
                      ⛰️ Green Valley
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPhotoPreset('beach')}
                      className="text-[10px] bg-white border border-indigo-200 hover:bg-indigo-100 px-2 py-0.5 rounded-md font-semibold text-indigo-900 cursor-pointer"
                    >
                      🏖️ Beach
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPhotoPreset('heritage')}
                      className="text-[10px] bg-white border border-indigo-200 hover:bg-indigo-100 px-2 py-0.5 rounded-md font-semibold text-indigo-900 cursor-pointer"
                    >
                      🏰 Heritage
                    </button>
                  </div>
                </div>

                {/* Sub-section A: FRONT / HERO PHOTO */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start p-3.5 bg-white rounded-xl border border-indigo-100">
                  <div className="md:col-span-8 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-[11px] font-bold text-slate-800">
                          🌟 Front Photo / Hero Image (Card & Main Banner) *
                        </label>
                        <label
                          htmlFor="hero-photo-upload"
                          className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-lg cursor-pointer shadow-xs transition-all"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          {isUploadingPhoto ? '⏳ Optimizing...' : '📁 Upload Front Photo from Device'}
                        </label>
                        <input
                          id="hero-photo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleDevicePhotoUpload}
                        />
                      </div>
                      <input
                        type="url"
                        required
                        placeholder="https://... or click 'Upload Front Photo' above"
                        value={heroImage}
                        onChange={(e) => setHeroImage(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs"
                      />
                    </div>

                    {/* Quick 1-Click Destination Photos */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block mb-1">⚡ Quick 1-Click Destination Photos:</span>
                      <div className="flex flex-wrap gap-1">
                        {PRESET_DESTINATION_PHOTOS.map((preset) => (
                          <button
                            key={preset.label}
                            type="button"
                            onClick={() => setHeroImage(preset.url)}
                            className="text-[10px] bg-slate-100 hover:bg-indigo-100 border border-slate-200 hover:border-indigo-300 px-2 py-0.5 rounded-md font-medium text-slate-700 hover:text-indigo-900 transition-all cursor-pointer"
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Live Card Preview */}
                  <div className="md:col-span-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Card Preview</span>
                    <div className="w-full h-24 rounded-lg overflow-hidden bg-slate-200 relative">
                      {heroImage ? (
                        <img src={heroImage} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 block truncate">{name || 'Package Card'}</span>
                    <span className="text-[10px] font-black text-brand-700 block">{formatCurrency(Number(startingPrice) || 0)}</span>
                  </div>
                </div>

                {/* Sub-section B: INSIDE / GALLERY PHOTOS */}
                <div className="p-3.5 bg-white rounded-xl border border-indigo-100 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800">
                        🖼️ Inside Photos / Gallery Grid (Detail Page ke andar dikhegi)
                      </label>
                      <p className="text-[10px] text-slate-500">
                        Package ke andar jo photos dikhni chahiye. Device se direct multiple photos select kar sakte hain.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <label
                        htmlFor="gallery-photo-upload"
                        className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg cursor-pointer shadow-xs transition-all"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        {isUploadingGallery ? '⏳ Processing...' : '📁 Upload Inside Photos (Multi-Select)'}
                      </label>
                      <input
                        id="gallery-photo-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleGalleryDeviceUpload}
                      />

                      {galleryImages.length > 0 && (
                        <button
                          type="button"
                          onClick={clearAllGalleryPhotos}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Clear All Inside Photos
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Add by URL option */}
                  <div className="flex items-center gap-2">
                    <input
                      type="url"
                      placeholder="Paste Image URL here to add individually..."
                      value={newGalleryUrl}
                      onChange={(e) => setNewGalleryUrl(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddGalleryUrl();
                        }
                      }}
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleAddGalleryUrl}
                      className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-300 transition-all cursor-pointer"
                    >
                      + Add URL
                    </button>
                  </div>

                  {/* Inside Photos Visual Thumbnails Grid */}
                  {galleryImages.length === 0 ? (
                    <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl text-center bg-slate-50/50">
                      <ImageIcon className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs font-semibold text-slate-600">
                        Koi inside photo nahi lagi hai (Clean slate).
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Upar <strong>&quot;Upload Inside Photos&quot;</strong> button dabakar phone/computer se photos lagayein, ya khali chhod dein clean front view ke liye.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-slate-700">
                          📸 {galleryImages.length} Inside Photos Attached:
                        </span>
                        <span className="text-[10px] text-slate-400">Photo par ✕ dabakar delete kar sakte hain</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {galleryImages.map((imgUrl, idx) => (
                          <div
                            key={idx}
                            className="relative group rounded-lg overflow-hidden border border-slate-200 aspect-video bg-slate-100"
                          >
                            <img
                              src={imgUrl}
                              alt={`Inside photo ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-1 left-1 bg-black/60 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                              #{idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeGalleryPhoto(idx)}
                              className="absolute top-1 right-1 bg-rose-600 hover:bg-rose-700 text-white rounded-full p-1 shadow-md opacity-90 group-hover:opacity-100 transition-all cursor-pointer"
                              title="Delete this photo"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 5. Itinerary Builder (Dual Mode) Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-600" />
                      <span>5. Itinerary Details</span>
                    </span>
                    <span className="text-[11px] bg-brand-100 text-brand-800 font-extrabold px-2.5 py-0.5 rounded-full border border-brand-200">
                      {itineraryDays.length} Days ({Math.max(0, itineraryDays.length - 1)} Nights)
                    </span>
                  </div>

                  {/* Header + Add Day & - Remove Day buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={addDay}
                      className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm cursor-pointer transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>+ Add Day</span>
                    </button>
                    {itineraryDays.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDay()}
                        className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 cursor-pointer transition-all active:scale-95 border border-rose-200"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>- Remove Day</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Smart Text Paste Assistant */}
                <div className="p-3 bg-white rounded-xl border border-brand-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-brand-900 flex items-center gap-1">
                      <Wand2 className="w-3.5 h-3.5 text-brand-600" />
                      <span>Smart Itinerary Text Parser (Optional Quick Paste)</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleSmartParseItinerary}
                      className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-[10px] px-3 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>✨ Parse & Generate Days</span>
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Paste raw notes like:&#10;Day 1: Arrival in Chennai. Pickup and visit Marina beach. Stay at Kansone Hotel.&#10;Day 2: Drive to Tirupati via Srikalahasti. Stay at Hotel MountView Comforts.&#10;Day 3: Tirumala Balaji Darshan..."
                    value={rawItineraryText}
                    onChange={(e) => setRawItineraryText(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 text-[11px] focus:outline-none"
                  />
                </div>

                {/* Day-by-Day Cards */}
                <div className="space-y-3 pt-1">
                  {itineraryDays.map((d, dIdx) => (
                    <div key={dIdx} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-xs text-brand-800 bg-brand-100 border border-brand-200 px-2.5 py-1 rounded-lg">
                            Day {d.dayNumber}
                          </span>
                          {itineraryDays.length > 1 && (
                            <button
                              type="button"
                              title={`Remove Day ${d.dayNumber}`}
                              onClick={() => removeDay(dIdx)}
                              className="text-xs text-rose-600 hover:text-white bg-rose-50 hover:bg-rose-600 border border-rose-200 px-2 py-0.5 rounded-lg flex items-center gap-1 font-bold transition-all cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>- Remove Day {d.dayNumber}</span>
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-500 font-bold">Stay / Hotel:</span>
                          <input
                            type="text"
                            placeholder="Hotel Name"
                            value={d.hotel}
                            onChange={(e) => {
                              const updated = [...itineraryDays];
                              updated[dIdx].hotel = e.target.value;
                              setItineraryDays(updated);
                            }}
                            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:bg-white focus:border-brand-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <div className="md:col-span-8">
                          <input
                            type="text"
                            placeholder={`Day ${d.dayNumber} Title (e.g. Arrival & Temple Darshan)`}
                            value={d.title}
                            onChange={(e) => {
                              const updated = [...itineraryDays];
                              updated[dIdx].title = e.target.value;
                              setItineraryDays(updated);
                            }}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-slate-900 text-xs focus:bg-white focus:border-brand-500"
                          />
                        </div>
                        <div className="md:col-span-4">
                          <input
                            type="text"
                            placeholder="Activities (comma-separated)"
                            value={d.activities}
                            onChange={(e) => {
                              const updated = [...itineraryDays];
                              updated[dIdx].activities = e.target.value;
                              setItineraryDays(updated);
                            }}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 text-[11px] focus:bg-white focus:border-brand-500"
                          />
                        </div>
                        <div className="md:col-span-12">
                          <textarea
                            rows={2}
                            placeholder="Detailed description of the day's experiences, timings and route..."
                            value={d.description}
                            onChange={(e) => {
                              const updated = [...itineraryDays];
                              updated[dIdx].description = e.target.value;
                              setItineraryDays(updated);
                            }}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 text-[11px] focus:bg-white focus:border-brand-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Big + Add Day & - Remove Day at bottom of Day list */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={addDay}
                      className="flex-1 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-dashed border-emerald-400 hover:border-emerald-500 rounded-2xl text-emerald-800 font-black text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm active:scale-[0.99]"
                    >
                      <Plus className="w-4 h-4 text-emerald-600" />
                      <span>+ Add Day {itineraryDays.length + 1} to Itinerary</span>
                    </button>

                    {itineraryDays.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDay()}
                        className="py-3 px-4 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.99]"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>- Remove Last Day</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="accent"
                  size="lg"
                  className={`w-full font-black py-4 text-sm shadow-xl cursor-pointer flex items-center justify-center gap-2 ${
                    packageToEdit
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className={`w-5 h-5 animate-spin ${packageToEdit ? 'text-white' : 'text-slate-950'}`} />
                      <span>{packageToEdit ? 'Saving & Updating Package...' : 'Publishing Package to Catalog & Supabase...'}</span>
                    </>
                  ) : (
                    <>
                      {packageToEdit ? (
                        <>
                          <Check className="w-5 h-5 text-white" />
                          <span>SAVE & UPDATE PACKAGE (LIVE) →</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 text-slate-950" />
                          <span>PUBLISH PACKAGE TO LIVE WEBSITE →</span>
                        </>
                      )}
                    </>
                  )}
                </Button>
                <p className="text-[11px] text-center text-slate-400 font-medium mt-2">
                  🔒 {packageToEdit ? `Updating live package with baseline ${baselineTier}. All changes will immediately reflect on the website.` : `Automatically configured with baseline ${baselineTier}. Higher tiers will show "Upgrade on Request" without fake pricing.`}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
