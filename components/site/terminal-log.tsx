"use client"

import { useEffect, useState } from "react"

type Line = { text: string; tone: string }

const MAX_LINES = 9
const COMMAND = "$ docker compose up -d --build"

const STATIC_LINES: Line[] = [
  { text: COMMAND, tone: "text-white" },
  { text: "[+] Building 12/12", tone: "text-dim" },
  { text: " ✔ api healthy 143ms", tone: "text-dim" },
  { text: " ✔ web healthy 98ms", tone: "text-dim" },
  { text: " ✔ postgres healthy 0.4s", tone: "text-dim" },
  { text: " ✔ caddy started 0.3s", tone: "text-dim" },
  { text: "[+] caddy https://alfito.dev", tone: "text-brand" },
  { text: "$ bun run test:e2e", tone: "text-white" },
  { text: "✓ 128 passed · 0 failed · 42s", tone: "text-body" },
]

const buildSteps = [
  { bar: "▰▱▱▱▱▱", pct: "12%" },
  { bar: "▰▰▱▱▱▱", pct: "34%" },
  { bar: "▰▰▰▱▱▱", pct: "58%" },
  { bar: "▰▰▰▰▱▱", pct: "76%" },
  { bar: "▰▰▰▰▰▱", pct: "91%" },
  { bar: "▰▰▰▰▰▰", pct: "100%" },
]

const serviceLines: Line[] = [
  { text: " ✔ api healthy 143ms", tone: "text-dim" },
  { text: " ✔ web healthy 98ms", tone: "text-dim" },
  { text: " ✔ postgres healthy 0.4s", tone: "text-dim" },
  { text: " ✔ redis healthy 0.2s", tone: "text-dim" },
  { text: " ✔ caddy started 0.3s", tone: "text-dim" },
]

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))

export function TerminalLog() {
  const [lines, setLines] = useState<Line[]>([STATIC_LINES[0]])

  useEffect(() => {
    let cancelled = false
    let buffer: Line[] = []

    const push = (line: Line) => {
      buffer = [...buffer, line].slice(-MAX_LINES)
      if (!cancelled) setLines([...buffer])
    }
    const setLast = (line: Line) => {
      buffer = [...buffer.slice(0, -1), line]
      if (!cancelled) setLines([...buffer])
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => setLines(STATIC_LINES), 0)
      return () => window.clearTimeout(timer)
    }

    const run = async () => {
      while (!cancelled) {
        buffer = []
        if (!cancelled) setLines([])

        for (let i = 1; i <= COMMAND.length; i++) {
          if (cancelled) return
          buffer = [{ text: COMMAND.slice(0, i), tone: "text-white" }]
          if (!cancelled) setLines(buffer)
          await sleep(34)
        }

        await sleep(320)
        if (cancelled) return

        push({ text: "[+] Building 12/12", tone: "text-dim" })

        for (const [index, step] of buildSteps.entries()) {
          if (cancelled) return
          setLast({
            text: `[+] Build 12/12 ${step.bar} ${step.pct}`,
            tone: "text-dim",
          })
          await sleep(index === buildSteps.length - 1 ? 220 : 240)
        }

        setLast({ text: "[+] Built 12 services in 14.2s", tone: "text-white" })

        for (const line of serviceLines) {
          if (cancelled) return
          push(line)
          await sleep(180)
        }

        await sleep(280)
        push({ text: "[+] caddy https://alfito.dev", tone: "text-brand" })

        await sleep(420)
        push({ text: "$ bun run test:e2e", tone: "text-white" })

        await sleep(620)
        push({ text: "✓ 128 passed · 0 failed · 42s", tone: "text-body" })

        await sleep(320)
        push({ text: "✓ deploy complete — zero downtime", tone: "text-body" })

        await sleep(2800)
      }
    }

    void run()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex h-[207px] flex-col overflow-hidden px-4 py-5 font-mono text-[11.5px] leading-[23px] sm:px-[22px] sm:text-[12.5px]">
      {lines.map((line, index) => (
        <span
          key={index}
          className={`block shrink-0 whitespace-pre ${line.tone}`}
        >
          {line.text}
          {index === lines.length - 1 ? (
            <span className="terminal-caret" />
          ) : null}
        </span>
      ))}
    </div>
  )
}
