import { Link } from "react-router-dom";
import ScoreboardTicker from "../components/ScoreboardTicker";
import heroPhoto from "../assets/randomwomen.jpg";
import serviceTempPhoto from "../assets/yogastretch.jpg";
import candlesPhoto from "../assets/candels.jpg";
import stretchPhoto from "../assets/stretch.jpg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative grid overflow-hidden bg-ink md:grid-cols-2">
        <img
          src={stretchPhoto}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative flex h-[70vh] items-center justify-center md:h-[85vh]">
          <img
            src={heroPhoto}
            alt="Kelcey — hero portrait"
            className="h-3/4 w-3/4 object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center gap-6 px-8 py-16 text-paper md:px-16">
          <p className="font-script text-lg text-sand">Social · Event · Email Marketing</p>
          <h1 className="font-display text-4xl leading-[1.05] md:text-5xl">
            Marketing built by someone who's actually in the studio.
          </h1>
          <p className="max-w-md text-paper/75">
            I'm Kelcey — a Pilates instructor with a real passion for marketing. I help
            boutique studios grow their social presence, sell out launches and events, and
            keep clients coming back — without ever selling a class myself. That part's still
            all yours.
          </p>
          <div>
            <Link
              to="/services#contact"
              className="inline-block rounded-full bg-sand px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-sand-deep"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <ScoreboardTicker />

      {/* Short bio teaser */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div
          className="h-80 bg-cover bg-center md:h-auto"
          style={{ backgroundImage: `url(${candlesPhoto})` }}
        />
        <div className="flex flex-col gap-5 text-ink">
          <p className="font-script text-lg text-clay">About</p>
          <h2 className="font-display text-3xl md:text-4xl">
            Instructor first. <br /> Marketer by trade.
          </h2>
          <p>
            Before I ever opened a spreadsheet of engagement metrics, I was teaching Pilates —
            which means I understand a studio's world from the inside: the way a good class
            feels, what makes a member rebook, and what a launch day actually looks like on the
            ground.
          </p>
          <p>
            I studied marketing formally and now bring both sides together — running social
            media, events, and email campaigns for studios so owners can stay focused on
            teaching, not content calendars.
          </p>
          <Link to="/experience" className="w-fit border-b border-ink pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-clay">
            See my experience →
          </Link>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-lg text-clay">What I do</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">The Services</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { label: "Social Media" },
              { label: "Event Marketing" },
              { label: "Email Marketing" },
            ].map((s) => (
              <div key={s.label} className="overflow-hidden rounded-lg">
                <Link to="/services" className="mx-auto mt-8 block w-2/3">
                  <img
                    src={serviceTempPhoto}
                    alt=""
                    className="h-96 w-full border border-ink object-cover transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]"
                  />
                </Link>
                <div className="p-8 pt-6 text-center">
                  <h3 className="font-display text-xl">{s.label}</h3>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-12 inline-block w-fit border-b border-ink pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-clay"
          >
            View services & pricing →
          </Link>
        </div>
      </section>
    </>
  );
}
