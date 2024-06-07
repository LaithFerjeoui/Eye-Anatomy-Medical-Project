import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../Views/LandingPage";
import Anatomy from "../Views/Anatomy";
import Applications from "../Views/Applications";
import Techniques from "../Views/Techniques";
import { GridBackgroundDemo } from "./GridBackgroundDemo";


const Layout = ({location}) => {
  return (
    <>
      <Navbar />
      <div className="relative ">
        <div className="flex justify-center w-full">
          <div className=" gradient" />
        </div>
        <GridBackgroundDemo />
        <div className="relative z-30">
        {location === "landing" ? (
          <LandingPage />
        ) : location === "anatomy" ? (
          <Anatomy />
        ) : location === "techniques" ? (
          <Techniques />
        ) : location === "applications" ? (
          <Applications />
        ) : null}
        </div>
      </div>
    </>
  );
};

export default Layout;
