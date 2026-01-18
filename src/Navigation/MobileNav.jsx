import { FaArrowCircleRight, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialMenu from "../components/SocialMenu";
import { TfiClose } from "react-icons/tfi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const MobileNav = ({ closeMenu }) => {
  const stairParentRef = useRef(null);
   useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    })
   
  
  });
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="w-full h-screen shadow-lg flex flex-col transition-all bg-(--text-bg)">
      <div ref={stairParentRef} className="h-screen w-full fixed inset-0 z-100">
           <div className="w-full h-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
      </div>
      <button
        onClick={closeMenu}
        className="text-2xl absolute top-12 sm:top-12 right-6 sm:right-3 text-(--text-color)"
      >
        <TfiClose></TfiClose>
      </button>

      <div className="relative flex flex-col">
        {menuItems.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className={`flex justify-between items-center h-[12vh] px-6 text-[8vw] font-[font2] text-(--text-color) hover:bg-(--text-bg)/10 transition-all ${
              index === menuItems.length - 1
                ? "border-y-4 border-black"
                : "border-t-4 border-black"
            }`}
          >
            <span>{item.name}</span>
            <FaArrowCircleRight className="text-[8vw] mr-6" />
          </NavLink>
        ))}
      </div>

      <div className="mt-auto h-1/2">
        <SocialMenu />
      </div>
    </div>
  );
};

export default MobileNav;
