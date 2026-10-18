import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  action,
  className,
}: {
  eyebrow: string
  title: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div
      data-reveal
      className={cn(
        "flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className="flex flex-col gap-3.5">
        <p className="font-mono text-[10px] tracking-[1.6px] text-dim">
          {eyebrow}
        </p>
        <h2 className="text-[32px] leading-[1.05] font-medium tracking-[-1px] text-white sm:text-[38px] lg:text-[44px] lg:tracking-[-1.4px]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}
