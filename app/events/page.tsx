function UpcomingEventCard(props: { title: string; meta: string; desc: string }) {
  const { title, meta, desc } = props
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-1 text-foreground/80">{meta}</p>
      <p className="mt-2 text-foreground/80">{desc}</p>
      <a
        href="/contact"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Register Now
      </a>
    </article>
  )
}

export default function EventsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="mt-2 text-foreground/80">Join our upcoming sessions and explore highlights from past events.</p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <UpcomingEventCard
              title="Intro to Threat Modeling"
              meta="Oct 15, 2025 · 5:00–6:30 PM · Room 210"
              desc="Hands-on workshop covering STRIDE and attack trees."
            />
            <UpcomingEventCard
              title="Blue Team Lab Night"
              meta="Nov 6, 2025 · 6:00–8:00 PM · Cyber Lab"
              desc="Defensive tooling, SIEM dashboards, and incident response drills."
            />
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold">Past Events</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Capture the Flag Kickoff",
                date: "Sept 2025",
                desc: "Team-based CTF with beginner-friendly challenges and prizes.",
              },
              {
                title: "Career Panel: Breaking In",
                date: "Aug 2025",
                desc: "Experts shared pathways into SOC, GRC, and AppSec roles.",
              },
              {
                title: "Web Security Fundamentals",
                date: "May 2025",
                desc: "OWASP Top 10 overview with demos and best practices.",
              },
            ].map((e) => (
              <article key={e.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h4 className="font-semibold">{e.title}</h4>
                <p className="mt-1 text-foreground/80">{e.date}</p>
                <p className="mt-2 text-foreground/80">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
