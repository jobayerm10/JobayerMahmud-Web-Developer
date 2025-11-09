import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-md px-5 py-4  mb-20 backdrop-blur-md border border-white/20 shadow-sm">
      {/* Left Links */}
      <div className=" text-4xl text-accent font-extrabold ">JOBAYER.</div>

      <div className="flex gap-x-15 text-accent font-bold">
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Logo */}

      {/* Right Links */}
      {/* <div className="flex gap-x-40 text-accent font-bold"></div> */}
    </div>
  );
};

export default Navbar;
