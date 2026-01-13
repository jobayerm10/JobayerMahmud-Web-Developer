import { NavLink } from "react-router-dom";
import MobileNav from "../Navigation/MobileNav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--text-bg)   ">
      <div className="max-w-full mx-5 lg:mx-10">
        <div className="flex justify-between items-center mt-6 lg:mt-0">
          <NavLink
            to="/"
            className="text-[10vw] lg:text-[3vw] font-[font3]  text-(--text-color) cursor-pointer"
          >
            JOBAYER
          </NavLink>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-13">
              <li className="relative text-(--text-color) text-[0.9vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[0.9vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/services">Services</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[0.9vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/skills">Skills</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[0.9vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <a
                target="_blank"
                href="mailto:jobayermahmud976@gmail.com"
                className="text-[0.9vw] px-5 py-3  border-2 rounded-md bg-(--text-color) text-(--text-bg) transition-all duration-300 ease-out hover:px-9 shadow-md hover:shadow-lg
     "
              >
                @jobayer
              </a>
            </ul>
          </nav>
          {!menuOpen && (
            <button
              className="md:hidden text-4xl text-(--text-color)"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars></FaBars>
            </button>
          )}
        </div>
      </div>
      {menuOpen && <MobileNav closeMenu={() => setMenuOpen(false)}></MobileNav>}
    </header>
  );
};

export default Navbar;
