import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialMenu from "../components/SocialMenu";
import { TfiClose } from "react-icons/tfi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const MobileNav = ({ closeMenu }) => {
  const menuRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".mobile-link", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.08,
      });

      tlRef.current = tl;
    },
    { scope: menuRef },
  );

  const handleClose = () => {
    gsap.to(".mobile-link", {
      y: 40,
      opacity: 0,
      duration: 0.35,
      ease: "power3.in",
      stagger: 0.05,
      onComplete: closeMenu,
    });
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return createPortal(
    <div
      ref={menuRef}
      className="fixed inset-0 top-0 left-0 w-screen h-screen min-h-screen z-[999999] bg-(--text-bg) flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        minHeight: "100dvh",
        backgroundColor: "var(--text-bg)",
        zIndex: 999999,
      }}
    >
      {/* Top Header Row with Logo & Close Button */}
      <div className="flex justify-between items-center w-full px-2 pt-2 pb-4">
        <NavLink
          to="/"
          onClick={handleClose}
          className="text-[9vw] sm:text-4xl font-[font2] text-(--text-color) cursor-pointer"
        >
          Jobayer
        </NavLink>

        <button
          onClick={handleClose}
          aria-label="Close menu"
          className="text-3xl text-(--text-color) p-2 hover:opacity-75 transition-opacity"
        >
          <TfiClose />
        </button>
      </div>

      {/* Menu Links */}
      <div className="relative flex flex-col my-auto py-2">
        {menuItems.map((item, index) =>
          item.path && item.path.startsWith("#") ? (
            <a
              key={item.name}
              href={item.path}
              onClick={handleClose}
              className={`mobile-link flex justify-between items-center py-5 px-4 text-[9vw] sm:text-4xl font-[font2] text-(--text-color) ${
                index === menuItems.length - 1
                  ? "border-y-2 border-(--text-color)"
                  : "border-t-2 border-(--text-color)"
              }`}
            >
              <span>{item.name}</span>
              <FaArrowCircleRight className="text-[7vw] sm:text-3xl mr-2" />
            </a>
          ) : (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleClose}
              className={`mobile-link flex justify-between items-center py-5 px-4 text-[9vw] sm:text-4xl font-[font2] text-(--text-color) ${
                index === menuItems.length - 1
                  ? "border-y-2 border-(--text-color)"
                  : "border-t-2 border-(--text-color)"
              }`}
            >
              <span>{item.name}</span>
              <FaArrowCircleRight className="text-[7vw] sm:text-3xl mr-2" />
            </NavLink>
          ),
        )}
      </div>

      {/* Social Section */}
      <div className="mobile-link pt-2 pb-4">
        <SocialMenu />
      </div>
    </div>,
    document.body,
  );
};

export default MobileNav;
