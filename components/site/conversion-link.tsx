"use client"

import type { ReactNode } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

export function ConversionLink({
  href,
  event,
  label,
  className,
  children,
}: {
  href: string
  event: "generate_lead" | "cta_click"
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.gtag?.("event", event, {
          event_category: "engagement",
          event_label: label,
        })

        if (event === "generate_lead" && adsConversionLabel) {
          window.gtag?.("event", "conversion", {
            send_to: adsConversionLabel,
          })
        }
      }}
    >
      {children}
    </a>
  )
}
