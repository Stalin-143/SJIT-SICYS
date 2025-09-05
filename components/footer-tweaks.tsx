"use client"

import { useEffect } from "react"

export function FooterTweaks() {
  useEffect(() => {
    // Respect prefers-reduced-motion users: no animations needed here, just DOM tweak.
    const footer = document.querySelector("footer")
    if (!footer) return
    const links = footer.querySelectorAll<HTMLAnchorElement>('a[href*="linkedin.com"]')
    links.forEach((a) => a.remove())
  }, [])
  return null
}
