"use client"

import { useState } from "react"
import {
  ArrowUpLeft,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Share2,
  Youtube,
} from "lucide-react"

const socialLinks = [
  { label: "فيسبوك", description: "تابع آخر أخبارنا وأنشطتنا", icon: Facebook, href: "https://www.facebook.com/", tone: "bg-[#eaf2ff] text-[#1877f2]" },
  { label: "إنستجرام", description: "شوف لحظاتنا وقصصنا اليومية", icon: Instagram, href: "https://www.instagram.com/", tone: "bg-[#fff0f5] text-[#d62976]" },
  { label: "واتساب", description: "تواصل معانا بشكل مباشر", icon: MessageCircle, href: "https://wa.me/201064924628", tone: "bg-[#e9fbf0] text-[#1fa855]" },
  { label: "يوتيوب", description: "شاهد قصص وتجارب من مجتمعنا", icon: Youtube, href: "https://www.youtube.com/", tone: "bg-[#fff0f0] text-[#ff0000]" },
  { label: "لينكدإن", description: "اعرف أكتر عن مبادراتنا", icon: Linkedin, href: "https://www.linkedin.com/", tone: "bg-[#eaf6ff] text-[#0a66c2]" },
  { label: "موقعنا الإلكتروني", description: "كل التفاصيل في مكان واحد", icon: Globe, href: "https://example.com/", tone: "bg-[#f0edff] text-[#6347d8]" },
]

export default function Home() {
  const [shared, setShared] = useState(false)

  async function sharePage() {
    if (navigator.share) await navigator.share({ title: "جمعيتنا", text: "كل روابط جمعيتنا في مكان واحد", url: window.location.href })
    else {
      await navigator.clipboard?.writeText(window.location.href)
      setShared(true)
      window.setTimeout(() => setShared(false), 1800)
    }
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f5f7] text-[#111214]">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-7 pt-5 sm:px-5">
        <header className="flex items-center justify-between px-1">
          <button aria-label="فتح القائمة" className="flex size-11 items-center justify-center rounded-full bg-white text-[#111214] shadow-sm transition hover:scale-105"><Menu aria-hidden="true" /></button>
          <button onClick={sharePage} aria-label="مشاركة الصفحة" className="flex size-11 items-center justify-center rounded-full bg-white text-[#111214] shadow-sm transition hover:scale-105"><Share2 aria-hidden="true" /></button>
        </header>

        <section className="flex flex-col items-center pt-7 text-center">
          <div className="relative flex size-24 items-center justify-center rounded-[30px] bg-[#e30613] text-3xl font-black text-white shadow-[0_12px_28px_rgba(227,6,19,.24)]">
            ج
            <span className="absolute -bottom-2 -left-2 flex size-8 items-center justify-center rounded-full border-4 border-[#f4f5f7] bg-white text-[#e30613]"><HeartIcon /></span>
          </div>
          <h1 className="mt-5 text-[25px] font-extrabold tracking-tight">جمعيتنا</h1>
          <p className="mt-1 max-w-[285px] text-[14px] leading-6 text-[#8c9199]">مع بعض نقدر نعمل فرق حقيقي ونوصل الخير لكل مكان</p>
        </section>

        <section className="mt-7 rounded-[25px] bg-white p-4 shadow-[0_10px_35px_rgba(17,18,20,.06)]">
          <div className="flex items-center justify-between px-2 pb-3">
            <div><h2 className="text-[16px] font-bold">روابطنا</h2><p className="mt-0.5 text-[12px] text-[#a2a6ad]">تابعنا وكن جزءًا من مجتمعنا</p></div>
            <span className="rounded-full bg-[#fff0f0] px-3 py-1 text-[11px] font-bold text-[#e30613]">Social links</span>
          </div>
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, description, icon: Icon, href, tone }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex min-h-[68px] items-center gap-3 rounded-2xl border border-[#f0f1f3] bg-[#fcfcfd] px-3 transition hover:-translate-y-0.5 hover:border-[#e5e6e8] hover:shadow-sm">
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-[14px] ${tone}`}><Icon aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><strong className="block text-[14px] font-bold">{label}</strong><small className="mt-0.5 block truncate text-[11px] text-[#9b9fa6]">{description}</small></span>
                <ArrowUpLeft aria-hidden="true" className="text-[#b7bbc1] transition group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </section>

        <a href="tel:01064924628" className="mt-4 flex items-center gap-3 rounded-2xl bg-[#e30613] px-4 py-3.5 text-white shadow-[0_10px_24px_rgba(227,6,19,.2)] transition hover:bg-[#c9000c]">
          <span className="flex size-10 items-center justify-center rounded-xl bg-white/15"><Phone aria-hidden="true" /></span><span className="flex-1"><strong className="block text-[14px]">تواصل معانا</strong><small dir="ltr" className="mt-0.5 block text-right text-[12px] text-white/75">01064924628</small></span><ArrowUpLeft aria-hidden="true" />
        </a>
        <p className="mt-auto pt-6 text-center text-[11px] text-[#b0b4ba]">{shared ? "تم نسخ الرابط" : "صُنع بحب لخدمة مجتمعنا"}</p>
      </div>
    </main>
  )
}

function HeartIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true"><path d="M12 21s-7-4.35-9.33-8.28C.7 9.41 2.18 5 6.25 5A6.1 6.1 0 0 1 12 8.04 6.1 6.1 0 0 1 17.75 5c4.07 0 5.55 4.41 3.58 7.72C19 16.65 12 21 12 21Z" /></svg>
}
