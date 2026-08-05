import { NavLink } from "react-router-dom";
import MobileNav from "../Navigation/MobileNav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--text-bg)   ">
      <div className="max-w-full mx-5 lg:mx-14">
        <div className="flex justify-between items-center mt-5 sm: lg:mt-1">
          <NavLink
            to="/"
            className="text-[10vw] lg:text-[3vw] font-[font2]  text-(--text-color) cursor-pointer"
          >
            Jobayer
          </NavLink>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-13">
              <li className="relative font-[font4] text-(--text-color) text-sm sm:-text-[.7vw] md:text-[1vw] lg:text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="relative font-[font4] text-(--text-color) text-sm sm:-text-[.7vw] md:text-[1vw] lg:text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <a
                target="_blank"
                href="mailto:jobayermahmud976@gmail.com"
                className="sm:-text-[.7vw] md:text-[1vw] lg:text-[1vw] font-[font4] px-6 py-3  border-2 rounded-md bg-(--text-color) text-(--text-bg) transition-all duration-300 ease-out hover:px-9 shadow-md hover:shadow-lg
     "
              >
                @jobayer
              </a>
            </ul>
          </nav>
          {!menuOpen && (
            <button
              className="block lg:hidden text-4xl text-(--text-color)"
              onClick={() => setMenuOpen(true)}
            >
              <CiMenuFries></CiMenuFries>
            </button>
          )}
        </div>
      </div>
      {menuOpen && <MobileNav closeMenu={() => setMenuOpen(false)}></MobileNav>}
    </header>
  );
};

export default Navbar;
