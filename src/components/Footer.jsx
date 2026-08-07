import footerImage from "../assets/footerImg.png";
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

        {/* SQL text - middle left of footer image */}
        <div className="absolute top-1/2 left-[5vw] lg:left-[8vw] transform -translate-y-1/2 z-20 text-(--text-bg)">
          <h1 className="font-[font2] leading-snug text-[4.5vw] lg:text-[4vw] tracking-wide">
            <div>
              <span>SELECT </span>
              <span className="text-(--text-color)">*</span>
            </div>
            <div>
              <span>FROM the </span>
              <span className="text-(--text-color)">World</span>
            </div>
            <div>
              <span>WHERE </span>
              <span className="text-(--text-color)">"Someone"</span>
            </div>
            <div>
              <span>LIKE </span>

              <span className="text-(--text-color)">You</span>
            </div>
          </h1>
          <div className="">
            <SocialLinks />
          </div>
        </div>

        <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20">
          <a
            target="_blank"
            href=""
            className="text-[3vw] lg:text-[.9vw] font-semibold px-8 py-3 rounded-md border-2 bg-(--text-bg) text-(--text-color) transition-all duration-300 ease-out hover:px-12 shadow-md hover:shadow-lg"
          >
            Start a project
          </a>
        </div>
      </div>
    </div>
  );
};
