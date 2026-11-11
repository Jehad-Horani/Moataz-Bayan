'use client';

import React, { useState } from 'react';
import { Copy, Check, MessageSquare, Share2, X } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const invitationMessage = `يسرنا ويسعدنا دعوتكم لحضور حفل زفاف الأحبة:
معتز & بيان 💍✨
وذلك بمشيئة الله تعالى يوم الخميس 19-11-2026 الساعة 8:30 مساءً
في قاعات النعمان للأفراح والمناسبات.

حضوركم شرف لنا ويسعد قلوبنا 🤍
رابط بطاقة الدعوة والعداد التنازلي والموقع:
${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(invitationMessage);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  // SVG QR Code pattern generator (procedural clean matrix)
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    currentUrl || 'https://ais-dev.europe-west2.run.app'
  )}&color=6B4F1D&bgcolor=FAF6EE`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E8DAC2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5E8] text-[#78644E] hover:bg-[#F0E4CE] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF5E8] text-[#9E7C3E] border border-[#DFCBB0]">
            <Share2 className="h-6 w-6" />
          </div>

          <h3 className="font-ruqaa text-2xl font-bold text-[#3B3024]">
            مشاركة بطاقة الدعوة
          </h3>
          <p className="mt-1 text-xs text-[#7A6C5C]">
            انشر بهجة وفرحة زفاف معتز وبيان مع الأهل والأصدقاء
          </p>
        </div>

        {/* QR Code */}
        <div className="my-5 flex flex-col items-center justify-center">
          <div className="rounded-2xl border border-[#E2D1B8] bg-[#FAF6EE] p-3 shadow-2xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrSvgUrl}
              alt="رمز QR للدعوة"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </div>
          <span className="mt-2 text-[11px] text-[#8C7D6B]">
            امسح الرمز لفتح بطاقة الدعوة على الهاتف
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleWhatsAppShare}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1EBE5D] transition-all cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>مشاركة نص الدعوة عبر واتساب</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D5BE97] bg-[#FAF7F2] py-3 text-xs sm:text-sm font-semibold text-[#5C4933] hover:bg-[#F3EAD9] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-700">تم نسخ نص الدعوة والرابط!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[#A8864C]" />
                <span>نسخ نص الدعوة الكامل والرابط</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
