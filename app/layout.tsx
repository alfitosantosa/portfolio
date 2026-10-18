import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { Analytics } from "@/components/site/analytics"
import { MotionProvider } from "@/components/site/motion"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "Muhamad Alfito Santosa",
    "full-stack engineer",
    "software engineer Jakarta",
    "React developer",
    "Next.js developer",
    "Golang developer",
    "Go Fiber",
    "PostgreSQL",
    "Midtrans integration",
    "Xendit integration",
    "Docker",
    "CI/CD",
    "Santosa Tech Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", inter.variable, jetbrainsMono.variable)}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <MotionProvider />
        <Analytics />
      </body>
    </html>
  )
}
