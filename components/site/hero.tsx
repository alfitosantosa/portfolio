import { ArrowUpRight, Download } from "lucide-react"

import { ConversionLink } from "@/components/site/conversion-link"
import { LiveLatency, LiveUptime } from "@/components/site/live-metrics"
import { TerminalLog } from "@/components/site/terminal-log"
import { site } from "@/lib/site"

function TerminalVisual() {
  return (
    <div
      aria-hidden="true"
      className="rise-in relative mx-auto w-full max-w-[540px] select-none"
      style={{ animationDelay: "180ms" }}
    >
      <div className="glow-pulse pointer-events-none absolute top-0 left-1/2 h-[420px] w-full max-w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#FF6A0D3D_0%,#A78BFA14_55%,transparent_100%)]" />

      <div className="relative overflow-hidden rounded-[20px] border border-line-strong bg-surface">
        <div className="flex items-center justify-between gap-4 px-[18px] py-[14px]">
          <div className="flex items-center gap-[7px]">
            <span className="size-[9px] rounded-full bg-[#FF5F57]" />
            <span className="size-[9px] rounded-full bg-[#FEBC2E]" />
            <span className="size-[9px] rounded-full bg-[#28C840]" />
          </div>
          <span className="truncate font-mono text-[11px] text-dim">
            ~/santosa-tech — deploy.sh
          </span>
        </div>

        <div className="h-px bg-line-strong" />

        <TerminalLog />

        <div className="flex items-center justify-between gap-3 bg-raised px-[18px] py-3">
          <div className="flex items-center gap-2">
            <span className="pulse-dot size-1.5 rounded-full bg-[#28C840]" />
            <span className="font-mono text-[10px] text-dim">
              all systems operational
            </span>
          </div>
          <span className="font-mono text-[10px] text-dim">
            sin-1 · 12 services
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 md:contents">
        <div className="flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 md:absolute md:-top-3 md:right-0 md:mt-0">
          <LiveLatency />
        </div>

        <div className="flex w-fit items-center gap-3 rounded-[14px] border border-line-strong bg-surface px-4 py-3 md:absolute md:-bottom-6 md:-left-1.5">
          <LiveUptime />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full px-6 pt-8 pb-16 sm:px-10 sm:pt-9 lg:px-16 lg:pt-14 lg:pb-[88px]"
    >
      <div className="mx-auto grid w-full max-w-[1312px] items-center gap-12 xl:grid-cols-[minmax(0,660px)_minmax(0,1fr)] xl:gap-[72px]">
        <div className="flex max-w-[660px] flex-col items-start gap-[30px]">
          <p
            className="rise-in flex items-center gap-[9px] rounded-full border border-line bg-surface py-1.5 pr-3 pl-2.5"
            style={{ animationDelay: "40ms" }}
          >
            <span className="pulse-dot-brand size-1.5 rounded-full bg-brand" />
            <span className="font-mono text-[10px] tracking-[1.2px] text-body">
              OPEN TO CONTRACT · Q4 2026
            </span>
          </p>

          <h1
            id="hero-heading"
            style={{ animationDelay: "100ms" }}
            className="rise-in max-w-[660px] text-[clamp(2.5rem,7vw,4.625rem)] leading-[1.02] font-medium tracking-[-0.032em] text-white"
          >
            Interfaces that feel instant. Systems that stay up.
          </h1>

          <p
            className="rise-in max-w-[560px] text-[17px] leading-[1.65] text-body sm:text-[18px] sm:leading-[29px]"
            style={{ animationDelay: "180ms" }}
          >
            I&apos;m Muhamad Alfito Santosa — a full-stack engineer in Jakarta
            building React front ends and Go services that actually ship:
            payments, automation, and the infrastructure underneath.
          </p>

          <div
            className="rise-in flex flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <ConversionLink
              href="#work"
              event="cta_click"
              label="view_selected_work"
              className="group flex items-center gap-2 rounded-full bg-white px-[22px] py-[13px] text-[13.5px] font-medium text-ink transition-[background-color,scale] duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97]"
            >
              View selected work
              <ArrowUpRight
                aria-hidden="true"
                className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ConversionLink>

            <ConversionLink
              href={`mailto:${site.email}?subject=CV%20request`}
              event="generate_lead"
              label="request_cv"
              className="group flex items-center gap-2 rounded-full border border-line-strong px-[22px] py-[13px] text-[13.5px] font-medium text-white transition-[background-color,border-color,scale] duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97]"
            >
              Request CV
              <Download
                aria-hidden="true"
                className="size-[13px] transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </ConversionLink>
          </div>
        </div>

        <TerminalVisual />
      </div>
    </section>
  )
}
