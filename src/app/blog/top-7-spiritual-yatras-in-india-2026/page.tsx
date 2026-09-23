import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, CheckCircle2, Star, Sparkles, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { BlogInquiryForm } from '../top-10-budget-international-trips-under-30k/BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya & Kashi | Trip Customizer',
  description:
    'Explore the top 7 sacred spiritual yatras in India for 2026. Complete travel guide for Char Dham Yatra, Ayodhya Ram Mandir VIP Darshan, Kashi Vishwanath, Kedarnath & Badrinath with 4-star hotels & AC transport.',
  keywords: [
    'top 7 spiritual yatras in india 2026',
    'char dham yatra package 2026 from ayodhya',
    'ayodhya ram mandir vip darshan tour package',
    'kedarnath badrinath divine yatra package price',
    'varanasi luxury ganga aarti ghat tour',
    'kailash mansarovar yatra package 2026',
    'dwarka somnath tour package 5 days',
    'Trip Customizer spiritual tours',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-7-spiritual-yatras-in-india-2026',
  },
  openGraph: {
    title: 'Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya & Kashi | Trip Customizer',
    description:
      'Explore the top 7 sacred spiritual yatras in India for 2026. Complete travel guide for Char Dham Yatra, Ayodhya Ram Mandir VIP Darshan, Kashi Vishwanath, Kedarnath & Badrinath with 4-star hotels & AC transport.',
    url: 'https://www.tripcustomizer.com/blog/top-7-spiritual-yatras-in-india-2026',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Top 7 Spiritual Yatras in India 2026',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya & Kashi | Trip Customizer',
    description:
      'Explore the top 7 sacred spiritual yatras in India for 2026. Complete travel guide for Char Dham Yatra, Ayodhya Ram Mandir VIP Darshan, Kashi Vishwanath, Kedarnath & Badrinath.',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function SpiritualYatrasBlogPage() {
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya Ram Mandir & Kashi',
    description:
      'Complete guide to planning divine pilgrimage yatras across India including Char Dham, Ayodhya Ram Mandir, Kedarnath, Badrinath, Kashi Vishwanath & Dwarka.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-09-23T08:00:00.000Z',
    dateModified: '2026-09-23T08:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'Trip Customizer Spiritual Desk',
      url: 'https://www.tripcustomizer.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trip Customizer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which are the top spiritual yatras in India for 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The top 7 spiritual yatras in India for 2026 are Char Dham Yatra (Uttarakhand), Ayodhya Ram Mandir VIP Darshan, Kedarnath-Badrinath Do Dham Yatra, Kashi Vishwanath Ganga Aarti (Varanasi), Dwarka Somnath Yatra (Gujarat), Mathura Vrindavan, and Kailash Mansarovar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trip Customizer provide VIP Ram Mandir Darshan in Ayodhya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Trip Customizer provides complete Ayodhya Ram Mandir VIP Darshan assistance, Hanuman Garhi guided tour, evening Saryu River Aarti reserved boat, and private AC transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are helicopter shuttle passes available for Kedarnath Yatra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Trip Customizer handles mandatory Uttarakhand biometric registration and optional Kedarnath Helicopter Ticket booking from Phata / Sirsi / Guptkashi.',
        },
      },
    ],
  };

  const yatras = [
    {
      rank: '01',
      name: 'Uttarakhand Char Dham Yatra (Yamunotri, Gangotri, Kedarnath & Badrinath)',
      slug: 'char-dham',
      duration: '10 Nights / 11 Days',
      price: '₹27,500',
      highlights: 'Complete 4 Shrines, Haridwar Ganga Aarti, Rishikesh, Sonprayag transport & Hotel Stay',
      desc: 'The ultimate sacred journey covering Yamunotri, Gangotri, Kedarnath Ji, and Badrinath Ji in the pristine Garhwal Himalayas.',
    },
    {
      rank: '02',
      name: 'Ayodhya Ram Mandir VIP Darshan & Saryu Aarti Tour',
      slug: 'ayodhya',
      duration: '3 Nights / 4 Days',
      price: '₹14,500',
      highlights: 'Ram Janmabhoomi VIP Darshan Pass, Hanuman Garhi, Saryu Aarti Boat & 4-Star Hotel',
      desc: 'Experience divine blessings at the majestic Shri Ram Janmabhoomi Mandir in Ayodhya with seamless VIP entry passes.',
    },
    {
      rank: '03',
      name: 'Kedarnath & Badrinath Do Dham Divine Yatra',
      slug: 'kedarnath',
      duration: '5 Nights / 6 Days',
      price: '₹18,900',
      highlights: 'Guptkashi, Sonprayag, Kedarnath Trek / Heli Pass, Badrinath Ji & Mana Village',
      desc: 'Ideal for devotees seeking blessings at Lord Shiva’s highest Jyotirlinga (Kedarnath) and Lord Vishnu’s abode (Badrinath).',
    },
    {
      rank: '04',
      name: 'Varanasi Kashi Vishwanath & Ganga Aarti Ghat Tour',
      slug: 'varanasi',
      duration: '3 Nights / 4 Days',
      price: '₹12,900',
      highlights: 'Kashi Vishwanath Corridor VIP Pass, Reserved Ganga Aarti Boat, Subah-e-Banaras & Sarnath',
      desc: 'Immerse in spiritual bliss along the ancient Ghats of Kashi, experiencing world-famous Dashashwamedh Aarti.',
    },
    {
      rank: '05',
      name: 'Dwarka & Somnath Jyotirlinga Yatra (Gujarat)',
      slug: 'dwarka-somnath',
      duration: '4 Nights / 5 Days',
      price: '₹16,500',
      highlights: 'Dwarkadhish Temple, Nageshwar Jyotirlinga, Bet Dwarka & Somnath Light Sound Show',
      desc: 'Visit Lord Krishna’s Kingdom at Dwarka and India’s First Jyotirlinga at Somnath along the Arabian Sea coast.',
    },
    {
      rank: '06',
      name: 'Mathura, Vrindavan & Gokul Braj Bhoomi Yatra',
      slug: 'mathura-vrindavan',
      duration: '2 Nights / 3 Days',
      price: '₹9,500',
      highlights: 'Shri Krishna Janmabhoomi, Banke Bihari VIP Darshan, Prem Mandir Light Show & Govardhan',
      desc: 'Walk through the holy land of Lord Krishna’s childhood with divine evening light shows at Prem Mandir.',
    },
    {
      rank: '07',
      name: 'Kailash Mansarovar Overland Yatra 2026',
      slug: 'kailash-mansarovar',
      duration: '13 Nights / 14 Days',
      price: '₹1,85,000',
      highlights: 'Holy Mansarovar Lake Parikrama, Mt. Kailash View, AC Coach & Medical Escort',
      desc: 'The pinnacle of spiritual transformation — sacred Parikrama around holy Mount Kailash and Lake Mansarovar.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container className="max-w-4xl">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-600 font-bold">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600 font-bold">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-extrabold truncate">Top 7 Spiritual Yatras in India 2026</span>
        </div>

        {/* Article Header Card */}
        <Card className="p-6 sm:p-10 bg-white rounded-3xl border-slate-200 shadow-xl space-y-6 mb-8">
          <span className="bg-amber-400/20 text-amber-800 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider inline-block">
            🕉️ Trending Divine Guide 2026
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya Ram Mandir & Kashi
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600 border-y border-slate-100 py-3">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-600" />
              <span>Trip Customizer Spiritual Desk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>September 23, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-600" />
              <span>5 Min Read</span>
            </div>
          </div>

          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
              alt="Top 7 Spiritual Yatras in India 2026"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="text-slate-700 text-sm leading-relaxed space-y-4">
            <p className="font-semibold text-slate-900 text-base">
              India is the cradle of ancient spiritual wisdom. In 2026, millions of devotees from across India, the US, UAE, UK, and Singapore are embarking on sacred yatras to seek divine blessings at Char Dham, Ayodhya Ram Mandir, and Kashi Vishwanath.
            </p>
            <p>
              Trip Customizer provides end-to-end customized spiritual tour packages featuring 4-star hotel stays, VIP Darshan passes, private AC transport, meals, and 24x7 travel assistance.
            </p>
          </div>
        </Card>

        {/* 7 Yatras List */}
        <div className="space-y-6 mb-12">
          {yatras.map((y, idx) => (
            <Card key={idx} className="p-6 sm:p-8 bg-white rounded-3xl border-slate-200 shadow-md space-y-4 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-black text-amber-600 uppercase tracking-widest block">Yatra #{y.rank}</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{y.name}</h2>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Starting @</span>
                  <span className="text-lg font-black text-brand-600">{y.price}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Duration: {y.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Key Inclusions: {y.highlights}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{y.desc}</p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <Link href={`/holidays/${y.slug}`} className="w-full sm:w-auto">
                  <Button variant="primary" size="sm" className="w-full font-bold text-xs py-2.5">
                    VIEW YATRA ITINERARY & RATES →
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/917408763401?text=Hi%20Trip%20Customizer%2C%20I%20want%20details%20for%20the%20${encodeURIComponent(y.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry (+91 7408763401)</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Embedded Instant Lead Form */}
        <div className="my-10">
          <BlogInquiryForm />
        </div>
      </Container>
    </div>
  );
}
