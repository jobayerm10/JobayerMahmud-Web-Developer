import React from "react";

const Services = () => {
  return (
    <div className=" ">
      <div className=" mt-[10vw] mx-auto max-w-[70vw]">
        <div className="uppercase flex items-center justify-center gap-[2vw]  ">
          <h5 className="text-[#FDA228] tracking-[0.4em]">
            Frontend Web Developer
          </h5>
          <h5 className="text-[#FDA228] tracking-[0.4em]">& UI Enthusiast</h5>
        </div>
        <p className="text-center text-[4.2vw] font-[font1]">
          Impactful branding and high-end <br /> productive websites for
          creatives.
        </p>
        <div className="-tracking-[0.1vw] flex items-center justify-center">
          <a
            target="_blank"
            href=""
            className="  text-[.9vw] px-5 py-3  border-2 rounded-md bg-(--bg-color) text-(--text-color)  transition-all duration-300 ease-out hover:px-10 shadow-md hover:shadow-lg
     "
          >
            Let's start a project together
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
