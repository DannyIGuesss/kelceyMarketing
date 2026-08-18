import { Link } from "react-router-dom";
import ScoreboardTicker from "../components/ScoreboardTicker";
import heroPhoto from "../assets/Kelcey2.jpg";
import heroBgPhoto from "../assets/main.jpg";
import statementPhoto from "../assets/pgs.jpeg";
import swimmingPhoto from "../assets/swimming.jpg";
import servicePhoto1 from "../assets/4.jpg";
import servicePhoto2 from "../assets/1.jpg";
import servicePhoto3 from "../assets/6.jpg";

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
        <section className="relative flex flex-1 items-end overflow-hidden bg-charcoal">
          <img
            src={heroBgPhoto}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />

          {/* Small top text */}
          <p
            className="absolute left-1/2 top-[10%] z-10 -translate-x-1/2 whitespace-nowrap px-4 text-center font-semibold uppercase tracking-[0.18em] text-paper"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)" }}
          >
            Heart & Glass
          </p>

          {/* Main title + overlapping script "Socials" */}
          <div className="absolute left-1/2 top-[55%] z-10 -translate-x-1/2 px-4 text-center">
            <h1
              className="whitespace-nowrap font-light uppercase leading-none tracking-wide text-paper"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
            >
              Heart & Glass
            </h1>
            <p
              className="font-script leading-none text-paper"
              style={{ fontSize: "clamp(4rem, 8vw, 7rem)", marginTop: "clamp(-1rem, -1vw, 0rem)" }}
            >
              Socials
            </p>
          </div>

          {/* Bottom tagline */}
          <p
            className="absolute left-1/2 top-[89%] z-10 -translate-x-1/2 px-4 text-center uppercase tracking-[0.08em] text-paper sm:whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
          >
            New Marketing Agency — Here To Help Your Business
          </p>
        </section>

        <ScoreboardTicker />
      </div>

      {/* About — photo inset in a sand color-block against charcoal */}
      <section className="bg-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-20 px-6 py-24 md:px-10 md:py-32 lg:flex-row lg:items-center lg:gap-32">
          <div className="w-full lg:w-[38%]">
            <img
              src={heroPhoto}
              alt="Kelcey, founder of Heart & Glass Socials"
              className="h-[380px] w-full rounded-lg object-cover sm:h-[460px] lg:h-[580px]"
            />
          </div>

          <div className="w-full text-paper lg:w-[50%]">
            <div className="relative">
              <p
                className="font-script leading-none text-paper"
                style={{ fontSize: "clamp(4rem, 7vw, 6.5rem)", marginBottom: "clamp(0.5rem, 1.5vw, 1.5rem)" }}
              >
                About
              </p>
              <h2
                className="relative ml-6 font-accent uppercase leading-[0.95] tracking-wide text-paper sm:ml-10"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", marginTop: "clamp(-2rem, -3vw, -1rem)" }}
              >
                The Founder
              </h2>
            </div>

            <div className="mt-8 flex max-w-xl flex-col gap-5 text-base leading-[1.7] text-paper">
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

            <Link to="/experience" className="mt-6 inline-block w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-sand">
              See my experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Purpose — swimming swans as full-bleed section background */}
      <section
        className="relative flex min-h-[680px] flex-col justify-between overflow-hidden bg-cover bg-center py-16 sm:block sm:py-0 lg:min-h-[820px]"
        style={{ backgroundImage: `url(${swimmingPhoto})` }}
      >
        <div className="absolute inset-0 bg-black/20" />

        {/* Heading */}
        <div className="relative z-10 px-6 sm:absolute sm:left-[5%] sm:top-[12%] sm:px-0">
          <div className="relative w-fit">
            <p
              className="font-script leading-none text-paper"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Our
            </p>
            <h2
              className="relative ml-4 font-accent uppercase leading-[0.95] tracking-wide text-paper sm:ml-10"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", marginTop: "clamp(-1.5rem, -2.5vw, -0.75rem)" }}
            >
              Purpose
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="relative z-10 px-6 py-10 sm:absolute sm:left-1/2 sm:top-[53%] sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-8 sm:py-0">
          <div
            className="mx-auto flex max-w-[1050px] flex-col gap-2 text-center font-medium text-paper"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.35rem)", lineHeight: "1.35" }}
          >
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
                  className="mt-3 font-script font-light leading-none text-paper"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
                >
                  {s.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
