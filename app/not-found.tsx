import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#F8F5EE]">
      <h2 className="text-2xl font-bold font-ruqaa text-[#3A2F22]">الصفحة غير موجودة</h2>
      <p className="mt-2 text-sm text-[#736453]">نعتذر، لم نتمكن من العثور على الصفحة المطلوبة.</p>
      <Link
        href="/"
        className="mt-4 rounded-xl bg-gradient-to-r from-[#B89455] to-[#997335] px-5 py-2 text-xs font-semibold text-white shadow-xs"
      >
        العودة إلى بطاقة الدعوة
      </Link>
    </div>
  );
}
