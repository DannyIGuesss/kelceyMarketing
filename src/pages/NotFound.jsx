import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-32 md:px-10">
      <p className="font-script text-lg text-ink/60">404</p>
      <h1 className="font-display text-4xl md:text-5xl">This page doesn't exist.</h1>
      <p className="max-w-md text-ink">
        The page you're looking for may have moved or the link may be out of date.
      </p>
      <Link
        to="/"
        className="inline-block rounded-full bg-ink px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink-soft"
      >
        Back to Home
      </Link>
    </section>
  );
}
