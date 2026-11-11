import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F8F5EE',
};

export const metadata: Metadata = {
  title: 'Moataz ❤️ Bayan | Wedding Invitation | 19 Nov 2026',
  description: 'يسرنا دعوتكم لحضور حفل زفاف معتز خالد أبو داري & بيان فيصل ملوحي يوم الخميس 19-11-2026 في قاعات النعمان. أهلاً وسهلاً بكم.',
  openGraph: {
    title: 'Moataz ❤️ Bayan 💍✨',
    description: 'يتشرف أبناء المرحوم خالد سليم أبو داري & والد العروس فيصل ملوحي بدعوتكم لحضور حفل زفاف معتز & بيان في قاعات النعمان',
    type: 'website',
    locale: 'ar_JO',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_2.22.28_PM_c19e05c2.jpeg',
        width: 1200,
        height: 800,
        alt: 'Moataz ❤️ Bayan Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moataz ❤️ Bayan 💍✨',
    description: 'يتشرف أبناء المرحوم خالد سليم أبو داري & والد العروس فيصل ملوحي بدعوتكم لحضور حفل زفاف معتز & بيان في قاعات النعمان',
    images: ['/assets/aistudio/WhatsApp_Image_2026-11-10_at_2.22.28_PM_c19e05c2.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="bg-[#F8F5EE] text-[#3A332C] antialiased selection:bg-[#E9D9B8] selection:text-[#5B4219]">
        {children}
      </body>
    </html>
  );
}
