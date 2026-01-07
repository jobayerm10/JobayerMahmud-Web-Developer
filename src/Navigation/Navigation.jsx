import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/services">Services</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
    </div>
  );
};

export default Navigation;
