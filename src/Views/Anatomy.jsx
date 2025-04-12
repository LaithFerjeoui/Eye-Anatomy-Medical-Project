import React, { useState } from "react";
import { motion } from "framer-motion";
import AnatomyModal from "../Components/AnatomyModal";
import vid from '../../public/vid1.mp4'
const anatomies = [
  {
    id: 1,
    title: "Sclère",
    definition: (
      <ul>
        <li>Coque inextensible mais élastique en forme de sphère creuse.</li>
        <li>Peu vascularisée, et formée d'un tissu fibreux conjonctif dense.</li>
        <li>Assure la protection des éléments sensoriels de l'œil.</li>
      </ul>
    ),
    image: "/Figures/1th1.png",
    caption: "La sclére d'un chien (Adrienne Farricelli 2023)",
    composants: (
      <ul>
        <li>La couche la plus externe : L'épisclère</li>
        <li>La sclérotique : Le stroma scléral</li>
        <li>La couche la plus interne : La lame fusca</li>
      </ul>
    ),
    composantsImage: "/Figures/1th2.png",
    composantsImageCaption: "Partie antérieure de l'œil en coupe (Dyce et al., 2010)",
    note: (
      <ul>
        1 : chambre antérieure ; 2 : lentille ; 3 : fibres zonulaires ; 4 : angle iridocornéen ; 5 : corps ciliaire ; 6 : sclère ; 7 : muscles ciliaires ; 8 : plexus veineux sclérotique ; 9 : cornée ;         10 : iris avec le sphincter et les muscles dilatateurs
      </ul>
    ),
    proprities: (
      <ul>
        <li>La couleur de la sclère : bleu lorsqu'il est mince (moins de 0,2 mm) et jaune lorsque la teneur en matière grasse est accrue</li>
        <li>En avant, la sclère fusionne avec la cornée périphérique et la conjonctive bulbaire pour former une zone de transition : Le limbe</li>
        <li>L'épaisseur sclérale : le plus fin près de l'équateur, postérieur aux insertions des muscles extraoculaires et plus épaisse à son bord antérieur (jusqu'à 1,5 mm)</li>
      </ul>
    ),
    propritiesImage: "/Figures/anatomie3.jpg",
    propritiesImageCaption: "Fusion du tissu conjonctif irrégulier de the sclérotique (s) avec le tissu conjonctif organisé de la cornée (c) (x 400) (Kirk, 2014)"
  },
  {
    id: 2,
    title: "Cornée",
    definition: (
      <ul>
        <li>Constitue la partie antérieure, transparente et avasculaire de la tunique fibreuse du bulbe</li>
        <li>Plus convexe than the sclère et de forme presque ronde chez le chien</li>
      </ul>
    ),
    image: "/Figures/anatomie4.jpg",
    caption: "Courbure de la cornée canine (Dyce et al., 2010)",
    composants: (
      <ul>
        <li>Epithélium antérieur : couvert du film lacrymal précornéen</li>
        <li>Lame limitante antérieure (Membrane de Bowman)</li>
        <li>Substance propre de la cornée (90% de l'épaisseur)</li>
        <li>Lame limitante postérieure (Membrane de Descemet)</li>
        <li>Epithélium postérieur (endothélium de la chambre antérieure)</li>
      </ul>
    ),
    composantsImage: "/Figures/anatomie5.jpg",
    composantsImageCaption: "A: Épithélium antérieur de la cornée d'un chien. B: Membrane de Descemet (Kirk, 2014)",
    proprities: (
      <ul>
        <li>Résistante aux traumatismes</li>
        <li>Plus fine en partie centrale qu'en périphérie</li>
        <li>Premier dioptre dans la formation de l'image lumineuse</li>
        <li>Transparence due à l'absence de kératinisation et pigments</li>
      </ul>
    ),
    propritiesImage: "/Figures/anatomie6.jpg",
    propritiesImageCaption: "Œdème cornéen dans l'œil gauche d'un Boston terrier (Casanova M, 2024)"
  },
  {
    id: 3,
    title: "Choroïde",
    definition: (
      <ul>
        <li>La partie la plus postérieure de la tunique vasculaire</li>
        <li>Appelée aussi l'uvée postérieure car située entre la rétine et la sclère</li>
        <li>Elle s'étend de l'ora serrata jusqu'au nerf optique</li>
      </ul>
    ),
    image: "/Figures/3th1.png",
    caption: "Angiographie du fond d'œil (choroide) d'un chien en bonne santé (SOLAK Hüseyin 2025)",
    composants: (
      <ul>
        <li>La suprachoroïde</li>
        <li>La couche vasculaire</li>
        <li>La couche choriocapillaire</li>
        <li>Le tapetum</li>
        <li>La membrane de Bruch</li>
      </ul>
    ),
    composantsImage: "/Figures/3th2.png",
    composantsImageCaption: "Photomicrographie de la choroïde normale du chien (A: faible grossissement; B: Grossissement plus élevé) (Dubielzig et al.,2010)",
    proprities: (
      <ul>
        <li>Forme à peu près triangulaire</li>
        <li>Réfléchit la lumière qui a traversé la rétine</li>
        <li>Le tapetum présente un aspect brillant avec reflet métallique ou fluorescent</li>
        <li>Couleur varie du jaune au bleu verdâtre</li>
      </ul>
    ),
    propritiesImage: "/Figures/3th3.png",
    propritiesImageCaption: "Vue macroscopique de tapetum normal chez le chien (Yamaue et al 2014)"
  }
];

const AnatomySection = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/20 p-6 rounded-lg my-4"
    >
      <h3 className="text-xl font-semibold text-gray-200 mb-3">{title}</h3>
      <div className="text-neutral-300 space-y-2">{content}</div>
    </motion.div>
  );
};

const Anatomy = () => {
  const [selectedAnatomy, setSelectedAnatomy] = useState(null);

  const openModal = (anatomy) => {
    setSelectedAnatomy(anatomy);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnatomyModal
        isOpen={selectedAnatomy !== null}
        onClose={() => setSelectedAnatomy(null)}
        anatomy={selectedAnatomy}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent mb-8"
      >
        Anatomie de l'œil
      </motion.h1>
      <div className="w-full flex justify-center items-center my-20">
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full max-w-4xl rounded-xl"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-4"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            I. Tunique fibreuse
          </h2>

          <div className="ml-4">

            <AnatomySection
              title="1. Sclère"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[0])}
                >
                  <h3 className="text-xl font-semibold text-gray-200 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="2. Cornée"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[1])}
                >
                  <h3 className="text-xl font-semibold text-gray-200 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-4"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            II. Tunique vasculaire (UVEE)
          </h2>

          <div className="ml-4">
            <AnatomySection
              title="1. Choroïde"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[2])}
                >
                  <h3 className="text-xl font-semibold text-gray-200 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Anatomy;
