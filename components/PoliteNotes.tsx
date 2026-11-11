'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck, Sparkles, Baby, Camera } from 'lucide-react';

export default function PoliteNotes() {
  const notes = [
    {
      title: 'جنة الأطفال منازلهم',
      description: 'لتنعموا بأمسية هادئة وفاخرة، ولتكتمل فرحتنا، نلتمس منكم بكل لطف ترك أطفالكم في أمان منازلهم.',
      icon: <Baby className="h-5 w-5 text-[#9E7C3E]" />,
    },
    {
      title: 'فرحتنا تكتمل بسلامتكم',
      description: 'نرجو الامتناع التام عن إطلاق العيارات النارية حرصاً على سلامة الجميع ولتكون ليلتنا نقية بالدعاء والفرح.',
      icon: <ShieldCheck className="h-5 w-5 text-[#9E7C3E]" />,
    },
    {
      title: 'توثيق اللحظات العطرة',
      description: 'نسعد بمشاركتكم وتصويركم أجمل اللحظات ونشر الفرحة برفقة أحبتكم وأصدقائكم.',
      icon: <Camera className="h-5 w-5 text-[#9E7C3E]" />,
    },
    {
      title: 'حضوركم أجمل هدية',
      description: 'تشريفكم ليلتنا ومشاركتكم فرحتنا هو أثمن وأجمل هدية تزدان بها قلوب العروسين وعائلتيهما.',
      icon: <Heart className="h-5 w-5 text-[#9E7C3E]" />,
    },
  ];

  return (
    <section id="notes" className="py-12 sm:py-16 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cairo text-xs font-semibold tracking-wider text-[#A38349] uppercase">
            عبارات محبة وتقدير
          </span>
          <h2 className="mt-2 font-ruqaa text-3xl sm:text-4xl font-bold text-[#3B3024]">
            ملاحظات ولطف الحضور
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#736350]">
            بضع لمسات لتكون ليلتنا مليئة بالراحة والسعادة لجميع ضيوفنا الكرام
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notes.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-2xl bg-white p-5 shadow-xs border border-[#E8DAC2] transition-all hover:border-[#D5B989]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5E8] border border-[#DFCBB0]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-cairo text-sm font-bold text-[#3F3325]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#726454] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Romantic Floral Badge with Rings generated image */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#FAF6EE] via-[#FFFDF9] to-[#FAF6EE] p-6 sm:p-8 border border-[#E9DAC1] text-center">
          <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-[#D4B988] shadow-sm">
            <Image
              src="/images/wedding_rings_botanical_1794394905242.jpg"
              alt="خواتم الزفاف"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-ruqaa text-xl sm:text-2xl font-bold text-[#8E7243]">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="mt-1 text-xs text-[#7D6E5D]">
            دعواتكم للعروسين معتز وبيان بحياة مباركة هانئة
          </p>
        </div>
      </div>
    </section>
  );
}
