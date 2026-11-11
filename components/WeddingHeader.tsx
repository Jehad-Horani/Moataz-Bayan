'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

interface WeddingHeaderProps {
  onOpenShare: () => void;
}

export default function WeddingHeader({ onOpenShare }: WeddingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#EBE1D0] bg-[#FAF8F5]/92 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 sm:px-6 py-3">
        {/* Zone 1: Brand Wordmark in English with Heart in the middle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#invitation"
            className="flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-wide text-[#3B3024] hover:text-[#9A7638] transition-colors whitespace-nowrap font-serif"
            dir="ltr"
          >
            <span>Moataz</span>
            <span className="text-[#C53030] text-base animate-pulse">❤️</span>
            <span>Bayan</span>
          </a>
        </div>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#655848]">
          <a
            href="#invitation"
            className="hover:text-[#9A7638] transition-colors whitespace-nowrap shrink-0"
          >
            بطاقة الدعوة
          </a>
          <a
            href="#countdown"
            className="hover:text-[#9A7638] transition-colors whitespace-nowrap shrink-0"
          >
            العداد التنازلي
          </a>
          <a
            href="#venue"
            className="hover:text-[#9A7638] transition-colors whitespace-nowrap shrink-0"
          >
            موقع القاعة
          </a>
          <a
            href="#notes"
            className="hover:text-[#9A7638] transition-colors whitespace-nowrap shrink-0"
          >
            إرشادات الحضور
          </a>
        </nav>

        {/* Zone 3: Primary Action - Share */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#B89455] to-[#997335] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>مشاركة الدعوة</span>
          </button>
        </div>
      </div>
    </header>
  );
}
