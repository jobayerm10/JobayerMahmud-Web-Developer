import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialMenu from "../components/SocialMenu";
import { TfiClose } from "react-icons/tfi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MobileNav = ({ closeMenu }) => {
  const menuRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".mobile-link", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      tlRef.current = tl;
    },
    { scope: menuRef },
  );

  const handleClose = () => {
    gsap.to(".mobile-link", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      stagger: 0.08,
      onComplete: closeMenu,
    });
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div ref={menuRef} className="w-full h-screen bg-(--text-bg) flex flex-col">
      <button
        onClick={handleClose}
        className="text-2xl absolute top-12 right-6 text-(--text-color) z-10"
      >
        <TfiClose />
      </button>

      <div className="relative flex flex-col">
        {menuItems.map((item, index) =>
          item.path && item.path.startsWith("#") ? (
            <a
              key={item.name}
              href={item.path}
              onClick={handleClose}
              className={`mobile-link flex justify-between items-center h-[12vh] px-6 text-[8vw] font-[font2] text-(--text-color) ${
                index === menuItems.length - 1
                  ? "border-y-4 border-black"
                  : "border-t-4 border-black"
              }`}
            >
              <span>{item.name}</span>
              <FaArrowCircleRight className="text-[8vw] mr-6" />
            </a>
          ) : (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleClose}
              className={`mobile-link flex justify-between items-center h-[12vh] px-6 text-[8vw] font-[font2] text-(--text-color) ${
                index === menuItems.length - 1
                  ? "border-y-4 border-black"
                  : "border-t-4 border-black"
              }`}
            >
              <span>{item.name}</span>
              <FaArrowCircleRight className="text-[8vw] mr-6" />
            </NavLink>
          ),
        )}
      </div>

      <div className="mt-auto h-1/2 mobile-link">
        <SocialMenu />
      </div>
    </div>
  );
};

export default MobileNav;
