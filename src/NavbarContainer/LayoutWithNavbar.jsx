import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavbarContainer/Navbar";

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </>
  );
};

export default LayoutWithNavbar;
