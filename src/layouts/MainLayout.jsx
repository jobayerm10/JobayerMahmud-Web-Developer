import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <div className={menuOpen ? "hidden" : "block"}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
