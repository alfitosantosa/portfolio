import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { site } from "@/lib/site"

const roles = [
  {
    period: "2023 — NOW",
    role: "Full Stack Engineer",
    company: "PT Santosa Tech Indonesia",
    summary:
      "Own the product surface end to end — Next.js interfaces, Go Fiber services, Midtrans and Xendit payments, and Docker deploys behind Nginx.",
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Software QA Engineer",
    company: "Brinks Indonesia",
    summary:
      "Built Jenkins pipelines and Playwright/Pytest suites, then containerised staging and production releases to cut rollout risk.",
    current: false,
  },
  {
    period: "2024",
    role: "IT Infrastructure Staff",
    company: "Brinks Indonesia",
    summary:
      "Level 1–2 support across Windows and Linux, Active Directory, network hardware and endpoint security for the Jakarta office.",
    current: false,
  },
  {
    period: "2023",
    role: "Full-stack Fellow",
    company: "Skilvul · MSIB",
    summary:
      "Two Kampus Merdeka cohorts: Next.js and Prisma products first, then 30+ wireframes turned into responsive interfaces.",
    current: false,
  },
]

export function Experience() {
  return (
    <section
      aria-label="Experience"
      id="experience"
      className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-9">
        <SectionHeading
          eyebrow="EXPERIENCE · 2023 — 2026"
          title="Where I've worked"
          action={
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-[13px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Full CV
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-dim transition-colors group-hover:text-brand"
              />
            </a>
          }
        />

        <ol className="flex w-full flex-col border-t border-line">
          {roles.map((item, index) => (
            <li
              key={`${item.period}-${item.role}`}
              data-reveal
              style={
                { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
              }
              className="border-b border-line"
            >
              <article className="grid gap-3 py-6 transition-colors duration-300 hover:bg-surface/30 lg:grid-cols-[110px_300px_minmax(0,1fr)_auto] lg:items-start lg:gap-9">
                <div className="flex items-center justify-between gap-4 lg:contents">
                  <p
                    className={`font-mono text-[10px] tracking-[1.2px] lg:col-start-1 lg:row-start-1 ${
                      item.current ? "text-brand" : "text-dim"
                    }`}
                  >
                    {item.period}
                  </p>

                  {item.current ? (
                    <span className="flex w-fit items-center gap-1.5 rounded-full border border-[#3A2A1C] bg-[#171310] px-2.5 py-1.5 lg:col-start-4 lg:row-start-1 lg:justify-self-end">
                      <span className="pulse-dot-brand size-[5px] rounded-full bg-brand" />
                      <span className="font-mono text-[8px] tracking-[1px] text-brand">
                        CURRENT
                      </span>
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1.5 lg:col-start-2 lg:row-start-1">
                  <h3 className="text-[18px] font-medium tracking-[-0.3px] text-white">
                    {item.role}
                  </h3>
                  <p className="text-[13px] text-dim">{item.company}</p>
                </div>

                <p className="max-w-[620px] text-[13.5px] leading-[22px] text-body lg:col-start-3 lg:row-start-1">
                  {item.summary}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
