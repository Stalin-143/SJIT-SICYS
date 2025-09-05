"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export function ContactForm({ className }: Props) {
  const { toast } = useToast()
  const [pending, setPending] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // honeypot
    if ((data.get("company") as string)?.trim()) {
      return
    }

    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      subject: (data.get("subject") as string)?.trim() || "Contact Form",
      message: (data.get("message") as string)?.trim(),
    }

    try {
      setPending(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setSucceeded(true)
      form.reset()
      toast({ title: "Message sent", description: "Thanks! We will get back to you shortly." })
    } catch (err: any) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" })
    } finally {
      setPending(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-lg border border-border bg-card p-6 shadow-sm grid gap-4 md:gap-6",
        "md:grid-cols-2", // two-column layout on md+
        className,
      )}
    >
      {/* Honeypot field */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* Official contact details panel with email + institution, styled professionally */}
      <div className="md:col-span-2 reveal rounded-md border border-border bg-muted/60 p-4 sm:p-5 shadow-xs transition hover:shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium">Official contact</p>
            <a
              href="mailto:wicys.sjcexsjit@gmail.com"
              className="mt-0.5 inline-flex text-sm text-primary underline-offset-2 hover:underline"
            >
              wicys.sjcexsjit@gmail.com
            </a>
          </div>
          <div className="text-sm text-foreground/80">St. Joseph’s Group of Institution, Chennai</div>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40"
          placeholder="you@domain.com"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-1 block w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40"
          placeholder="How can we help?"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40"
          placeholder="Write your message here..."
        />
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          aria-disabled={pending}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
        <span role="status" aria-live="polite" className="text-sm opacity-80">
          {succeeded ? "Thanks! Your message has been sent." : ""}
        </span>
      </div>
    </form>
  )
}
