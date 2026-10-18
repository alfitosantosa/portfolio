"use client"

import { useEffect } from "react"

/**
 * Adds `motion-ready` after hydration so no-JS visitors still see everything,
 * then reveals each [data-reveal] element as it enters the viewport.
 */
export function MotionProvider() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"))
      return
    }

    document.documentElement.classList.add("motion-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return null
}
