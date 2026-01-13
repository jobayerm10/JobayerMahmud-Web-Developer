import { FaArrowCircleRight, FaTimes } from "react-icons/fa";
import SocialMenu from "../components/SocialMenu";

const MobileNav = ({ closeMenu }) => {
  return (
    <div className=" w-full h-screen bg-(--text-bg) shadow-lg flex flex-col gap-10 transition-all">
      <button
        onClick={closeMenu}
        className="text-3xl absolute top-5 right-5 text-(--text-color)"
      >
        <FaTimes></FaTimes>
      </button>
      <div className="py-10">
        <div className="link relative flex justify-between items-center border-t-4 border-black overflow-hidden">
          <h1 className="text-start ml-7 font-[font2] text-[7vw]">Home</h1>
          <FaArrowCircleRight className="text-[5vw] mr-10"></FaArrowCircleRight>
        </div>

        <div className="link relative flex justify-between items-center border-t-4 border-black overflow-hidden">
          <h1 className="text-start ml-7 font-[font2] text-[7vw] cursor-pointer">
            Sevices
          </h1>
          <FaArrowCircleRight className="text-[5vw] mr-10"></FaArrowCircleRight>
        </div>

        <div className="link relative flex justify-between items-center border-t-4 border-black overflow-hidden">
          <h1 className="text-start ml-7 font-[font2] text-[7vw]">Skills</h1>
          <FaArrowCircleRight className="text-[5vw] mr-10"></FaArrowCircleRight>
        </div>

        <div className="link relative flex justify-between items-center border-y-4 border-black overflow-hidden">
          <h1 className="text-start ml-7 font-[font2] text-[7vw]">Projects</h1>
          <FaArrowCircleRight className="text-[5vw] mr-10"></FaArrowCircleRight>
        </div>
      </div>
      <SocialMenu></SocialMenu>
    </div>
  );
};

export default MobileNav;
