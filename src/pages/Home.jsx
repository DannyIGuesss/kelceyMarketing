import { Link } from "react-router-dom";
import heroPhoto from "../assets/home/Kelcey2.jpg";
import heroBgPhoto from "../assets/home/main.jpg";
import swimmingPhoto from "../assets/home/swimming.jpg";
import servicePhoto1 from "../assets/shared/4.jpg";
import servicePhoto2 from "../assets/home/1.jpg";
import servicePhoto3 from "../assets/shared/6.jpg";

const SERVICES = [
  { photo: servicePhoto1, label: "Social Media" },
  { photo: servicePhoto2, label: "Event Marketing" },
  { photo: servicePhoto3, label: "Email Marketing" },
];

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed photo, oversized stacked masthead type. Wrapped with the
          ticker in a fixed h-screen flex column so the hero shrinks to fill exactly
          (100vh - ticker height) — the first screenful always ends at the ticker. */}
      <div className="flex h-screen flex-col">
        <section className="relative flex flex-1 flex-col items-center justify-between overflow-hidden bg-charcoal px-6 py-16 text-center">
          <img
            src={heroBgPhoto}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />

          {/* Small top text */}
          <p
            className="relative z-10 mx-auto w-full font-semibold uppercase tracking-[0.18em] text-paper lg:w-auto lg:whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)" }}
          >
            Heart & Glass
          </p>

          {/* Main title + overlapping script "Socials" */}
          <div className="relative z-10 mx-auto w-full lg:w-auto">
            <h1
              className="font-light uppercase leading-none tracking-wide text-paper lg:whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
            >
              Heart & Glass
            </h1>
            <p
              className="font-script leading-none text-paper"
              style={{ fontSize: "clamp(7rem, 14vw, 11.5rem)", marginTop: "clamp(0.5rem, 1vw, 1.5rem)" }}
            >
              Socials
            </p>
          </div>

          {/* Bottom tagline */}
          <p
            className="relative z-10 mx-auto w-full uppercase tracking-[0.08em] text-paper lg:w-auto lg:whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
          >
            New Marketing Agency — Here To Help Your Business
          </p>
        </section>
      </div>

      {/* About — photo inset in a sand color-block against charcoal */}
      <section className="bg-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-20 px-6 py-24 md:px-10 md:py-32 lg:flex-row lg:items-center lg:gap-32">
          <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-lg lg:mx-0">
            <img
              src={heroPhoto}
              alt="Kelcey, founder of Heart & Glass Socials"
              className="h-[580px] min-h-[580px] w-full object-cover"
            />
          </div>

          <div className="w-full text-paper lg:w-[50%]">
            <div className="relative mx-auto w-fit text-center lg:mx-0 lg:w-auto lg:text-left">
              <p
                className="font-script leading-none text-paper"
                style={{ fontSize: "clamp(4rem, 7vw, 6.5rem)" }}
              >
                About
              </p>
              <h2
                className="relative font-accent uppercase leading-[0.95] tracking-wide text-paper lg:ml-10"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", marginTop: "clamp(0.5rem, 1vw, 1.5rem)" }}
              >
                The Founder
              </h2>
            </div>

            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5 text-center text-base leading-[1.7] text-paper lg:mx-0 lg:text-left">
              <p>
                Hi, I’m Kelcey — the founder and creative behind Heart & Glass Socials, a marketing agency rooted in thoughtful strategy, elevated content, and authentic storytelling.
              </p>
              <p>
                With a background in marketing, hospitality, events, and social media, I’ve had the opportunity to work closely with brands across the boutique fitness, wedding, hospitality, and lifestyle industries. My experience has taught me that beautiful content is only one part of a strong brand; the real magic happens when creativity is paired with intention, consistency, and a strategy that feels true to the business behind it.
              </p>
              <p>
                I earned my degree in Business Administration with a concentration in Marketing, and throughout my career, I’ve developed hands-on experience in social media management, content creation, digital marketing, event promotion, brand development, and community engagement.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <Link to="/experience" className="mt-6 inline-block w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-sand">
                See my experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose — swimming swans as full-bleed section background */}
      <section
        className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-16 sm:px-8 lg:min-h-[820px]"
        style={{ backgroundImage: `url(${swimmingPhoto})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />

        <div className="relative z-10 mx-auto w-full text-center sm:w-[70%]">
          <div className="relative inline-block">
            <p
              className="font-script leading-none text-paper"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Our
            </p>
            <h2
              className="relative font-accent uppercase leading-[0.95] tracking-wide text-paper"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", marginTop: "clamp(0.5rem, 1vw, 1.5rem)" }}
            >
              Purpose
            </h2>
          </div>

          <div className="mx-auto mt-8 flex max-w-[650px] flex-col gap-5 text-left text-base leading-[1.7] text-paper">
            <p>
              I created Heart & Glass Socials to bring a more personal approach to marketing. I love getting to know the heart behind a business, understanding what makes it different, and translating that into a digital presence people genuinely want to connect with.
            </p>
            <p>
              My approach is feminine, intentional, detail-oriented, and always tailored to the individual brand. Whether I’m creating a content strategy, planning a campaign, capturing a Reel, or refreshing a social presence, my goal is simple: to make your brand feel as beautiful, memorable, and intentional online as it does in real life. Based in the Bay Area, California, and available to work with brands near and far.
            </p>
          </div>
        </div>
      </section>
      {/* Services — script heading over three image cards */}
      <section className="bg-charcoal px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center font-script font-light leading-none text-paper"
            style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}
          >
            The Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-20">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                to="/services"
                className="group mx-auto block w-full max-w-[300px] text-center"
              >
                <img
                  src={s.photo}
                  alt=""
                  className="aspect-[3/4] w-full rounded-[3rem] object-cover shadow-black/0 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/50"
                />
                <p
                  className="mt-6 font-script font-light leading-none text-paper"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", wordSpacing: "clamp(0.5rem, 1vw, 1.5rem)" }}
                >
                  {s.label}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-block w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] text-paper hover:text-sand"
            >
              See services & pricing →
            </Link>
          </div>

          <div className="mt-12 text-center lg:hidden">
            <Link
              to="/services#contact"
              className="inline-block rounded-full border border-paper/40 px-5 py-2 text-[14px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-sand hover:text-sand"
            >
              Book a Consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
