import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto p-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-5xl font-[font3] text-(--text-color) cursor-pointer"
          >
            JOBAYER
          </NavLink>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-16">
              <li className="relative text-(--text-color) text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/services">Services</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/skills">Skills</NavLink>
              </li>

              <li className="relative text-(--text-color) text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <a
                target="_blank"
                href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
                className="text-[1vw] px-6 py-3 border rounded-md bg-(--text-color)  text-white
    transition-all duration-200 ease-out
    hover:px-10
     "
              >
                Resume
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
