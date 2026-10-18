import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  return (
    <header className="rise-in w-full px-6 py-5 sm:px-10 lg:px-16 lg:py-[26px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-4"
      >
        <Link
          href="/"
          aria-label="alfito. — home"
          className="flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span className="text-[17px] leading-none font-semibold tracking-[-0.4px] text-white">
            alfito.
          </span>
          <span className="hidden font-mono text-[10px] leading-none tracking-[1px] text-dim sm:inline">
            / full-stack
          </span>
        </Link>

        <div className="hidden items-center gap-[30px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full py-1 text-[13px] text-body transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[13.5px] font-medium whitespace-nowrap text-ink transition-[background-color,scale] duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97] sm:px-[22px] sm:py-[13px]"
        >
          Get in touch
          <ArrowUpRight
            aria-hidden="true"
            className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </nav>
    </header>
  )
}
