import React from 'react';
import { BuildTripWizard } from '@/components/homepage/BuildTripWizard';
import { Container } from '@/components/ui/Container';

export default function CustomizeTripPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-black text-slate-900">Custom Trip Architect Wizard</h1>
          <p className="text-xs text-slate-500 mt-2">
            Build your own tailored holiday package with custom hotel tiers, flight preferences, and sightseeing vouchers.
          </p>
        </div>

        <BuildTripWizard />
      </Container>
    </div>
  );
}
