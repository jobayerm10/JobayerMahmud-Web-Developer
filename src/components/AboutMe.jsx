import React from "react";
import IntroGif from "./IntroGif";

const AboutMe = () => {
  return (
    <div id="about" className="pt-20 pb-20 text-white">
      <div className="max-w-[1420px] m-auto undefined">
        <div className="text-center max-w-2xl mx-auto px-4 max-md:px-3">
          <h3 className="text-3xl font-bold mb-4 max-md:text-2xl">
            ABOUT <span className="text-purple-700">ME</span>
          </h3>
          <p className="text-[16px] text-gray-400 font-munna max-md:text-[14px]">
            Discover more about my skills and dedication to frontend
            development.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-28 mt-12 px-4 md:px-0">
          {/* Left */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start w-full">
            <h3 className="text-[28px] md:text-[34px] lg:text-[38px] font-extrabold leading-snug text-center md:text-left mb-6 max-md:text-[24px]">
              MY JOURNEY TO{" "}
              <span className="text-[#8A38EE]">Frontend Developer</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-4 w-full">
              <div className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#38bdf8] transform transition duration-300 hover:scale-105 shadow-md max-md:p-4 ">
                <div className="inline-block">
                  <img src="" alt="" />
                </div>
                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Learning & Growth
                </h3>
                <p className="text-[15px] text-gray-300 leading-7 max-md:text-[14px]">
                  Started with curiosity about the web and gradually built a
                  solid base in frontend development by learning core
                  technologies and coding regularly.
                </p>
              </div>
              <div className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#facc15] transform transition duration-300 hover:scale-105 shadow-md max-md:p-4 ">
                <div className="inline-block">
                  <img src="" alt="" />
                </div>
                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Hands-on Practice
                </h3>
                <p className="text-[15px] text-gray-300 leading-7 max-md:text-[14px]">
                  Improved my skills through real-world projects, gaining
                  experience with modern frameworks and tools while solving
                  practical challenges.
                </p>
              </div>
              <div className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#34d399] transform transition duration-300 hover:scale-105 shadow-md max-md:p-4 ">
                <div className="inline-block">
                  <img src="" alt="" />
                </div>
                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Creative Exploration
                </h3>
                <p className="text-[15px] text-gray-300 leading-7 max-md:text-[14px]">
                  Enjoy creating clean, responsive, and user-friendly designs
                  with smooth UI/UX that enhance both visuals and usability.
                </p>
              </div>
              <div className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#8b5cf6] transform transition duration-300 hover:scale-105 shadow-md max-md:p-4 ">
                <div className="inline-block">
                  <img src="" alt="" />
                </div>
                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Future Goals
                </h3>
                <p className="text-[15px] text-gray-300 leading-7 max-md:text-[14px]">
                  Aiming to become a skilled full-stack developer and build
                  impactful applications that solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center md:justify-end w-full">
            <IntroGif></IntroGif>
          </div>
        </div>
        <div className="border-b border-b-blue-400 mt-16 w-full mx-auto"></div>
      </div>
    </div>
  );
};

export default AboutMe;
