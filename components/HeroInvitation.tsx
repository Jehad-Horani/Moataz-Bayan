'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

interface HeroInvitationProps {
  onAddToCalendar: () => void;
}

export default function HeroInvitation({ onAddToCalendar }: HeroInvitationProps) {
  const mapsUrl = 'https://maps.app.goo.gl/ZGbVdLU4bQDFAzje8?g_st=iw';

  return (
    <section id="invitation" className="relative py-8 sm:py-14 px-3 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Top Sacred Bismillah */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="font-amiri text-xs sm:text-sm tracking-widest text-[#967946]">
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* The Luxury Wedding Card Container - Mobile Optimized */}
        <div className="relative overflow-hidden rounded-3xl bg-[#FFFDF9] px-4 py-8 sm:px-12 sm:py-14 shadow-xl border border-[#E6D7BD] paper-texture">
          {/* Inner Golden Hairline Frame */}
          <div className="pointer-events-none absolute inset-2.5 sm:inset-4 rounded-2xl border border-[#E0D0B6]/80" />

          {/* Corner Floral Ornaments for Mobile & Desktop */}
          <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 sm:w-40 sm:h-40 opacity-25">
            <Image
              src="/images/lavender_floral_wreath_1794394904070.jpg"
              alt="زخرفة لافندر"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-8 -left-8 w-28 h-28 sm:w-40 sm:h-40 opacity-25 rotate-180">
            <Image
              src="/images/lavender_floral_wreath_1794394904070.jpg"
              alt="زخرفة لافندر"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 mx-auto max-w-xl text-center">
            {/* The Quranic Verse */}
            <div className="mb-5 sm:mb-7">
              <p className="font-amiri text-sm sm:text-base md:text-lg leading-relaxed text-[#514334] font-normal tracking-wide px-2 sm:px-4">
                ﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ ﴾
              </p>
              <p className="mt-1 font-amiri text-xs text-[#957F5A]">
                سورة الروم، الآية 21
              </p>
            </div>

            {/* Golden Ornamental Divider */}
            <div className="my-4 sm:my-6 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-16 sm:w-28 bg-[#DECDB3]" />
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BA9755]" />
                <span className="h-2 w-2 rotate-45 border border-[#BA9755] bg-[#FFFDF9]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#BA9755]" />
              </div>
              <span className="h-px w-16 sm:w-28 bg-[#DECDB3]" />
            </div>

            {/* "يتشرف" */}
            <div className="my-2 sm:my-3">
              <span className="font-ruqaa text-xl sm:text-2xl font-bold text-[#8C6D37]">
                يتشرف
              </span>
            </div>

            {/* Families Row - Clean Responsive 2-Column */}
            <div className="my-4 sm:my-6 grid grid-cols-2 gap-2 sm:gap-6 items-start text-center">
              {/* Right Side: Groom's Family */}
              <div className="flex flex-col items-center px-1">
                <p className="font-cairo text-xs sm:text-sm text-[#6C5D4B] font-medium">
                  أبناء المرحوم
                </p>
                <p className="mt-0.5 sm:mt-1 font-ruqaa text-base sm:text-xl font-bold text-[#3B3023]">
                  خالد سليم أبو داري
                </p>
                <span className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-[#947D5B] font-medium">
                  شقيقهم
                </span>
              </div>

              {/* Left Side: Bride's Family */}
              <div className="flex flex-col items-center px-1">
                <p className="font-cairo text-xs sm:text-sm text-[#6C5D4B] font-medium">
                  والد العروس
                </p>
                <p className="mt-0.5 sm:mt-1 font-ruqaa text-base sm:text-xl font-bold text-[#3B3023]">
                  فيصل ملوحي
                </p>
                <span className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-[#947D5B] font-medium">
                  كريمته
                </span>
              </div>
            </div>

            {/* Center Callout */}
            <div className="my-3 sm:my-4">
              <p className="font-cairo text-xs sm:text-sm font-semibold tracking-wide text-[#7C6339]">
                بدعوتكم لحضور حفل زفاف
              </p>
            </div>

            {/* The Couple's Royal Names */}
            <div className="my-5 sm:my-8 py-2">
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <h1 className="font-ruqaa text-3xl sm:text-5xl md:text-6xl font-bold text-[#3A2F22] tracking-normal drop-shadow-2xs">
                  معتز
                </h1>
                <span className="font-ruqaa text-2xl sm:text-3xl font-light text-[#BA9755]">
                  و
                </span>
                <h1 className="font-ruqaa text-3xl sm:text-5xl md:text-6xl font-bold text-[#3A2F22] tracking-normal drop-shadow-2xs">
                  بيان
                </h1>
              </div>
            </div>

            {/* "وذلك بمشيئة الله تعالى" */}
            <div className="my-3 sm:my-4">
              <p className="font-amiri text-xs sm:text-base text-[#7E6A4E]">
                وذلك بمشيئة الله تعالى
              </p>
            </div>

            {/* Bottom Ornamental Divider */}
            <div className="my-4 sm:my-6 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-16 sm:w-28 bg-[#DECDB3]" />
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BA9755]" />
                <span className="h-2 w-2 rotate-45 border border-[#BA9755] bg-[#FFFDF9]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#BA9755]" />
              </div>
              <span className="h-px w-16 sm:w-28 bg-[#DECDB3]" />
            </div>

            {/* Date & Location Summary Strip */}
            <div className="mt-3 sm:mt-5 rounded-2xl bg-[#FAF6EE] p-3 sm:p-5 border border-[#E7D7BE]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-[#483B2C]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#A8864C]" />
                  <span>الخميس 19-11-2026</span>
                </div>
                <span className="text-[#CBB798] hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#A8864C]" />
                  <span>الساعة 8:30 مساءً</span>
                </div>
                <span className="text-[#CBB798] hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#A8864C]" />
                  <span>قاعات النعمان</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls below the card */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onAddToCalendar}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B89455] to-[#997335] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#B89455]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>حفظ الموعد في التقويم</span>
          </button>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#5C4933] border border-[#DFCBB0] hover:bg-[#F8F2E8] hover:border-[#BF9E6A] shadow-2xs transition-all"
          >
            <Navigation className="h-4 w-4 text-[#A8864C]" />
            <span>الاتجاهات إلى القاعة (خرائط Google)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
