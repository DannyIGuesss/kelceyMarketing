const RESULTS = [
  "PILATES GLOW STUDIO — ENGAGEMENT +140%",
  "3 SOLD-OUT STUDIO LAUNCHES",
  "12,400 NEWSLETTER OPENS / MONTH",
  "FVE STUDIO — WAITLIST IN 9 DAYS",
  "6 INFLUENCER EVENTS BOOKED OUT",
];

export default function ScoreboardTicker() {
  const track = [...RESULTS, ...RESULTS];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-charcoal py-3">
      <div className="flex w-max animate-[scoreboard_28s_linear_infinite] gap-10">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-display text-sm tracking-wide text-sand md:text-base"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scoreboard {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
