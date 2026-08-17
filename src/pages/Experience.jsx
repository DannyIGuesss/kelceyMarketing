import PhotoPlaceholder from "../components/PhotoPlaceholder";
import pilatesPhoto from "../assets/instruct.jpeg";
import fvePhoto from "../assets/fue.jpeg";
import triplePhoto from "../assets/triple.JPEG";

const WORK = [
  {
    name: "Pilates Glow Studio",
    tag: "Social Media + Event Marketing",
    blurb:
      "For over a year, I have worked alongside Pilates Glow Studio as a Marketing and Social Media Content Creator, helping strengthen the studio’s digital presence and build an engaged local community. During that time, I contributed to growing the studio’s Instagram following from approximately 300 followers to more than 2.7K.",
    blurb2:
    "My work has included developing content calendars, creating reels and posts, designing branded graphics, supporting promotional campaigns and membership offers, coordinating partnerships, and marketing special events. By creating consistent, visually cohesive content and implementing strategic marketing initiatives, I helped increase brand awareness, audience engagement, and community connections while supporting the studio’s continued membership and business growth.",
    photoLabel: "Pilates Glow Studio — work sample",
    photo: pilatesPhoto,
  },
  {
    name: "FUE",
    tag: "Email + Social Media",
    blurb:
      "I worked with a small business client to establish and develop their Instagram presence from the ground up. My role included creating a comprehensive social media strategy, planning content, developing reel concepts, designing feed mockups, and building a structured posting schedule aligned with the brand’s visual identity.",
    blurb2:
    "By creating a cohesive content calendar and long-term social media roadmap, I helped give the client a clear direction for their online presence. The result was a polished and professional Instagram foundation designed to strengthen brand awareness, maintain visual consistency, and support future audience growth and engagement.",
    photoLabel: "FVE — work sample",
    photo: fvePhoto,
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
    studio: "FUE",
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
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 pb-4 pt-20 md:px-10 md:pt-28">
          <p className="font-script text-lg text-sand">Portfolio</p>
          <h1 className="mt-2 font-display text-4xl text-paper md:text-5xl">Experience & Work</h1>
          <p className="mt-4 max-w-xl text-paper">
            A look at the studios I've worked with and what we built together.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <article className="grid gap-8 md:grid-cols-2 md:items-center">
            {WORK[0].photo ? (
              <img
                src={WORK[0].photo}
                alt={WORK[0].photoLabel}
                className="h-140 w-full grayscale rounded-lg object-cover object-top md:h-160"
              />
            ) : (
              <PhotoPlaceholder label={WORK[0].photoLabel} className="h-80 md:h-90" />
            )}
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-sand">{WORK[0].tag}</p>
              <h2 className="mt-2 font-display text-3xl text-paper">{WORK[0].name}</h2>
              <p className="mt-4 text-paper">{WORK[0].blurb}</p>
              <p className="mt-4 text-paper">{WORK[0].blurb2}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-16 md:px-10">
        <article className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center md:[&>*:first-child]:order-2">
          {WORK[1].photo ? (
            <img
              src={WORK[1].photo}
              alt={WORK[1].photoLabel}
              className="h-80 w-full grayscale rounded-lg object-cover md:h-96"
            />
          ) : (
            <PhotoPlaceholder label={WORK[1].photoLabel} className="h-80 md:h-96" />
          )}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-sand">{WORK[1].tag}</p>
            <h2 className="mt-2 font-display text-3xl text-paper">{WORK[1].name}</h2>
            <p className="mt-4 text-paper">{WORK[1].blurb}</p>
            <p className="mt-4 text-paper">{WORK[1].blurb2}</p>
          </div>
        </article>
      </section>

      {/* Reviews */}
      <section className="flex min-h-175 flex-col justify-center overflow-hidden bg-charcoal px-6 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="px-8 text-center">
            <p className="font-script text-lg text-sand">Kind words</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">From Past Clients</h2>
          </div>

          <div className="relative mt-12 grid w-full">
            <div className="col-start-1 row-start-1 hidden opacity-99 md:flex">
              <img src={triplePhoto} alt="" className="h-full w-full grayscale rounded-lg object-cover" />
            </div>
            <div className="relative col-start-1 row-start-1 flex h-full flex-col justify-center px-4">
              <div className="grid gap-10 md:grid-cols-3">
                {REVIEWS.map((r, i) => (
                  <blockquote
                    key={i}
                    className="flex min-h-56 flex-col items-center justify-between rounded-lg border border-ink bg-paper/80 p-6 text-center text-ink shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
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
        </div>
      </section>
    </>
  );
}
