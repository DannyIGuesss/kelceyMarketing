export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-script text-2xl">Let's talk</p>
          <a
            href="mailto:hello@kelceyandco.com"
            className="mt-2 block font-display text-2xl hover:text-sand md:text-3xl"
          >
            hello@kelceyandco.com
          </a>
        </div>

        <div className="flex gap-6 text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sand">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sand">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.15em] text-paper/40">
        © {new Date().getFullYear()} Kelcey & Co. — Social, Event & Email Marketing for Studios
      </div>
    </footer>
  );
}
