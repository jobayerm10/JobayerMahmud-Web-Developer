import footerImage from "../assets/footerImg2.png";
import SocialLinks from "./SocialLInks";

export const Footer = () => {
  return (
    <div>
      <div className="relative w-full min-h-[100vw] lg:min-h-[50vw] overflow-hidden group">
        <img
          src={footerImage}
          alt="Footer"
          className="absolute inset-0 w-full h-[100vw] lg:h-[50vw] object-cover object-top-right scale-100 group-hover:scale-102 transition-all duration-500"
        />

        <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20">
          <a
            target="_blank"
            href=""
            className="text-[3vw] lg:text-[.9vw] px-8 py-3 rounded-md border-4 bg-(--text-bg) text-(--text-color) transition-all duration-300 ease-out hover:px-12 shadow-md hover:shadow-lg"
          >
            Start a project
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center px-[8vw] bg-(--text-color) w-full h-[30vw] lg:h-[5vw] text-[3.4vw] lg:text-[1vw] text-(--text-bg) ">
        <h1 className="font-[font4] ">© 26 Jobayer. All Rights Reserved.</h1>
        {/* <SocialLinks></SocialLinks> */}
      </div>
    </div>
  );
};
