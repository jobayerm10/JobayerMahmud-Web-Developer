import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import image from "../assets/heroImg4.png";
import { Footer } from "./Footer";
import ImageCard from "./ImageCard";
import ClientPriority from "./ServicesParts/ClientPriority";

const Intro = () => {
  const imageRef = useRef(null);
  const titleRef = useRef([]);
  const introRef = useRef(null);
  const skillTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.delay(1.4);

    // Image comes from right
    tl.from(imageRef.current, { x: 200, opacity: 0 });

    // Title lines come from right
    tl.from(titleRef.current, { x: 200, opacity: 0 }, "-=0.7"); // overlap animation

    // h3 intro comes from left
    tl.from(introRef.current, { x: -200, opacity: 0 }, "-=0.5");

    // skill text comes from left
    tl.from(skillTextRef.current, { x: -200, opacity: 0 }, "-=0.5");

    // p subtext comes from left
    tl.from(subTextRef.current, { x: -200, opacity: 0 }, "-=0.5");

    // buttons come from below
    tl.from(buttonRef.current, { y: 50, opacity: 0, stagger: 0.2 }, "-=0.3");
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Big text */}
        <div className="relative mt-1 flex flex-col items-center justify-center md:absolute md:inset-0 md:items-center">
          <div className="relative text-center">
            {/* Intro line */}
            <h3
              ref={introRef}
              className="relative z-30 text-center text-[4.5vw] sm:text-2xl md:text-3xl lg:text-4xl font-[font4] text-(--text-color)/90 mt-0 sm:mt-0 md:mt-0 lg:mt-0 mb-40 leading-tight"
            >
              👋, My name is <span className="font-bold">Jobayer</span>{" "}
            </h3>
            <div className="flex flex-col items-center gap-0 leading-none">
              <h1
                ref={(el) => (titleRef.current[0] = el)}
                className="font-[font2] text-[11vw] tracking-normal lg:tracking-normal sm:text-[14vw] md:text-[16vw] lg:text-[12vw] cursor-pointer"
              >
                Web Developer
              </h1>
              <h1
                ref={(el) => (titleRef.current[1] = el)}
                className="font-[font2] text-transparent text-[13vw] tracking-normal lg:tracking-normal sm:text-[14vw] md:text-[16vw] lg:text-[12vw] cursor-pointer"
                style={{ WebkitTextStroke: "1.5px var(--text-color)" }}
              >
                & UI Enthusiast
              </h1>
            </div>
            <div className="mt-4 w-full flex justify-end pr-4 md:pr-8 lg:pr-12">
              <p
                ref={subTextRef}
                className="inline-block px-12 py-2 text-right text-[2.8vw] sm:text-xl md:text-lg lg:text-[1.2vw] text-(--text-color)/65 font-[font4] tracking-wide"
              >
                Working freelance in Bangladesh
              </p>
            </div>

            <div
              ref={skillTextRef}
              className="w-[27vw] px-4 sm:px-6 md:px-8 lg:px-12 -mt-10 hidden sm:flex md:flex justify-start"
            >
              <h4 className="text-left text-[4vw] sm:text-2xl md:text-3xl lg:text-[1.3vw] font-[font4]  text-(--text-color)/65 tracking-wide">
                proficient in React, Node.js, Express.js, Next.js, MongoDB and
                more.
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-col items-center w-full">
          {/* Image */}
          <img
            ref={imageRef}
            src={image}
            alt="Jobayer"
            className="relative z-10  w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[24vw] h-auto"
          />

          {/* Buttons */}
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-4 mt-2 z-20"
          >
            <a
              href="#services"
              className="text-sm md:text-base px-6 py-3 border rounded-md bg-(--text-color) text-white transition-all duration-300 hover:px-10 shadow-md"
            >
              You need a developer
            </a>

            <a
              target="_blank"
              href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume@main/Jobayer_mahmud-resume.pdf?download=1"
              className="text-center text-sm md:text-base px-6 py-3 border rounded-md bg-(--bg-color) text-(--text-color) transition-all duration-300 hover:px-10"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="w-full text-(--text-color)">
        <div className="mx-auto max-w-[90vw] pt-20 pb-0">
          <div className="mx-auto max-w-[70vw] text-center">
            <p className="text-center text-[5.4vw] lg:text-[4.2vw] font-[font2]">
              Impactful branding and high-end <br /> productive websites for
              creatives.
            </p>
          </div>

          <div className="projects h-auto flex items-center justify-center mt-12">
            <ImageCard />
          </div>

          <div className="mt-8">
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
