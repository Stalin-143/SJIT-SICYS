"use client"
import { useState } from "react"
import type React from "react"

type EventItem = { title: string; date: string; desc?: string }

const upcoming: EventItem[] = [
  { title: "Cyber Hygiene Workshop", date: "Oct 15, 2025", desc: "Secure daily computing best practices." },
  { title: "Resume & Mock Interviews", date: "Nov 6, 2025", desc: "Feedback from industry volunteers." },
]

const past: EventItem[] = [
  { title: "CTF 101", date: "Apr 2025" },
  { title: "Alumni Panel", date: "Mar 2025" },
  { title: "WiCyS Summit Watch Party", date: "Feb 2025" },
]

export function EventsTabs() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming")

  const TabBtn = ({
    active,
    children,
    onClick,
  }: {
    active: boolean
    children: React.ReactNode
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors border ${
        active ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-muted border-border"
      }`}
    >
      {children}
    </button>
  )

  const List = ({ items }: { items: EventItem[] }) => (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {items.map((e, i) => (
        <article
          key={e.title}
          className="reveal rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <h4 className="font-semibold">{e.title}</h4>
          <p className="text-sm opacity-80">{e.date}</p>
          {e.desc && <p className="text-sm mt-2">{e.desc}</p>}
        </article>
      ))}
    </div>
  )

  return (
    <div>
      <div className="inline-flex rounded-md overflow-hidden border border-border">
        <TabBtn active={tab === "upcoming"} onClick={() => setTab("upcoming")}>
          Upcoming
        </TabBtn>
        <TabBtn active={tab === "past"} onClick={() => setTab("past")}>
          Past
        </TabBtn>
      </div>
      {tab === "upcoming" ? <List items={upcoming} /> : <List items={past} />}
    </div>
  )
}
