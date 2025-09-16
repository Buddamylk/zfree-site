import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zaccaifree.com"),
  title: "Zaccai Free (ZaccaiFree) — Community Strategy & Consulting",
  description: "Consultant helping cities, nonprofits, and housing communities move from vision to outcomes.",
  alternates: { canonical: "/" },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zaccai Free",
              alternateName: "ZaccaiFree",
              url: "https://www.zaccaifree.com",
              jobTitle: "Community Strategist & Consultant",
              sameAs: ["https://www.linkedin.com/in/zaccai/"],
            }),
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
