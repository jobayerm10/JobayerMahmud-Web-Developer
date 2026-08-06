import { NavLink } from "react-router-dom";
import MobileNav from "../Navigation/MobileNav";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = ({ menuOpen: externalMenuOpen, setMenuOpen: externalSetMenuOpen }) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const menuOpen = externalMenuOpen !== undefined ? externalMenuOpen : internalMenuOpen;
  const setMenuOpen = externalSetMenuOpen || setInternalMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 bg-(--text-bg) py-3 sm:py-4 shadow-xs transition-all duration-300 ${menuOpen ? "hidden" : "block"}`}>
      <div className="max-w-full mx-5 lg:mx-14">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-[8vw] sm:text-[6vw] lg:text-[3vw] font-[font2] text-(--text-color) cursor-pointer"
          >
            Jobayer
          </NavLink>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-13">
              <li className="relative font-[font4] text-(--text-color) text-sm lg:text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="relative font-[font4] text-(--text-color) text-sm lg:text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jobayermahmud976@gmail.com"
                className="text-sm lg:text-[1vw] font-[font4] px-6 py-3 border-2 rounded-md bg-(--text-color) text-(--text-bg) transition-all duration-300 ease-out hover:px-9 shadow-md hover:shadow-lg"
              >
                @jobayer
              </a>
            </ul>
          </nav>

          {!menuOpen && (
            <button
              className="block lg:hidden text-3xl sm:text-4xl text-(--text-color) focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <CiMenuFries />
            </button>
          )}
        </div>
      </div>
      {menuOpen && <MobileNav closeMenu={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
