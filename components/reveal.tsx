"use client"
import { useEffect, useRef } from "react"
import type { JSX } from "react"
import type React from "react"

type Props = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  variant?: "block" | "card"
  children: React.ReactNode
}

export function Reveal({ as = "div", className, variant = "block", children }: Props) {
  const Comp = as as any
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cls = variant === "card" ? "card-reveal" : "reveal"
    el.classList.add(cls)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view")
            obs.unobserve(e.target as Element)
          }
        })
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [variant])

  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  )
}
