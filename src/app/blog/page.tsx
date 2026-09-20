import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';

export default function BlogHubPage() {
  const blogs = [
    {
      slug: 'top-10-budget-international-trips-under-30k',
      title: 'Top 10 Budget International Holiday Packages Under ₹30,000 (Visa-Free for Indians) ✈️',
      category: '🔥 Viral Deal 2026',
      author: 'Senior Travel Desk',
      date: 'Sept 20, 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'From Bali & Thailand to Vietnam, Malaysia & Baku Azerbaijan — discover 10 incredible foreign trips starting @ ₹16,500 with 4-star hotels & flights.',
    },
    {
      slug: 'top-10-things-to-do-in-dubai-2026',
      title: 'Top 10 Unmissable Experiences in Dubai for 2026',
      category: 'Destination Guide',
      author: 'Aanya Sharma',
      date: 'Sept 10, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      summary: 'From scaling Burj Khalifa to dune bashing & visiting the Museum of the Future, here is your definitive Dubai itinerary.',
    },
    {
      slug: 'how-to-choose-the-right-forex-card',
      title: 'How to Choose the Best Multi-Currency Forex Card for Overseas Trips',
      category: 'Forex & Finance',
      author: 'Vikram Sengupta',
      date: 'Sept 04, 2026',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
      summary: 'Avoid hefty 3.5% credit card cross-currency markups. Discover why Forex Cards are the smartest way to spend abroad.',
    },
    {
      slug: 'ultimate-guide-to-switzerland-by-train',
      title: 'The Ultimate Guide to Exploring Switzerland via Eurail Scenic Trains',
      category: 'Europe Travel',
      author: 'Rohan Kapoor',
      date: 'Aug 28, 2026',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop',
      summary: 'Discover Glacier Express, Bernina Express & Mt. Titlis ropeway passes for an alpine trip of a lifetime.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Expert Travel Editorial</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Travel Guides & Destination Insights</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Curated travel stories, forex advice, visa tips and day-by-day itinerary blueprints written by senior travel architects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Card key={b.slug} hoverable className="border-slate-200 bg-white group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-brand-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {b.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-4 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-brand-500" />
                      <span>{b.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{b.date}</span>
                    </span>
                  </div>

                  <h2 className="font-bold text-slate-900 text-base group-hover:text-brand-500 transition-colors line-clamp-2">
                    {b.title}
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-2">{b.summary}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/blog/${b.slug}`}
                  className="text-xs font-bold text-brand-500 hover:underline inline-flex items-center"
                >
                  Read Full Article →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
