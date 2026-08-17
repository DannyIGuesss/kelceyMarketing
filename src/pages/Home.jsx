import { Link } from "react-router-dom";
import ScoreboardTicker from "../components/ScoreboardTicker";
import heroPhoto from "../assets/kelcey.jpg";
import heroBgPhoto from "../assets/workout.JPG";
import statementPhoto from "../assets/pgs.jpeg";
import fueVideo from "../assets/fue.mp4";
import vid1Video from "../assets/vid1.mp4";
import approachPhoto1 from "../assets/1.jpg";
import approachPhoto2 from "../assets/10.jpg";
import approachPhoto3 from "../assets/9.jpg";
import approachPhoto4 from "../assets/5.jpg";
import logo from "../assets/logo.png";

function ServicePanel({ video, label, bg, light, className = "", heightClass = "h-72 md:h-96" }) {
  return (
    <Link
      to="/services"
      className={`group block rounded-lg p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5 ${bg} ${className}`}
    >
      <div className="overflow-hidden rounded-md">
        <video
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch(() => {});
            }
          }}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 15) e.currentTarget.currentTime = 0;
          }}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${heightClass}`}
        />
      </div>
      <div className={`mt-4 flex items-center justify-between ${light ? "text-ink" : "text-paper"}`}>
        <span className="font-display text-sm uppercase tracking-[0.15em]">{label}</span>
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

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
            alt="Kelcey instructing at Pilates Glow Studio"
            className="absolute inset-0 h-full w-full grayscale object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />

          <div className="relative z-10 w-full px-6 pb-14 pt-32 md:px-12 md:pb-20">
            <div className="mx-auto max-w-6xl">
              <p className="font-script text-lg text-sand">Heart & Glass Social Marketing</p>
              <h1 className="mt-3 font-display leading-[0.9] tracking-tight text-paper">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">SOCIAL MEDIA</span>
                <span className="block font-script text-4xl italic text-sand sm:text-5xl md:text-6xl">
                  that feels like your<br></br>brand and grows
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">YOUR BUSINESS</span>
              </h1>
              <div className="mt-8">
                <Link
                  to="/services#contact"
                  className="inline-block rounded-full bg-sand px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-sand-deep"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ScoreboardTicker />
      </div>

      {/* About — photo inset in a sand color-block against charcoal */}
      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-lg bg-sand md:-inset-6" />
              <img
                src={heroPhoto}
                alt="Kelcey — portrait"
                className="relative aspect-[2/3] w-full grayscale rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 text-paper md:col-span-7">
            <p className="font-script text-lg text-sand">About</p>
            <h2 className="font-display text-3xl md:text-4xl">
              <span className="font-script italic text-sand">Meet the Founder</span>
            </h2>
            <p>
              Hi, I’m Kelcey — the founder and creative behind Heart & Glass Socials, a marketing agency rooted in thoughtful strategy, elevated content, and authentic storytelling.
            </p>
            <p>
              With a background in marketing, hospitality, events, and social media, I’ve had the opportunity to work closely with brands   across the boutique fitness, wedding, hospitality, and lifestyle industries. My experience has taught me that beautiful content is only one part of a strong brand, the real magic happens when creativity is paired with intention, consistency, and a strategy that feels true to the business behind it.
            </p>
            <p>
              I earned my degree in Business Administration with a concentration in Marketing, and throughout my career, I’ve developed hands-on experience in social media management, content creation, digital marketing, event promotion, brand development, and community engagement.
            </p>
            <Link to="/experience" className="w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-sand">
              See my experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Approach — text left, 2x2 image grid right */}
      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-24 md:grid-cols-12 md:gap-8 md:px-10 md:pb-16 md:pt-32">
          <div className="flex flex-col gap-5 text-paper md:col-span-5">
            <img src={logo} alt="Heart & Glass Marketing Agency" className="h-90 w-auto" />
            <p>
              I created Heart & Glass Socials to bring a more personal approach to marketing. I love getting to know the heart behind a business, understanding what makes it different, and translating that into a digital presence people genuinely want to connect with.
            </p>
            <p>
              My approach is feminine, intentional, detail-oriented, and always tailored to the individual brand. Whether I’m creating a content strategy, planning a campaign, capturing a Reel, or refreshing a social presence, my goal is simple: to make your brand feel as beautiful, memorable, and intentional online as it does in real life.
              Based in the Bay Area, California, and available to work with brands near and far.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-7 md:mt-24">
            <img src={approachPhoto1} alt="" className="aspect-square w-full grayscale rounded-lg object-cover" />
            <img src={approachPhoto2} alt="" className="aspect-square w-full grayscale rounded-lg object-cover" />
            <img src={approachPhoto3} alt="" className="aspect-square w-full grayscale rounded-lg object-cover" />
            <img src={approachPhoto4} alt="" className="aspect-square w-full grayscale rounded-lg object-cover" />
          </div>
        </div>
      </section>
      {/* Services — mosaic of color-blocked panels */}
      <section className="bg-charcoal px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="md:w-2/3">
            <p className="font-script text-lg text-sand">What I do</p>
            <h2 className="mt-2 font-display text-4xl tracking-tight text-paper md:text-6xl">The Services</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            <ServicePanel
              video={fueVideo}
              label="Social Media"
              bg="bg-ink-soft"
              className="md:col-span-7"
              heightClass="h-72 md:h-125"
            />
            <ServicePanel
              video={vid1Video}
              label="Event Marketing"
              bg="bg-sand"
              light
              className="md:col-span-5 md:translate-y-10"
              heightClass="h-72 md:h-90"
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <div className="flex flex-col justify-center gap-4 rounded-lg bg-ink-soft p-8 text-paper md:col-span-12">
              <p>
                Two focused offerings, one point of contact — social and events working together instead of in silos.
              </p>
              <Link
                to="/services"
                className="w-fit rounded-full border border-paper/40 px-6 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-sand hover:text-sand"
              >
                View services & pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
