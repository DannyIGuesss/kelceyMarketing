import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import pilatesPhoto from "../assets/experience/2.jpg";
import pilatesPhotoLeft from "../assets/shared/6.jpg";
import fvePhoto from "../assets/shared/4.jpg";
import fueVideo from "../assets/experience/fue.mp4";
import triplePhoto from "../assets/experience/triple.JPEG";
import heartPhoto from "../assets/experience/heart.jpg";
import iphoneFrame from "../assets/experience/iphone.png";

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
    quote:
      "Working with Kelcey has been such a valuable part of growing Pilates Glow Studio. She truly understands our vision and has helped make our social media feel more cohesive, elevated, and aligned with our brand. From Reels and social posts to promotional materials and creative ideas, her work has helped us reach more people, gain more views and followers, and build a stronger online presence. Her creativity, attention to detail, and ability to bring ideas to life are incredible. I would highly recommend her to any business looking to build a strong and recognizable brand.",
    name: "Studio Owner",
    studio: "Pilates Glow Studio",
  },
];

export default function Experience() {
  return (
    <>
      {/* Intro — own section, heart.jpg background fades to charcoal by its own bottom edge */}
      <section className="relative flex h-[80vh] flex-col items-center justify-center overflow-hidden bg-charcoal">
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
                  className="relative mb-6 text-center font-script uppercase leading-none text-paper lg:absolute lg:inset-x-0 lg:bottom-full lg:mb-4 lg:mt-0"
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
      <section className="relative flex min-h-175 flex-col justify-center overflow-hidden bg-charcoal px-6 py-24 text-paper md:px-10 md:py-32">
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="px-8 text-center">
            <p className="text-lg text-sand" style={{ fontFamily: "var(--font-body)" }}>
              Kind words
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl" style={{ fontFamily: "var(--font-body)" }}>
              From Past Clients
            </h2>
          </div>
        </div>

        <div className="relative mx-auto mt-12 w-full max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`relative min-h-56 flex-col items-center justify-center overflow-hidden rounded-lg p-4 md:flex md:min-h-[400px] md:p-8 ${
                  i === 1 ? "flex" : "hidden"
                }`}
              >
                <img
                  src={triplePhoto}
                  alt=""
                  className="absolute inset-0 hidden h-full w-full object-cover opacity-99 md:block"
                  style={{ objectPosition: i === 0 ? "left center" : i === 1 ? "center" : "right center" }}
                />
                <div className="absolute inset-0 hidden bg-charcoal/55 md:block" />
                {i === 1 && (
                  <blockquote className="relative z-10 flex min-h-56 w-full max-w-xs flex-col items-center justify-between rounded-2xl border border-[#e3b8c2]/25 bg-charcoal/40 p-6 text-center text-paper shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#e3b8c2]/40 hover:shadow-[0_12px_50px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.16)]">
                    <p className="text-base leading-[1.7] text-paper">
                      <span className="text-paper">"</span>
                      {REVIEWS[0].quote}
                      <span className="text-paper">"</span>
                    </p>
                    <footer className="mt-4 text-[11px] uppercase tracking-[0.2em] text-paper/80">
                      {REVIEWS[0].name} — {REVIEWS[0].studio}
                    </footer>
                  </blockquote>
                )}
                {i === 1 && (
                  <div className="mt-6 text-center lg:hidden">
                    <Link
                      to="/services#contact"
                      className="inline-block rounded-full border border-paper/40 px-5 py-2 text-[14px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-sand hover:text-sand"
                    >
                      Book a Consult
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
