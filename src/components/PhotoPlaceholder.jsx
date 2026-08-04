export default function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-end justify-start overflow-hidden bg-ink ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, var(--color-ink-soft) 0%, var(--color-ink) 65%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 6px)"
      }} />
      <span className="relative z-10 m-4 font-body text-[10px] tracking-[0.2em] uppercase text-paper/50">
        {label}
      </span>
    </div>
  );
}
