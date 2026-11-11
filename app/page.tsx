'use client';

import React, { useState } from 'react';
import RoyalEnvelope from '@/components/RoyalEnvelope';
import PetalCanvas from '@/components/PetalCanvas';
import WeddingHeader from '@/components/WeddingHeader';
import HeroInvitation from '@/components/HeroInvitation';
import CountdownTimer from '@/components/CountdownTimer';
import VenueSection from '@/components/VenueSection';
import PoliteNotes from '@/components/PoliteNotes';
import Footer from '@/components/Footer';
import ShareModal from '@/components/ShareModal';

export default function WeddingPage() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleCalendarScroll = () => {
    const el = document.getElementById('countdown');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F8F5EE] text-[#38332D]">
      {/* Floating gentle lavender petals in background */}
      <PetalCanvas />

      {/* Realistic 3D royal envelope opening animation on entry */}
      <RoyalEnvelope
        isOpen={envelopeOpen}
        onOpenComplete={() => setEnvelopeOpen(true)}
      />

      {/* Top Navigation Header */}
      <WeddingHeader onOpenShare={() => setIsShareModalOpen(true)} />

      {/* Centerpiece Wedding Invitation Card (Responsive for mobile & desktop) */}
      <HeroInvitation onAddToCalendar={handleCalendarScroll} />

      {/* Live Countdown Timer to Nov 19, 2026, 8:30 PM + Calendar links */}
      <CountdownTimer />

      {/* Venue & Location (Al-Nu'man Halls with direct Google Maps link) */}
      <VenueSection />

      {/* Polite Notes & Etiquette */}
      <PoliteNotes />

      {/* Dignified Footer */}
      <Footer />

      {/* WhatsApp & Social Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </main>
  );
}
