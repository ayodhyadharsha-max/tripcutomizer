'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Instagram, Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';

interface InstaReel {
  id: string;
  title: string;
  badge?: string;
  location: string;
  image: string;
}

export const TravelInsights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reels: InstaReel[] = [
    {
      id: 'reel-1',
      title: 'Fjords & Nordic Glaciers',
      location: 'Norway Fjords Cruise',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-2',
      title: 'Helicopter Darshan Yatra',
      badge: '5 रातें / 6 दिन',
      location: 'Kedarnath Temple, Uttarakhand',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-3',
      title: 'Historic Colonial Heritage',
      location: 'St. Francis Church, Kochi',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-4',
      title: 'Royal Hawa Mahal Heritage',
      badge: '3 रातें / 4 दिन',
      location: 'Jaipur, Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-5',
      title: 'Crystal Waters & Private Villas',
      location: 'Maldives Island Lagoon',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.offsetWidth + 16 : 290;
    if (cardWidth > 0) {
      const index = Math.round(scrollContainerRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, reels.length - 1)));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.offsetWidth + 16 : 290;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-amber-50/20 to-white border-b border-slate-200 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {/* Left Title & Instagram Follow Button Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between lg:block">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-rose-400/60 text-rose-600 bg-rose-50 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-rose-100 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow us</span>
              </a>

              {/* Mobile Arrow Controls (visible on phone in header row) */}
              <div className="flex lg:hidden items-center space-x-2">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Previous Insta Moment"
                  className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95 shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Next Insta Moment"
                  className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md hover:bg-brand-700 transition-colors cursor-pointer active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 tracking-tight leading-tight">
              Insta Moments That Tell a Story
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Catch real travel reels, sacred temple yatra moments and exotic holiday vistas shared by our travelers.
            </p>

            {/* Desktop Arrow Controls */}
            <div className="hidden lg:flex items-center space-x-2 pt-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous Insta Moment"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next Insta Moment"
                className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md hover:bg-brand-700 transition-colors cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Reel Video Cards Column (Horizontal Touch Slider on Mobile, Smooth Track on Desktop) */}
          <div className="lg:col-span-3">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 sm:gap-6 pb-3 sm:pb-1 px-4 sm:px-0 -mx-4 sm:mx-0 no-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  className="w-[78vw] max-w-[290px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex-none snap-start group relative h-84 sm:h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-white"
                >
                  <Image
                    src={reel.image}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 300px"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

                  {/* Top Badge */}
                  {reel.badge && (
                    <div className="absolute top-4 inset-x-0 text-center">
                      <span className="bg-sky-600 text-white font-extrabold text-xs px-3.5 py-1 rounded-md shadow-md uppercase">
                        {reel.badge}
                      </span>
                    </div>
                  )}

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-brand-600 transition-all">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Location & Title Label */}
                  <div className="absolute bottom-5 inset-x-4 text-center space-y-1">
                    <h3 className="font-bold text-white text-sm drop-shadow line-clamp-1">
                      {reel.title}
                    </h3>
                    <p className="font-extrabold text-amber-300 text-xs tracking-tight drop-shadow truncate">
                      {reel.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel Pagination Indicator Dots */}
            <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3">
              {reels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!scrollContainerRef.current) return;
                    const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement | null;
                    const cardWidth = firstChild ? firstChild.offsetWidth + 16 : 290;
                    scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-brand-600' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
