import { NavLink } from "react-router-dom";
import image from "../assets/heroImg3.png";

const Intro = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden ">
      {/* Intro line */}
      <h3 className="text-center text-[4.5vw] sm:text-2xl md:text-3xl lg:text-3xl font-[font4] text-(--text-color)/90 mt-40 sm:mt-45 md:mt-30 lg:mt-10">
        👋 My name is Jobayer and I am a
      </h3>

      {/* Big text */}
      <div className="relative mt-3 flex justify-center md:absolute md:inset-0 md:items-center ">
        <div className="relative text-center">
          <h1
            className=" font-[font2] text-(--text-color)
            text-[13vw] tracking-normal lg:tracking-normal sm:text-[14vw] md:text-[16vw] lg:text-[14vw]"
          >
            Web Developer
          </h1>

          <p className="mt-2 sm:mt-2 text-xl sm:text-xl md:text-lg lg:text-[1vw] text-(--text-color)/90 md:absolute md:bottom-0 md:right-0 md:translate-y-full font-[font4]">
            Based in Rajshahi, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col items-center w-full">
        {/* Image */}
        <img
          src={image}
          alt="Jobayer"
          className="relative  z-10 mt-4 lg:mt-4 w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[24vw] h-auto"
        />
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 z-20">
          <NavLink
            to="/services"
            className="text-sm md:text-base px-6 py-3 border rounded-md
      bg-(--text-color) text-white transition-all duration-300
      hover:px-10 shadow-md"
          >
            You need a developer
          </NavLink>

          <a
            target="_blank"
            href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
            className="text-center text-sm md:text-base px-6 py-3 border rounded-md
      bg-(--bg-color) text-(--text-color)
      transition-all duration-300 hover:px-10"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
