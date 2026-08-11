import { Link } from "react-router-dom";
import ScoreboardTicker from "../components/ScoreboardTicker";
import heroPhoto from "../assets/randomwomen.jpg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2">
        <div className="flex h-[70vh] items-center justify-center bg-ink md:h-[85vh]">
          <img
            src={heroPhoto}
            alt="Kelcey — hero portrait"
            className="h-3/4 w-3/4 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 bg-ink px-8 py-16 text-paper md:px-16">
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
        <div>
          <p className="font-script text-lg text-clay">About</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">
            Instructor first. <br /> Marketer by trade.
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-ink">
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
              { label: "Social Media", desc: "Content calendars, posting, community management, monthly analytics." },
              { label: "Event Marketing", desc: "Grand openings, studio launches, influencer events, weddings." },
              { label: "Email Marketing", desc: "Newsletters, promotional sends, event announcements." },
            ].map((s) => (
              <div
                key={s.label}
                className="overflow-hidden rounded-lg border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-line hover:shadow-2xl"
              >
                <h3 className="font-display text-xl">{s.label}</h3>
                <p className="mt-2 text-sm text-ink">{s.desc}</p>
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
