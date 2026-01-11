import { NavLink } from "react-router-dom";
import image from "../assets/heroImg3.png";

const Intro = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center mt-30 px-4 md:px-0 relative overflow-hidden">
      <h3 className="lg:text-[1.5vw] -mb-5 md:text-[10vw] text-(--text-color) ">
        👋, My name is Jobayer and I am an aspiring
      </h3>
      <img
        className="relative z-10   w-[80vw] md:w-[65vw] lg:w-[24vw]
    h-auto
    max-w-full"
        src={image}
        alt=""
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <h1 className="text-(--text-color) sm:text-[17vw] md:text-[20vw] lg:text-[14vw] font-[font3] uppercase leading-none">
            Web Developer
          </h1>

          <p className="absolute bottom-0 right-0 translate-y-full text-[1.4vw] text-(--text-color)">
            Based in Rajshahi,Bangladesh.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-[2vw] ">
        <NavLink
          className="text-[.9vw] px-5 py-3  border rounded-md bg-(--text-color)  text-white  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg"
          to="/services"
        >
          You need a developer
        </NavLink>
        <a
          target="_blank"
          href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
          className="text-[.9vw] px-8 py-3 border rounded-md bg-(--bg-color) text-(--text-color)
    transition-all duration-200 ease-out
     hover:px-12 
     "
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Intro;
