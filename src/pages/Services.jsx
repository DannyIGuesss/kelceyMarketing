import ContactForm from "../components/ContactForm";
import soloPhoto from "../assets/services/solo.jpg";
import oceanPhoto from "../assets/services/ocean.jpg";

const SERVICES = [
  {
    name: "SOCIAL MEDIA",
    items: ["Content calendar", "Posting", "Community management", "Monthly analytics"],
  },
  {
    name: "EVENT MARKETING",
    items: ["Grand openings", "Weddings", "Studio launches", "Influencer events"],
  },
  {
    name: "EMAIL/PROMOTIONS",
    items: ["Weekly email blasts", "Membership promos", "Studio updates", "Campaign support"],
  },
  {
    name: "STRATEGY",
    items:["Monthly calendar", "Competitor research", "Trend research", "Local audience strategy"]
  },
  {
    name: "ANALYTICS",
    items:["Reports every 2 weeks", "Reach/Engagement", "Reel views/Clicks", "Top content"]
  },
  {
    name: "COMMUNITY/EVENTS",
    items:["Collaborations", "Event planning assistance", "Instructor features", "Member milestone"]
  }
];

const PACKAGES = [
  {
    name: "STARTER SOCIAL",
    price: "from $750/mo",
    desc: (
  <>
    feed posts <span className="font-black text-base">•</span> basic calendar{" "}
    <span className="font-black text-base">•</span> light engagement{" "}
    <span className="font-black text-base">•</span> promos
  </>
),
  },
  {
    name: "GROWTH PARTNER",
    price: "from $1250/mo",
    desc: (
  <>
    posts <span className="font-black text-base">•</span> stories{" "}
    <span className="font-black text-base">•</span> analytics{" "}
    <span className="font-black text-base">•</span> campaign planning
  </>
),
  },
  {
    name: "STUDIO PARTNER",
    price: "$1,750/mo",
    desc: (
  <>
    6-12 posts <span className="font-black text-base">•</span> 6-8 reels{" "}
    <span className="font-black text-base">•</span> 3-5 story sets/wk{" "}
    <span className="font-black text-base">•</span> weekly email blasts <span className="font-black text-base">•</span>content days
    <span className="font-black text-base">•</span> reports
  </>
),
  },
];

export default function Services() {
  return (
    <>
      <section className="relative flex h-[80vh] flex-col items-center justify-center overflow-hidden bg-charcoal">
        <img src={soloPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-10" style={{ transform: "translateY(6px)" }}>
          <h1
            className="mt-2 font-light uppercase leading-none tracking-wide text-paper"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 3.25vw, 2.75rem)" }}
          >
            Services & Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-paper">
            Packages built for boutique fitness studios that need consistent content, stronger community marketing, and a clear monthly strategy.
          </p>
        </div>
      </section>

      {/* Pricing — editorial layout over full-bleed ocean background */}
      <section className="relative overflow-hidden bg-charcoal">
        <img src={oceanPhoto} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />

        <div className="relative z-10 px-6 py-20 md:px-10 md:py-28 lg:flex lg:min-h-[900px] lg:items-center lg:py-32">
          <div className="w-full lg:w-2/3">
            <div className="mx-auto max-w-xl">
              <h2 className="font-display text-4xl text-paper md:text-5xl">Find your fit</h2>
              <p className="mt-2 font-script text-lg text-sand">Packages</p>

              <div className="mt-12 flex flex-col divide-y-2 divide-paper/20">
                {PACKAGES.map((p, i) => (
                  <div key={p.name} className="group py-6 first:pt-0 last:pb-0">
                    <h3 className="font-accent text-3xl tracking-wide text-paper transition-colors group-hover:text-sand md:text-4xl">
                      {String(i + 1).padStart(2, "0")} / {p.name}
                    </h3>
                    <p className="mt-2 font-display text-sm text-sand">{p.price}</p>
                    <p className="mt-2 max-w-md text-sm text-paper/80">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 w-fit rounded-full bg-sand px-6 py-3 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink">
                  New Client Marketing Setup — $250 One-Time Onboarding Fee
                </p>
              </div>
              <p className="mt-6 max-w-md text-sm text-paper/90">
                Account audit <span className="font-black text-base">•</span> Competitor research{" "}
                <span className="font-black text-base">•</span> Brand review{" "}
                <span className="font-black text-base">•</span> Target audience development{" "}
                <span className="font-black text-base">•</span> Content strategy{" "}
                <span className="font-black text-base">•</span> Account optimization{" "}
                <span className="font-black text-base">•</span> Analytics setup{" "}
                <span className="font-black text-base">•</span> Shared content folders{" "}
                <span className="font-black text-base">•</span> First monthly marketing calendar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-script text-lg text-sand">What's included</p>
            <h2 className="mt-2 font-display text-3xl text-paper md:text-4xl">
              Every Service,<br />One Partner
            </h2>
            <p className="mt-4 max-w-xs text-sm text-paper/80">
              A full suite of marketing support built specifically for boutique fitness studios.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className="rounded-lg border border-paper/20 bg-gradient-to-b from-white/15 to-charcoal p-8 shadow-black/0 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-paper/50 hover:shadow-2xl hover:shadow-black/50"
              >
                <p className="font-display text-sm text-paper/60">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-accent text-xl uppercase tracking-wide text-paper">
                  <span className="min-[1200px]:hidden">
                    {s.name.split("/").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <>
                            /<wbr />
                          </>
                        )}
                      </span>
                    ))}
                  </span>
                  <span className="hidden min-[1200px]:inline">{s.name}</span>
                </h2>
                <div className="mt-4 h-px w-10 bg-paper/30" />
                <ul className="mt-4 space-y-2 text-sm text-paper/80">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-paper/60" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl rounded-lg border border-paper/15 bg-gradient-to-b from-white/15 to-charcoal p-8 shadow-black/0 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-paper/50 hover:shadow-2xl hover:shadow-black/50 md:p-14 lg:grid lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <p className="font-script text-lg text-sand">Get in touch</p>
            <h2 className="mt-2 font-display text-3xl text-paper md:text-4xl">Book a Free Consultation</h2>
            <p className="mt-4 max-w-sm text-paper/80">
              Tell me a bit about your studio and what you're looking for — I'll follow up to set up
              a time to talk.
            </p>
            <div className="mt-8 h-px w-16 bg-paper/30" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/60">
              Response within 1–2 business days
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
