import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--text-bg)  ">
      <div className="max-w-full mx-10">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-[3vw] font-[font3] text-(--text-color) cursor-pointer"
          >
            JOBAYER
          </NavLink>

          <nav>
            <ul className="flex items-center gap-17">
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
                href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
                className="text-[.9vw] px-8 py-3 border rounded-md bg-(--text-color) text-(--text-bg)
    transition-all duration-200 ease-out
     hover:px-12 
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
