"use client"

import { useEffect } from "react"

export default function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mql.matches) {
      root.style.setProperty("--mouse-x", "0px")
      root.style.setProperty("--mouse-y", "0px")
      root.style.setProperty("--scroll", "0px")
      return
    }

    let raf = 0
    let pm: { x: number; y: number } | null = null
    let ps: number | null = null

    const apply = () => {
      raf = 0
      if (pm) {
        root.style.setProperty("--mouse-x", `${pm.x}px`)
        root.style.setProperty("--mouse-y", `${pm.y}px`)
        pm = null
      }
      if (ps != null) {
        root.style.setProperty("--scroll", `${ps}px`)
        ps = null
      }
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      pm = { x: e.clientX - cx, y: e.clientY - cy }
      schedule()
    }

    const onScroll = () => {
      ps = window.scrollY
      schedule()
    }

    window.addEventListener("mousemove", onMouse, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    // initialize
    pm = { x: 0, y: 0 }
    ps = window.scrollY
    schedule()

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return null
}
