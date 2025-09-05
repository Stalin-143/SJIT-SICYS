"use client"

import { useEffect, useRef } from "react"

export default function CursorRipples() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const canvas = canvasRef.current
    if (!canvas || prefersReducedMotion) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const ripples: { x: number; y: number; t0: number }[] = []
    let lastAdd = 0

    function resize() {
      const { innerWidth, innerHeight } = window
      width = innerWidth
      height = innerHeight
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = "lighter"
    }
    resize()
    window.addEventListener("resize", resize)

    function onMove(e: MouseEvent) {
      const now = performance.now()
      // throttle new ripples to ~60ms
      if (now - lastAdd < 60) return
      lastAdd = now
      ripples.push({ x: e.clientX, y: e.clientY, t0: now })
      if (ripples.length > 140) ripples.shift()
    }
    window.addEventListener("mousemove", onMove)

    const PURPLE = "rgba(106, 13, 173, 0.22)" // WiCyS-like purple glow
    const LIME = "rgba(140, 198, 63, 0.16)" // WiCyS lime accent
    const WHITE = "rgba(255,255,255,0.10)"

    function draw(now: number) {
      // Clear with slight fade for smoother trails
      ctx.clearRect(0, 0, width, height)

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        const t = (now - r.t0) / 1000 // seconds since start
        if (t > 1.25) {
          ripples.splice(i, 1)
          continue
        }

        // Base expanding radius
        const base = 12 + t * 220
        // Small wave wobble to feel like water
        const wobble = Math.sin(t * 10) * 6

        // Alpha fades over time
        const alpha = Math.max(0, 0.35 - t * 0.28)
        if (alpha <= 0) continue

        // Outer ring (purple)
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.strokeStyle = `rgba(106, 13, 173, ${alpha})`
        ctx.shadowColor = PURPLE
        ctx.shadowBlur = 10
        ctx.arc(r.x, r.y, base + wobble, 0, Math.PI * 2)
        ctx.stroke()

        // Middle ring (lime)
        ctx.beginPath()
        ctx.lineWidth = 1.5
        ctx.strokeStyle = `rgba(140, 198, 63, ${alpha * 0.9})`
        ctx.shadowColor = LIME
        ctx.shadowBlur = 8
        ctx.arc(r.x, r.y, base * 0.7 + wobble * 0.8, 0, Math.PI * 2)
        ctx.stroke()

        // Inner highlight (white)
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = `rgba(255,255,255, ${alpha * 0.7})`
        ctx.shadowColor = WHITE
        ctx.shadowBlur = 6
        ctx.arc(r.x, r.y, base * 0.45 + wobble * 0.6, 0, Math.PI * 2)
        ctx.stroke()

        // Reset shadow to avoid affecting next frame fills
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]" />
}
