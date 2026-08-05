import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

import Home from "./pages/Home";
import Projects from "./components/Projects";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
