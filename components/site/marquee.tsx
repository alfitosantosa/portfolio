const words = [
  "REACT",
  "GOLANG",
  "POSTGRESQL",
  "DOCKER",
  "PLAYWRIGHT",
  "REDIS",
  "KAFKA",
  "NEXT.JS",
  "RABBITMQ",
  "BULLMQ",
  "KUBERNETES",
  "NESTJS",
  "EXPRESSJS",
  "NGINX",
  "CADDY",
  "BUN",
  "TYPESCRIPT",
]

export function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-line bg-raised py-[26px] fade-in"
      style={{ animationDelay: "320ms" }}
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-9 pr-9">
            {words.map((word) => (
              <div key={`${copy}-${word}`} className="flex items-center gap-9">
                <span className="text-[20px] font-medium tracking-[1.6px] text-white">
                  {word}
                </span>
                <span className="text-[18px] text-brand">·</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,#141414_0%,#14141400_100%)] sm:w-[140px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,#141414_0%,#14141400_100%)] sm:w-[140px]" />
    </section>
  )
}
