import { Link } from "react-router-dom";
import ScoreboardTicker from "../components/ScoreboardTicker";
import heroPhoto from "../assets/kelcey.jpg";
import fueVideo from "../assets/fue.mp4";
import vid1Video from "../assets/vid1.mp4";
import vid2Video from "../assets/vid2.mp4";
import workoutPhoto from "../assets/workout.JPG";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative grid overflow-hidden bg-charcoal md:grid-cols-2">
        <div className="relative flex h-[70vh] items-center justify-center md:h-[85vh]">
          <img
            src={heroPhoto}
            alt="Kelcey — hero portrait"
            className="h-3/4 w-3/4 rounded-lg object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center gap-6 px-8 py-16 text-paper md:px-16">
          <p className="font-script text-lg text-sand">Social · Event · Email Marketing</p>
          <h1 className="font-display text-4xl leading-[1.05] md:text-5xl">
            Marketing built by someone who's actually in the studio.
          </h1>
          <p className="max-w-md text-paper">
            Hi I'm Kelcey,<br></br>
            <br></br>
            I am a Business Administration graduate from California State University, Monterey Bay, with a concentration in Marketing and a passion for brand growth, digital strategy, and event marketing. Currently, I serve as a Marketing Coordinator for the Léal Hospitality Portfolio, where I manage marketing efforts across multiple properties, including restaurants, wineries, hotels, and event venues. My role includes creating and executing marketing campaigns, managing social media and digital content, supporting brand development, and assisting with event planning and day-of coordination to ensure memorable guest experiences.
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
      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div
            className="h-80 rounded-lg bg-cover bg-center md:h-auto"
            style={{ backgroundImage: `url(${workoutPhoto})` }}
          />
          <div className="flex flex-col gap-5 text-paper">
            <p className="font-script text-lg text-sand">About</p>
            <h2 className="font-display text-3xl md:text-4xl">
              Instructor first. <br /> Marketer by trade.
            </h2>
            <p>
              Prior to this role, I worked as a Social Media Marketer for a Pilates studio, where I promoted membership campaigns, community partnerships, and special events through engaging content and social media strategy. That experience further strengthened my skills in content creation, audience engagement, and brand storytelling.
            </p>
            <p>
              I enjoy combining creativity with strategy to help businesses grow, connect with their audiences, and create meaningful experiences. I am always eager to expand my marketing expertise and contribute innovative ideas that drive results.
            </p>
            <Link to="/experience" className="w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-sand">
              See my experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-charcoal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl text-paper">
          <p className="font-script text-lg text-sand">What I do</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">The Services</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { label: "Social Media", video: fueVideo },
              { label: "Event Marketing", video: vid1Video },
              { label: "Email Marketing", video: vid2Video },
            ].map((s) => (
              <div key={s.label} className="overflow-hidden rounded-lg">
                <Link to="/services" className="mx-auto mt-8 block w-2/3">
                  <video
                    src={s.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 15) e.currentTarget.currentTime = 0;
                    }}
                    className="h-96 w-full rounded-lg border border-white/10 object-cover transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]"
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
            className="mt-12 inline-block w-fit border-b border-paper/40 pb-0.5 text-sm uppercase tracking-[0.15em] hover:text-sand"
          >
            View services & pricing →
          </Link>
        </div>
      </section>
    </>
  );
}
