import PhotoPlaceholder from "../components/PhotoPlaceholder";

const WORK = [
  {
    name: "Pilates Glow Studio",
    tag: "Social Media + Event Marketing",
    blurb:
      "Rebuilt the studio's content calendar and ran their grand-opening campaign — placeholder copy, swap in real numbers/story once available.",
    photoLabel: "Pilates Glow Studio — work sample",
  },
  {
    name: "FVE",
    tag: "Email + Social Media",
    blurb:
      "Ongoing monthly newsletter and social content management — placeholder copy, swap in real details once available.",
    photoLabel: "FVE — work sample",
  },
];

const REVIEWS = [
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Pilates Glow Studio",
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "FVE",
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Client Name",
  },
];

export default function Experience() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-20 md:px-10 md:pt-28">
        <p className="font-script text-lg text-clay">Portfolio</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Experience & Work</h1>
        <p className="mt-4 max-w-xl text-ink/70">
          A look at the studios I've worked with and what we built together.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-16">
          {WORK.map((w, i) => (
            <article
              key={w.name}
              className={`grid gap-8 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <PhotoPlaceholder label={w.photoLabel} className="h-80 md:h-96" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-clay">{w.tag}</p>
                <h2 className="mt-2 font-display text-3xl">{w.name}</h2>
                <p className="mt-4 text-ink/75">{w.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-lg text-sand">Kind words</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">From Past Clients</h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <blockquote key={i} className="border-t border-white/15 pt-6">
                <p className="font-display text-lg leading-snug text-paper/90">"{r.quote}"</p>
                <footer className="mt-4 text-[11px] uppercase tracking-[0.2em] text-paper/50">
                  {r.name} — {r.studio}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
