const stats = [
  { value: "3+", label: "YEARS SHIPPING" },
  { value: "20+", label: "PROJECTS DELIVERED" },
  { value: "2", label: "PAYMENT STACKS LIVE" },
  { value: "99.9%", label: "VPS UPTIME" },
  { value: "5", label: "TEAMS SUPPORTED" },
]

export function Stats() {
  return (
    <section
      aria-label="Career statistics"
      className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
    >
      <dl className="mx-auto grid w-full max-w-[1312px] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            data-reveal
            style={
              { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
            }
            className="flex flex-col-reverse gap-[7px]"
          >
            <dt className="font-mono text-[10px] tracking-[1.2px] text-dim">
              {stat.label}
            </dt>
            <dd className="text-[34px] leading-none font-medium tracking-[-1.2px] text-white lg:text-[40px]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
