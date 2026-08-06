import React from "react";
import SocialLinks from "./SocialLInks";

const SocialMenu = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-2">
      <div className="flex flex-col items-center gap-3">
        <a
          className="text-base sm:text-lg font-[font4] text-(--text-color)/90 hover:underline"
          href="mailto:jobayermahmud976@gmail.com"
        >
          hello@jobayer
        </a>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:jobayermahmud976@gmail.com"
            className="text-xs sm:text-sm px-5 py-2.5 border-2 rounded-md bg-(--text-color) text-(--text-bg) font-[font4] transition-all duration-300 ease-out hover:px-7 shadow-md hover:shadow-lg inline-block"
          >
            Let's start a project!
          </a>
        </div>
      </div>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default SocialMenu;
