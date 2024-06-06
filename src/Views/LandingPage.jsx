import React from "react";
import Navbar from "../Components/Navbar";
import { TypewriterEffectSmooth } from "../Components/typewriter-effect";

const words = [
    {
      text: "Anatomy",
    },
    {
      text: "de",
    },
    {
      text: "l'oeil",
    },
    {
      text: "du",
    },
    {
      text: "Chien.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[32rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </>
  );
};

export default LandingPage;
