'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Navigation, ExternalLink, Car, Sparkles } from 'lucide-react';

export default function VenueSection() {
  const mapsUrl = 'https://maps.app.goo.gl/ZGbVdLU4bQDFAzje8?g_st=iw';

  return (
    <section id="venue" className="py-12 sm:py-16 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cairo text-xs font-semibold tracking-wider text-[#A38349] uppercase">
            نرحب بحضوركم الكريم
          </span>
          <h2 className="mt-2 font-ruqaa text-3xl sm:text-4xl font-bold text-[#3B3024]">
            موقع الحفل وقاعة الزفاف
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#736350]">
            قاعات النعمان للأفراح والمناسبات - نسعد برؤيتكم وتلبية دعوتنا
          </p>
        </div>

        {/* Venue Card Container */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-md border border-[#E8DAC2]">
          {/* Ballroom Visual Banner */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/luxury_ballroom_watercolor_1794394905525.jpg"
              alt="قاعات النعمان للأفراح"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

            <div className="absolute bottom-5 right-5 left-5 text-white">
              <span className="font-cairo text-xs font-medium text-[#F4DFC0]">
                الصرح الملكي للأفراح
              </span>
              <h3 className="font-ruqaa text-2xl sm:text-3xl font-bold text-white">
                قاعات النعمان للأفراح والمناسبات
              </h3>
            </div>
          </div>

          {/* Details & Actions */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 rounded-2xl bg-[#FAF7F2] p-4 border border-[#EFE5D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#9E7C3E] shadow-2xs border border-[#E2D2BC]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cairo text-sm font-bold text-[#423628]">
                    العنوان والموقع
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6C5C] leading-relaxed">
                    عمان، شارع المطار / قاعات النعمان الكبرى، الأردن
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 rounded-2xl bg-[#FAF7F2] p-4 border border-[#EFE5D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#9E7C3E] shadow-2xs border border-[#E2D2BC]">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cairo text-sm font-bold text-[#423628]">
                    مواقف السيارات
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6C5C] leading-relaxed">
                    مواقف فسيحة ومجانية متوفرة تتسع لجميع الضيوف
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 rounded-2xl bg-[#FAF7F2] p-4 border border-[#EFE5D5]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#9E7C3E] shadow-2xs border border-[#E2D2BC]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cairo text-sm font-bold text-[#423628]">
                    القاعة والتجهيزات
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6C5C] leading-relaxed">
                    قاعة ملكية مكيفة ومهيأة لأرقى مراسم الاستقبال
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div className="flex items-center justify-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B89455] to-[#997335] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#B89455]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Navigation className="h-4 w-4" />
                <span>الاتجاهات عبر Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#FDF0D9]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
