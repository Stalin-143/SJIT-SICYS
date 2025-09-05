"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = theme ?? resolvedTheme
  const next = current === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next as string)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:shadow-sm transition"
    >
      {/* simple sun/moon glyph */}
      <span className="relative block h-5 w-5" aria-hidden="true">
        <span
          className={`absolute inset-0 rounded-full bg-yellow-400 ${current === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"} transition`}
          style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.06) inset" }}
        />
        <span
          className={`absolute inset-0 rounded-full bg-foreground/80 ${current === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition`}
          style={{ clipPath: "circle(45% at 35% 35%)" }}
        />
      </span>
    </button>
  )
}
