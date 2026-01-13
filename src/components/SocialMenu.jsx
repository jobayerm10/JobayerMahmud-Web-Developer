import React from "react";
import SocialLinks from "./SocialLInks";

const SocialMenu = () => {
  return (
    <div className="flex flex-col items-center gap-38 ">
      <div className="flex flex-col items-center gap-8">
        <a className="text-xl" href="mailto:jobayermahmud976@gmail.com">
          hello@jobayer{" "}
        </a>
        <div>
          <a
            target="_blank"
            href=""
            className="  text-[3.5vw] px-5 py-4  border-2 rounded-md bg-(--text-color) text-(--text-bg)  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
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
