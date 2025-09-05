function GalleryItem(props: { alt: string; caption: string }) {
  const { alt, caption } = props
  return (
    <figure className="group relative overflow-hidden rounded-lg border border-border bg-card">
      <img
        src="/vibrant-indoor-event.png"
        alt={alt}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <figcaption className="pointer-events-none absolute inset-0 flex items-end p-3 text-white bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-sm">{caption}</span>
      </figcaption>
    </figure>
  )
}

export default function GalleryPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-foreground/80">Moments from our events and meetups.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <GalleryItem alt="Event photo 1" caption="Workshop · Spring 2025" />
          <GalleryItem alt="Event photo 2" caption="CTF · Summer 2025" />
          <GalleryItem alt="Event photo 3" caption="Panel · 2025" />
          <GalleryItem alt="Event photo 4" caption="Meetup · 2025" />
          <GalleryItem alt="Event photo 5" caption="Talk · 2025" />
          <GalleryItem alt="Event photo 6" caption="Networking · 2025" />
        </div>
      </div>
    </section>
  )
}
