"use client"

import { useEffect, useState } from "react"

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const touch = window.matchMedia("(hover: none)").matches
    setEnabled(!reduce && !touch)
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="hidden md:block">
      <div
        style={{
          position: "fixed",
          zIndex: 30,
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          borderRadius: "9999px",
          transform: "translate3d(calc(var(--mouse-x) - 12px), calc(var(--mouse-y) - 12px), 0)",
          background: "radial-gradient(closest-side, rgba(106,13,173,0.18), rgba(106,13,173,0))",
          boxShadow: "0 0 40px rgba(106,13,173,0.25)",
          transition: "transform 60ms linear",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
