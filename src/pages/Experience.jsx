import { useEffect, useRef } from "react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import pilatesPhoto from "../assets/2.jpg";
import pilatesPhotoLeft from "../assets/6.jpg";
import fvePhoto from "../assets/4.jpg";
import fueVideo from "../assets/fue.mp4";
import triplePhoto from "../assets/triple.JPEG";
import heartPhoto from "../assets/heart.jpg";
import iphoneFrame from "../assets/iphone.png";

function FueVideo({ src, className = "pointer-events-none w-full object-contain", style }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };

    startVideo();

    const interval = window.setInterval(() => {
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      className={className}
      style={style}
    />
  );
}

const WORK = [
  {
    name: "Pilates Glow Studio",
    tag: "Social Media + Event Marketing",
    blurb:
      "For over a year, I have worked alongside Pilates Glow Studio as a Marketing and Social Media Content Creator, helping strengthen the studio’s digital presence and build an engaged local community. During that time, I contributed to growing the studio’s Instagram following from approximately 300 followers to more than 2.7K.",
    blurb2:
    "My work has included developing content calendars, creating reels and posts, designing branded graphics, supporting promotional campaigns and membership offers, coordinating partnerships, and marketing special events. By creating consistent, visually cohesive content and implementing strategic marketing initiatives, I helped increase brand awareness, audience engagement, and community connections while supporting the studio’s continued membership and business growth.",
    photoLabel: "Pilates Glow Studio — work sample",
    photo: pilatesPhoto,
  },
  {
    name: "FUE",
    tag: "Email + Social Media",
    blurb:
      "I worked with a small business client to establish and develop their Instagram presence from the ground up. My role included creating a comprehensive social media strategy, planning content, developing reel concepts, designing feed mockups, and building a structured posting schedule aligned with the brand’s visual identity.",
    blurb2:
    "By creating a cohesive content calendar and long-term social media roadmap, I helped give the client a clear direction for their online presence. The result was a polished and professional Instagram foundation designed to strengthen brand awareness, maintain visual consistency, and support future audience growth and engagement.",
    photoLabel: "FVE — work sample",
    photo: fvePhoto,
  },
];

const REVIEWS = [
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Pilates Glow Studio",
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "FUE",
  },
  {
    quote: "Placeholder testimonial — real client quote goes here once collected.",
    name: "Studio Owner",
    studio: "Client Name",
  },
];

export default function Experience() {
  return (
    <>
      {/* Intro — own section, heart.jpg background fades to charcoal by its own bottom edge */}
      <section className="relative flex h-[85vh] flex-col items-center justify-center overflow-hidden bg-charcoal">
        <img src={heartPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-10">
          <h1
            className="font-light uppercase leading-none tracking-wide text-paper"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 3.25vw, 2.75rem)" }}
          >
            Experience & Work
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-paper">
            A look at the studios I've worked with and what we built together.
          </p>
        </div>
      </section>

      {/* Pilates Glow Studio — plain background, no image */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 lg:pb-32 lg:pt-12">
          {/* Mobile-only heading — appears above the images per the mobile stacking order */}
          <h2
            className="text-center font-script font-light leading-none text-paper lg:hidden"
            style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
          >
            {WORK[0].name}
          </h2>

          <div className="mt-8 flex flex-col items-center gap-10 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Left image — sits high */}
            <div className="w-full shrink-0 sm:max-w-[320px] lg:w-[305px]">
              {WORK[0].photo ? (
                <img
                  src={pilatesPhotoLeft}
                  alt={WORK[0].photoLabel}
                  className="aspect-[2/3] w-full rounded-lg object-cover"
                />
              ) : (
                <PhotoPlaceholder label={WORK[0].photoLabel} className="h-80 md:h-90" />
              )}
            </div>

            {/* Center content */}
            <div className="text-center lg:flex-1 lg:pt-8">
              <h2
                className="hidden font-script font-light leading-none text-paper lg:block"
                style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
              >
                {WORK[0].name}
              </h2>
              <div
                className="mx-auto mt-6 max-w-[460px] text-paper lg:mt-10"
                style={{ fontSize: "1.05rem", lineHeight: "1.3" }}
              >
                <p>{WORK[0].blurb}</p>
                <p className="mt-4">{WORK[0].blurb2}</p>
              </div>
            </div>

            {/* Right image — offset lower */}
            <div className="w-full shrink-0 sm:max-w-[300px] lg:w-[290px]">
              <img
                src={pilatesPhoto}
                alt=""
                className="aspect-[2/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 pb-16 pt-24 lg:min-h-[640px] lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start justify-items-center gap-10 lg:grid-cols-[260px_1fr_340px] lg:justify-items-stretch lg:gap-10">
            {/* Left video — playing inside an iPhone mockup. The iphone.png has an
                opaque baked-in wallpaper on its screen, so the video must be layered
                ABOVE the frame image (not underneath) to actually cover it. */}
            <div className="relative mx-auto w-[240px] sm:w-[250px] lg:w-[255px]">
              {/* Phone image — bottom layer */}
              <img
                src={iphoneFrame}
                alt=""
                className="pointer-events-none relative z-10 block h-auto w-full"
              />

              {/* Screen mask — clips the video so it sits inside the screen only,
                  keeping the phone's left/right/top/bottom bezel visible */}
              <div
                className="pointer-events-none absolute z-20 overflow-hidden bg-black"
                style={{ top: "1.6%", left: "7%", width: "86%", height: "97%", borderRadius: "34px" }}
              >
                <FueVideo src={fueVideo} className="pointer-events-none h-full w-full object-cover" />
              </div>

              {/* Recreated Dynamic Island — above the video */}
              <div
                className="pointer-events-none absolute left-1/2 top-[3%] z-30 h-[4.5%] w-[30%] -translate-x-1/2 rounded-full bg-black"
              />
            </div>

            {/* Center description */}
            <div className="flex h-full items-center justify-center px-4 lg:px-0">
              <div
                className="relative mx-auto max-w-[460px] text-center text-paper"
                style={{ fontSize: "1.15rem", lineHeight: "1.35" }}
              >
                <h2
                  className="relative mb-6 text-center font-accent uppercase leading-none text-paper lg:absolute lg:inset-x-0 lg:bottom-full lg:mb-4 lg:mt-0"
                  style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
                >
                  {WORK[1].name}
                </h2>
                <p>{WORK[1].blurb}</p>
                <p className="mt-4">{WORK[1].blurb2}</p>
              </div>
            </div>

            {/* Right image */}
            <div className="mx-auto w-full max-w-[340px]">
              <img src={fvePhoto} alt="" className="w-full rounded-lg object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="flex min-h-175 flex-col justify-center overflow-hidden bg-charcoal px-6 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="px-8 text-center">
            <p className="font-script text-lg text-sand">Kind words</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">From Past Clients</h2>
          </div>

          <div className="relative mt-12 grid w-full">
            <div className="col-start-1 row-start-1 hidden opacity-99 md:flex">
              <img src={triplePhoto} alt="" className="h-full w-full grayscale rounded-lg object-cover" />
            </div>
            <div className="relative col-start-1 row-start-1 flex h-full flex-col justify-center px-4">
              <div className="grid gap-10 md:grid-cols-3">
                {REVIEWS.map((r, i) => (
                  <blockquote
                    key={i}
                    className="flex min-h-56 flex-col items-center justify-between rounded-lg border border-ink bg-paper/80 p-6 text-center text-ink shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                  >
                    <p className="font-display text-lg leading-snug">"{r.quote}"</p>
                    <footer className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ink/60">
                      {r.name} — {r.studio}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
