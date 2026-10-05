"use client"

import { useState } from "react"
import { ArrowUpLeft, Menu, Phone, Share2 } from "lucide-react"

const brandLogo = "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons"

const socialLinks = [
  { label: "فيسبوك", description: "تابع آخر أخبار مبادرة أكسجين", logo: `${brandLogo}/facebook/default.svg`, href: "https://www.facebook.com/", tone: "bg-[#eaf2ff]" },
  { label: "إنستجرام", description: "شوف لحظاتنا وقصصنا اليومية", logo: `${brandLogo}/instagram/default.svg`, href: "https://www.instagram.com/", tone: "bg-[#fff0f5]" },
  { label: "واتساب", description: "تواصل معانا بشكل مباشر", logo: `${brandLogo}/whatsapp/default.svg`, href: "https://wa.me/201064924628", tone: "bg-[#e9fbf0]" },
  { label: "يوتيوب", description: "شاهد قصص وتجارب من مجتمعنا", logo: `${brandLogo}/youtube/default.svg`, href: "https://www.youtube.com/", tone: "bg-[#fff0f0]" },
  { label: "موقعنا الإلكتروني", description: "كل التفاصيل والأنشطة في مكان واحد", logo: `${brandLogo}/github/default.svg`, href: "https://github.com/Amrzer01/oxygen-links", tone: "bg-[#f1f5f9]" },
  { label: "البريد الإلكتروني", description: "راسلنا وكن جزءًا من التغيير", logo: `${brandLogo}/gmail/default.svg`, href: "mailto:oxygeninitiative.eg@gmail.com", tone: "bg-[#fff7e8]" },
]

const paymentMethods = [
  { label: "Vodafone Cash", className: "vodafone", logo: `${brandLogo}/vodafone/default.svg` },
  { label: "Orange Cash", className: "orange", logo: `${brandLogo}/orange/default.svg` },
  { label: "Etisalat Cash", className: "etisalat", logo: `${brandLogo}/etisalat/default.svg` },
  { label: "WE Pay", className: "we", logo: `${brandLogo}/we/default.svg` },
  { label: "InstaPay", className: "instapay", logo: `${brandLogo}/instapay/default.svg` },
]

export default function Home() {
  const [shared, setShared] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  async function sharePage() {
    if (navigator.share) await navigator.share({ title: "مبادرة أكسجين", text: "كل روابط مبادرة أكسجين في مكان واحد", url: window.location.href })
    else { await navigator.clipboard?.writeText(window.location.href); setShared(true); window.setTimeout(() => setShared(false), 1800) }
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col px-5 pb-8">
        <header className="flex items-center justify-between py-5">
          <button aria-label="فتح القائمة" className="icon-button"><Menu aria-hidden="true" /></button>
          <button onClick={sharePage} aria-label="مشاركة الصفحة" className="icon-button"><Share2 aria-hidden="true" /></button>
        </header>

        <section className="pb-8 pt-5 text-center">
          <div className="avatar-ring"><div className="avatar"><img src="https://raw.githubusercontent.com/Amrzer01/oxygen-links/master/logo.webp" alt="شعار مبادرة أكسجين" /></div></div>
          <h1 className="mt-4 text-[27px] font-extrabold tracking-tight">مبادرة أكسجين</h1>
          <p className="mx-auto mt-1 max-w-[320px] text-[14px] leading-7 text-[#64748b]">مع بعض نقدر نعمل فرق حقيقي ونوصل الخير لكل مكان</p>
        </section>

        <section className="flex flex-col gap-3">
          <section className="donation-card">
            <div className="flex items-center justify-between"><div><h2 className="text-[17px] font-extrabold">ساهم معانا</h2><p className="mt-1 text-[12px] text-[#64748b]">كل مساهمة بتصنع أثر حقيقي</p></div><span className="heart-badge">♥</span></div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">{paymentMethods.map((method) => <span key={method.label} title={method.label} className={`provider-logo ${method.className}`}><img src={method.logo} alt={method.label} /></span>)}</div>
            <button onClick={() => setShowPhone((value) => !value)} className="donation-button">{showPhone ? "01064924628" : "اضغط للمساهمة"}<ArrowUpLeft aria-hidden="true" /></button>
            <p className="mt-3 text-center text-[11px] leading-5 text-[#64748b]">مساهمتك، مهما كانت بسيطة، بتساعدنا نكمل ونوصل الخير لمستحقيه.</p>
          </section>
        </section>

        <section className="flex flex-col gap-3">
          {socialLinks.map(({ label, description, logo, href, tone }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="link-card group"><span className={`link-icon ${tone}`}><img src={logo} alt="" aria-hidden="true" /></span><span className="min-w-0 flex-1"><strong className="block text-[14px] font-bold">{label}</strong><small className="mt-0.5 block truncate text-[11px] text-[#94a3b8]">{description}</small></span><ArrowUpLeft aria-hidden="true" className="text-[#94a3b8] transition group-hover:-translate-x-1 group-hover:-translate-y-1" /></a>)}
        </section>

        <a href="tel:01064924628" className="contact-card"><span className="contact-icon"><Phone aria-hidden="true" /></span><span className="flex-1"><strong className="block text-[14px]">تواصل معانا</strong><small dir="ltr" className="mt-0.5 block text-right text-[12px] text-[#64748b]">01064924628</small></span><ArrowUpLeft aria-hidden="true" className="text-[#16a34a]" /></a>
        <p className="mt-auto pt-7 text-center text-[11px] text-[#94a3b8]">{shared ? "تم نسخ الرابط" : "مبادرة أكسجين — معًا نصنع أثرًا"}</p>
      </div>
    </main>
  )
}

