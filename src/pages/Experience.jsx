import PhotoPlaceholder from "../components/PhotoPlaceholder";
import pilatesPhoto from "../assets/pilates.jpg";
import fvePhoto from "../assets/socialmedia.jpg";
import chaircandlePhoto from "../assets/chaircandle.jpg";
import sandbookPhoto from "../assets/sandbook.jpg";
import cityphonePhoto from "../assets/phonecity.jpg";

const WORK = [
  {
    name: "Pilates Glow Studio",
    tag: "Social Media + Event Marketing",
    blurb:
      "Rebuilt the studio's content calendar and ran their grand-opening campaign — placeholder copy, swap in real numbers/story once available.",
    photoLabel: "Pilates Glow Studio — work sample",
    photo: pilatesPhoto,
  },
  {
    name: "FVE",
    tag: "Email + Social Media",
    blurb:
      "Ongoing monthly newsletter and social content management — placeholder copy, swap in real details once available.",
    photoLabel: "FVE — work sample",
    photo: fvePhoto,
  },
];

const REVIEWS = [
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Pilates Glow Studio",
    photo: chaircandlePhoto,
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "FVE",
    photo: sandbookPhoto,
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Client Name",
    photo: cityphonePhoto,
  },
];

export default function Experience() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-20 md:px-10 md:pt-28">
        <p className="font-script text-lg text-clay">Portfolio</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Experience & Work</h1>
        <p className="mt-4 max-w-xl text-ink">
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
              {w.photo ? (
                <img
                  src={w.photo}
                  alt={w.photoLabel}
                  className="h-80 w-full object-cover md:h-96"
                />
              ) : (
                <PhotoPlaceholder label={w.photoLabel} className="h-80 md:h-96" />
              )}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-clay">{w.tag}</p>
                <h2 className="mt-2 font-display text-3xl">{w.name}</h2>
                <p className="mt-4 text-ink">{w.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="flex min-h-175 flex-col justify-center overflow-hidden bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto grid w-full max-w-6xl">
          <div className="col-start-1 row-start-1 hidden px-8 opacity-50 md:flex">
            <img src={chaircandlePhoto} alt="" className="h-full w-1/3 object-cover" />
            <img src={sandbookPhoto} alt="" className="h-full w-1/3 object-cover" />
            <img src={cityphonePhoto} alt="" className="h-full w-1/3 object-cover" />
          </div>
          <div className="relative col-start-1 row-start-1 px-8">
            <p className="font-script text-lg text-sand">Kind words</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">From Past Clients</h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <blockquote
                  key={i}
                  className="flex min-h-56 flex-col items-center justify-between rounded-lg bg-paper p-6 text-center text-ink shadow-lg shadow-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/60"
                >
                  <p className="font-display text-lg leading-snug">"{r.quote}"</p>
                  <footer className="mt-4 text-[11px] uppercase tracking-[0.2em] text-clay">
                    {r.name} — {r.studio}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
