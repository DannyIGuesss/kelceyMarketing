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
    price: "from $900/mo",
    tagline: "Consistent content for a polished social presence.",
    features: [
      "6–8 feed posts",
      "2–4 Reels",
      "monthly content calendar",
      "captions + social SEO",
      "promotional graphics",
      "light engagement",
      "monthly insights",
    ],
    bestFor: "Small businesses ready to stay consistent online.",
  },
  {
    name: "GROWTH PARTNER",
    price: "from $1,250/mo",
    popular: true,
    tagline: "Strategic social management designed to grow your brand.",
    features: [
      "8–12 feed posts",
      "4–6 Reels",
      "story content",
      "content strategy",
      "community engagement",
      "campaign planning",
      "analytics + monthly insights",
    ],
    bestFor: "Growing brands ready for a more hands-on social strategy.",
  },
  {
    name: "STUDIO PARTNER",
    price: "$1,750/mo",
    tagline: "Your dedicated social + marketing partner.",
    features: [
      "6–12 feed posts",
      "6–8 Reels",
      "3–5 story sets/week",
      "content days",
      "weekly email marketing",
      "campaigns + promotions",
      "community management",
      "monthly reporting",
    ],
    bestFor: "Studios and lifestyle brands wanting full-service marketing support.",
  },
];

const SOCIAL_PACKAGES = [
  {
    name: "SOCIAL ESSENTIALS",
    price: "from $450/mo",
    tagline: "Simple, consistent content to keep your business active online.",
    features: [
      "1 feed post/week OR 1 Reel/week",
      "captions",
      "basic hashtag/social SEO",
      "content scheduling",
      "monthly content calendar",
    ],
    bestFor: "Small businesses that want a consistent social presence without full-service management.",
  },
  {
    name: "SOCIAL GROWTH",
    price: "from $750/mo",
    tagline: "More frequent content to keep your audience engaged and your brand visible.",
    features: [
      "2–3 feed posts/week OR 2–3 Reels/week",
      "captions",
      "basic hashtag/social SEO",
      "content scheduling",
      "monthly content calendar",
    ],
    bestFor: "Businesses looking to increase their content frequency and build a stronger presence on social media.",
  },
  {
    name: "SOCIAL FULL PRESENCE",
    price: "from $1,000/mo",
    tagline:
      "A consistent, high-volume social presence designed for businesses ready to make content a major part of their brand.",
    features: [
      "3–4 feed posts/week OR 3–4 Reels/week",
      "story content",
      "captions + social SEO",
      "content scheduling",
      "monthly content calendar",
      "content planning",
    ],
    bestFor: "Businesses that want frequent, polished content without committing to full marketing management.",
  },
];

function PackageGroup({ label, packages }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.15em] text-sand">{label}</p>
      <div className="mt-8 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
        {packages.map((p, i) => (
          <div key={p.name} className="group relative flex h-full flex-col">
            {p.popular && (
              <p className="absolute bottom-full left-0 mb-2 inline-block w-fit rounded-full border border-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">
                Most Popular
              </p>
            )}
            <h3 className="font-accent text-2xl tracking-wide text-paper transition-colors group-hover:text-sand md:text-3xl">
              {String(i + 1).padStart(2, "0")} / {p.name}
            </h3>
            <p className="mt-2 font-accent text-base text-sand">{p.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">{p.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {p.features.map((f, idx) => (
                <span key={f}>
                  {f}
                  {idx < p.features.length - 1 && (
                    <>
                      {" "}
                      <span className="font-black text-base">•</span>{" "}
                    </>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              <span className="text-paper">Best for:</span> {p.bestFor}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block w-fit border-b border-paper/40 pb-0.5 pt-4 text-xs uppercase tracking-[0.2em] text-paper hover:text-sand"
            >
              Inquire →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

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
          <div className="w-full">
            <div className="mx-auto max-w-[1200px]">
              <h2 className="text-4xl text-paper md:text-5xl" style={{ fontFamily: "var(--font-body)" }}>
                Find your fit
              </h2>
              <p className="mt-2 text-lg text-sand" style={{ fontFamily: "var(--font-body)" }}>
                Packages
              </p>

              <div className="mt-16">
                <PackageGroup label="Social Media Marketing" packages={PACKAGES} />
              </div>

              <div className="mt-24 lg:mt-28">
                <PackageGroup label="Social Posting Packages" packages={SOCIAL_PACKAGES} />
              </div>

              <div className="mt-20 w-fit rounded-full bg-sand px-6 py-3 text-center">
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
            <p className="text-lg text-sand" style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic" }}>
              What's included
            </p>
            <h2
              className="mt-2 text-3xl text-paper md:text-4xl"
              style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic", fontWeight: 600 }}
            >
              Every Service,<br />One Partner
            </h2>
            <div className="mt-4 h-px w-10 bg-white/30" />
            <p className="mt-4 max-w-xs text-sm text-paper/80">
              A full suite of marketing support built specifically for boutique fitness studios.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-white/15 bg-charcoal/40 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-white/30 hover:shadow-[0_12px_50px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.16)]"
              >
                <h2 className="font-accent text-xl uppercase tracking-wide text-paper">
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
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-charcoal/40 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-white/30 hover:shadow-[0_12px_50px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.16)] md:p-14 lg:grid lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <p className="text-lg text-sand" style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic" }}>
              Get in touch
            </p>
            <h2
              className="mt-2 text-3xl text-paper md:text-4xl"
              style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic", fontWeight: 600 }}
            >
              Book a Free Consultation
            </h2>
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
