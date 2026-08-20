import instagramIcon from "../assets/shared/insta.png";
import linkedinIcon from "../assets/shared/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-14 text-paper md:px-10">
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl" style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic" }}>
            Let's talk
          </p>
          <a
            href="mailto:heartglasssocials@gmail.com"
            className="mt-2 block text-2xl hover:text-sand md:text-3xl"
            style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: "italic", fontWeight: 600 }}
          >
            heartglasssocials@gmail.com
          </a>
        </div>

        <div className="flex items-end gap-6 text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <a
            href="https://www.instagram.com/heartglasssocials?utm_source=qr"
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

      <div className="mt-10 w-full border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.15em] text-paper/40">
        © {new Date().getFullYear()} Heart & Glass Socials — Social, Event & Email Marketing for Studios
      </div>
    </footer>
  );
}
