import React from "react";
import { motion } from "framer-motion";
import app1 from "../../public/Figures/app1.jpg";
import eye from "../../public/Figures/eye.png";
import eyes from "../../public/Figures/eyes.png";
import twoeyes from "../../public/Figures/twoeyes.png";
import twodogs from "../../public/Figures/twodogs.png";
import e from "../../public/Figures/e.png";
import hehe from "../../public/Figures/hehe.png";
import brown from "../../public/Figures/brown.png";
const PathologySection = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/20 p-6 rounded-lg mb-4"
    >
      <h3 className="text-xl font-semibold text-gray-200 mb-3">{title}</h3>
      <div className="text-neutral-300 space-y-2">{content}</div>
    </motion.div>
  );
};

const Applications = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent mb-8"
      >
        Pathologies de la tunique fibreuse
      </motion.h1>

      {/* Cornea Diseases Section */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-4"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            1.1. Maladies de la cornée
          </h2>

          {/* Congenital Diseases */}
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              1.1.1. Maladies congénitales
            </h3>

            {/* Corneal Dermoid */}
            <PathologySection
              title="1.1.1.1. Dermoïde cornéen - Dermoïde à kyste"
              content={
                <div>
                  <p className="font-semibold mb-2">Définition :</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Un morceau de peau qui provient de la cornée sclérotique
                      ou conjonctivale
                    </li>
                    <li>
                      Localisé partiellement ou complètement sur la cornée
                    </li>
                    <li>
                      Peut-être unilatéral ou bilatéral avec d'autres
                      malformations oculaires (Yeruham et al., 2002 ; Saraiva et
                      Delgado, 2020)
                    </li>
                  </ul>
                </div>
              }
            />

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={app1}
                  alt="Dermoïde oculaire dans l'œil gauche d'un chiot"
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Dermoïde oculaire dans l'œil gauche d'un chiot
                  <a
                    href="https://visionanimale.fr/traitement-dun-dermoide-corneo-conctival-keratectomie-video/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">Signes cliniques :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Présence d’une masse pigmentée généralement en regard du
                        canthus externe de l’œil.
                      </li>
                      <li>Présence des poils en surface de cette formation.</li>
                    </ul>
                  </div>
                }
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={eye}
                  alt="Dermoïde oculaire dans l'œil gauche d'un chien"
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Dermoïde oculaire dans l'œil gauche d'un chien
                  <a
                    href="http://kikivet.over-blog.com/article-30078861.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Traitement chirurgicale :{" "}
                      <span className="font-bold">
                        kératectomie superficielle
                      </span>
                    </p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>Anesthésie</li>
                      <li>
                        Préparation du site : désinfection de la zone
                        périoculaire
                      </li>
                      <li>Mis en place un blépharostat</li>
                      <li>
                        Une kératectomie lamellaire à l’aide d’un couteau à
                        cornée en suivant les marges du dermoïde
                      </li>
                      <li>
                        Le plan profond est disséqué à l’aide d’un couteau de
                        crescent angled bevel up. Les deux tiers de l’épaisseur
                        du stroma cornéen sont excisés afin d’enlever
                        complètement le dermoide
                      </li>
                    </ol>
                  </div>
                }
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={eyes}
                  alt="Video explicative"
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Video:
                  <a
                    href="https://www.youtube.com/watch?v=nmrl8EqFdVA "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto max-w-6xl"
                >
                  <p className="text-neutral-300">
                    Après l'opération, des antibiotiques topiques doivent être
                    utilisés et la régénération de la cornée doit être vérifiée
                    à intervalles réguliers avec le test à fluorescéine.
                    Cependant, une rechute peut survenir dans certains cas
                    (Gelatt, 2008 ; Chaudieu et Denisc, 2016).
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="mt-6">
              <PathologySection
                title="1.1.1.2. Pigmentation mélanique"
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Définition : <p />
                      <p className="font-semibold mb-2"></p>Le pigment de la
                      mélanine se trouve en diverses proportions dans les tissus
                      oculaires. Cette mélanine a tendance à protéger contre
                      diverses maladies oculaires qui peuvent causer cécité, y
                      compris mélanome uvéal et maculaire lié à l'âge
                      dégénérescence (Sarna et Swartz 1998 ; Hu, 2005 ; Sanchez
                      et al., 2020
                    </p>
                  </div>
                }
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={twoeyes}
                  alt="Exemples de pigmentation mélanique chez deux chiens (Sanchez et al., 2020)"
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Exemples de pigmentation mélanique chez deux chiens (Sanchez
                  et al., 2020)
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Etiologie : <p />
                      <p className="font-semibold mb-2"></p>L’origine de cette
                      inflammation est variée : malformation palpébrale
                      (entropion, ectropion), malimplantation ciliaire
                      (distichiasis), trichiasis en particulier lié au pli
                      nasal, élargissement anormal de la fente palpébrale,
                      baisse de sécrétion lacrymale.
                    </p>
                  </div>
                }
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={twodogs}
                  alt="Cas de kératite pigmentaire causée par des plis du nez frottant contre la cornée."
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Cas de kératite pigmentaire causée par des plis du nez
                  frottant contre la cornée.
                  <a
                    href="http://kikivet.over-blog.com/article-30078861.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={e}
                  alt="Cas de kératite pigmentaire en raison de distichiase."
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Cas de kératite pigmentaire en raison de distichiase.
                  <a
                    href="https://ophtalmoveterinaire.com/maladies_oculaires/keratite-pigmentaire/ "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={hehe}
                  alt="Cas de kératite pigmentaire en raison de la sécheresse oculaire (KCS)."
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Cas de kératite pigmentaire en raison de la sécheresse
                  oculaire (KCS).
                  <a
                    href="https://ophtalmoveterinaire.com/maladies_oculaires/keratite-pigmentaire/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    (Source)
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">Signes cliniques :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Dépôt de mélanine dans le stroma antérieur et
                        l’épithélium cornéen à la suite d’une inflammation
                        chronique.
                      </li>
                      <li>
                        Les néovaisseaux cornéens charrient avec eux les
                        pigments qui se déposent le long de leur trajet.
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800/20 p-6 rounded-lg">
                <img
                  src={brown}
                  alt="Pigmentation mélanique chez un chien"
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Pigmentation mélanique chez un chien
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Traitement : <p />
                      <p className="font-semibold mb-2"></p>L’inflammation
                      cornéenne chronique étant à l’origine des dépôts
                      pigmentaires, l’emploi d’anti-inflammatoires par voie
                      locale s’avère nécessaire, en particulier les corticoïdes
                      en l’absence d’ulcère cornéen, jusqu’à disparition de la
                      néovascularisation cornéenne. La chirurgie d’exérèse des
                      plages cornéennes pigmentées est réalisable mais donne des
                      résultats aléatoires voire décevants à moyen et long
                      terme. En effet, il est fréquent qu’une néovascularisation
                      se développe après une kératectomie superficielle et que
                      les pigments se redéposent rapidement. La cryothérapie
                      ciblée sur les plages de pigmentation mélanique donne de
                      bons résultats lorsque l’affection causale est traitée en
                      parallèle et cette technique peut être répétée dans le
                      temps
                    </p>
                    <a
                      href="https://visionanimale.fr/traitement-dun-dermoide-corneo-conctival-keratectomie-video/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-1"
                    >
                      (Video)
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;
