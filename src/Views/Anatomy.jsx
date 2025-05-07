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
    propritiesImage: "/Figures/aaaa.jpeg",
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
  },
  {
    id: 4,
    title: "Corps ciliaire",
    definition: (
      <ul>
        <li>Situé dans le segment pré-équatorial du bulbe, où il forme un anneau circulaire autour de l'équateur du cristallin.</li>
        <li>Il s'étend de la base de l'iris jusqu'à l'ora serrata.</li>
      </ul>
    ),
    image: "/Figures/ana1.png",
    caption: "Schéma de l'angle iridocornéen et de l'anatomie du corps ciliaire d’un chien avec flux d'humeur aqueuse. (Kim D et al 2025)",
    composants: (
      <ul>
        <li>Le corps ciliaire se divise en deux zones :

          <br />•	La zone antérieure, ou pars plicata, correspond à un anneau de procès ciliaires en forme de lame (corona ciliaris). Dans leur ensemble, les 80 à 100 procès ciliaires forment une couronne ciliaire.
          <br /> •	La zone postérieure, ou pars plana, plate, s’étend depuis la terminaison postérieure des procès ciliaires jusqu’à l’extrémité périphérique de la rétine, ou ora ciliaris retinae.
        </li>
        <li>Des fibres musculaires lisses attachées à la sclère innervés par les fibres parasympathiques des nerfs ciliaires courts.</li>
        <li>Rôle important dans l'accommodation. </li>
        <li>Leurs contractions tirent les procès vers l’avant et vers l’intérieur et détendent les zonules lentillaires permettant la déformation du cristallin.</li>

      </ul>
    ),
    composantsImage: "/Figures/ana2.png",
    composantsImageCaption: " A et B : Corps ciliaire normal (coloration HE ) C : Fibres musculaires du corps ciliaire (Agrandissement x 40) (Kirk, 2014)",
    proprities: (
      <ul>
        <li>Le corps ciliaire génère la pression intraoculaire (PIO) et la contrôle en assurant l’écoulement de l’humeur aqueuse vers la chambre antérieure par l’intermédiaire de sa musculature.</li>
        <li>Le corps ciliaire est le principal centre de désintoxication de l’œil, grâce à sa richesse en systèmes anti-oxydant et en microsomes.</li>
        <li>La rupture des fibres zonulaires provoque une luxation du cristallin, qui peut alors se déplacer dans les chambres postérieure ou antérieure de l'œil,</li>
      </ul>
    ),
    propritiesImage: "/Figures/ana3.png",
    propritiesImageCaption: " Luxation antérieure du cristallin chez un chien associé à un œdème cornéen (Labelle, 2017)"
  },
  {
    id: 5,
    title: "Iris",
    definition: (
      <ul>
        <li>Se situe en avant du corps ciliaire, séparant les chambres postérieure et antérieure de l’œil.</li>
        <li>Joue le rôle de diaphragme de l'œil.</li>
      </ul>
    ),
    image: "/Figures/ana4.png",
    caption: "Topographie de l’iris (A : coupe anatomique ; B : image histologique) (Labelle, 2017)",
    composants: (
      <ul>
        <li>La plupart de l'iris est constitué de stroma conjonctif avec des vaisseaux sanguins et des nerfs.</li>
        <li>Des nombres variables de mélanocytes sont dispersés dans le stroma, principalement dans le stroma postérieur.</li>
        <li>L’Iris bleu a sensiblement moins de mélanocytes que les iris bruns.</li>
        <li>À sa périphérie, le bord ciliaire de l'iris s'insère sur la base (antérieure) du corps ciliaire et est attaché d'autre part au limbe scléro-cornéen par le ligament pectiné.</li>
        <li>Le bord libre, central, de l'iris circonscrit la pupille ; c'est pourquoi il est nommé bord pupillaire.</li>
      </ul>
    ),
    composantsImage: "/Figures/ana5.png",
    composantsImageCaption: "Mélanocytes de l’iris canins (Agrandissement, 100×) (Kirk)",
    proprities: (
      <ul>
        <li>La couleur de l'iris est largement variable selon l'espèce.</li>
        <li>Elle dépend surtout de la quantité de mélanine présente dans l'ensemble de l'iris, par exemple un brun foncé en cas de pigmentation intense.</li>
      </ul>
    ),
    propritiesImage: "/Figures/ana6.png",
    propritiesImageCaption: "Les différentes couleurs de l’iris de chien (Spiegel, Jason Robins 2024)"
  },
  {
    id: 6,
    title: "Organisation générale de la rétine",
    definition: (
      <ul>
        <li>Elle s'étend de la papille à l'ora serrata pour constituer la rétine dite visuelle.</li>
        <li>Elle n'adhère à la choroïde qu'en ces deux points.</li>
        <li>Le reste de la rétine est maintenu contre la choroïde grâce à la pression exercée par le corps vitré.</li>
      </ul>
    ),
    composants: (
      <ul>
        <li>La partie antérieure : tapisse les surfaces postérieures de l'iris et du corps ciliaire. Dépourvue de photorécepteurs, elle constitue la rétine aveugle.</li>
        <li>La partie postérieure : est la rétine optique, qui est beaucoup plus épaisse et recouvre la face interne de la choroïde. Elle contient les récepteurs sensoriels visuels.</li>
      </ul>
    ),
    composantsImage: "/Figures/ana7.png", // À ajuster si image séparée pour composants
    composantsImageCaption: "Images histologiques des couches rétiniennes (A et B chez le chat ; C et D chez le dromadaire) (El-Ghazali et Eman, 2018)",
    note: 'RL : couche rétinienne ; TL : Tapetum lucidum ; C : choroïde ; S : Sclère ; RPE : épithélium rétinien pigmenté ; Onl : couche nucléaire externe ; Opl : couche plexiforme externe ; Gl : ganglionnaire couche ; BM : membrane de brosse ; M : granules de mélanine ; Bv : vaisseaux sanguins ; CC choriocapillaire ; N noyau ; ON : nerf optique ',
    proprities: (
      <ul>
        <li>La limite entre les parties aveugle et optique de la rétine se présente comme une ligne circulaire ou ovale située au-devant de l'équateur du bulbe : c'est l'ora serrata.</li>
        <li>La rétine s'étend de la tête du nerf optique à l’ora ciliaris, où elle fusionne avec les deux couches de l'épithélium ciliaire.</li>
        <li>La rétine est considérée comme une extension hautement organisée du cerveau antérieur, elle est composée de 10 couches de cellules spécialisées.</li>
      </ul>
    ),
  },
  {
    id: 7,
    title: "Structure de la rétine",
    definition: (
      <ul>
        <li>La rétine neurosensorielle fait référence aux neuf couches internes, à l'exclusion de la couche la plus externe, l'épithélium pigmentaire rétinien (RPE).</li>
        <li>De l'extérieur à l'intérieur, ces dix couches histologiquement distinctes sont représentées dans la figure suivante :</li>
      </ul>
    ),
    image: "/Figures/ana8.png", // Remplacer selon le nom réel
    caption: "Organisation de la rétine normale du chien (Labelle, 2017)",
    composants: (
      <ul>
        <li><strong>Épithélium pigmentaire :</strong>
          <ul>
            <li>Couche pigmentaire de la rétine optique.</li>
            <li>Formée d’un épithélium simple uni au complexe basal de la choroïde.</li>
            <li>Rôle : absorption de la lumière incidente, synthèse de la mélanine, stockage de la vitamine A, transport des métabolites, etc.</li>
          </ul>
        </li>
        <li><strong>Couche des photorécepteurs :</strong>
          <ul>
            <li>Segments externes des cônes et des bâtonnets.</li>
            <li>Strate épaisse (80 à 120 µm) d’assemblage ordonné de prolongements photorécepteurs.</li>
            <li>Bâtonnets : cylindroïdes, fins, plus longs. Cônes : plus épais, à extrémité rétrécie.</li>
          </ul>
        </li>
        <li><strong>Couche granulaire externe :</strong>
          <ul>
            <li>Formée par les corps cellulaires des photorécepteurs.</li>
            <li>Cellules petites, à noyaux volumineux.</li>
          </ul>
        </li>
        <li><strong>Couche plexiforme externe :</strong>
          <ul>
            <li>Zone d’interconnexions entre cellules des couches adjacentes.</li>
          </ul>
        </li>
        <li><strong>Couche granulaire interne :</strong>
          <ul>
            <li>Stratum ganglionare retinae.</li>
            <li>Plusieurs types cellulaires en trois strates secondaires.</li>
          </ul>
        </li>
        <li><strong>Couche plexiforme interne :</strong>
          <ul>
            <li>Ramifications d’axones bipolaires, dendrites ganglionnaires, cellules amacrines, neurocytes aberrants.</li>
          </ul>
        </li>
        <li><strong>Couche ganglionnaire :</strong>
          <ul>
            <li>Neurocytes secondaires de la voie optique, formant les fibres du nerf optique.</li>
            <li>Denses de l’ora serrata jusqu’à la macula.</li>
          </ul>
        </li>
        <li><strong>Couche limitante interne :</strong>
          <ul>
            <li>Fine membrane basale insérant les gliocytes rétiniens.</li>
            <li>Face interne appliquée sur le corps vitré, séparant celui-ci des fibres optiques.</li>
          </ul>
        </li>
      </ul>
    ),
    composantsImage: "/Figures/bruh1.png",
    composantsImageCaption: 'Figure Zone centrale de la couche cellulaire visuelle du chien (A : Grossissement, 400 x; B: 2500 x) (Kirk. 2014)',
    composantsImage2: "/Figures/bruh2.png",
    composantsImageCaption2: "Microscopie électronique des cellules de Muller chez le chien (A) et chez la poule (B) (Agrandissement d'origine : A, 35000 x; B, 31000 x.) (Labelle. 2017)",
    composantsImage3: "/Figures/bruh3.png",
    composantsImageCaption3: " Microscopie électronique des extrémités synaptiques des photorécepteurs chez le chien (A : terminaison de tige ; B : terminaison du cône) (Agrandissement d'origine, 50000 x.) (Labelle, 2017)",
    proprities: (
      <ul>
        <li><strong>Vascularisation de la rétine :</strong>
          <ul>
            <li>Les vaisseaux rétiniens sont limités aux couches internes de la rétine optique.</li>
            <li>Les couches externes sont avasculaires et alimentées par la lame choroïdocapillaire.</li>
            <li>Chez les carnivores, nombreux vaisseaux larges (jusqu’à 200 µm) — rétine de type euangiotique ou holangiotique.</li>
          </ul>
        </li>
      </ul>
    ),
    propritiesImage: "/Figures/ana10.png",
    propritiesImageCaption: "Fond d’œil d’un chien sain (J. Piris 2021)"
  },
  {
    id: 8,
    title: "Nerf optique",
    definition: (
      <ul>
        <li>Les axones des cellules ganglionnaires de la rétine se regroupent en faisceaux convergents qui passent à travers la sclère pour former le nerf optique.</li>
        <li>Le nerf optique est entouré de trois membranes méningées : la dure-mère, l’arachnoïde et la pie-mère.</li>
      </ul>
    ),
    image: "/Figures/ana11.png", // À adapter selon ton fichier
    caption: "Coupe histologique du nerf optique du chien (HEx100) (Gilger, 2011)",
    composants: (
      <ul>
        <li>Les axones des cellules ganglionnaires rétiniennes quittent la couche de fibres nerveuses pour former la tête du nerf optique, aussi appelée papille ou disque optique.</li>
        <li>Le disque optique est une région blanche, bien délimitée, où les fibres optiques ainsi que les artérioles et veinules rétiniennes quittent la rétine.</li>
        <li>L’absence de photorécepteurs à cet endroit explique son ancien nom de « tache aveugle ».</li>
      </ul>
    ),
    proprities: (
      <ul>
        <li>La <strong>macula</strong> est la région de la rétine où l’acuité visuelle est maximale, en raison de la forte densité de cônes et de neurones ganglionnaires multipolaires.</li>
        <li>Elle a une forme ronde, mais peut apparaître comme une strie claire et pauvrement vascularisée.</li>
      </ul>
    )
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
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="text-neutral-900 space-y-2">{content}</div>
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
      className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-950 bg-clip-text text-transparent mb-8"
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
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            I. Tunique fibreuse
          </h2>

          <div className="ml-4">

            <AnatomySection
              title="1. Sclère"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[0])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="2. Cornée"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[1])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            II. Tunique vasculaire (UVEE)
          </h2>

          <div className="ml-4">
            <AnatomySection
              title="1. Choroïde"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[2])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="2. Corps ciliaire"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[3])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="3. Iris"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[4])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            III. TUNIQUE NERVEUSE
          </h2>

          <div className="ml-4">
            <AnatomySection
              title="1. Organisation générale de la rétine "
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[5])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="2. Structure de la rétine"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[6])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
                    Voir la structure anatomique
                  </h3>
                </motion.div>
              }
            />
            <AnatomySection
              title="3. Nerf optique : "
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/60 hover:bg-white/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anatomies[7])}
                >
                  <h3 className="text-xl font-semibold text-gray-700 text-center">
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
