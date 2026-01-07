import React from "react";
const navLinks = ["Home", "Services", "Skills", "Projects"];
const MenuItem = ({ label }) => {
  return (
    <div>
      <li className="relative text-(--text-color) text-[1vw] transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer">
        {label}
      </li>
    </div>
  );
};
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md  ">
      <div className="max-w-[1920px] mx-auto p-6">
        <div className="flex justify-between">
          <div className=" text-5xl font-[font3] text-(--text-color) cursor-pointer">
            JOBAYER
          </div>
          <nav>
            <ul className="flex items-center gap-16 ">
              {navLinks.map((item) => (
                <MenuItem key={item} label={item}></MenuItem>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
