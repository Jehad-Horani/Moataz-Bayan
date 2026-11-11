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
                {/* Wax Seal Body */}
                <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#E2C78E] via-[#BA944F] to-[#7B5921] shadow-2xl p-1.5 border-2 border-[#FFF0CB]">
                  {/* Inner relief circle with monogram */}
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#98722F] via-[#BA944F] to-[#A8813C] border border-[#FDE6B8] shadow-inner">
                    <span className="font-ruqaa text-2xl sm:text-3xl font-bold text-[#FFF5DF] drop-shadow-md">
                      م & ب
                    </span>
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
