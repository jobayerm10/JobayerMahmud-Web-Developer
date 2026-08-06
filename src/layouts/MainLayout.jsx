import React, { useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {createPortal(
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
        document.body,
      )}
      <div className={menuOpen ? "hidden" : "block"}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
