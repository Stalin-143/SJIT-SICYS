"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center overflow-hidden">
      {/* subtle branded watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            'url("/logo.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 5% center",
          backgroundSize: "min(60vw, 900px)",
          filter: "grayscale(10%)",
        }}
      />
      <section className="w-full px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="reveal text-sm font-medium tracking-wide text-foreground/70">404</p>
          <h1 className="reveal text-balance mt-3 text-4xl md:text-5xl font-semibold">Page not found</h1>
          <p className="reveal mt-4 text-foreground/80">The page you’re looking for doesn’t exist or has moved.</p>
          <div className="reveal mt-8 flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-white hover:opacity-95 transition"
            >
              Go Home
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 hover:bg-muted transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
