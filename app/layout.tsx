import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zaccaifree.com"),
  title: "Zaccai Free (ZaccaiFree) — Community Strategy & Consulting",
  description: "Consultant helping cities, nonprofits, and housing communities move from vision to outcomes.",
  keywords:
    "community strategy, consulting, leadership development, emotional intelligence, stress relief, nonprofit consulting, city planning, housing communities",
  authors: [{ name: "Zaccai Free" }],
  creator: "Zaccai Free",
  publisher: "Zaccai Free",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zaccaifree.com",
    title: "Zaccai Free — Community Strategy & Consulting",
    description: "Consultant helping cities, nonprofits, and housing communities move from vision to outcomes.",
    siteName: "Zaccai Free Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaccai Free — Community Strategy & Consulting",
    description: "Consultant helping cities, nonprofits, and housing communities move from vision to outcomes.",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Zaccai Free Blog" }],
    },
  },
  verification: {
    google: "google-site-verification-code-here", // Replace with actual verification code
  },
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
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
