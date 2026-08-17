import ContactForm from "../components/ContactForm";
import wheatPhoto from "../assets/wheat.jpg";
import content from "../../content/services.json";

const SERVICES = content.categories;
const PACKAGES = content.packages;

function BulletList({ items, separatorClassName = "font-black text-base" }) {
  return items.map((item, i) => (
    <span key={i}>
      {i > 0 && <span className={separatorClassName}> • </span>}
      {item}
    </span>
  ));
}

export default function Services() {
  return (
    <>
      <section className="bg-paper-dim">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 pb-4 pt-20 md:px-10 md:pb-0 md:pt-28">
            <p className="font-script text-lg text-clay">{content.intro.eyebrow}</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">{content.intro.heading}</h1>
            <p className="mt-4 max-w-xl text-ink">{content.intro.description}</p>
          </div>
          <div className="flex h-64 items-center justify-center md:h-auto md:max-h-112.5">
            <img src={wheatPhoto} alt="" className="h-[75%] w-[60%] rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-lg text-clay">Packages</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Find your fit</h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
            <div className="h-80 overflow-hidden rounded-lg md:h-auto">
              <img src={wheatPhoto} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center divide-y-2 divide-ink">
              {PACKAGES.map((p, i) => (
                <div key={p.name} className="group py-6 first:pt-0 last:pb-0">
                  <h3 className="font-accent text-3xl tracking-wide text-ink transition-colors group-hover:text-clay md:text-4xl">
                    {String(i + 1).padStart(2, "0")} / {p.name}
                  </h3>
                  <p className="mt-2 font-display text-sm text-clay">{p.price}</p>
                  <p className="mt-2 max-w-md text-sm text-ink/70">
                    <BulletList items={p.items} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 w-fit rounded-full border border-ink bg-ink px-6 py-3 text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-paper">{content.onboarding.badge}</p>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink">
            <BulletList items={content.onboarding.items} />
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-lg border border-transparent shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-line hover:shadow-2xl"
            >
              <div className="p-8 text-ink">
                <h2 className="font-display text-xl">{s.name}</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-ink" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="font-script text-lg text-clay">{content.contact.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">{content.contact.heading}</h2>
        <p className="mt-4 text-ink">{content.contact.description}</p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
