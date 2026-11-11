'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Bell, Check } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

// Target: November 19, 2026 at 20:30 (8:30 PM local UTC+3)
const TARGET_TIMESTAMP = new Date('2026-11-19T20:30:00+03:00').getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [copiedCalendar, setCopiedCalendar] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const distance = TARGET_TIMESTAMP - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  // Google Calendar link builder
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'حفل زفاف معتز وبيان 💍'
  )}&dates=20261119T173000Z/20261119T213000Z&details=${encodeURIComponent(
    'يتشرف أبناء المرحوم خالد سليم أبو داري ووالد العروس فيصل ملوحي بدعوتكم لحضور حفل زفاف شقيقهم معتز وكريمته بيان في قاعات النعمان.'
  )}&location=${encodeURIComponent('قاعات النعمان للأفراح والمناسبات')}`;

  // Download .ics for Apple / Outlook
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Moataz and Bayan Wedding//AR',
      'BEGIN:VEVENT',
      'UID:wedding-moataz-bayan-2026@alnuuman',
      'DTSTAMP:20261111T120000Z',
      'DTSTART:20261119T173000Z',
      'DTEND:20261119T213000Z',
      'SUMMARY:حفل زفاف معتز وبيان 💍',
      'DESCRIPTION:يتشرف أبناء المرحوم خالد سليم أبو داري ووالد العروس فيصل ملوحي بدعوتكم لحضور حفل زفاف شقيقهم معتز وكريمته بيان.',
      'LOCATION:قاعات النعمان للأفراح والمناسبات',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'زفاف_معتز_وبيان.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedCalendar(true);
    setTimeout(() => setCopiedCalendar(false), 3000);
  };

  return (
    <section id="countdown" className="py-12 px-4">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-cairo text-xs font-semibold tracking-wider text-[#A38349] uppercase">
            نترقب الموعد بكل شغف
          </span>
          <h2 className="mt-2 font-ruqaa text-3xl sm:text-4xl font-bold text-[#3B3024]">
            العداد التنازلي لليلة العمر
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#736350] max-w-md mx-auto">
            نعد اللحظات والساعات حتى نجتمع بكم لننسج معاً أجمل ذكريات الفرح
          </p>
        </div>

        {/* Countdown Digits Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-4 gap-2.5 sm:gap-4">
          {/* Days */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-6 shadow-sm border border-[#E9DAC1]">
            <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#3B3024] tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <span className="mt-1 block font-cairo text-[11px] sm:text-xs font-semibold text-[#8C7451]">
              يوم
            </span>
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#DFCA9C] to-[#B99556]" />
          </div>

          {/* Hours */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-6 shadow-sm border border-[#E9DAC1]">
            <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#3B3024] tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="mt-1 block font-cairo text-[11px] sm:text-xs font-semibold text-[#8C7451]">
              ساعة
            </span>
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#DFCA9C] to-[#B99556]" />
          </div>

          {/* Minutes */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-6 shadow-sm border border-[#E9DAC1]">
            <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#3B3024] tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="mt-1 block font-cairo text-[11px] sm:text-xs font-semibold text-[#8C7451]">
              دقيقة
            </span>
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#DFCA9C] to-[#B99556]" />
          </div>

          {/* Seconds */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-6 shadow-sm border border-[#E9DAC1]">
            <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold text-[#9E7C3E] tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <span className="mt-1 block font-cairo text-[11px] sm:text-xs font-semibold text-[#8C7451]">
              ثانية
            </span>
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#DFCA9C] to-[#B99556]" />
          </div>
        </div>

        {/* Calendar Quick Save Options */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-[#5C4933] border border-[#DFCBB0] hover:bg-[#F8F2E8] hover:border-[#BF9E6A] shadow-2xs transition-all"
          >
            <Calendar className="h-4 w-4 text-[#A8864C]" />
            <span>إضافة إلى Google Calendar</span>
          </a>

          <button
            onClick={handleDownloadICS}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-[#5C4933] border border-[#DFCBB0] hover:bg-[#F8F2E8] hover:border-[#BF9E6A] shadow-2xs transition-all"
          >
            {copiedCalendar ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-700">تم حفظ ملف التقويم!</span>
              </>
            ) : (
              <>
                <Bell className="h-4 w-4 text-[#A8864C]" />
                <span>تحميل ملف التقويم (Apple / Outlook)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
