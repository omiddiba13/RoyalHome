import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
