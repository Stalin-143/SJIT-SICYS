import Link from "next/link"

export default function MembershipPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold">Join Our Community</h1>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Become a member to access hands-on workshops, mentorship, networking events, and exclusive opportunities.
            Membership supports our mission and helps us offer more programs.
          </p>
          <ul className="mt-4 list-disc pl-5 text-foreground/80 space-y-1">
            <li>Monthly workshops and study groups</li>
            <li>Mentorship matching and career support</li>
            <li>Speaker sessions and employer networking</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>
  )
}
