"use client"

import { useEffect } from "react"

export function RevealMount() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view")
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )

    const scan = () => {
      const nodes = document.querySelectorAll(".reveal:not(.in-view), .card-reveal:not(.in-view)")
      nodes.forEach((n) => io.observe(n))
    }

    // initial and on DOM mutations (e.g., lazy content)
    scan()
    const mo = new MutationObserver(() => scan())
    mo.observe(document.documentElement, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [])

  return null
}
