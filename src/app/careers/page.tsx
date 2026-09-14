'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, Send, Users, Sparkles, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface JobPosting {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

const JOBS: JobPosting[] = [
  {
    title: 'Senior International Travel Consultant',
    department: 'Sales & Operations',
    location: 'Gurugram / Hybrid',
    type: 'Full-Time',
    experience: '3 - 6 Years',
  },
  {
    title: 'Europe & Schengen Visa Specialist',
    department: 'Visa Documentation',
    location: 'Delhi NCR',
    type: 'Full-Time',
    experience: '2 - 5 Years',
  },
  {
    title: 'Destination Product Manager (Southeast Asia)',
    department: 'Product & Contracting',
    location: 'Mumbai / Remote',
    type: 'Full-Time',
    experience: '4 - 8 Years',
  },
  {
    title: 'Customer Experience Concierge Specialist',
    department: 'Support & Operations',
    location: 'Gurugram',
    type: 'Full-Time (Rotational)',
    experience: '1 - 3 Years',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-brand-950 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Careers at tripcustomizer
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Build the Future of Travel With Us
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Join India&apos;s fastest-growing customized travel platform. We are looking for passionate travel enthusiasts, DMC specialists, and tech builders.
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-4xl space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xs">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-brand-600" />
            <span>Open Positions ({JOBS.length})</span>
          </h2>

          <div className="space-y-4">
            {JOBS.map((job, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase text-brand-600 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">• {job.type}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium pt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.experience}</span>
                    </span>
                  </div>
                </div>

                <a
                  href="mailto:careers@tripcustomizer.com?subject=Job Application: "
                  className="bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all shrink-0 text-center"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 rounded-3xl border border-amber-200 p-6 text-xs text-amber-950 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-black text-sm text-slate-900">Don&apos;t see your role listed?</h3>
            <p className="text-slate-600 mt-0.5">Send your resume to careers@tripcustomizer.com and we will contact you when a matching position opens up.</p>
          </div>
          <a
            href="mailto:careers@tripcustomizer.com"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl shrink-0 shadow-xs"
          >
            Email Resume
          </a>
        </div>
      </Container>
    </div>
  );
}
