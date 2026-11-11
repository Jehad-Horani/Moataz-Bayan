'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EAE0CF] bg-[#FAF7F2] py-10 px-4 text-center">
      <div className="mx-auto max-w-4xl space-y-4">
        {/* Brand in English with Heart */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#DECDB3]" />
          <span className="text-xl sm:text-2xl font-bold text-[#8C6D37] font-serif flex items-center gap-2" dir="ltr">
            <span>Moataz</span>
            <span className="text-red-600 text-lg">❤️</span>
            <span>Bayan</span>
          </span>
          <span className="h-px w-16 bg-[#DECDB3]" />
        </div>

        <p className="font-amiri text-base text-[#6E5D4A]">
          دامت دياركم عامرة بالأفراح والمسرات ونشكركم على طيب حضوركم ودعواتكم
        </p>

        <p className="text-xs text-[#958471]">
          حفل زفاف معتز خالد أبو داري & بيان فيصل ملوحي · الخميس 19 تشرين الثاني 2026 · قاعات النعمان
        </p>

        <div className="pt-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#DFCBB0] bg-white px-4 py-1.5 text-xs font-medium text-[#7A6449] hover:bg-[#F6EFE2] transition-colors cursor-pointer"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>العودة للأعلى</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
