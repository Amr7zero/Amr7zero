import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ساهم معانا | دعمك بيصنع فرق",
  description: "ساهم معانا بسهولة من خلال طرق الدفع المتاحة.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
