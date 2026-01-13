import { FaArrowCircleRight, FaTimes } from "react-icons/fa";
import SocialMenu from "../components/SocialMenu";

const MobileNav = ({ closeMenu }) => {
  return (
    <div className=" w-full h-screen shadow-lg flex flex-col gap-10 transition-all">
      <button
        onClick={closeMenu}
        className="text-6xl absolute top-8 sm:top-12 right-3 sm:right-3 text-(--text-color)"
      >
        <FaTimes></FaTimes>
      </button>
      <div className="flex flex-col">
        <div className="flex justify-between items-center h-[12vh] border-t-4 border-black">
          <h1 className="ml-6 font-[font2] text-[9vw]">Home</h1>
          <FaArrowCircleRight className="mr-6 text-[8vw]" />
        </div>

        <div className="flex justify-between items-center h-[12vh] border-t-4 border-black">
          <h1 className="ml-6 font-[font2] text-[9vw]">Services</h1>
          <FaArrowCircleRight className="mr-6 text-[8vw]" />
        </div>

        <div className="flex justify-between items-center h-[12vh] border-t-4 border-black">
          <h1 className="ml-6 font-[font2] text-[9vw]">Skills</h1>
          <FaArrowCircleRight className="mr-6 text-[8vw]" />
        </div>

        <div className="flex justify-between items-center h-[12vh] border-y-4 border-black">
          <h1 className="ml-6 font-[font2] text-[9vw]">Projects</h1>
          <FaArrowCircleRight className="mr-6 text-[8vw]" />
        </div>
      </div>
      <div className="h-1/2 ">
        <SocialMenu></SocialMenu>
      </div>
    </div>
  );
};

export default MobileNav;
