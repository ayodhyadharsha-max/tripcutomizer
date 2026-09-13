'use client';

import React from 'react';
import Link from 'next/link';
import { Gift, Percent, Award, Building2, Users, BookOpen, Briefcase, Info, Mail } from 'lucide-react';

export const MegaMenuMore: React.FC = () => {
  const moreLinks = [
    { title: 'Travel Gift Cards', href: '/gift-cards', desc: 'Instant e-gift vouchers for holidays & flights', icon: Gift },
    { title: 'Offers & Discounts', href: '/offers', desc: 'Bank cashbacks, holiday deals & promo codes', icon: Percent },
    { title: 'Loyalty Rewards Program', href: '/loyalty', desc: 'Earn reward points on every booking', icon: Award },
    { title: 'Corporate Travel Desk', href: '/corporate-travel', desc: 'Enterprise business travel management', icon: Building2 },
    { title: 'MICE & Corporate Events', href: '/mice', desc: 'Meetings, Incentives, Conferences & Exhibitions', icon: Users },
    { title: 'Travel Blog & Articles', href: '/blog', desc: 'Destination guides, tips & expert insights', icon: BookOpen },
    { title: 'Careers at tripcustomizer', href: '/careers', desc: 'Join our team of travel architects', icon: Briefcase },
    { title: 'About Us', href: '/about', desc: 'Our legacy, vision & travel heritage', icon: Info },
    { title: 'Contact Us', href: '/contact', desc: 'Get in touch with customer care', icon: Mail },
  ];

  return (
    <div className="w-[600px] max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-2xl shadow-mega p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
      {moreLinks.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
          >
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600 block">{item.title}</span>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
