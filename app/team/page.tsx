function TeamCard(props: { title: string; name: string; bio: string }) {
  const { title, name, bio } = props
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src="/generic-profile-placeholder.png"
        alt={`${title} portrait placeholder`}
        className="h-48 w-full rounded-md object-cover"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary font-medium">{title}</p>
        <p className="mt-2 text-foreground/80 leading-relaxed">{bio}</p>
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p className="mt-2 text-foreground/80">Meet the leaders who keep our chapter thriving.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TeamCard
            title="President"
            name="Alex Morgan"
            bio="Leads chapter strategy, partnerships, and programming to grow impact and member opportunities."
          />
          <TeamCard
            title="Vice President"
            name="Riley Chen"
            bio="Coordinates events, supports committees, and drives community engagement across initiatives."
          />
          <TeamCard
            title="Faculty Advisor"
            name="Dr. Jordan Patel"
            bio="Provides guidance, mentorship, and academic alignment for chapter programs and student success."
          />
        </div>
      </div>
    </section>
  )
}
