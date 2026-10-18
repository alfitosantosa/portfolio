import { ArrowUpRight, Check, MessageCircle } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { site } from "@/lib/site"

const receiptRows = [
  { item: "Nasi goreng ×2", price: "48.000" },
  { item: "Es teh ×2", price: "16.000" },
  { item: "Kerupuk", price: "8.000" },
]

function OrderingArt() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[380px] w-full shrink-0 overflow-hidden bg-[#141110] transition-transform duration-700 group-hover:scale-[1.015] sm:h-[420px] xl:h-[440px] xl:w-[620px]"
    >
      <div className="absolute -top-4 -left-20 h-[520px] w-[640px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#FF6A0D66_0%,#FF6A0D00_100%)]" />
      <div className="absolute inset-y-0 left-[10%] w-px bg-[#2A2420]" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-[#2A2420]" />
      <div className="absolute top-[14%] left-0 h-px w-full bg-[#2A2420]" />
      <div className="absolute bottom-[14%] left-0 h-px w-full bg-[#2A2420]" />

      <div className="absolute top-8 left-1/2 w-[260px] -translate-x-1/2 -rotate-[5deg] rounded-[16px] bg-[#F7F4EE] p-5 sm:w-[300px] sm:p-[22px] xl:top-[58px] xl:left-[150px] xl:translate-x-0">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[1.6px] text-[#8A8378]">
              SANTOSA
            </span>
            <span className="font-mono text-[9px] text-[#8A8378]">#0412</span>
          </div>

          <div className="h-px w-full bg-[#DAD4C8]" />

          {receiptRows.map((row) => (
            <div
              key={row.item}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-[11px] text-[#3A3630]">{row.item}</span>
              <span className="font-mono text-[10px] text-[#3A3630]">
                {row.price}
              </span>
            </div>
          ))}

          <div className="h-px w-full bg-[#DAD4C8]" />

          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#16181A]">
              Total
            </span>
            <span className="font-mono text-[12px] text-[#16181A]">
              Rp 72.000
            </span>
          </div>

          <div className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#16181A] py-[9px]">
            <Check className="size-[11px] text-mint" />
            <span className="font-mono text-[8px] tracking-[1px] text-mint">
              PAID VIA MIDTRANS
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-3 hidden items-center gap-[7px] rounded-full border border-line-strong bg-surface px-3 py-2 sm:right-4 sm:flex">
        <span className="pulse-dot-brand size-[5px] rounded-full bg-brand" />
        <span className="font-mono text-[8px] tracking-[1px] text-body">
          LIVE · 12K ORDERS/MO
        </span>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-3.5 py-2.5">
        <MessageCircle className="size-[13px] text-mint" />
        <span className="text-[11px] text-body">WhatsApp bot · 24/7</span>
      </div>
    </div>
  )
}

function CorporateArt() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[220px] w-full shrink-0 overflow-hidden bg-[#141122] transition-transform duration-700 group-hover:scale-[1.02]"
    >
      <div className="absolute -top-12 -left-10 h-[340px] w-[420px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#A78BFA55_0%,#A78BFA00_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[360px] overflow-hidden rounded-[10px] border border-[#2E2743] bg-[#1B1728]">
          <div className="flex h-[22px] items-center gap-1.5 bg-[#241E35] px-3">
            <span className="size-1 rounded-full bg-[#6F658A]" />
            <span className="size-1 rounded-full bg-[#6F658A]" />
          </div>
          <div className="p-5">
            <p className="text-[20px] font-medium tracking-[-0.6px] text-[#F7F4EE]">
              Build what lasts.
            </p>
            <p className="mt-1.5 text-[10px] text-[#9D93B8]">
              A studio site, shipped in nine days.
            </p>
            <div className="mt-3 h-[18px] w-[74px] rounded-[9px] bg-[#F7F4EE]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((card) => (
                <span
                  key={card}
                  className="h-[14px] rounded-[4px] bg-[#2E2743]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full border border-[#2E2743] bg-surface px-2.5 py-1.5">
        <span className="font-mono text-[8px] tracking-[1px] text-dim">
          LCP
        </span>
        <span className="font-mono text-[10px] text-mint">0.9s</span>
      </div>
    </div>
  )
}

const pipelineSteps = ["BUILD", "TEST", "SCAN", "SHIP"]

function PipelineArt() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[220px] w-full shrink-0 overflow-hidden bg-[#0E1517] transition-transform duration-700 group-hover:scale-[1.02]"
    >
      <div className="absolute -top-12 -left-10 h-[340px] w-[420px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#8FB4E055_0%,#8FB4E000_100%)]" />

      <div className="absolute inset-0 flex flex-col justify-center gap-4 px-6">
        <p className="font-mono text-[10px] text-[#7E96A2]">
          main → production
        </p>

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {pipelineSteps.map((step) => (
            <div
              key={step}
              className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-[#273A42] bg-[#142025]"
            >
              <Check className="size-2.5 shrink-0 text-mint" />
              <span className="font-mono text-[8px] tracking-[0.8px] text-[#9FB6C2]">
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-[#273A42] bg-surface px-3 py-2">
          <span className="size-[5px] rounded-full bg-mint" />
          <span className="font-mono text-[9px] text-body">
            128 passed · 0 failed · 42s
          </span>
        </div>
      </div>
    </div>
  )
}

function CardBody({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-2.5 px-6 pt-[22px] pb-[26px]">
      <p className="font-mono text-[9px] tracking-[1.4px] text-dim">
        {eyebrow}
      </p>
      <h3 className="text-[22px] leading-[1.15] font-medium tracking-[-0.5px] text-white">
        {title}
      </h3>
      <p className="text-[13px] leading-[21px] text-body">{description}</p>
    </div>
  )
}

export function Work() {
  return (
    <section
      aria-label="Selected work"
      id="work"
      className="w-full px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-8">
        <SectionHeading
          eyebrow="SELECTED WORK · 2023 — 2026"
          title="Selected work"
          action={
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-[13px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              All case studies
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-dim transition-colors group-hover:text-brand"
              />
            </a>
          }
        />

        <article
          data-reveal="scale"
          style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
          className="group flex w-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface xl:flex-row"
        >
          <OrderingArt />

          <div className="flex flex-1 flex-col justify-between gap-8 p-6 sm:p-8 lg:p-9">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[9px] tracking-[1.4px] text-dim">
                PRODUCT · PAYMENTS · AUTOMATION
              </p>
              <span className="font-mono text-[10px] text-dim">2025</span>
            </div>

            <div className="flex flex-col gap-3.5">
              <h3 className="max-w-[520px] text-[26px] leading-[1.15] font-medium tracking-[-0.7px] text-white sm:text-[32px] sm:leading-[37px] sm:tracking-[-0.9px]">
                Ordering, payments and WhatsApp — one flow.
              </h3>
              <p className="max-w-[560px] text-[14px] leading-[23px] text-body">
                A restaurant platform with Midtrans checkout, a live kitchen
                board and an Evolution API bot that confirms orders without a
                human. Next.js in front, Go Fiber and Postgres behind.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <dl className="grid w-full grid-cols-3 gap-4 sm:gap-6">
                {[
                  { key: "PAYMENTS", value: "Midtrans · Xendit" },
                  { key: "STACK", value: "Next.js · Go · Postgres" },
                  { key: "ROLE", value: "Design + build" },
                ].map((metric) => (
                  <div key={metric.key} className="flex flex-col gap-[5px]">
                    <dt className="font-mono text-[9px] tracking-[1.2px] text-dim">
                      {metric.key}
                    </dt>
                    <dd className="text-[12px] leading-[17px] text-white">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="h-px w-full bg-line" />

              <a
                href={site.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <span className="text-[13px] font-medium text-white">
                  Read the case study
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-[15px] text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </article>

        <div className="grid w-full gap-4 md:grid-cols-2">
          <article
            data-reveal="scale"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface"
          >
            <CorporateArt />
            <CardBody
              eyebrow="WEBSITE · 2024"
              title="A corporate site that sells the work"
              description="Next.js marketing site with a CMS the client actually uses, plus the SEO and Lighthouse work that got Core Web Vitals green."
            />
          </article>

          <article
            data-reveal="scale"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface"
          >
            <PipelineArt />
            <CardBody
              eyebrow="INFRASTRUCTURE · 2025"
              title="From commit to production, unattended"
              description="Jenkins pipelines, Playwright and Pytest suites, and Docker releases that ship with no maintenance window."
            />
          </article>
        </div>
      </div>
    </section>
  )
}
