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
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const isAnchor = href.startsWith("/#") || href.startsWith("#")
    if (!isAnchor) return
    e.preventDefault()
    const id = href.startsWith("/#") ? href.slice(2) : href.slice(1)

    if (pathname !== "/") {
      router.push(`/#${id}`)
    } else {
      scrollToId(id)
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

    const header = document.querySelector("header") as HTMLElement | null
    const ro = header ? new ResizeObserver(() => setHeaderVar()) : null
    if (ro && header) ro.observe(header)

    window.addEventListener("resize", onResize)

    const hash = window.location.hash
    if (pathname === "/" && hash) {
      const id = hash.slice(1)
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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* Desktop */}
        <div className="hidden md:flex items-center w-full">
          <div className="flex-1"></div>
          <nav className="flex items-center space-x-6" aria-label="Primary">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, n.href)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between w-full">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute right-4 top-full mt-2 w-64 rounded-lg border border-border bg-background/95 backdrop-blur-sm shadow-lg p-4 md:hidden z-50">
          <nav className="flex flex-col space-y-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, n.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-accent/50"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
