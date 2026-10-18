import Script from "next/script"

/**
 * GA4 and/or Google Ads tag. Nothing loads unless an ID is configured, so
 * local development stays tracker-free.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const tagId = gaId ?? adsId

  if (!tagId) return null

  const config = [
    gaId ? `gtag('config', '${gaId}');` : "",
    adsId ? `gtag('config', '${adsId}');` : "",
  ]
    .filter(Boolean)
    .join("")

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${config}`}
      </Script>
    </>
  )
}
