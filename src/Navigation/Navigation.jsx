import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About Me</Link> */}
      <a href="#services">Services</a>
      {/* <Link to="/skills">Skills</Link> */}
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
    </div>
  );
};

export default Navigation;
