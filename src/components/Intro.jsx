import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/heroImg4.png";
import { Footer } from "./Footer";
import ImageCard from "./ImageCard";
import ClientPriority from "./ServicesParts/ClientPriority";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const [h1Hovered, setH1Hovered] = useState(false);
  const [h2Hovered, setH2Hovered] = useState(false);
  const [onHeadings, setOnHeadings] = useState(false);
  const cursorRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef([]);
  const introRef = useRef(null);
  const skillTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const brandingTextRef = useRef(null);
  const imageCardRef = useRef(null);
  const clientPriorityRef = useRef(null);

  // ── Custom cursor: track mouse position directly via ref (no re-render) ──
  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.55 } });
    tl.delay(1.5);

    // Image comes from right
    tl.from(imageRef.current, { x: 120, opacity: 0 });

    // Title lines come from right
    tl.from(titleRef.current, { x: 120, opacity: 0 }, "-=0.45"); // overlap animation

    // h3 intro comes from left
    tl.from(introRef.current, { x: -120, opacity: 0 }, "-=0.4");

    // skill text comes from left
    tl.from(skillTextRef.current, { x: -120, opacity: 0 }, "-=0.4");

    // p subtext comes from left
    tl.from(subTextRef.current, { x: -120, opacity: 0 }, "-=0.35");

    // buttons come from below
    tl.from(buttonRef.current, { y: 30, opacity: 0, stagger: 0.1 }, "-=0.3");

    // ── Scroll-triggered animations for sections below hero ──

    // Branding text
    gsap.from(brandingTextRef.current, {
      scrollTrigger: {
        trigger: brandingTextRef.current,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // ImageCard
    gsap.from(imageCardRef.current, {
      scrollTrigger: {
        trigger: imageCardRef.current,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // ClientPriority
    gsap.from(clientPriorityRef.current, {
      scrollTrigger: {
        trigger: clientPriorityRef.current,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ── Custom cursor (headings only) ── */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: onHeadings ? "72px" : "0px",
          height: onHeadings ? "72px" : "0px",
          borderRadius: "50%",
          border: "1.5px solid var(--text-color)",
          background: "transparent",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: onHeadings ? 1 : 0,
          transition: "width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.25s ease",
        }}
      />
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden">
        <div className="w-full max-w-[88vw] mx-auto flex flex-col md:flex-row items-center justify-center gap-[2vw]">
          {/* ── Left Column – Text ── */}
          <div className="w-full md:w-[50%] flex flex-col items-start text-left pl-0 md:pl-[2vw]">
            {/* Intro line */}
            <h3
              ref={introRef}
              className="text-[4.5vw] sm:text-2xl md:text-2xl lg:text-[1.6vw] font-[font4] text-(--text-color)/90 mb-2 leading-tight"
            >
              👋, My name is <span className="font-bold">Jobayer</span>
            </h3>

            {/* Big headings – independent hover swap */}
            <div className="flex flex-col items-start gap-0 leading-[0.9]">

              {/* H1: default solid black → hover: outline only */}
              <h1
                ref={(el) => (titleRef.current[0] = el)}
                className="font-[font2] text-[14vw] md:text-[7vw] lg:text-[7.5vw] tracking-normal select-none"
                style={{
                  color: h1Hovered ? "transparent" : "var(--text-color)",
                  WebkitTextStroke: h1Hovered ? "1.5px var(--text-color)" : "0px transparent",
                  transition: "color 0.35s ease, -webkit-text-stroke-width 0.35s ease",
                  cursor: "none",
                }}
                onMouseEnter={() => { setH1Hovered(true);  setOnHeadings(true);  }}
                onMouseLeave={() => { setH1Hovered(false); setOnHeadings(false); }}
              >
                Web Developer
              </h1>

              {/* H2: default outline only → hover: solid black */}
              <h1
                className="font-[font2] text-[14vw] md:text-[7vw] lg:text-[7.5vw] tracking-normal select-none"
                style={{
                  color: h2Hovered ? "var(--text-color)" : "transparent",
                  WebkitTextStroke: h2Hovered ? "0px transparent" : "1.5px var(--text-color)",
                  transition: "color 0.35s ease, -webkit-text-stroke-width 0.35s ease",
                  cursor: "none",
                }}
                onMouseEnter={() => { setH2Hovered(true);  setOnHeadings(true);  }}
                onMouseLeave={() => { setH2Hovered(false); setOnHeadings(false); }}
              >
                & UI Enthusiast
              </h1>
            </div>

            {/* Skill text */}
            <div ref={skillTextRef} className="mt-2 hidden sm:block">
              <h4 className="text-left text-[3.5vw] sm:text-xl md:text-lg lg:text-[1vw] font-[font4] text-(--text-color)/65 tracking-wide">
                proficient in React, Node.js, Express.js, Next.js, MongoDB and
                more.
              </h4>
            </div>
          </div>

          {/* ── Right Column – Image + Info + Buttons ── */}
          <div className="w-full md:w-[45%] flex flex-col items-center">
            {/* Hero image with bottom gradient mask */}
            <div
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 65%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 65%, transparent 100%)",
              }}
            >
              <img
                ref={imageRef}
                src={image}
                alt="Jobayer"
                className="w-[70vw] sm:w-[50vw] md:w-full lg:w-[90%] h-auto object-cover object-top"
              />
            </div>

            {/* Subtext */}
            {/* <p
              ref={subTextRef}
              className="mt-2 text-center text-[2.8vw] sm:text-lg md:text-sm lg:text-[0.9vw] text-(--text-color)/65 font-[font4] tracking-wide"
            >
              Working freelance in Bangladesh
            </p> */}

            {/* Buttons */}
            <div ref={buttonRef} className="flex flex-row gap-3 mt-4">
              <a
                href="#services"
                className="text-xs sm:text-sm md:text-sm px-5 py-2.5 border rounded-md bg-(--text-color) text-white transition-all duration-300 hover:px-8 shadow-md"
              >
                Hire Developer
              </a>
              <a
                target="_blank"
                href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume@main/Jobayer_mahmud-resume.pdf?download=1"
                className="text-center text-xs sm:text-sm md:text-sm px-5 py-2.5 border-2 rounded-md bg-transparent text-(--text-color) transition-all duration-300 hover:px-8"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full text-(--text-color)">
        <div className="mx-auto max-w-[90vw] pt-20 pb-0">
          <div
            ref={brandingTextRef}
            className="mx-auto max-w-[70vw] text-center"
          >
            <p className="text-center text-[5.4vw] lg:text-[4.2vw] font-[font2]">
              Impactful branding and high-end <br /> productive websites for
              creatives.
            </p>
          </div>
        </div>

        <div
          ref={imageCardRef}
          className="projects w-full min-h-screen flex items-center justify-center mt-12"
        >
          <ImageCard />
        </div>

        <div className="mx-auto max-w-[90vw] pt-12 pb-0">
          <div ref={clientPriorityRef} className="mt-8">
            <ClientPriority />
          </div>
        </div>

        <div className="mt-0 w-full">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Intro;
