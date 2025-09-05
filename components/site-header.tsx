"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    // Use native scrollIntoView; offset is handled via CSS scroll-margin-top on .anchor-target
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const isAnchor = href.startsWith("/#") || href.startsWith("#")
    if (!isAnchor) return
    e.preventDefault()
    const id = href.startsWith("/#") ? href.slice(2) : href.slice(1)

    if (pathname !== "/") {
      // Navigate to home (allow default scroll) and let the initial effect handle precise positioning
      router.push(`/#${id}`)
    } else {
      scrollToId(id)
      // update URL hash for accessibility/back behavior
      history.replaceState(null, "", `#${id}`)
    }
    setOpen(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const setHeaderVar = () => {
      const header = document.querySelector("header") as HTMLElement | null
      const h = header ? Math.round(header.getBoundingClientRect().height) : 80
      document.documentElement.style.setProperty("--header-h", `${h}px`)
    }
    setHeaderVar()
    const onResize = () => setHeaderVar()

    // observe header size changes too
    const header = document.querySelector("header") as HTMLElement | null
    const ro = header ? new ResizeObserver(() => setHeaderVar()) : null
    if (ro && header) ro.observe(header)

    window.addEventListener("resize", onResize)

    // Handle direct hash visits and hash changes on home
    const hash = window.location.hash
    if (pathname === "/" && hash) {
      const id = hash.slice(1)
      // Scroll after mount to ensure layout is ready
      setTimeout(() => scrollToId(id), 0)
    }
    const onHashChange = () => {
      if (pathname !== "/") return
      const newHash = window.location.hash
      if (newHash) scrollToId(newHash.slice(1))
    }
    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("hashchange", onHashChange)
      if (ro) ro.disconnect()
    }
  }, [pathname])

  const nav = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#events", label: "Events" },
    { href: "/#membership", label: "Membership" },
    { href: "/#resources", label: "Resources" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-3" onClick={(e) => handleAnchorClick(e as any, "/#home")}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-01%20at%207.58.07%20PM-jYDrMbBkAvz2tVsBt4dbd4SkhK0h6h.jpeg"
            alt="WiCyS logo"
            className="h-10 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only">Women in Cybersecurity</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              prefetch={false}
              onClick={(e) => handleAnchorClick(e, n.href)}
              className="text-sm text-foreground hover:text-primary transition-colors link-underline"
            >
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="absolute right-4 top-16 w-56 rounded-md border border-border bg-background shadow-md p-3 flex flex-col gap-2 md:hidden">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, n.href)}
                className="text-sm text-foreground hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
