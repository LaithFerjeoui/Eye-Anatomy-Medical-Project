import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { TypewriterEffectSmooth } from "../Components/typewriter-effect";
import logo from "../../public/logo.png";
import eye from "../../public/Home/banner.jpeg";
import { motion } from "framer-motion";
import { HoverEffect } from "../Components/CardHoverEffect";
import { nav } from "../utils/constants";

const words = [
  {
    text: "Anatomie ",
  },
  {
    text: "et",
  },
  {
    text: "Applications",
  },

  {
    text: "Cliniques",
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
          <p className="text-gray-800 text-base px-5 text-center ">
            Ecole Nationale de Médecine Vétérinaire de Sidi Thabet ENMV
          </p>
        </motion.div>
        <p className="text-gray-800 text-base px-5 text-center ">
          <div className="mt-10">
            <p className="text-gray-800 text-3xl font-bold px-5 text-center ">
              Ophtalmologie canine :
            </p>
          </div>
        </p>
        <TypewriterEffectSmooth words={words} />

      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full py-12 px-6 md:px-16 max-w-7xl mx-auto "
      >
        <div className="flex flex-col md:flex-row items-center justify-between ">
          {/* Left: Image */}
          <div className="w-full flex justify-center">
            <img
              src={eye}
              alt="Descriptive alt text"
              className="w-full max-w-md max-h-[60vh] rounded-2xl shadow-xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full  text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-500">Un clin d’œil à la clinique : De la théorie à la pratique.</h2>
            <p className="text-lg text-gray-600 mb-6">    
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-32 max-w-5xl mx-auto">
        <p className="text-black text-3xl font-bold px-5 text-center ">
          Bienvenue, futurs vétos !
          Prêts à explorer l'univers captivant de l'ophtalmologie canine ? De l'anatomie aux applications cliniques, on décortique tout pour que vous puissiez briller dans vos consultations à la clinique ENMV.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8 mt-10 mb-16 ">
        <HoverEffect items={nav} />
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <p className="text-black text-2xl font-medium px-5 text-center ">
          Ce site a été réalisé dans le cadre d’une thèse de doctorat en médecine vétérinaire, pour objectif de compléter le parcours pédagogique des étudiants vétérinaires et de les accompagner dans leurs consultations cliniques.
        </p>
      </div>
      <div className="w-full py-16 px-6 md:px-12 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Founder 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/Home/stud.jpeg"
              alt="Founder 1"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">Élaboré par</h3>
            <p className="text-gray-600">Islem ZOGHLAMI</p>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/Home/prof.jpeg"
              alt="Founder 2"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">Encadré par</h3>
            <p className="text-gray-600">Pr AbdelMonem
              BEN KHALIFA </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default LandingPage;
