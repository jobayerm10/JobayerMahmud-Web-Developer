import { useRef } from "react";
import Image1 from "../assets/p1Img.png";
import Image2 from "../assets/p2Img.png";
import Image3 from "../assets/p3Img.png";
import Image4 from "../assets/p4Img.png";
import Image5 from "../assets/p5Img.png";
import Image6 from "../assets/p6Img.png";

const projects = [
  {
    img: Image1,
    title: "VHS Entertainment",
    subtitle: "Direction artistique et refonte du site sur Webflow",
  },
  {
    img: Image2,
    title: "Alexis Le Rossignol",
    subtitle: "Portfolio et identité visuelle",
  },
  {
    img: Image3,
    title: "Kolecto",
    subtitle: "Plateforme de gestion centralisée",
  },
  { img: Image4, title: "Projet 4", subtitle: "Description du projet 4" },
  { img: Image5, title: "Projet 5", subtitle: "Description du projet 5" },
  { img: Image6, title: "Projet 6", subtitle: "Description du projet 6" },
];

const ImageCard = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 24; // gap-6 = 24px
      scrollRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 24;
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#111111] px-6 sm:px-12 md:px-16 py-12 text-white flex flex-col justify-center relative z-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[font2] tracking-wide">
          Take a look
        </h2>

        {/* Buttons */}
        <div className="hidden sm:flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all cursor-pointer"
            aria-label="Previous project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all cursor-pointer"
            aria-label="Next project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((proj, index) => (
          <div
            key={index}
            className="relative flex-none w-[85vw] sm:w-[50vw] md:w-[380px] lg:w-[420px] h-[55vh] max-h-[620px] min-h-[420px] rounded-3xl overflow-hidden snap-center group cursor-pointer bg-[#1a1a1a] border border-white/10"
          >
            {/* Background Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold font-[font2] mb-2 leading-tight">
                {proj.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base font-[font4] leading-snug">
                {proj.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
