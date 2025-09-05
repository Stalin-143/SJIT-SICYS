function ResourceCol(props: { title: string; items: { label: string; href: string }[] }) {
  const { title, items } = props
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h3 className="font-semibold text-secondary">{title}</h3>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        {items.map((it) => (
          <li key={it.label}>
            <a className="text-primary hover:underline" href={it.href} target="_blank" rel="noreferrer">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Helpful Resources</h1>
        <p className="mt-2 text-foreground/80">Curated tools, learning paths, and opportunities.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ResourceCol
            title="Learning Platforms"
            items={[
              { label: "TryHackMe", href: "https://tryhackme.com" },
              { label: "PortSwigger Academy", href: "https://portswigger.net/web-security" },
              { label: "Hack The Box", href: "https://www.hackthebox.com" },
            ]}
          />
          <ResourceCol
            title="Industry News"
            items={[
              { label: "Krebs on Security", href: "https://krebsonsecurity.com" },
              { label: "The Hacker News", href: "https://thehackernews.com" },
              { label: "BleepingComputer", href: "https://www.bleepingcomputer.com/" },
            ]}
          />
          <ResourceCol
            title="Scholarships"
            items={[
              { label: "WiCyS Opportunities", href: "https://www.wicys.org/" },
              { label: "SANS Programs", href: "https://www.sans.org/scholarship-academy/" },
              { label: "SFS (CISA)", href: "https://www.cisa.gov/careers/scholarship-service-cybersecurity" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
