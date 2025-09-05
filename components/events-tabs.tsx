"use client"
import { useState } from "react"
import type React from "react"

type EventItem = { 
  id: string
  title: string
  date: string
  desc?: string
  registrationLink?: string
  status?: 'open' | 'full' | 'closed'
}

const upcoming: EventItem[] = [
  { 
    id: 'international-speakers-series',
    title: "International Speakers Series", 
    date: "Coming Soon · Details TBA", 
    desc: "Featuring renowned cybersecurity experts sharing insights and industry trends.",
    registrationLink: "/contact",
    status: 'open'
  },
  { 
    id: 'aws-community-day',
    title: "AWS Community Day", 
    date: "Coming Soon · Details TBA", 
    desc: "Cloud security best practices and AWS services for cybersecurity professionals.",
    registrationLink: "/contact",
    status: 'open'
  },
]

const past: EventItem[] = [
  { 
    id: 'inauguration-ceremony',
    title: "Inauguration Ceremony", 
    date: "2025",
    desc: "Official launch of our cybersecurity chapter with keynote speakers."
  },
  { 
    id: 'snipers-2-0',
    title: "Snipers 2.0", 
    date: "2025",
    desc: "Advanced cybersecurity competition featuring real-world scenarios."
  },
]

export function EventsTabs() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming")

  const TabBtn = ({
    active,
    children,
    onClick,
    ariaLabel,
  }: {
    active: boolean
    children: React.ReactNode
    onClick: () => void
    ariaLabel: string
  }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-r last:border-r-0 ${
        active 
          ? "bg-primary text-primary-foreground border-primary shadow-sm" 
          : "bg-card hover:bg-muted border-border hover:shadow-sm"
      }`}
    >
      {children}
    </button>
  )

  const EventCard = ({ event, index }: { event: EventItem; index: number }) => (
    <article
      key={event.id}
      className="group reveal rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1 font-medium">
            {event.date}
          </p>
          {event.desc && (
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {event.desc}
            </p>
          )}
        </div>
        {event.status && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            event.status === 'open' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : event.status === 'full'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {event.status === 'open' ? 'Open' : event.status === 'full' ? 'Full' : 'Closed'}
          </span>
        )}
      </div>
      
      {event.registrationLink && (
        <a
          href={event.registrationLink}
          className="inline-flex items-center justify-center mt-4 px-4 py-2 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-md transition-colors duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Register Now
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </article>
  )

  const List = ({ items }: { items: EventItem[] }) => (
    <div className="mt-8">
      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 text-muted-foreground">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="mt-4 text-muted-foreground">
            {tab === 'upcoming' ? 'No upcoming events scheduled.' : 'No past events to display.'}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {items.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Events</h2>
          <p className="text-muted-foreground mt-1">
            Join our cybersecurity community events and workshops
          </p>
        </div>
        
        <div 
          className="inline-flex rounded-lg overflow-hidden border border-border shadow-sm"
          role="tablist"
          aria-label="Event categories"
        >
          <TabBtn 
            active={tab === "upcoming"} 
            onClick={() => setTab("upcoming")}
            ariaLabel="View upcoming events"
          >
            Upcoming ({upcoming.length})
          </TabBtn>
          <TabBtn 
            active={tab === "past"} 
            onClick={() => setTab("past")}
            ariaLabel="View past events"
          >
            Past ({past.length})
          </TabBtn>
        </div>
      </div>

      {/* Tab Content */}
      <div role="tabpanel" aria-label={`${tab} events`}>
        {tab === "upcoming" ? <List items={upcoming} /> : <List items={past} />}
      </div>
    </div>
  )
}
