"use client"

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="reveal parallax-1 text-3xl font-bold">Get In Touch</h1>
        <p className="reveal mt-2 text-foreground/80">
          Questions, partnerships, or membership? We'd love to hear from you.
        </p>

        <div className="reveal mt-8 grid gap-8 md:grid-cols-2" data-reveal="up">
          <div className="space-y-4">
            <p className="text-foreground/80">
              Email:{" "}
              <a href="mailto:wicys.sjcexsjit@gmail.com" className="text-primary link-underline">
                wicys.sjcexsjit@gmail.com
              </a>
            </p>
            <p className="text-foreground/80">
              Institution: <span className="font-medium">St. Joseph's Group of Institution, Chennai</span>
            </p>
            <div className="flex items-center gap-4">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/wicys-stjosephs-group-of-institutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-transform duration-200 hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.06 0 4.81 2.67 4.81 6.14V24h-4v-7.1c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24h-4V8z" />
                </svg>
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="text-foreground hover:text-primary transition"
                title="Twitter / X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.564L23.5 22h-7.277l-5.69-6.592L3.5 22H.244l8.214-9.383L.5 2h7.277l5.165 5.995L18.244 2zm-1.274 18h2.007L7.108 4H5.1l11.87 16z" />
                </svg>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
