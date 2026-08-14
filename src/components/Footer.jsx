import instagramIcon from "../assets/insta.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-14 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-script text-2xl">Let's talk</p>
          <a
            href="mailto:kelceydelatorre2121@icloud.com"
            className="mt-2 block font-display text-2xl hover:text-sand md:text-3xl"
          >
            kelceydelatorre2121@icloud.com
          </a>
        </div>

        <div className="flex items-end gap-6 text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <a
            href="https://www.instagram.com/pilatesglow.studio/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-sand"
          >
            <img src={instagramIcon} alt="" className="h-15 w-15" />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/kelcey-de-la-torre-066698328/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-sand"
          >
            <img src={linkedinIcon} alt="" className="h-15 w-15" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.15em] text-paper/40">
        © {new Date().getFullYear()} Lotus Socials — Social, Event & Email Marketing for Studios
      </div>
    </footer>
  );
}
