import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, Share2, ChevronRight, Compass } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = {
    title: 'Top 10 Unmissable Experiences in Dubai for 2026',
    author: 'Aanya Sharma',
    date: 'Sept 10, 2026',
    readTime: '6 Min Read',
    category: 'Destination Guide',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    toc: [
      '1. Scale Burj Khalifa At The Top 124th Floor',
      '2. Dune Bashing & BBQ Desert Safari',
      '3. Visit Museum of the Future',
      '4. Marina Dhow Dinner Cruise',
      '5. Gold & Spice Souk Shopping',
    ],
    content: `
      Dubai continues to redefine modern travel with groundbreaking architecture, world-class theme parks, and pristine desert adventures. 
      Whether you are traveling with family, on a honeymoon escape, or on a business trip, here is your essential guide to top attractions.
      
      ### 1. Scale Burj Khalifa At The Top 124th Floor
      No visit to Dubai is complete without ascending the world's tallest building. Take the high-speed elevator to the 124th and 125th floor observation decks for breathtaking 360-degree views of the skyline and Arabian Gulf.

      ### 2. Dune Bashing & BBQ Desert Safari
      Hop into a 4x4 Land Cruiser for thrilling sand dune driving across Lahbab desert red dunes, followed by camel riding, henna tattoos, and a lavish BBQ buffet with live belly dance & Tanoura shows under the stars.
    `,
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-brand-500">Blog</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800 line-clamp-1">{article.title}</span>
        </div>

        {/* Header */}
        <div className="mb-6 space-y-3">
          <span className="bg-brand-50 text-brand-700 font-bold text-xs px-3 py-1 rounded-full inline-block">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-brand-500" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-lg">
          <Image src={article.heroImage} alt={article.title} fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-6 bg-white border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Table of Contents</h3>
              <ul className="space-y-1.5 text-xs text-brand-600 font-semibold">
                {article.toc.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </Card>
          </div>

          {/* Sidebar CTA & Related Packages */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="p-6 bg-brand-900 text-white rounded-3xl space-y-3">
              <Compass className="w-6 h-6 text-accent-400" />
              <h3 className="font-black text-base">Book Dubai Tour Package</h3>
              <p className="text-xs text-slate-300">5 Nights / 6 Days with Burj Khalifa tickets, Desert Safari & 4-star hotel stay.</p>
              <Link href="/holidays/dubai" className="block pt-2">
                <Button variant="accent" size="md" className="w-full font-bold text-slate-950 text-xs">
                  EXPLORE DUBAI PACKAGES →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
