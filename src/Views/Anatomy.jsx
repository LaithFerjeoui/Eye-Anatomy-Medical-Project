import React from "react";
import anatomie1 from "../../public/Figures/anatomie1.jpg";
import anatomie2 from "../../public/Figures/anatomie2.jpg";
import { motion } from "framer-motion";
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
const Anatomy = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <span className=" text-4xl font-bold  bg-gradient-to-r from-gray-400 to-[white] bg-clip-text text-transparent">
              La Tunique Fibreuse :
            </span>
            <p className=" text-gray-200 font-semibold my-4">1) La sclère :</p>
            <p className=" text-neutral-300">
              La Sclère (Sciera), - anciennement « sclérotique », est la coque
              inextensible mais élastique en forme de sphère creuse qui délimite
              la plus grande partie du bulbe (Barone, 2010). La sclére
              représente la majeure partie de la tunique fibreuse du globe
              (Labelle, 2017). Elle représente les trois-quarts de la surface de
              l’œil, en majorité en partie postérieure, la sclère est opaque,
              peu vascularisée, et formée d’un tissu fibreux conjonctif dense
              lui conférant une haute résistance mécanique. La sclère est
              d’ailleurs appelée la coque fibreuse de l’œil (Jongh, 2009 ;
              Roger, 2011). Elle assure ainsi la protection des éléments
              sensoriels de l’œil mais reste inextensible en cas d’augmentation
              de pression intra-cavitaire (Roger, 2011). Elle se compose de
              trois couches. La couche la plus externe est l'épisclère, qui est
              une couche fibreuse densément vascularisée qui relie la capsule de
              Tenon à la sclérotique proprement dite. La sclérotique proprement
              dite (stroma scléral) se compose de collagène dense avec fibres
              élastiques, fibroblastes, ainsi que protéoglycanes et
              glycoprotéines. La couche la plus interne est la lame fusca, qui
              entre en contact avec la choroïde (Labelle, 2017)
            </p>
          </motion.div>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                De l'extérieur vers l'intérieur, <b>la sclère</b> est composée
                de :
                <br /> - La lame épiscérale, cette couche est au contact de la
                conjonctive bulbaire et est parcourue par les vaisseaux
                épiscléraux.
                <br /> - La substance propre de <b>la sclère</b>, elle est riche
                en fibres de collagène formant un réseau irrégulier. <br />- La
                lamina fusca de <b>la sclère</b>, elle est riche en fibres
                élastiques et possède de nombreux mélanocytes.
                <br /> La substance propre est un tissu conjonctif dense formé
                d'un très grand nombre de fibres collagènes groupées en
                faisceaux bien organisés, et de quelques fibres élastiques. Les
                fibres collagènes opposent la résistance nécessaire à la
                pression intraoculaire et à la traction exercée par les muscles
                péribulbaires.
                <br /> Elles donnent sa couleur blanche à <b>la sclère</b> dans
                les segments où elle est épaisse (Barone,2010)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie1} className="rounded-md" />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl my-5"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300 ">
                La couleur de la sclère dépend de l'épaisseur de son stroma,
                apparaissant en bleu lorsqu'il est mince (moins de 0,2 mm) et la
                teneur en matière grasse le long de sa limite extérieure, et
                apparaissant jaune avec une teneur accrue (caroténoïdes).Bien
                des fois, pourtant, la substance propre présente des aires
                pigmentées de mélanine, en particulier près du sillon scléral.
                Dans les zones où la substance propre est mince, la sclère
                présente une teinte plus sombre, car elle laisse transparaître
                la mélanine qui abonde dans la couche la plus interne, nommée
                lamina fusca de la sclère. Cette dernière couche est l'homologue
                de l'arachnoïde (Barone, 2010 ; Dubielzig et al., 2010).
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=" w-full"
            >
              <img src={anatomie2} className="rounded-md w-full " />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Anatomy;
