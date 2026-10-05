"use client"

import { useState } from "react"
import { Check, Copy, Heart } from "lucide-react"

const providers = [
  { name: "فودافون كاش", short: "V", tone: "vodafone" },
  { name: "أورنج كاش", short: "orange", tone: "orange" },
  { name: "اتصالات كاش", short: "e&", tone: "etisalat" },
  { name: "WE Pay", short: "we", tone: "we" },
  { name: "InstaPay", short: "IP", tone: "instapay" },
]

export default function Home() {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)
  const phone = "01064924628"

  function copyNumber() {
    navigator.clipboard?.writeText(phone)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f7f7] px-4 py-8 text-[#252525] sm:px-6 sm:py-12">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl items-center justify-center">
        <div className="w-full rounded-2xl border border-[#e9e9e9] bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.07)] sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-[#fff0f0] text-[#e30613]"><Heart className="size-7 fill-current" aria-hidden="true" /></div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">ساهم معانا</h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#777] sm:text-base">
              مساهمتك البسيطة بتساعدنا نكمل ونقدم تأثير أكبر. شكرًا لدعمك وثقتك.
            </p>
          </div>

          <div className="mt-8 rounded-xl bg-[#e30613] p-5 text-white sm:p-6">
            <h2 className="text-center text-lg font-bold">اختار طريقة التحويل المناسبة ليك</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {providers.map((provider) => (
                <div key={provider.name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl bg-white/15 px-2 text-center">
                  <div className={`provider-logo ${provider.tone}`} aria-label={`شعار ${provider.name}`}>{provider.short}</div>
                  <span className="text-[11px] font-semibold leading-4">{provider.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#ededed] bg-[#fafafa] p-5 text-center">
            <p className="font-bold">رقم المساهمة</p>
            <p className="mt-1 text-sm leading-6 text-[#777]">اضغط على الزر لإظهار الرقم والتحويل بسهولة.</p>
            {!revealed ? (
              <button onClick={() => setRevealed(true)} className="mt-5 w-full rounded-lg bg-[#e30613] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c9000c] focus:outline-none focus:ring-4 focus:ring-[#ffd4d6]">
                إظهار رقم التحويل
              </button>
            ) : (
              <div className="mt-5 flex items-center justify-between gap-3 rounded-lg border border-[#f0c8ca] bg-white p-3">
                <strong dir="ltr" className="text-xl tracking-wider text-[#e30613] sm:text-2xl">{phone}</strong>
                <button onClick={copyNumber} aria-label="نسخ رقم المساهمة" className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#fff0f0] text-[#e30613] transition hover:bg-[#ffe2e3]">
                  {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                </button>
              </div>
            )}
            <p className="mt-4 text-xs text-[#999]">ربنا يكرمك، دعمك بيفرق معانا جدًا.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
