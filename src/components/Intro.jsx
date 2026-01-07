import { NavLink } from "react-router-dom";
import image from "../assets/heroImg1.png";

const Intro = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center px-4 md:px-0 relative overflow-hidden">
      <h3 className="lg:text-[1.5vw] md:text-[10vw] text-(--text-color) mb-2 ">
        👋, My name is Jobayer and I am an aspiring
      </h3>
      <img className="relative z-10" src={image} alt="" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <h1 className="text-(--text-color) sm:text-[17vw] md:text-[20vw] lg:text-[14vw] font-[font3] uppercase leading-none">
            Web Developer
          </h1>

          <p className="absolute bottom-0 right-0 translate-y-full text-[1.2vw] text-(--text-color)">
            Based in Rajshahi,Bangladesh.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-5 ">
        <NavLink
          className="text-xl px-5 py-3  border rounded-md bg-(--text-color)  text-white  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg"
          to="/services"
        >
          You need a developer
        </NavLink>
        <a
          target="_blank"
          href="mailto:jobayermahmud976@gmail.com"
          className="text-xl px-5 py-3 font-medium border-2 rounded-md bg-(--bg-color) text-(--text-color)  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
        >
          Wanna Talk With Me
        </a>
      </div>
    </section>
  );
};

export default Intro;
