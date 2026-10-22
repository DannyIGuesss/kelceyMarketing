import ContactForm from "../components/ContactForm";
import soloPhoto from "../assets/services/solo.jpg";
import oceanPhoto from "../assets/services/ocean.jpg";

const faqFontStyle = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 };

const PACKAGES = [
  {
    number: "03",
    name: "STARTER SOCIAL",
    price: "from $900/mo",
    tagline: "Consistent content. Thoughtful strategy. A stronger online presence.",
    description:
      "A foundational social media package designed to keep your brand consistent, polished, and engaging across your platforms.",
    features: [
      "4-6 Reels",
      "2-4 Feed Posts",
      "monthly content calendar",
      "promotional graphics",
      "light community engagement",
      "monthly insights",
    ],
    bestFor: "Small businesses looking to build consistency and create a polished social media presence.",
  },
  {
    number: "04",
    name: "GROWTH PARTNER",
    price: "from $1,250/mo",
    popular: true,
    tagline: "More content. More strategy. More room to grow.",
    description:
      "A content-forward social media package created for businesses ready to increase their visibility, connect with their audience, and take their social presence to the next level.",
    features: [
      "6-8 Reels",
      "3-5 Feed Posts",
      "Story content",
      "content strategy",
      "community engagement",
      "campaign planning",
      "analytics + monthly insights",
    ],
    bestFor: "Growing businesses ready for a more strategic, hands-on approach to social media.",
  },
  {
    number: "05",
    name: "STUDIO PARTNER",
    price: "$1,750/mo",
    tagline: "Full-service content + marketing, all in one place.",
    description:
      "Your dedicated social media and marketing partner. This package combines consistent content creation with ongoing strategy, campaigns, and marketing support.",
    features: [
      "8-10 Reels",
      "4-6 Feed Posts",
      "3-5 Story Sets/Week",
      "content days",
      "weekly email marketing",
      "campaigns + promotions",
      "community management",
      "monthly reporting",
    ],
    bestFor:
      "Studios, hospitality businesses, lifestyle brands, and established businesses looking for full-service marketing support.",
  },
];

const POSTING_SERVICES = [
  {
    number: "01",
    name: "CONTENT DAY",
    price: "from $300",
    tagline: "One-time content creation.",
    description:
      "A full day of content, created with your brand in mind. Need fresh content without committing to monthly management? A content day gives your business a dedicated session to capture a variety of photos and videos that can be used across your social platforms.",
    includesList: [
      "Content planning",
      "On-site photo + video creation",
      "Reel concepts",
      "Short-form video footage",
      "Lifestyle + behind-the-scenes content",
      "Content ideas tailored to your brand",
      "Organized content for future use",
    ],
    features: [
      "1–1.5 hour content session",
      "3–5 edited Reels",
      "10–15 edited photos",
      "shot-lists + ideas provided",
      "delivered via a shared folder",
    ],
    bestFor: "Businesses preparing for a launch, promotion, event, or simply looking to refresh their content library.",
    note: "Additional hours are $100 each. Content Day pricing may vary based on location, time, and scope.",
  },
  {
    number: "02",
    name: "CUSTOM PACKAGE",
    tagline: "Pricing tailored to your needs",
    description:
      "No two businesses are the same, and your marketing strategy shouldn't be either. This fully customizable package is designed around your brand's unique goals, creative vision, and marketing needs.",
    description2:
      "Whether you're looking for content creation, social media management, strategic planning, or a combination of services, we'll work together to create a personalized marketing experience that makes sense for your business.",
    howItWorksLabel: "How it works:",
    howItWorks:
      "Reach out through email and tell us a little about your business, goals, and what you're looking for. From there, we'll discuss your needs and create a custom proposal with services, deliverables, and pricing tailored specifically to you.",
  },
];

