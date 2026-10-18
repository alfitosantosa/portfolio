import { Award } from "lucide-react"

const certifications = [
  { title: "Top 8 · Demo Day", sub: "#Tech4Impact, Skilvul" },
  { title: "Intro to Coding", sub: "Gold certificate" },
  { title: "People's Choice", sub: "Skilvul cohort vote" },
  { title: "Product Innovation", sub: "Telemedicine challenge" },
]

export function Certifications() {
  return (
    <section
      aria-label="Certifications and awards"
      className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-7">
        <h2 className="sr-only">Certifications and awards</h2>
        <div
          data-reveal
          className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-[10px] tracking-[1.6px] text-dim">
            CERTIFICATIONS &amp; AWARDS · 2023
          </p>
          <p className="font-mono text-[10px] text-dim">
            Skilvul · #Tech4Impact
          </p>
        </div>

        <div className="grid w-full gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <div
              key={certification.title}
              data-reveal
              style={
                { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
              }
              className="group flex flex-col gap-2.5 border-t border-line pt-4"
            >
              <Award
                aria-hidden="true"
                className="size-[15px] text-brand transition-transform duration-300 group-hover:-rotate-6"
              />
              <h3 className="text-[15px] font-medium tracking-[-0.2px] text-white">
                {certification.title}
              </h3>
              <p className="text-[11px] text-dim">{certification.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
