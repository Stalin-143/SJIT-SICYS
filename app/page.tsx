import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { EventsTabs } from "@/components/events-tabs"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* attach global reveal handlers */}
      <ScrollReveal />

      {/* Hero */}
      <section
        id="home"
        className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center py-12 md:py-16 anchor-target"
        style={{ minHeight: "calc(100svh - var(--header-h, 80px))" }}
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="reveal parallax-1 text-5xl sm:text-6xl font-bold text-balance" data-reveal="up">
              Women in Cybersecurity
            </h1>
            <p className="reveal mt-4 text-lg leading-relaxed text-foreground/80">
              Empowering, educating, and supporting women to excel in cybersecurity through community, learning, and
              leadership.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover-raise"
              >
                Become a Member
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 hover-raise"
              >
                See Events
              </a>
            </div>
          </div>
          <div className="reveal md:justify-self-end">
            {/* MUST use the exact Source URL you provided for the logo */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-01%20at%207.58.07%20PM-jYDrMbBkAvz2tVsBt4dbd4SkhK0h6h.jpeg"
              alt="WiCyS logo"
              className="w-48 h-auto md:w-60 parallax-2 tilt-small hover-raise"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="reveal text-2xl font-semibold">About</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <p className="reveal stagger-1">
              Our chapter advances the presence and success of women in cybersecurity through hands-on learning,
              mentorship, and career development.
            </p>
            <p className="reveal stagger-2">
              We host workshops, speaker sessions, Capture-the-Flag (CTF) practice, and collaborative projects aligned
              with industry needs.
            </p>
            <p className="reveal stagger-3">
              Whether you’re new to security or leveling up, you’ll find a welcoming, supportive community here.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="reveal text-2xl font-semibold">Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="reveal stagger-1 rounded-lg border border-border bg-card p-6 shadow-sm hover-raise">
              <h3 className="font-semibold">President</h3>
              <p className="text-sm mt-1 opacity-80">Lead organizer and chapter representative.</p>
              <div className="mt-4 flex items-center gap-3">
                <Image src="/generic-profile-placeholder.png" alt="" width={64} height={64} className="rounded-full" />
                <div>
                  <p className="font-medium">Your Name</p>
                  <p className="text-xs opacity-70">president@chapter.edu</p>
                </div>
              </div>
            </article>

            <article className="reveal stagger-2 rounded-lg border border-border bg-card p-6 shadow-sm hover-raise">
              <h3 className="font-semibold">Faculty Advisor</h3>
              <p className="text-sm mt-1 opacity-80">Guides academic alignment and partnerships.</p>
              <div className="mt-4 flex items-center gap-3">
                <Image src="/faculty-profile-placeholder.png" alt="" width={64} height={64} className="rounded-full" />
                <div>
                  <p className="font-medium">Professor Name</p>
                  <p className="text-xs opacity-70">advisor@chapter.edu</p>
                </div>
              </div>
            </article>

            <article className="reveal stagger-3 rounded-lg border border-border bg-card p-6 shadow-sm hover-raise">
              <h3 className="font-semibold">Vice President</h3>
              <p className="text-sm mt-1 opacity-80">Operations, events, and member experience.</p>
              <div className="mt-4 flex items-center gap-3">
                <Image src="/vp-profile-placeholder.png" alt="" width={64} height={64} className="rounded-full" />
                <div>
                  <p className="font-medium">VP Name</p>
                  <p className="text-xs opacity-70">vp@chapter.edu</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="reveal text-2xl font-semibold">Events</h2>
          <p className="reveal mt-2 text-foreground/80">Explore what’s coming up and what we’ve done recently.</p>
          <div className="reveal mt-6">
            <EventsTabs />
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal rounded-lg border border-border bg-card p-8 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Membership</h2>
              <p className="mt-2 text-foreground/80">
                Join our chapter to access events, mentorship, and leadership opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 md:mt-0 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover-raise"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="reveal text-2xl font-semibold">Resources</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { label: "WiCyS Global", href: "https://www.wicys.org/" },
              {
                label: "NICE Framework",
                href: "https://niccs.cisa.gov/workforce-development/cyber-security-workforce-framework",
              },
              { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/" },
              { label: "TryHackMe", href: "https://tryhackme.com" },
            ].map((r, i) => (
              <li key={r.label} className="reveal" style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                <a href={r.href} target="_blank" rel="noreferrer" className="link-underline">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="reveal text-2xl font-semibold">Gallery</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="card-reveal hover-raise rounded-lg overflow-hidden border border-border bg-card"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <Image
                  src={`/wicys-event-photo-.png?key=x0w2j&height=240&width=360&query=WiCyS%20event%20photo%20${i + 1}`}
                  alt={`Event photo ${i + 1}`}
                  width={360}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t border-border anchor-target">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="reveal rounded-xl border border-border bg-card/80 shadow-sm transition-all duration-300 hover:shadow-md md:hover:shadow-lg">
            <div className="grid md:grid-cols-5">
              {/* Details panel */}
              <aside className="reveal stagger-1 md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-background">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold">Contact</h2>
                  <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    We’re here to help
                  </span>
                </div>
                <p className="mt-2 text-foreground/80">
                  Have questions or want to collaborate? Reach out and we’ll get back to you.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:wicys@chapter.edu" className="link-underline">
                      wicys@chapter.edu
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground/80">Your University, Department of CS</p>
                  </div>
                  <div>
                    <p className="font-medium">Response time</p>
                    <p className="text-foreground/80">Typically within 2–3 business days</p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="mailto:wicys@chapter.edu"
                    className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Email us
                  </a>
                </div>
              </aside>

              {/* Form panel */}
              <div className="reveal stagger-2 md:col-span-3 p-6 md:p-8">
                <div className="rounded-lg bg-background border border-border p-4 sm:p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary ring-offset-1 ring-offset-background hover-raise">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links footer band within the page for scrolling UX */}
      <section className="py-12 border-t border-border">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-wrap gap-3">
          <a href="#home" className="text-sm link-underline">
            Home
          </a>
          <a href="#about" className="text-sm link-underline">
            About
          </a>
          <a href="#team" className="text-sm link-underline">
            Team
          </a>
          <a href="#events" className="text-sm link-underline">
            Events
          </a>
          <a href="#membership" className="text-sm link-underline">
            Membership
          </a>
          <a href="#resources" className="text-sm link-underline">
            Resources
          </a>
          <a href="#gallery" className="text-sm link-underline">
            Gallery
          </a>
          <a href="#contact" className="text-sm link-underline">
            Contact
          </a>
        </div>
      </section>
    </div>
  )
}
