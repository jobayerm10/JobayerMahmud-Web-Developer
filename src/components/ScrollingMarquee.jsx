import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingMarquee = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First line moves RIGHT on scroll down, LEFT on scroll up
      gsap.fromTo(
        line1Ref.current,
        { x: -150 },
        {
          x: 200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Second line moves LEFT on scroll down, RIGHT on scroll up
      gsap.fromTo(
        line2Ref.current,
        { x: 150 },
        {
          x: -200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Repeated text for infinite horizontal line appearance
  const textLine1 = Array(8).fill("Show me what you got ! - ").join("");
  const textLine2 = Array(8).fill("Webdesign - Graphisme - Webflow - Stratégie - ").join("");

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-16 md:py-24 select-none relative z-10 flex flex-col gap-2 md:gap-4 -rotate-3 transform scale-105"
    >
      {/* Top Line: Outline Text (Moves Right on scroll down) */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h2
          ref={line1Ref}
          className="inline-block text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-[font2] tracking-tight uppercase text-transparent will-change-transform"
          style={{
            WebkitTextStroke: "1.8px var(--text-color)",
          }}
        >
          {textLine1}
        </h2>
      </div>

      {/* Bottom Line: Solid Dark Text (Moves Left on scroll down) */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h2
          ref={line2Ref}
          className="inline-block text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-[font2] tracking-tight uppercase text-(--text-color) will-change-transform"
        >
          {textLine2}
        </h2>
      </div>
    </div>
  );
};

export default ScrollingMarquee;
