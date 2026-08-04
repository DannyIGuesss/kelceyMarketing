import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Intro" },
  { to: "/experience", label: "Experience" },
  { to: "/services", label: "Services & Pricing" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-script text-xl tracking-wide">
          Kelcey <span className="not-italic font-display text-sm tracking-[0.3em] uppercase align-middle">& Co.</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-sand ${
                  pathname === l.to ? "text-sand" : "text-paper/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/services#contact"
          className="hidden rounded-full border border-paper/40 px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-sand hover:text-sand md:inline-block"
        >
          Book a Consult
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-paper" />
          <span className="h-px w-6 bg-paper" />
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-paper/90"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/services#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full border border-paper/40 px-5 py-2 text-[11px] uppercase tracking-[0.2em]"
            >
              Book a Consult
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
