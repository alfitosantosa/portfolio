"use client"

import { useEffect, useState } from "react"

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export function LiveLatency() {
  const [ms, setMs] = useState(143)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timer = 0

    const tick = () => {
      setMs((current) => clamp(current + Math.round(Math.random() * 14 - 7), 126, 168))
      timer = window.setTimeout(tick, 1300 + Math.random() * 900)
    }

    timer = window.setTimeout(tick, 1100)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <span className="font-mono text-[9px] tracking-[1px] text-dim">P95</span>
      <span className="text-[13px] font-medium tabular-nums text-white">
        {ms}ms
      </span>
      <span className="pulse-dot size-[5px] rounded-full bg-[#28C840]" />
    </>
  )
}

const initialBars = [7, 11, 9, 15, 20]

export function LiveUptime() {
  const [bars, setBars] = useState(initialBars)
  const [uptime, setUptime] = useState("99.94")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timer = 0

    const tick = () => {
      setBars((current) =>
        current.map((height) => clamp(height + Math.round(Math.random() * 6 - 3), 5, 20))
      )
      setUptime((99.9 + Math.random() * 0.07).toFixed(2))
      timer = window.setTimeout(tick, 1800 + Math.random() * 1000)
    }

    timer = window.setTimeout(tick, 1400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="flex h-5 items-end gap-[3px]">
        {bars.map((height, index) => (
          <span
            key={index}
            style={{ height }}
            className={`w-[3px] rounded-[1.5px] transition-[height] duration-700 ease-out ${
              index === bars.length - 1 ? "bg-brand" : "bg-[#3A4048]"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-[3px]">
        <span className="font-mono text-[9px] tracking-[1px] text-dim">
          UPTIME · 90D
        </span>
        <span className="text-[13px] font-medium tabular-nums text-white">
          {uptime}%
        </span>
      </div>
    </>
  )
}