function PackageGroup({ label, packages }) {
  return (
    <div>
      <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-paper">{label}</p>
      <div className="mt-8 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`group relative flex h-full flex-col ${p.popular ? "mt-8 lg:mt-0" : ""}`}
          >
            {p.popular && (
              <p className="absolute bottom-full left-0 mb-2 inline-block w-fit rounded-full border border-sand px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-sand">
                Most Popular
              </p>
            )}
            <h3
              className="font-bold uppercase leading-none tracking-wide text-paper transition-colors group-hover:text-sand"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              {p.number} / {p.name}
            </h3>
            <p className="tracking-[0.15em] mt-6 text-[14px] font-bold uppercase leading-snug text-paper">
              {p.tagline} {p.price}.
            </p>
            {p.description && (
              <p className="tracking-[0.15em] mt-5 text-[14px] font-bold leading-relaxed text-paper uppercase">{p.description}</p>
            )}
            <p className="tracking-[0.15em] mt-5 text-[14px] font-bold text-paper uppercase">Includes:</p>
            <p className="tracking-[0.15em] mt-1 text-[14px] font-bold leading-relaxed text-paper uppercase">
              {p.features.map((f, idx) => (
                <span key={f}>
                  {f}
                  {idx < p.features.length - 1 && (
                    <>
                      {" "}
                      <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span>{" "}
                    </>
                  )}
                </span>
              ))}
            </p>
            <p className="tracking-[0.15em] mt-5 text-[14px] font-bold leading-relaxed text-paper uppercase">
              <span className="tracking-[0.15em] font-bold text-paper">Best for:</span> {p.bestFor}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block w-fit border-b border-paper/40 pb-0.5 pt-4 text-[14px] font-bold uppercase tracking-[0.2em] text-paper hover:text-sand"
            >
              Inquire →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostingServiceGroup({ services }) {
  return (
    <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
      {services.map((s) => (
        <div key={s.name} className="flex h-full flex-col">
          <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-paper">{s.eyebrow}</p>
          <h3 className="mt-6 font-bold uppercase leading-none tracking-wide text-paper" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            {s.number ? `${s.number} / ${s.name}` : s.name}
          </h3>
          <p className="tracking-[0.15em] mt-6 text-[14px] font-bold uppercase leading-snug text-paper">
            {s.price ? `${s.tagline} ${s.price}.` : s.tagline}
          </p>
          {s.description && (
            <p className="tracking-[0.15em] mt-5 text-[14px] font-bold leading-relaxed text-paper uppercase">{s.description}</p>
          )}
          {s.description2 && (
            <p className="tracking-[0.15em] mt-4 text-[14px] font-bold leading-relaxed text-paper uppercase">{s.description2}</p>
          )}

          {s.includesList && (
            <>
              <p className="tracking-[0.15em] mt-5 text-[14px] font-bold text-paper uppercase">Includes:</p>
              <p className="tracking-[0.15em] mt-1 text-[14px] font-bold leading-relaxed text-paper uppercase">
                {s.includesList.map((f, idx) => (
                  <span key={f}>
                    {f}
                    {idx < s.includesList.length - 1 && (
                      <>
                        {" "}
                        <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span>{" "}
                      </>
                    )}
                  </span>
                ))}
              </p>
            </>
          )}

          {s.bestFor && (
            <p className="tracking-[0.15em] mt-5 text-[14px] font-bold leading-relaxed text-paper uppercase">
              <span className="tracking-[0.15em] font-bold text-paper">Best for:</span> {s.bestFor}
            </p>
          )}
          {s.note && <p className="tracking-[0.15em] mt-3 text-[14px] font-bold italic text-paper uppercase">{s.note}</p>}

          {s.features && (
            <ul className="mt-5 space-y-1.5">
              {s.features.map((f) => (
                <li key={f} className="text-[14px] font-bold uppercase tracking-wide text-paper">
                  + {f}
                </li>
              ))}
            </ul>
          )}

          {s.howItWorks && (
            <>
              <p className="tracking-[0.15em] mt-5 text-[14px] font-bold text-paper uppercase">{s.howItWorksLabel}</p>
              <p className="tracking-[0.15em] mt-1 text-[14px] font-bold leading-relaxed text-paper uppercase">{s.howItWorks}</p>
            </>
          )}

          <a
            href="#contact"
            className="mt-auto inline-block w-fit border-b border-paper/40 pb-0.5 pt-4 text-[14px] font-bold uppercase tracking-[0.2em] text-paper hover:text-sand"
          >
            Inquire →
          </a>
        </div>
      ))}
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

      <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}>
      {/* Pricing — editorial layout over full-bleed ocean background */}
      <section className="relative overflow-hidden bg-charcoal">
        <img src={oceanPhoto} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />

        <div className="relative z-10 px-6 py-20 md:px-10 md:py-28 lg:flex lg:min-h-[900px] lg:items-center lg:py-32">
          <div className="w-full">
            <div className="mx-auto max-w-[1200px]">
              <h2
                className="font-bold uppercase leading-none tracking-wide text-paper"
                style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Our Marketing
              </h2>
              <p
                className="tracking-[0.15em] font-script leading-none text-paper"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "clamp(0.25rem, 1vw, 1rem)" }}
              >
                Packages
              </p>

              <div className="mt-16">
                <PostingServiceGroup services={POSTING_SERVICES} />
              </div>

              <div className="mt-24 lg:mt-28">
                <PackageGroup label="Social Media Marketing" packages={PACKAGES} />
              </div>

              <div className="mt-20 w-fit rounded-full bg-sand px-6 py-3 text-center">
                <p className="text-[14px] uppercase tracking-[0.2em] text-ink">
                  New Client Marketing Setup — $250 One-Time Onboarding Fee
                </p>
              </div>
              <p className="tracking-[0.15em] mt-6 max-w-md text-[14px] font-bold text-paper uppercase">
                Account audit <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Competitor research{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Brand review{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Target audience development{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Content strategy{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Account optimization{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Analytics setup{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> Shared content folders{" "}
                <span className="tracking-[0.15em] font-black text-[14px] uppercase">•</span> First monthly marketing calendar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-charcoal px-6 pt-24 pb-10 md:px-10 md:pt-32 md:pb-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="tracking-[0.15em] text-[14px] font-bold text-paper uppercase" style={faqFontStyle}>
            FAQS
          </p>
          <h2 className="tracking-[0.15em] mt-2 text-[14px] text-paper uppercase" style={faqFontStyle}>
            a few things to know...
          </h2>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="tracking-[0.15em] text-[14px] text-paper uppercase" style={faqFontStyle}>
                How do I know what package to choose?
              </h3>
              <p className="tracking-[0.15em] mt-1 max-w-xl text-[14px] font-bold leading-relaxed text-paper uppercase">
                Not sure which package is the best fit?
              </p>
              <p className="tracking-[0.15em] mt-4 max-w-sm text-[14px] font-bold leading-relaxed text-paper uppercase">
                That's okay! We'll talk through what kind of support you actually need during your
                consultation call.
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.15em] max-w-[260px] text-[14px] text-paper uppercase" style={faqFontStyle}>
                How much control over content will I have?
              </h3>
              <p className="tracking-[0.15em] mt-3 max-w-xl text-[14px] font-bold leading-relaxed text-paper uppercase">
                You get as much (or as little!) control over your content as you'd like!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-charcoal px-6 pt-10 pb-24 md:px-10 md:pt-12 md:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="tracking-[0.15em] text-[14px] leading-tight text-paper uppercase" style={faqFontStyle}>
            Here's what <span style={{ fontStyle: "italic" }}>working</span>
            <br />
            <span style={{ fontStyle: "italic" }}>together</span> looks like.....
          </h2>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="tracking-[0.15em] text-[14px] text-paper uppercase" style={faqFontStyle}>
                01. First, you'll submit an inquiry form.
              </h3>
              <p className="tracking-[0.15em] mt-3 max-w-xl text-[14px] font-bold leading-relaxed text-paper uppercase">
                Click the link below to submit your inquiry form, which helps me learn a bit more
                about you &amp; your business.
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.15em] text-[14px] text-paper uppercase" style={faqFontStyle}>
                02. Then, book a consultation call or in-person meeting.
              </h3>
              <p className="tracking-[0.15em] mt-3 max-w-xl text-[14px] font-bold leading-relaxed text-paper uppercase">
                After you've submitted your inquiry form, I'll send over a booking link to
                schedule a 30-min consultation call to cover packages, your business, and next
                steps.
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.15em] text-[14px] text-paper uppercase" style={faqFontStyle}>
                03. Choose a package, and we'll onboard you.
              </h3>
              <p className="tracking-[0.15em] mt-3 max-w-xl text-[14px] font-bold leading-relaxed text-paper uppercase">
                Once you've chosen a package to move forward with, you'll sign a contract and pay
                your invoice so we can begin onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-charcoal/40 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-white/30 hover:shadow-[0_12px_50px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.16)] md:p-14 lg:grid lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <p className="tracking-[0.15em] text-[14px] font-bold text-paper uppercase" style={faqFontStyle}>
              Get in touch
            </p>
            <h2 className="tracking-[0.15em] mt-2 text-[14px] text-paper uppercase" style={faqFontStyle}>
              Book a Free Consultation
            </h2>
            <p className="tracking-[0.15em] mt-4 max-w-sm text-[14px] font-bold text-paper uppercase">
              Tell me a bit about your studio and what you're looking for — I'll follow up to set up
              a time to talk.
            </p>
            <div className="mt-8 h-px w-16 bg-paper/30" />
            <p className="mt-6 text-[14px] font-bold uppercase tracking-[0.2em] text-paper">
              Response within 1–2 business days
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
