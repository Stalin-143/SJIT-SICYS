"use client"
import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    const seqEls = Array.from(document.querySelectorAll<HTMLElement>(".fade-seq"))

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    revealEls.forEach((el) => obs.observe(el))

    // sequential fade-ins per section
    const sectionMap = new Map<HTMLElement, IntersectionObserver>()
    seqEls.forEach((el) => {
      const parent = el.closest<HTMLElement>("[data-seq]")
      if (!parent) return
      if (!sectionMap.has(parent)) {
        const so = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const items = Array.from(parent.querySelectorAll<HTMLElement>(".fade-seq"))
                items.forEach((item, i) => {
                  setTimeout(() => item.classList.add("show"), i * 90)
                })
                so.unobserve(parent)
              }
            })
          },
          { threshold: 0.2 },
        )
        sectionMap.set(parent, so)
        so.observe(parent)
      }
    })

    return () => {
      obs.disconnect()
      sectionMap.forEach((o) => o.disconnect())
    }
  }, [])

  return null
}
