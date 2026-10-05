"use client"

import { useState } from "react"
import { ArrowLeft, Check, Copy, Heart, ShieldCheck, Sparkles } from "lucide-react"

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
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fffaf9] text-[#241b1c]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-5 py-12 sm:px-8">
        <div className="pointer-events-none absolute right-[-7rem] top-[-8rem] size-72 rounded-full bg-[#ffe2df] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] size-80 rounded-full bg-[#fff0df] blur-3xl" />

        <div className="relative grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4d5d1] bg-white/80 px-4 py-2 text-sm font-semibold text-[#c5262d] shadow-sm">
              <Sparkles className="size-4" aria-hidden="true" />
              دعمك بيصنع فرق حقيقي
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-[1.15] tracking-tight sm:text-6xl">
              ساهم معانا في <span className="text-[#d8242f]">الخير</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-[#76686a] sm:text-lg lg:mx-0">
              كل مساهمة، مهما كانت بسيطة، بتساعدنا نكمل ونوصل تأثيرنا لناس أكتر. شكرًا إنك جزء من الحكاية.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium text-[#76686a] lg:justify-start">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#fff0ee] text-[#d8242f]"><Heart className="size-4 fill-current" aria-hidden="true" /></span>
              آمن، سريع، وبدون أي تعقيد
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#d8242f] p-1 shadow-[0_24px_70px_-24px_rgba(216,36,47,0.65)]">
              <div className="absolute -left-14 -top-14 size-40 rounded-full border-[18px] border-white/10" />
              <div className="absolute -bottom-24 -right-16 size-56 rounded-full border-[22px] border-white/10" />
              <div className="relative rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-[#e72e38] to-[#bf1724] px-6 py-7 text-white sm:px-9 sm:py-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/75">طرق المساهمة المتاحة</p>
                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">اختار الطريقة اللي تناسبك</h2>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm"><Heart className="size-6 fill-white" aria-hidden="true" /></div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {providers.map((provider) => (
                    <div key={provider.name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-2 text-center backdrop-blur-sm transition-transform hover:-translate-y-1 hover:bg-white/15">
                      <div className={`provider-logo ${provider.tone}`} aria-label={`شعار ${provider.name}`}>{provider.short}</div>
                      <span className="text-[11px] font-bold leading-4 text-white/85">{provider.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-white p-5 text-[#241b1c] shadow-xl sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0ee] text-[#d8242f]"><ShieldCheck className="size-5" aria-hidden="true" /></div>
                    <div>
                      <p className="font-extrabold">ساهم بخطوة بسيطة</p>
                      <p className="mt-1 text-sm leading-6 text-[#76686a]">اضغط على الزر عشان يظهر لك رقم التحويل.</p>
                    </div>
                  </div>
                  {!revealed ? (
                    <button onClick={() => setRevealed(true)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d8242f] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-4 focus:ring-[#f7c6c8]">
                      إظهار رقم المساهمة <ArrowLeft className="size-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <div className="mt-5 rounded-xl border border-[#f4d5d1] bg-[#fff8f7] p-4">
                      <p className="text-xs font-bold text-[#a28e90]">رقم التحويل</p>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <strong dir="ltr" className="text-2xl font-black tracking-wider text-[#d8242f]">{phone}</strong>
                        <button onClick={copyNumber} aria-label="نسخ رقم المساهمة" className="flex size-10 items-center justify-center rounded-lg bg-white text-[#d8242f] shadow-sm ring-1 ring-[#f4d5d1] transition hover:bg-[#fff0ee]">
                          {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                        </button>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-[#76686a]">بعد التحويل، احتفظ بالإيصال. وجودك معانا هو أكبر دعم.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-[#a28e90]">جميع طرق الدفع آمنة ومُعتمدة</p>
          </div>
        </div>
      </section>
    </main>
  )
}
