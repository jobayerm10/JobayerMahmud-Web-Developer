import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--text-bg)   ">
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
                href="mailto:jobayermahmud976@gmail.com"
                className="text-[0.9vw] px-5 py-3  border-2 rounded-md bg-(--text-color) text-(--text-bg) transition-all duration-300 ease-out hover:px-9 shadow-md hover:shadow-lg
     "
              >
                @jobayer
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
