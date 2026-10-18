import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { ConversionLink } from "@/components/site/conversion-link"
import { site } from "@/lib/site"

function ContactRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 last:border-b-0 sm:px-[22px]">
      <dt className="font-mono text-[9px] tracking-[1.2px] text-dim">
        {label}
      </dt>
      <dd className="text-right text-[12.5px] text-white">
        {href ? (
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

export function Contact() {
  return (
    <section
      aria-label="Contact"
      id="contact"
      className="relative w-full overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:px-16 lg:pt-28 lg:pb-[72px]"
    >
      <div className="glow-pulse pointer-events-none absolute top-[-260px] left-1/2 h-[820px] w-[820px] -translate-x-1/4 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#FF6A0D33_0%,#A78BFA12_55%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1312px] flex-col gap-14">
        <p
          data-reveal
          className="font-mono text-[10px] tracking-[1.6px] text-brand"
        >
          CONTACT · OPEN TO CONTRACT
        </p>

        <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_440px] xl:items-start xl:gap-16">
          <div className="flex flex-col items-start gap-8">
            <h2
              data-reveal
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              className="max-w-[760px] text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.04] font-medium tracking-[-0.032em] text-white"
            >
              Let&apos;s build something that holds.
            </h2>

            <p
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              className="max-w-[520px] text-[16px] leading-[26px] text-body"
            >
              If you need a site, an ordering flow, or the pipeline that keeps
              either one alive — I&apos;m one email away. Replies within a day,
              Jakarta time.
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              <ConversionLink
                href={`mailto:${site.email}`}
                event="generate_lead"
                label="email_click"
                className="group flex items-center gap-2.5 rounded-full bg-white px-6 py-4 text-[15px] font-medium text-ink transition-[background-color,scale] duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97]"
              >
                {site.email}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </ConversionLink>
            </div>
          </div>

          <div
            data-reveal="scale"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            className="w-full overflow-hidden rounded-[20px] border border-line bg-surface"
          >
            <div className="flex items-center justify-between gap-4 px-[22px] py-[18px]">
              <p className="font-mono text-[9px] tracking-[1.4px] text-dim">
                DIRECT LINES
              </p>
              <p className="flex items-center gap-1.5">
                <span className="pulse-dot size-[5px] rounded-full bg-mint" />
                <span className="font-mono text-[8px] tracking-[1px] text-mint">
                  AVAILABLE
                </span>
              </p>
            </div>

            <dl className="flex flex-col">
              <ContactRow
                label="EMAIL"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactRow
                label="LINKEDIN"
                value="linkedin.com/in/lorddsans"
                href={site.linkedin}
                external
              />
              <ContactRow
                label="PHONE"
                value={site.phone}
                href={`tel:${site.phoneHref}`}
              />
              <ContactRow label="BASED IN" value="Jakarta Timur, ID · GMT+7" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer data-reveal="fade" className="w-full border-t border-line">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16 lg:py-[26px]">
        <Link
          href="/"
          className="flex w-fit items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span className="text-[15px] font-semibold tracking-[-0.3px] text-white">
            alfito.
          </span>
          <span className="font-mono text-[9px] tracking-[1px] text-dim">
            / full-stack engineer
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 text-[12px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="py-1.5 text-[12px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Email
          </a>
          <a
            href={`mailto:${site.email}?subject=CV%20request`}
            className="py-1.5 text-[12px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Request CV
          </a>
        </div>

        <p className="font-mono text-[9px] tracking-[0.8px] text-dim">
          © 2026 Muhamad Alfito Santosa
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-2 px-6 pb-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16 lg:pb-[26px]">
        <p className="font-mono text-[9px] tracking-[1px] text-dim">
          BUILT WITH REACT, GO &amp; DOCKER · DEPLOYED ON A VPS
        </p>
        <p className="font-mono text-[9px] tracking-[1px] text-dim">
          JAKARTA · GMT+7
        </p>
      </div>
    </footer>
  )
}
