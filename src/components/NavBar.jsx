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
  const isTransparent = pathname === "/" || pathname === "/experience" || pathname === "/services";

  return (
    <header
      className={`z-50 text-paper ${
        isTransparent
          ? "absolute inset-x-0 top-0 bg-transparent"
          : "sticky top-0 bg-charcoal border-b border-white/10"
      }`}
    >
      <nav className="relative flex items-center justify-between px-6 py-5 min-[1400px]:px-12">
        <Link
          to="/"
          className="hidden shrink-0 font-semibold uppercase tracking-[0.18em] text-paper md:inline-block"
          style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}
        >
          Heart & Glass
        </Link>

        <ul className="hidden gap-8 min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:flex min-[1400px]:-translate-x-1/2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-[14px] uppercase tracking-[0.2em] transition-colors hover:text-sand ${
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
          className="hidden rounded-full border border-paper/40 px-5 py-2 text-[14px] uppercase tracking-[0.2em] transition-colors hover:border-sand hover:text-sand min-[1400px]:inline-block"
        >
          Book a Consult
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex flex-col gap-1.5 min-[1400px]:hidden"
        >
          <span className="h-px w-6 bg-paper" />
          <span className="h-px w-6 bg-paper" />
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={`absolute inset-x-0 top-full flex flex-col gap-1 overflow-hidden border-t border-white/10 bg-charcoal px-6 shadow-xl transition-all duration-300 ease-out min-[1400px]:hidden ${
          open ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
        }`}
      >
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
    </header>
  );
}
