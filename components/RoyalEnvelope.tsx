'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

interface RoyalEnvelopeProps {
  isOpen: boolean;
  onOpenComplete: () => void;
}

export default function RoyalEnvelope({ isOpen, onOpenComplete }: RoyalEnvelopeProps) {
  // Animation phases: 'idle' -> 'seal_crack' -> 'flap_open' -> 'card_rise' -> 'complete'
  const [phase, setPhase] = useState<'idle' | 'seal_crack' | 'flap_open' | 'card_rise' | 'complete'>('idle');

  const handleOpen = () => {
    if (phase !== 'idle') return;

    // Phase 1: Seal breaks with powerful golden sparks
    setPhase('seal_crack');

    try {
      // Powerful center burst
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.58 },
        colors: ['#D4AF37', '#F5E6BE', '#C8A86B', '#9D7336', '#BFA2DB', '#FFFFFF'],
      });
    } catch {
      // Ignore
    }

    // Phase 2: Flap opens in 3D
    setTimeout(() => {
      setPhase('flap_open');
    }, 450);

    // Phase 3: Card glides up powerfully on mobile & desktop with secondary dual-side celebration
    setTimeout(() => {
      setPhase('card_rise');
      try {
        confetti({
          particleCount: 65,
          angle: 60,
          spread: 80,
          origin: { x: 0.05, y: 0.45 },
          colors: ['#D4AF37', '#B692C2', '#EED8AE', '#9B783E', '#FFFFFF'],
        });
        confetti({
          particleCount: 65,
          angle: 120,
          spread: 80,
          origin: { x: 0.95, y: 0.45 },
          colors: ['#D4AF37', '#B692C2', '#EED8AE', '#9B783E', '#FFFFFF'],
        });
      } catch {
        // Ignore
      }
    }, 1200);

    // Phase 4: Smooth final reveal of full page
    setTimeout(() => {
      setPhase('complete');
      setTimeout(onOpenComplete, 650);
    }, 2850);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#15100B]/92 backdrop-blur-lg px-4 py-6 overflow-hidden select-none"
        >
          {/* Ambient Glowing Background Lights */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-[#BA9755]/20 to-transparent blur-3xl" />
            <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-gradient-to-tl from-[#9B7BB8]/18 to-transparent blur-3xl" />
          </div>

          <div className="relative w-full max-w-[360px] sm:max-w-[420px] flex flex-col items-center">
            {/* Header announcement with corrected names: معتز أبو داري وبيان ملوحي */}
            <motion.div
              animate={{
                opacity: phase === 'idle' ? 1 : 0,
                y: phase === 'idle' ? 0 : -25,
              }}
              transition={{ duration: 0.4 }}
              className="mb-4 sm:mb-6 text-center"
            >
              <p className="font-amiri text-xs sm:text-sm tracking-widest text-[#E6D4B2]">
                بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
              </p>
              <h2 className="mt-1 font-ruqaa text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                دعوة حفل زفاف
              </h2>
              <p className="mt-1 font-cairo text-xs sm:text-sm font-semibold text-[#DEC7A2]">
                معتز خالد أبو داري & بيان فيصل ملوحي
              </p>
            </motion.div>

            {/* The 3D Royal Envelope - Powerful Mobile Animation */}
            <div
              onClick={handleOpen}
              className="relative w-full aspect-[4/3] max-w-[350px] sm:max-w-[420px] cursor-pointer perspective-1000 group active:scale-95 transition-transform"
            >
              {/* Envelope Back Body */}
              <div className="absolute inset-0 rounded-2xl bg-[#EDE4D4] shadow-2xl border border-[#D5C1A2] overflow-hidden">
                <div className="absolute inset-0 bg-radial from-transparent to-[#DCCDB7]/40" />
              </div>

              {/* Inside Lining of Envelope (Seen when flap opens) */}
              <div
                className="absolute inset-x-2 top-2 h-1/2 rounded-t-xl overflow-hidden opacity-90 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              >
                <div className="w-full h-full bg-[#FAF5EC] border-b border-[#D8C6AB] flex items-center justify-center">
                  <div className="relative w-28 h-28 opacity-35">
                    <Image
                      src="/images/lavender_floral_wreath_1794394904070.jpg"
                      alt="بطانة الزهور"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* The Royal Invitation Card Rising Out of the Envelope (Powerful Vertical Motion) */}
              <motion.div
                initial={false}
                animate={
                  phase === 'card_rise'
                    ? {
                        y: -210,
                        scale: 1.15,
                        zIndex: 40,
                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.55)',
                      }
                    : {
                        y: 0,
                        scale: 0.95,
                        zIndex: 10,
                      }
                }
                transition={{
                  duration: 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-2.5 right-2.5 sm:left-4 sm:right-4 top-2.5 h-[92%] rounded-2xl bg-[#FFFDF9] border border-[#DFCBB0] p-4 text-center shadow-md flex flex-col items-center justify-between pointer-events-none paper-texture"
              >
                {/* Card preview content with correct names */}
                <div className="w-full">
                  <p className="font-amiri text-[10px] sm:text-xs text-[#957B52]">
                    ﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا ﴾
                  </p>
                  <div className="my-1.5 mx-auto h-px w-20 bg-[#DECDB3]" />
                  <p className="font-cairo text-[11px] font-semibold text-[#7C6339]">
                    يتشرفون بدعوتكم لحضور زفاف
                  </p>
                </div>

                <div className="my-1">
                  <h3 className="font-ruqaa text-3xl sm:text-4xl font-bold text-[#3B2F22] tracking-wide">
                    معتز & بيان
                  </h3>
                </div>

                <div className="w-full rounded-xl bg-[#FAF6EE] py-2 px-3 border border-[#EADBCA]">
                  <p className="font-cairo text-[11px] font-bold text-[#8C6D37]">
                    الخميس 19-11-2026 · قاعات النعمان
                  </p>
                </div>
              </motion.div>

              {/* Envelope Body Front Left Fold */}
              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-[#E7DCCA] via-[#E2D4BF] to-[#DCBFA8] shadow-md border-r border-[#D2C0A5]" />
              </div>

              {/* Envelope Body Front Right Fold */}
              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-l from-[#E7DCCA] via-[#E2D4BF] to-[#DCBFA8] shadow-md border-l border-[#D2C0A5]" />
              </div>

              {/* Envelope Bottom Triangle Fold */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[56%] z-25 pointer-events-none overflow-hidden rounded-b-2xl"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 14%, 100% 100%)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-[#E2D4C0] via-[#EAE1D1] to-[#F4ECDC] shadow-lg border-t border-[#D5C1A3]" />
              </div>

              {/* Golden Ribbon across Envelope Body */}
              <motion.div
                animate={{
                  opacity: phase === 'idle' ? 1 : 0,
                  scaleX: phase === 'idle' ? 1 : 1.25,
                }}
                transition={{ duration: 0.35 }}
                className="absolute top-[49%] left-0 right-0 h-4 sm:h-5 z-28 pointer-events-none -translate-y-1/2 bg-gradient-to-r from-[#B99556] via-[#F3DEAB] to-[#B99556] shadow-sm border-y border-[#DFC78B]/70"
              />

              {/* Top Triangular Flap with Powerful 3D Flip */}
              <motion.div
                initial={false}
                animate={
                  phase === 'flap_open' || phase === 'card_rise'
                    ? {
                        rotateX: 180,
                        zIndex: 5,
                      }
                    : {
                        rotateX: 0,
                        zIndex: 30,
                      }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute top-0 left-0 right-0 h-1/2 origin-top transform-style-preserve-3d"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              >
                {/* Front side of flap */}
                <div className="w-full h-full bg-gradient-to-b from-[#F5ECE0] via-[#ECE2D0] to-[#DFD0B8] border-b-2 border-[#D2BEA0] shadow-xl flex items-center justify-center backface-hidden" />
              </motion.div>

              {/* The Royal Gold Wax Seal */}
              <motion.div
                animate={
                  phase === 'seal_crack'
                    ? {
                        scale: 1.45,
                        rotate: 15,
                        opacity: 0.7,
                        filter: 'brightness(1.6)',
                      }
                    : phase === 'flap_open' || phase === 'card_rise'
                    ? {
                        scale: 0.3,
                        opacity: 0,
                        y: -80,
                        pointerEvents: 'none',
                      }
                    : {
                        scale: [1, 1.05, 1],
                        rotate: 0,
                        opacity: 1,
                      }
                }
                transition={
                  phase === 'idle'
                    ? {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : {
                        duration: 0.4,
                      }
                }
                className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-35 flex flex-col items-center"
              >
                {/* Wax Seal Body with Luxury Ornate English Monogram */}
                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#E8CF96] via-[#BA944F] to-[#74521E] shadow-2xl p-1 border-2 border-[#FFF2D4]">
                  {/* Inner relief circle with ornate monogram */}
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#906B2B] via-[#BA944F] to-[#A27B37] border border-[#FDE5B3] shadow-inner overflow-hidden p-0.5">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-full h-full select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="sealGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFF7E6" />
                          <stop offset="30%" stopColor="#E6C88A" />
                          <stop offset="70%" stopColor="#B38D48" />
                          <stop offset="100%" stopColor="#FFF0CC" />
                        </linearGradient>
                        <filter id="sealEmbossFilter" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0.5" dy="1.2" stdDeviation="0.6" floodColor="#3A270D" floodOpacity="0.85" />
                        </filter>
                      </defs>

                      {/* Decorative Outer Beaded Ring */}
                      <circle cx="60" cy="60" r="54" stroke="url(#sealGoldGrad)" strokeWidth="1" strokeDasharray="2.5 3" opacity="0.75" />
                      <circle cx="60" cy="60" r="49" stroke="url(#sealGoldGrad)" strokeWidth="1.2" opacity="0.9" />
                      <circle cx="60" cy="60" r="46" stroke="url(#sealGoldGrad)" strokeWidth="0.6" opacity="0.6" />

                      {/* Left Laurel Wreath Branch */}
                      <path d="M28 60 C28 42 38 29 52 24 M28 60 C28 78 38 91 52 96" stroke="url(#sealGoldGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                      <path d="M30 46 C26 44 25 39 29 38 C33 38 33 43 30 46 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M35 36 C32 33 33 28 37 28 C40 29 39 34 35 36 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M43 28 C41 24 44 20 48 21 C51 23 48 28 43 28 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M30 74 C26 76 25 81 29 82 C33 82 33 77 30 74 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M35 84 C32 87 33 92 37 92 C40 91 39 86 35 84 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M43 92 C41 96 44 100 48 99 C51 97 48 92 43 92 Z" fill="url(#sealGoldGrad)" opacity="0.85" />

                      {/* Right Laurel Wreath Branch */}
                      <path d="M92 60 C92 42 82 29 68 24 M92 60 C92 78 82 91 68 96" stroke="url(#sealGoldGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                      <path d="M90 46 C94 44 95 39 91 38 C87 38 87 43 90 46 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M85 36 C88 33 87 28 83 28 C80 29 81 34 85 36 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M77 28 C79 24 76 20 72 21 C69 23 72 28 77 28 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M90 74 C94 76 95 81 91 82 C87 82 87 77 90 74 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M85 84 C88 87 87 92 83 92 C80 91 81 86 85 84 Z" fill="url(#sealGoldGrad)" opacity="0.85" />
                      <path d="M77 92 C79 96 76 100 72 99 C69 97 72 92 77 92 Z" fill="url(#sealGoldGrad)" opacity="0.85" />

                      {/* Top Royal Floret / Mini Crown */}
                      <path d="M57 24 L60 19 L63 24 L67 21 L65 26 L55 26 L53 21 Z" fill="url(#sealGoldGrad)" opacity="0.9" />

                      {/* Pure Vector Ornate Monogram: M & B (Deterministic, Zero Overlap on All Devices) */}
                      {/* Letter M */}
                      <path
                        d="M 31 70 L 31 68.5 C 32.5 68.5 33.5 67.5 33.5 66 L 33.5 53 C 33.5 51.5 32.5 50.5 31 50.5 L 31 49 L 36.5 49 L 40 62 L 43.5 49 L 49 49 L 49 50.5 C 47.5 50.5 46.5 51.5 46.5 53 L 46.5 66 C 46.5 67.5 47.5 68.5 49 68.5 L 49 70 L 43 70 L 43 68.5 C 44.5 68.5 45.5 67.5 45.5 66 L 45.5 54 L 41 69 L 39 69 L 34.5 54 L 34.5 66 C 34.5 67.5 35.5 68.5 37 68.5 L 37 70 Z"
                        fill="url(#sealGoldGrad)"
                        filter="url(#sealEmbossFilter)"
                      />

                      {/* Center Romantic Ampersand & */}
                      <path
                        d="M 62.5 66.5 C 61.5 67.5 60 68 58.5 68 C 56.5 68 55 66.5 55 64.5 C 55 62.8 56.2 61.2 58 59.8 C 57 58.5 56.5 57.2 56.5 56 C 56.5 54 58 52.5 60 52.5 C 61.8 52.5 63 53.8 63 55.5 C 63 57.2 61.8 59 60 60.5 L 63 64.5 L 65 62.5 L 65.8 63.3 L 63.2 66 Z M 59.2 59.5 C 60.8 58.2 61.8 56.8 61.8 55.5 C 61.8 54.4 61 53.6 60 53.6 C 59 53.6 57.8 54.5 57.8 56 C 57.8 57 58.3 58.2 59.2 59.5 Z M 57 64 C 57 65.5 58 66.8 59.2 66.8 C 60.2 66.8 61.2 66.2 61.8 65.2 L 58.2 60.8 C 57.4 61.8 57 63 57 64 Z"
                        fill="url(#sealGoldGrad)"
                        filter="url(#sealEmbossFilter)"
                      />

                      {/* Letter B */}
                      <path
                        d="M 71 70 L 71 68.5 C 72.5 68.5 73.5 67.5 73.5 66 L 73.5 53 C 73.5 51.5 72.5 50.5 71 50.5 L 71 49 L 81.5 49 C 84.5 49 87 50.8 87 53.8 C 87 56 85.5 57.8 83.2 58.5 C 86.2 59.2 88 61.5 88 64.5 C 88 68 85 70 81 70 Z M 75 58.5 L 81 58.5 C 83.2 58.5 85 57.2 85 54.5 C 85 52 83.2 50.5 81 50.5 L 75 50.5 Z M 75 68.5 L 81 68.5 C 83.8 68.5 86 67 86 64 C 86 61.2 83.8 59.8 81 59.8 L 75 59.8 Z"
                        fill="url(#sealGoldGrad)"
                        filter="url(#sealEmbossFilter)"
                      />

                      {/* Bottom Flourish & Year */}
                      <circle cx="60" cy="80" r="1.5" fill="url(#sealGoldGrad)" />
                      <path d="M50 80 H57 M63 80 H70" stroke="url(#sealGoldGrad)" strokeWidth="0.8" opacity="0.75" />
                      <text
                        x="60"
                        y="91"
                        fontFamily="'Cinzel', serif"
                        fontSize="7.5"
                        letterSpacing="2.5"
                        fontWeight="700"
                        fill="url(#sealGoldGrad)"
                        textAnchor="middle"
                        opacity="0.9"
                        filter="url(#sealEmbossFilter)"
                      >
                        2026
                      </text>
                    </svg>
                  </div>

                  {/* Pulsing glow halo on mobile & desktop */}
                  {phase === 'idle' && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#FFE8B7] animate-ping opacity-45 pointer-events-none" />
                  )}
                </div>

                {/* Pulsing Badge */}
                {phase === 'idle' && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-2.5 flex items-center gap-1.5 rounded-full bg-[#2C231B]/90 px-4 py-1.5 font-cairo text-xs font-bold text-[#FFF2D6] shadow-xl backdrop-blur-xs border border-[#DEC494]/70"
                  >
                    <span>انقر لفتح الدعوة</span>
                    <Sparkles className="h-3.5 w-3.5 text-[#F8DA96]" />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
