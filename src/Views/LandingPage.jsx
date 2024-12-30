import React from "react";
import Navbar from "../Components/Navbar";
import { TypewriterEffectSmooth } from "../Components/typewriter-effect";
import logo from "../../public/logo.png";
import eye from "../../public/Figures/eyeOfDog.jpg";
import { motion } from "framer-motion";
import { HoverEffect } from "../Components/CardHoverEffect";
import { nav } from "../utils/constants";
const words = [
  {
    text: "Anatomie",
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
    text: "Chien",
    className: "font-extrabold text-yellow-600",
  },
];
const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[28rem]  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt=""
            className=" w-24 rounded-lg shadow-2xl my-5 mx-auto"
          />
          <p className="text-gray-300 text-base px-5 text-center ">
            Ecole National de Médecine Véterinaire de Sidi Thabet
          </p>
        </motion.div>

        <TypewriterEffectSmooth words={words} />
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-300 font-semibold text-lg text-center px-6"
        >
          Discipline: Anatomie des{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300  to-red-800 ">
            Mammifiéres
          </span>{" "}
          domestique <b>2024</b>
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 70 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={eye}
          alt=""
          className="mx-auto rounded-2xl shadow-xl w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5"
        />
      </motion.div>
      <div className="max-w-5xl mx-auto px-8 mt-40 mb-16 ">
        <HoverEffect items={nav} />
      </div>
    </>
  );
};

export default LandingPage;
