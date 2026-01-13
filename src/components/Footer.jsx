import footerImage from "../assets/footerImg.png";
import SocialLinks from "./SocialLInks";

export const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[45vw] overflow-hidden group">
        <div>
          <img
            src={footerImage}
            alt="Footer"
            className="absolute inset-0 w-full  lg:h-[50vw] object-cover object-top-right scale-100 group-hover:scale-102 transition-all duration-500"
          />
        </div>

        <div className=" relative z-20 h-[45vw] flex  flex-col items-center justify-center gap-[1vw] text-white ">
          <h1 className="font-[font2] text-[3vw]">Let's meet!</h1>
          <p className="text-center text-[1vw] font-bold">
            We can attend a session where we will discuss <br /> your project,
            your issues and how to solve them.
          </p>
          <a
            target="_blank"
            href=""
            className="  text-[.9vw] mt-5 px-5 py-3 rounded-md border-2 transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
          >
            Start a project
          </a>
        </div>
      </div>
      <div className="flex flex-col pt-2 pb-2 lg:flex  items-center justify-between px-[8vw] bg-(--text-color) w-full h-[5vw] text-[1vw] text-(--text-bg) ">
        <h1>Jobayer – Handcrafted in React, fueled by coffee ☕</h1>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};
