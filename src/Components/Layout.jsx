import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../Views/LandingPage";
import Anatomy from "../Views/Anatomy";
import Applications from "../Views/Applications";
import { GridBackgroundDemo } from "./GridBackgroundDemo";
import Footer from "./Footer";

const Layout = ({ location }) => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden overflow-y-clip">
        <div className="flex justify-center w-full">
          <div className=" gradient" />
        </div>
        <GridBackgroundDemo />
        <div className="relative z-30">
          {location === "landing" ? (
            <LandingPage />
          ) : location === "anatomy" ? (
            <Anatomy />
          ) : location === "applications" ? (
            <Applications />
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
