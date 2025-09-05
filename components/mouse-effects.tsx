"use client"

import { useEffect } from "react"

export default function MouseEffects() {
  useEffect(() => {
    const root = document.documentElement

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let rafId: number | null = null
    let rafIdScroll: number | null = null
    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2

    const flushPointer = () => {
      const dx = lastX - window.innerWidth / 2
      const dy = lastY - window.innerHeight / 2
      root.style.setProperty("--mouse-x", `${dx}px`)
      root.style.setProperty("--mouse-y", `${dy}px`)
      rafId = null
    }

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      if (rafId == null) {
        rafId = requestAnimationFrame(flushPointer)
      }
    }

    const onScroll = () => {
      if (rafIdScroll) cancelAnimationFrame(rafIdScroll)
      rafIdScroll = requestAnimationFrame(() => {
        root.style.setProperty("--scroll", `${window.scrollY}px`)
        rafIdScroll = null
      })
    }

    // initialize
    onScroll()

    // use pointer events, passive for perf
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
      if (rafIdScroll) cancelAnimationFrame(rafIdScroll)
    }
  }, [])

  return null
}
