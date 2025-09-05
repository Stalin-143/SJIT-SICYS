"use client"

import type React from "react"

import { useEffect, useRef } from "react"

type Tilt3DProps = {
  children: React.ReactNode
  className?: string
  maxTilt?: number // degrees
  scale?: number // slight scale-up on hover
}

export default function Tilt3D({ children, className = "", maxTilt = 12, scale = 1.02 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hoverCapable = window.matchMedia("(hover: hover)").matches
    if (reduce || !hoverCapable) return

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = x / rect.width - 0.5
      const py = y / rect.height - 0.5
      const rx = (-py * maxTilt).toFixed(2)
      const ry = (px * maxTilt).toFixed(2)
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
    }
    function onLeave() {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [maxTilt, scale])

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-transform duration-300 [transform-style:preserve-3d] ${className}`}
      style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" }}
    >
      {children}
    </div>
  )
}
