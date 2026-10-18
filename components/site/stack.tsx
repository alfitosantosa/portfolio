import { SectionHeading } from "@/components/site/section-heading"

const groups = [
  {
    name: "FRONTEND",
    note: "Interfaces that stay fast under real data.",
    chips: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "React Query",
      "Vue",
    ],
  },
  {
    name: "BACKEND",
    note: "Services, payments and the boring parts.",
    chips: [
      "Golang · Fiber",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Kafka · RabbitMQ",
      "Prisma · Drizzle",
    ],
  },
  {
    name: "INFRA & QA",
    note: "Ship it, watch it, prove it still works.",
    chips: [
      "Docker",
      "Nginx · Caddy",
      "Jenkins",
      "Playwright",
      "Pytest",
      "Linux VPS",
      "OpenTelemetry",
    ],
  },
]

export function Stack() {
  return (
    <section
      aria-label="Stack"
      id="stack"
      className="w-full border-y border-line bg-raised px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-9">
        <SectionHeading
          eyebrow="STACK"
          title="Tools I reach for"
          action={
            <p className="font-mono text-[10px] tracking-[1px] text-dim">
              Currently: Go · Next.js · Postgres
            </p>
          }
        />

        <div className="grid w-full gap-10 md:grid-cols-3 md:gap-12">
          {groups.map((group, index) => (
            <div
              key={group.name}
              data-reveal
              style={
                { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
              }
              className="flex flex-col gap-4"
            >
              <h3 className="font-mono text-[10px] tracking-[1.6px] text-brand">
                {group.name}
              </h3>
              <div className="h-px w-full bg-line" />
              <p className="text-[13px] leading-[20px] text-dim">
                {group.note}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-line bg-surface px-3 py-2 text-[12px] text-body transition-[translate,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:text-white"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
