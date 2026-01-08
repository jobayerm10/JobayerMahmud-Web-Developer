import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
      ;
    </div>
  );
}

export default App;
