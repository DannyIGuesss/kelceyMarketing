import ContactForm from "../components/ContactForm";

const SERVICES = [
  {
    name: "Social Media Management",
    items: ["Content calendar", "Posting", "Community management", "Monthly analytics"],
  },
  {
    name: "Event Marketing",
    items: ["Grand openings", "Weddings", "Studio launches", "Influencer events"],
  },
  {
    name: "Email Marketing",
    items: ["Newsletters", "Promotional emails", "Event announcements"],
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "Placeholder $/mo",
    desc: "One core service — good for studios just building a presence.",
  },
  {
    name: "Growth",
    price: "Placeholder $/mo",
    desc: "Two services combined, most popular for active studios.",
    featured: true,
  },
  {
    name: "Full-Service",
    price: "Placeholder $/mo",
    desc: "Social, event, and email marketing fully managed.",
  },
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-20 md:px-10 md:pt-28">
        <p className="font-script text-lg text-clay">What I offer</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Services & Pricing</h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Marketing support built specifically for boutique studios — pick one service or bundle
          all three.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.name} className="border-t border-line pt-6">
              <h2 className="font-display text-xl">{s.name}</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-clay" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-lg text-clay">Packages</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Find your fit</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col gap-4 rounded-lg border p-8 ${
                  p.featured ? "border-ink bg-ink text-paper" : "border-line bg-paper"
                }`}
              >
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className={`font-display text-lg ${p.featured ? "text-sand" : "text-clay"}`}>
                  {p.price}
                </p>
                <p className={`text-sm ${p.featured ? "text-paper/75" : "text-ink/70"}`}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/50">
            Pricing shown is placeholder — replace with real package rates before launch.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="font-script text-lg text-clay">Get in touch</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Book a Free Consultation</h2>
        <p className="mt-4 text-ink/70">
          Tell me a bit about your studio and what you're looking for — I'll follow up to set up
          a time to talk.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
