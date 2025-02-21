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
import membrane from "../../public/Figures/membrane.png";
import membrane2 from "../../public/Figures/membrane2.png";
import memberanes from "../../public/Figures/memberanes.png";
import ulcere from "../../public/Figures/ulcere.png";
import type1 from "../../public/Figures/type1.png";
import type2 from "../../public/Figures/type2.png";
import type3 from "../../public/Figures/type3.png";
import type4 from "../../public/Figures/type4.png";
import symp1 from "../../public/Figures/symp1.png";
import symp2 from "../../public/Figures/symp2.png";
import diag from "../../public/Figures/diag.png";
import trait1 from "../../public/Figures/trait1.png";
import trait2 from "../../public/Figures/trait2.png";
import trait3 from "../../public/Figures/trait3.png";
import trait4 from "../../public/Figures/trait4.png";
import trait5 from "../../public/Figures/trait5.png";
import obs1 from "../../public/Figures/obs1.png";
import obs2 from "../../public/Figures/obs2.png";
import obs3 from "../../public/Figures/obs3.png";
import obs4 from "../../public/Figures/obs4.png";
import obs5 from "../../public/Figures/obs5.png";
import obs6 from "../../public/Figures/obs6.png";
import obs7 from "../../public/Figures/obs7.png";
import test1 from "../../public/Figures/test1.png";
import test2 from "../../public/Figures/test2.png";
import test3 from "../../public/Figures/test3.png";
import test4 from "../../public/Figures/test4.png";
import test5 from "../../public/Figures/test5.png";
import test6 from "../../public/Figures/test6.png";
import test7 from "../../public/Figures/test7.png";
import test8 from "../../public/Figures/test8.png";
import test9 from "../../public/Figures/test9.png";
import test10 from "../../public/Figures/test10.png";
import test11 from "../../public/Figures/test11.png";
import test12 from "../../public/Figures/test12.png";
import test13 from "../../public/Figures/test13.png";
import test14 from "../../public/Figures/test14.png";
import test15 from "../../public/Figures/test15.png";
import test16 from "../../public/Figures/test16.png";
import test18 from "../../public/Figures/test18.png";
import test17 from "../../public/Figures/test17.png";
import test19 from "../../public/Figures/test19.png";
import test20 from "../../public/Figures/test20.png";
import test21 from "../../public/Figures/test21.png";
import test22 from "../../public/Figures/test22.png";
import test23 from "../../public/Figures/test23.png";
import test24 from "../../public/Figures/test24.png";
import test25 from "../../public/Figures/test25.png";
import test26 from "../../public/Figures/test26.png";
import test27 from "../../public/Figures/test27.png";
import test28 from "../../public/Figures/test28.png";
import test29 from "../../public/Figures/test29.png";
import test30 from "../../public/Figures/test30.png";
import test31 from "../../public/Figures/test31.png";
import test32 from "../../public/Figures/test32.png";
import test33 from "../../public/Figures/test33.png";
import MaladiesCourantes from "../Components/MaladiesCourantes";


const PathologySection = ({ title, content }) => {
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

const Applications = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <MaladiesCourantes />
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
                        Présence d'une masse pigmentée généralement en regard du
                        canthus externe de l'œil.
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
                        Une kératectomie lamellaire à l'aide d'un couteau à
                        cornée en suivant les marges du dermoïde
                      </li>
                      <li>
                        Le plan profond est disséqué à l'aide d'un couteau de
                        crescent angled bevel up. Les deux tiers de l'épaisseur
                        du stroma cornéen sont excisés afin d'enlever
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
                      <p className="font-semibold mb-2"></p>L'origine de cette
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
                        l'épithélium cornéen à la suite d'une inflammation
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
                      <p className="font-semibold mb-2"></p>L'inflammation
                      cornéenne chronique étant à l'origine des dépôts
                      pigmentaires, l'emploi d'anti-inflammatoires par voie
                      locale s'avère nécessaire, en particulier les corticoïdes
                      en l'absence d'ulcère cornéen, jusqu'à disparition de la
                      néovascularisation cornéenne. La chirurgie d'exérèse des
                      plages cornéennes pigmentées est réalisable mais donne des
                      résultats aléatoires voire décevants à moyen et long
                      terme. En effet, il est fréquent qu'une néovascularisation
                      se développe après une kératectomie superficielle et que
                      les pigments se redéposent rapidement. La cryothérapie
                      ciblée sur les plages de pigmentation mélanique donne de
                      bons résultats lorsque l'affection causale est traitée en
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
            <div className="mt-6">
              <PathologySection
                title="1.1.1.3. memberanes pupillaires permanentes et opacités cornéennes"
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Définition : <p />
                      <p className="font-semibold mb-2"></p>La persistance de la
                      membrane pupillaire (PMP) est un changement congénital
                      caractérisé par des restes de membrane fœtale qui
                      persistent comme tissu filamenteux dans toute la pupille
                      (Khalkhal, 2011 ; Seong et al., 2018).
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
                  src={membrane}
                  alt="Persistance de la membrane pupillaire chez un chien "
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Persistance de la membrane pupillaire chez un chien
                  <a
                    href="https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/iris-et-uvee/persistance-de-la-membrane-pupillaire/ "
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
                  src={membrane2}
                  alt="Persistance de la membrane pupillaire chez un chien  "
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Persistance de la membrane pupillaire chez un chien
                  <a
                    href="https://clinique-veterinaire-de-la-riviere.com/la-persistance-de-la-membrane-pupillaire/"
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
                        Formation des foyers d'opacités cornéennes diffuses. Les
                        opacités focales sont formées par l'épaississement et la
                        déformation de la membrane de descement.
                      </li>
                      <li>
                        Dans les opacités diffuses, il se produit à la suite de
                        l'atteinte de la membrane de décroissance dans une zone
                        beaucoup plus grande et du développement d'un œdème dans
                        la zone (Gelatt, 2008 ; Seong et al., 2018).
                      </li>
                      <li>
                        Les filaments membraneux peuvent se lier à la cornée et
                        le cristal de la lentille et provoquent l'opacité ou le
                        développement de la cataracte (Khalkhal et al., 2011 ;
                        Sooryadas et al., 2012).
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
                  src={memberanes}
                  alt="Membranes pupillaires permanentes (Seong et al., 2018)  "
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Membranes pupillaires permanentes (Seong et al., 2018)
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Traitement : <p />
                      <p className="font-semibold mb-2"></p>L'utilisation
                      d'atropine topique pour dilater la pupille peut aider à
                      décomposer les PPM. La chirurgie et l'intervention au
                      laser peuvent être nécessaires pour les grandes membranes
                      opaques (Gupta et al., 2003 ; Seong et al., 2018). Il est
                      tout de même conseillé de ne pas faire reproduire des
                      sujets atteints de formes graves.
                    </p>
                  </div>
                }
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              1.1.2. Maladies acquises
            </h3>
            <div className="mt-6">
              <PathologySection
                title="1.1.2.1. Ulcères cornéens"
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Définition : <p />
                      <p className="font-semibold mb-2"></p> L'ulcération
                      cornéenne = kératite ulcéreuse, est une des maladies
                      oculaires les plus courantes chez le chien. Un ulcère
                      cornéen est toute kératopathie dans laquelle il y a une
                      perte d'épithélium. La kératite ulcéreuse est un terme
                      équivalent car il y a toujours une inflammation associée
                      avec ulcération cornéenne (Farghali et al., 2021).
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
                  src={ulcere}
                  alt="Ulcère cornéen profond chez un carlin (vue latérale) (Jaksz et Buss,2017) <br>  "
                  className="w-full max-w-3xl mx-auto rounded-lg"
                />
                <p className="text-neutral-300 text-center mt-4 italic">
                  Ulcère cornéen profond chez un carlin (vue latérale) (Jaksz et
                  Buss,2017) <br />
                  <span className="font-bold">Observations : </span> Notez
                  l'indentation visible et le changement de contour de la
                  surface oculaire.
                </p>
              </div>
            </motion.div>
            <div className="mt-6">
              <PathologySection
                content={
                  <div>
                    <p className="font-semibold mb-2">
                      Etiologie : <p />
                      <p className="font-semibold mb-2"></p>Une diminution de la
                      protection de l'épithélium cornéen ou abrasion cornéenne
                      accrue <br /> La protection cornéenne est assurée par le
                      film lacrymal, les paupières supérieures, inférieure et la
                      troisième paupière. Une production insuffisante, ou la
                      rétention ou la dispersion du film lacrymal provoque une
                      ulcération cornéenne (Kirk, 2014 ; Sotnikova et al.,
                      2021).
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Causes endogènes : position anormale de la
                        paupière/anomalies des cils
                      </li>
                      <li>
                        Causes exogènes : les traumatismes et rétention de corps
                        étranger dans le fornix conjonctival
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <PathologySection
              title="Ulcères cornéens"
              content={
                <div>
                  <p>
                    Les ulcères cornéens sont classés selon la profondeur de l'atteinte cornéenne et par leur cause sous-jacente. Les ulcères cornéens sont caractérisés par la position dans la cornée et la taille (Jaksz et Buss, 2017).
                  </p>
                  <p>
                    Souvent, les ulcères cornéens sont secondaires à d'autres maladies. L'identification et la suppression de la cause (par exemple, masses, lagophtalmie, distichiase, cils ectopiques), les corps étrangers, les traumatismes et le KCS sont souvent indispensables à la cicatrisation de l'ulcère cornéen (Pandey et al., 2018).
                  </p>
                </div>
              }
            />

            {/* Types of Ulcers Section */}
            <PathologySection
              title="Types des ulcères"
              content={
                <div>
                  <p className="font-semibold mb-2">1) L'ulcère superficiel :</p>
                  <p>
                    L'ulcère superficiel, où la perte de substance touche l'épithélium cornéen et éventuellement la partie superficielle du stroma ; il peut également présenter des bords décollés.
                  </p>
                  <img
                    src={type1}
                    alt="Ulcère superficiel"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">Ulcère superficiel à bord décollés chez un chien</p>

                  <p className="font-semibold mb-2 mt-4">2) L'ulcère stromal :</p>
                  <img
                    src={type2}
                    alt="Ulcère stromal"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">Description de l'ulcère stromal</p>

                  <p className="font-semibold mb-2 mt-4">3) La descemétocèle :</p>
                  <p>
                    Dans laquelle la membrane de Descemet fait hernie au travers de la perte de substance stromale.
                  </p>
                  <img
                    src={type3}
                    alt="Descemétocèle"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">Description de la descemétocèle</p>

                  <p className="font-semibold mb-2 mt-4">4) L'ulcère perforé :</p>
                  <p>
                    Dans lequel la brèche touche l'ensemble de l'épaisseur de la cornée, autorisant l'issue de l'humeur aqueuse et parfois de l'iris.
                  </p>
                  <img
                    src={type4}
                    alt="Ulcère perforé"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">Description de l'ulcère perforé</p>

                  <p className="mt-4">
                    Pour plus d'informations, consultez le lien suivant :
                    <a
                      href="https://ophtavet.com/wp-content/uploads/2020/09/Ulcere-de-cornee-apprendre-a-gerer-cette-urgence.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-1"
                    >
                      (Source)
                    </a>
                  </p>
                </div>
              }
            />

            {/* Symptoms Section */}
            <PathologySection
              title="Symptômes"
              content={
                <div>
                  <p>
                    Une rougeur, une douleur, sont souvent associés à une sensation de corps étranger dans l'œil.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Une photophobie</li>
                    <li>Un larmoiement</li>
                    <li>Blépharospasme</li>
                    <li>Oedème cornéen</li>
                    <li>Myosis (Jaksz et Buss, 2017 ; Farghali et al., 2021)</li>
                  </ul>
                  <p>
                    Les ulcères superficiels simples guérissent généralement rapidement, avec formation d'une cicatrice minime.
                    Les ulcères profonds compliqués (avec une infection microbienne) peuvent conduire à l'altération de la vision en raison de cicatrices cornéennes ou, lorsque une perforation cornéenne se produit, jusqu'à la formation de synéchies antérieures (Kirk, 2014 ; Jaksz et al., 2021).
                  </p>
                  <img
                    src={symp1}
                    alt="Symptômes des ulcères cornéens"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">Œil de chien montrant un entropion avec un ulcère cornéen (Farghali et al., 2021)</p>
                  <img
                    src={symp2}
                    alt="Symptômes des ulcères cornéens"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-4 my-6"
                  />
                </div>
              }
            />

            {/* Diagnostic Section */}
            <PathologySection
              title="Diagnostic"
              content={
                <div>
                  <p>
                    Les ulcères cornéens chroniques infectés ou évolutifs doivent subir une culture microbiologique et des tests de sensibilité aux antibiotiques et un examen cytologique des échantillons de cornée. Ces procédures de diagnostic aident à orienter la thérapie d'antimicrobiens spécifiques (Pandey et al., 2018).
                  </p>
                  <p>
                    Le diagnostic d'un ulcère cornéen est fait sur la base des signes cliniques, et la rétention du colorant (fluorescéine) appliqué localement par les troma cornéen (Figure 101) (Farghali et al., 2021).
                  </p>
                  <img
                    src={diag}
                    alt="Diagnostic d'ulcère cornéen"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">Ulcère cornéen superficiel (A : Oeil souffrant d'ulcère cornéen, B : après application d'un colorant fluorescent montrant le type et la profondeur des ulcères cornéens) (Farghali et al., 2021)</p>
                </div>
              }
            />

            {/* Treatment Section */}
            <PathologySection
              title="Traitement"
              content={
                <div>
                  <p className="font-semibold mb-2">1) Traitement des ulcères cornéens non compliqués (simples) :</p>
                  <p>
                    Lors d'ulcère superficiel simple, la cicatrisation est rapide (5 jours en moyenne), par migration et allongement des cellules épithéliales.
                    Le traitement associe un collyre antibiotique (3 ou 4 fois/j pendant 10 jours), un cycloplégique (atropine, 2 fois/j pendant 6 jours) et des cicatrisants, lubrifiants et anticollagénases (3 ou 4 fois/j pendant 10 jours).
                    Un examen de contrôle doit toujours être programmé dans les 7 jours.
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait1}
                        alt="Traitement ulcère cornéen 1"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">J0 : chémosis et ulcère épithélial étendu</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait2}
                        alt="Traitement ulcère cornéen 2"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">J2 : chémosis atténué et ulcère épithélial résiduel </p>

                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait3}
                        alt="Traitement ulcère cornéen 3"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">J8 : guérison complète</p>

                    </div>

                  </div>

                  <p className="font-semibold mb-2 mt-4">2) Traitement des ulcères cornéens profonds (stromal) ou Descemétocèle :</p>
                  <p>
                    Les ulcères qui évoluent rapidement / qui ont des zones de fonte du stroma / une perte stromale / infiltration cellulaire marquée sont tous considérés compliqués et infectés.
                    Une cause déclenchante doit être recherchée et éliminée ou contrôlée si possible ; antibiotique topique à large spectre et un traitement mydriatique doit être instauré et un collier élisabéthain devrait être fourni (Pandey et al., 2018 ; Prado et al., 2021).
                    Si l'ulcère est plus profond que la moitié de l'épaisseur de la cornée, il bénéficie également de la chirurgie car le stroma cornéen n'a une capacité limitée à se régénérer, et la guérison est lente, nécessitant souvent une infiltration fibrovasculaire. Ce processus peut prendre des semaines s'il se produit spontanément à partir du limbe mais peut être rapidement fourni par greffe conjonctivale (Maggs et al., 2018).
                  </p>
                  <p>
                    Les avantages des greffes conjonctivales :
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Support mécanique pour une cornée fine ou fragilisée</li>
                      <li>Un approvisionnement continu de sérum, qui contient des anticollagénases et des facteurs de croissance</li>
                      <li>Une source immédiate de fibroblastes à réplication active pour régénération du collagène dans le stroma</li>
                      <li>Une voie pour les antibiotiques systémiques à livrer à l'ulcère cornéen.</li>
                    </ul>
                  </p>
                  <p>
                    Les sutures cornéennes devraient être placées environ d'épaisseur cornéenne aux trois quarts et sans pénétrer chambre antérieure (Maggs et al., 2018).
                    5 types de greffes conjonctivales :
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Greffons insulaires ou libres</li>
                      <li>Greffes complètes ou à 360 degrés</li>
                      <li>Avancement simple ou greffes de capuchon</li>
                      <li>Greffes pédiculaires rotatives</li>
                      <li>Greffes de pont</li>
                    </ul>
                  </p>
                  <p>
                    Les greffes de type avancement (capot ou 360 degrés) sont plus faciles à récolter et à placer. Une bande de conjonctive d'une longueur et d'une largeur suffisante pour atteindre et couvrir l'ulcère est libérée du Tenon sous-jacent capsule.
                    Un greffon conjonctival fin et mobile, est suturé à la cornée viable entourant l'ulcère avec de simples points de suture interrompus (Pandey et al., 2018).
                    Une approche alternative consiste à clouer le greffon avec quatre à six simples sutures puis sursouder le périmètre du greffon avec un motif continu simple. Des sutures supplémentaires au limbe peuvent aider à sécuriser la greffe. Il n'est pas indispensable de fermer le loyer en la conjonctive bulbaire ; cependant, cela a tendance à réduire les douleurs postopératoires (Maggs et al., 2018 ; Prado et al., 2021).
                  </p>
                  <img
                    src={trait4}
                    alt="Greffe conjonctivale type avancement"
                    className="w-full max-w-3xl mx-auto rounded-lg my-4"
                  />
                  <p className="text-center italic">Greffe conjonctivale type avancement (Maggs et al., 2018)</p>
                  <img
                    src={trait5}
                    alt="Greffe de pédicule conjonctival"
                    className="w-full max-w-3xl mx-auto rounded-lg my-4"
                  />
                  <p className="text-center italic">Figure : Greffe de pédicule conjonctival immédiatement après avoir été coupé</p>
                </div>
              }
            />
            {/* Observations Section */}
            <PathologySection
              title="Observations"
              content={
                <div>
                  <p className="font-semibold mb-2">Observations :</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>A : Une petite incision limbique est pratiquée à côté de la lésion.</li>
                    <li>B : Le lambeau est miné par dissection mousse.</li>
                    <li>C : Des incisions conjonctivales parallèles ou légèrement divergentes sont faites vers le fornix, avec une largeur du lambeau suffisante pour couvrir la lésion cornéenne.</li>
                    <li>D : Le lambeau conjonctival est avancé centralement pour couvrir la lésion cornéenne et suturé en place avec de simples sutures interrompues de polyglactine.</li>
                  </ul>
                  <div className="flex space-x-4 mt-4 justify-center">
                    <img
                      src={obs1}
                      alt="Observation A"
                      className="w-full max-w-xs rounded-lg"
                    />
                    <img
                      src={obs2}
                      alt="Observation B"
                      className="w-full max-w-xs rounded-lg"
                    />
                  </div>
                  <p className="text-center italic">Captions for the first two observation images here</p>
                  <div className="flex space-x-4 mt-4 justify-center">
                    <img
                      src={obs3}
                      alt="Observation C"
                      className="w-full max-w-xs rounded-lg"
                    />
                    <img
                      src={obs4}
                      alt="Observation D"
                      className="w-full max-w-xs rounded-lg"
                    />
                  </div>
                  <p className="text-center italic">Captions for the second two observation images here</p>
                  <div className="flex space-x-4 mt-4 justify-center">
                    <img
                      src={obs5}
                      alt="Observation E"
                      className="w-full max-w-xs rounded-lg my-6"
                    />
                    <img
                      src={obs6}
                      alt="Observation F"
                      className="w-full max-w-xs rounded-lg my-6"
                    />
                  </div>
                  <p className="text-center italic">Captions for the last two observation images here</p>
                  <p className="mt-4">
                    Une fois l'ulcère cornéen guéri, l'apport sanguin au greffon conjonctival peut être coupé. Après anesthésique topique, des ciseaux peuvent être placés sous la partie pédiculaire du greffon, qui n'adhère pas à l'épithélium cornéen normal sous-jacent (Figure 107) (Kirk, 2014 ; Prado et al., 2021).
                  </p>
                  <img
                    src={obs7}
                    alt="Section pédiculaire après greffe conjonctivale"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">Figure : Section pédiculaire après greffe conjonctivale (Kirk, 2014)</p>
                </div>
              }
            />
            <PathologySection
              title="1.1.2.2. Kératite superficielle chronique (Pannus) "
              content={
                <>
                  <div>
                    <p className="mt-4">
                      La kératite superficielle chronique (CSK) est une maladie progressive,
                      bilatérale, inflammatoire et potentiellement aveuglante : maladie de la
                      cornée canine. Connue sous le nom de « pannus dégénératif ».
                    </p>
                    <img
                      src={test1}
                      alt="Section pédiculaire après greffe conjonctivale"
                      className="w-full max-w-3xl mx-auto rounded-lg my-6"
                    />
                    <p className="text-center italic">Figure : Kératite superficielle chronique
                      <a
                        href="https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/keratite-superficielle-chronique/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 ml-1"
                      >
                        (Source)
                      </a> </p>
                  </div>


                  <PathologySection
                    title="●	Etiologie : "
                    content={
                      <div>
                        <p className="mt-4">
                          La cause de la CSK chez le chien n'a pas été établie, mais les preuves actuelles suggèrent la condition est une maladie à médiation immunitaire d'origine génétique. <br />
                          La cornée possède des antigènes tissu-spécifiques qui peuvent être modifiés par des facteurs externes tels que la lumière ultraviolette (UV). Le rayonnement UV peut altérer l'antigénicité des cornées sensibles, entraînant ainsi inflammation à médiation cellulaire chez les chiens sensibles.
                          La CSK peut être contrôlée par l'administration topique de corticostéroïdes et ciclosporine (Castillo, 2019).

                        </p>
                        <img
                          src={test2}
                          alt="Section pédiculaire après greffe conjonctivale"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                      </div>
                    }
                  />
                  <PathologySection
                    title="●	Diagnostic  : "
                    content={
                      <div>
                        <p className="mt-4">
                          Une lésion rouge, vascularisée, conjonctivale au niveau inférieur du limbe temporal.
                          Au début de la maladie : la vascularisation et la pigmentation se produit au niveau de la cornée temporale et progresse de manière centralisée. (Figure 108) (Dubielzig et al., 2010 ; Castillo, 2019).
                          Elle se propage vers la cornée centrale sous la forme d'un corps charnu, bien vascularisé.
                          Une ligne cristalline blanche ou petites taches blanches sont observés dans le stroma cornéen clair, 1-2 mm devant le bord d'attaque de la lésion.
                          La partie supérieure de la cornée reste généralement inchangée jusqu'à la fin de la maladie.
                          Finalement, toute la cornée peut devenir vascularisée, pigmentée et opaque.
                          Un épaississement et pigmentation de la surface palpébrale de la membrane nictitante peuvent être développés.
                        </p>
                        <img
                          src={test3}
                          alt="Section pédiculaire après greffe conjonctivale"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">Figure : Kératite superficielle chronique chez une chienne croisée berger de 4 ans. Les lésions se situent dans la partie temporale de la cornée. On observe une vascularisation cornéenne superficielle, une pigmentation et une infiltration cellulaire de la cornée bordée d'un oedème cornéen ainsi qu'une infiltration de la membrane nictitante se traduisant par une décoloration de son bord libre, un épaississement et une irrégularité de sa surface
                          <a
                            href="https://www.depecheveterinaire.com/keratite-superficielle-chronique-du-chien-le-diagnostic_67984E823465A263.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 ml-1"
                          >
                            (Source)
                          </a> </p>
                      </div>
                    }
                  />
                  <PathologySection
                    title="●	Diagnostic différentiel: "
                    content={
                      <div>
                        <p className="mt-4">
                          La CSK doit être distinguée de la kératite pigmentaire résultant d'autres causes (par exemple, irritation chronique), et de la granulation cornéenne résultant de la cicatrisation vasculaire des plaies cornéennes (Dubielzig et al., 2010 ; Kirk, 2014).
                        </p>
                      </div>
                    }
                  />
                  <PathologySection
                    title="●	Traitement: "
                    content={
                      <div>
                        <p className="mt-4">
                          La gravité de cette maladie et le pronostic dépendent de nombreux facteurs : l'âge d'apparition, altitude,..
                          Le traitement initial consiste d'onguents ou de solutions corticostéroïdes topiques trois à quatre fois par jour pendant 3 à 4 semaines, suivi d’un programme d'entretien réduit.
                          Pour les cas où le contrôle médical n'est pas satisfaisant, une injection sous-conjonctivale de corticoïdes dans un traitement topique peut également être nécessaire pour contrôler la maladie, ou rayonnement β (strontium-90β plésiothérapie) peut être utilisé en concomitance avec thérapie.
                        </p>
                        <div className="flex justify-center flex-wrap items-center gap-4">
                          <div className="flex flex-col justify-center items-center">
                            <img
                              src={test4}
                              alt="Section pédiculaire après greffe conjonctivale"
                              className=" w-full max-w-md mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">Figure : Kératite superficielle chronique </p>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <img
                              src={test5}
                              alt="Section pédiculaire après greffe conjonctivale"
                              className="w-full max-w-md mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">Figure : Même oeil, après 4 semaines de traitement  </p>
                          </div>
                        </div>
                        <p className="mt-4">
                          Une kératectomie superficielle peut être nécessaire pour cas graves dans lesquels la cécité est due à la pigmentation de la cornée centrale, mais les récidive doivent être attendues et répéter les kératectomies (généralement limité à deux ou trois) peut être nécessaire.
                        </p>
                      </div>
                    }

                  />
                </>
              }
            />
            <PathologySection
              title="1.1.2.3. Dégénérescence cornéenne"
              content={
                <div>
                  <p className="mt-4">
                    Les dégénérescences cornéennes sont des altérations qui font perdre à la cornée une ou plusieurs de ses propriétés normales, secondaires à des changements pathologiques dans la cornée. (Sansom et Blunden, 2010 ; Maggs et al., 2018). <br />
                    Une accumulation de lipides, de cholestérol, ou de calcium, qui sont précédés d'une kératite, d’une vascularisation et éventuellement de la mélanose (Brooks et al., 1990 ; Kirk, 2014).
                  </p>
                  <img
                    src={test6}
                    alt="Dégénérescence cornéenne diffuse avec une plaque blanche dense et une vascularisation"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Dégénérescence cornéenne diffuse avec une plaque blanche dense et une vascularisation (Maggs et al., 2018)
                  </p>

                  <PathologySection
                    title="● Diagnostic :"
                    content={
                      <div>
                        <p className="mt-4">
                          Les lésions peuvent être d'un blanc dense ou blanc grisâtre. Les frontières du cristallin sont bien délimitées. Elles peuvent se produire dans n'importe quelle zone de la cornée, mais généralement elles sont axiales ou paraxiales (Sansom et Blunden, 2010). <br />
                          Au fur et à mesure que la dégénérescence progresse, des dépôts de cholestérol et de calcium sont observés. La présence de calcium peut contribuer à un retard de la guérison de la cornée (Brooks et al., 1990 ; Maggs et al., 2018). <br />
                          La dégénérescence calcique peut être secondaire à une maladie ou spontanée (associée à une inflammation locale). L’hypercalcémie, l’hyperphosphatémie, l’hyperadrénocorticisme, l’urémie et l’hypervitaminose D peuvent potentiellement être accompagnés de calcification cornéenne secondaire. <br />
                          La dégénérescence graisseuse et la dégénérescence hyaline peuvent précéder ou accompagner la calcification cornéenne (Maggs et al., 2018).
                        </p>
                        <img
                          src={test7}
                          alt="Dégénérescence cornéenne chez un chien"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : La dégénérescence cornéenne chez un chien{" "}
                          <a
                            href="https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/degenerescence-corneenne/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 ml-1"
                          >
                            (Source)
                          </a>
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          Il n’existe pas de traitement médical efficace permettant de faire régresser les dépôts dans le stroma cornéen. Lorsqu’une cause est identifiée, comme une kératite, une uvéite, une épisclérite ou un ulcère cornéen, elle doit être gérée de manière spécifique. <br />
                          La corticothérapie doit être évitée dans la dégénérescence cornéenne, car elle diminue la vascularisation, la fonction des macrophages, et par la suite la résolution de la lésion. <br />
                          La kératectomie peut être envisagée si la lésion est évolutive et la vision compromise. Une greffe de biomatériau peut compléter l’intervention en fonction de la profondeur de la lésion.
                          La kératectomie peut être envisagée si la lésion est évolutive et la vision compromise. On complètera d’une greffe de biomatériau en fonction de la profondeur d’atteinte. (Sansom et Blunden, 2010 ; Berryhill et al., 2016).
                        </p>
                      </div>
                    }
                  />
                </div>
              }
            />
            <PathologySection
              title="1.1.2.4. Dystrophie endothéliale cornéenne"
              content={
                <div>
                  <p className="mt-4">
                    Un œdème cornéen progressif résultant de la présence de cellules endothéliales dystrophiques anormales (Kirk, 2014). <br />
                    Une dégénérescence bilatérale progressive des cellules endothéliales cornéennes qui se traduit par un œdème, et une cornée avasculaire.
                  </p>
                  <img
                    src={test8}
                    alt="Dystrophie endothéliale cornéenne chez un chien"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Dystrophie endothéliale cornéenne chez un chien
                  </p>

                  <PathologySection
                    title="● Diagnostic :"
                    content={
                      <div>
                        <p className="mt-4">
                          Un aspect blanc bleuté de l'opacité cornéenne. <br />
                          Un manque de vascularisation de la cornée ou hyperémie conjonctivale. <br />
                          La première lésion : l'œdème cornéen, localisé temporellement et progresse lentement, sur plusieurs mois à quelques années, pour impliquer toute la cornée. <br />
                          Elle est initialement asymétrique puis progresse à une opacité cornéenne complète et bilatérale (Casola et al., 2020).
                        </p>
                        <img
                          src={test9}
                          alt="Œdème cornéen diffus chez un Boston Terrier"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Œdème cornéen diffus chez un Boston Terrier avec dystrophie endothéliale cornéenne avancée (Kirk, 2014).
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          La thérapie palliative est le plus souvent utilisée pour la dystrophie endothéliale. <br />
                          Les hyperosmotiques peuvent diminuer l'étendue de la formation de bulles, mais un éclaircissement cornéen important ne peut se produire. <br />
                          La thermokératoplastie (cautérisation thermique) est préconisée avec utilisation de points multifocaux de cautérisation thermique superficielle appliqués de manière circulaire sur la cornée exposée (Casola et al., 2020).
                        </p>
                        <img
                          src={test10}
                          alt="Thermokératoplastie lors de dystrophie endothéliale cornéenne"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Thermokératoplastie lors de dystrophie endothéliale cornéenne (Kirk, 2014).
                        </p>
                      </div>
                    }
                  />
                </div>
              }
            />
            <PathologySection
              title="1.1.2.5. Lacérations cornéennes"
              content={
                <div>
                  <p className="mt-4">
                    Souvent secondaires à des blessures causées par les griffes du chat, les lacérations cornéennes se distinguent en deux types : les lacérations pénétrant la cornée et les lacérations perforantes.
                    Quelle que soit la cause, des facteurs doivent être établis dans toutes les lacérations cornéennes : profondeur de la lacération, atteinte du cristallin, et l'extension de la lacération au-delà du limbe (Kirk, 2014).
                  </p>
                  <img
                    src={test11}
                    alt="Lacération du bord libre de la troisième paupière chez un chien suite à une griffure de chat"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Lacération du bord libre de la troisième paupière chez un chien suite à une griffure de chat. La pupille a été pharmacologiquement dilatée pour rechercher une éventuelle lésion intraoculaire © Elizabeth Giuliano
                  </p>

                  <PathologySection
                    title="● Symptômes :"
                    content={
                      <div>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Lésion douloureuse</li>
                          <li>Blépharospasme</li>
                          <li>Myosis</li>
                          <li>Épiphora séreux à muco-purulent selon l’ancienneté de l’affection</li>
                          <li>Hyperhémie conjonctivale parfois importante</li>
                        </ul>
                        <p className="mt-4">
                          Les lacérations pénétrantes entraînent un ulcère cornéen de profondeur variable. Ces lacérations peuvent être ponctiformes, avoir un aspect caractéristique de déchirure rectiligne ou se matérialiser sous forme de soulèvement d’une portion de cornée (« scalp cornéen »).
                          Dans ce cas, la douleur est intense, et des signes plus ou moins prononcés d’uvéite antérieure (myosis, hypopion, hyphéma, etc.) sont souvent associés.
                          Un examen minutieux est effectué pour évaluer l'étendue de la blessure, en prenant soin d'éviter toute pression sur le globe afin d'éviter des lésions intraoculaires supplémentaires (Kirk, 2014).
                          Les lacérations s'étendant au-delà du limbe comportent un risque élevé de dommages au cristallin, au corps ciliaire sous-jacent, et à la rétine, avec une uvéite marquée.
                        </p>
                        <img
                          src={test12}
                          alt="Lacération cornéenne avec rupture de la capsule antérieure du cristallin"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Lacération cornéenne (A) avec rupture de la capsule antérieure du cristallin (B) (Maggs et al., 2018)
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          Les lacérations qui ne pénètrent que les couches cornéennes superficielles, plutôt que toute l'épaisseur de la cornée, ont généralement un bon pronostic avec une prise en charge adaptée. Elles sont traitées de manière similaire aux ulcères cornéens (Maggs et al., 2018).
                          Les plaies perforantes avec rupture du globe présentent un pronostic plus sombre en raison des lésions intraoculaires et d'une plus grande rupture des tissus au bord de la plaie.
                          Les ulcères cornéens superficiels ou peu profonds et de petite taille peuvent être gérés par un traitement médical seul.
                          Les scalps cornéens, ainsi que les lésions cornéennes profondes, perforantes ou de grande taille, nécessitent une prise en charge chirurgicale : sutures cornéennes, lambeau conjonctival, ou greffe de biomatériau, selon le cas.
                        </p>
                        <img
                          src={test13}
                          alt="Lacération cornéenne"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Lacération cornéenne
                        </p>
                        <p className="mt-4">
                          Pour en savoir plus, consultez la vidéo explicative :{" "}
                          <a
                            href="https://www.youtube.com/watch?v=yAYaHEP15Ds&rco=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            Voir la vidéo
                          </a>
                        </p>
                      </div>
                    }
                  />
                </div>
              }
            />
            <PathologySection
              title="1.1.2.6. Corps étrangers cornéens"
              content={
                <div>
                  <p className="mt-4">
                    Les corps étrangers cornéens se distinguent en deux types différents :
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>
                      Ceux qui adhèrent à la surface cornéenne par tension superficielle et peuvent par la suite devenir encore plus solidement attachés par création d’une région ulcérée à leurs bords.
                    </li>
                    <li>
                      Ceux qui pénètrent dans la cornée et parfois dans le globe lui-même (Sandmeyer et al., 2016).
                    </li>
                  </ul>
                  <img
                    src={test14}
                    alt="Œil gauche d'un braque avec un corps étranger sur la surface de la cornée"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : œil gauche d'un braque avec un corps étranger sur la surface de la cornée (Sandmeyer et al., 2016)
                  </p>
                  <p className="mt-4">
                    Ces corps étrangers doivent être supprimés pour limiter la douleur, réduire le risque d'infection et prévenir la vascularisation et la formation de cicatrices.
                  </p>
                  <img
                    src={test15}
                    alt="Corps étranger implanté dans la cornée d’un chien et faisant protrusion dans la chambre antérieure"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Corps étranger implanté dans la cornée d’un chien et faisant protrusion dans la chambre antérieure
                  </p>

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          Le traitement consiste tout d’abord à extraire le corps étranger, sous anesthésie locale ou générale en fonction de sa profondeur et de la patience de l’animal. L’extraction peut être effectuée avec :
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Une pince</li>
                          <li>Une aiguille de 25G</li>
                          <li>Un coton-tige</li>
                          <li>Du sérum physiologique s’il est superficiel</li>
                        </ul>
                        <p className="mt-4">
                          Pour les corps étrangers pénétrants ou perforants, une microchirurgie est nécessaire, incluant selon les cas : des sutures cornéennes, la fixation d’un biomatériau, ou un lambeau conjonctival.
                        </p>
                        <p className="mt-4">
                          Les petits corps étrangers collés sont mieux retirés avec un jet de solution saline dirigé avec force sur la surface cornéenne après application d’un topique anesthésique. Cette procédure est sûre uniquement si la cornée n’est pas affaiblie, car un courant de fluide peut rompre un descemétocèle ou un autre ulcère profond (Lew et al., 2015 ; Sandmeyer et al., 2016).
                        </p>
                        <p className="mt-4">
                          Les corps étrangers pénétrants sont plus problématiques et devraient être référés pour une intervention chirurgicale. L'extraction est réalisée au microscope opératoire avec une incision pratiquée dans la cornée au-dessus du grand axe du corps étranger (Lew et al., 2015).
                        </p>
                        <img
                          src={test16}
                          alt="Corps étranger (épine) dans la partie médiane de la cornée"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Corps étranger (épine) dans la partie médiane de la cornée (Lew et al., 2015)
                        </p>
                        <p className="mt-4">
                          Après élimination de tout corps étranger, un traitement antibiotique topique à large spectre et de l’atropine sont administrés pour limiter l'infection et les effets de l'uvéite secondaire. Si une perforation du globe s'est produite, un antibiotique systémique doit également être utilisé.
                        </p>
                        <p className="mt-4">
                          La cicatrisation épithéliale cornéenne est normalement rapide tant que l'infection secondaire est contrôlée.
                        </p>
                        <p className="mt-4">
                          Pour en savoir plus, consultez la vidéo explicative :{" "}
                          <a
                            href="https://www.youtube.com/watch?v=sO83JAJsziI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            Voir la vidéo
                          </a>
                        </p>
                      </div>
                    }
                  />
                </div>
              }
            />
            <PathologySection
              title="1.1.2.7. Brûlures cornéennes"
              content={
                <div>
                  <p className="my-4">
                    Les brûlures cornéennes sont de nature chimique ou thermique. Ce sont des urgences absolues en raison des séquelles graves qu’elles peuvent entraîner (Abbaszadeh et al., 2010).
                  </p>

                  <PathologySection
                    title="● Étiologie et pathogénie"
                    content={
                      <div>
                        <p className="mt-4">
                          Les acides sont responsables de lésions de la surface oculaire. Ils précipitent et dénaturent les protéines de l’épithélium cornéen, qui prend un aspect nécrotique blanchâtre sur un stroma sous‐jacent clair (Beltran et Clerc, 1998 ; Hannouche et Hoangxuan, 2000).
                        </p>
                        <p className="mt-4">
                          Les brûlures thermiques sont dues soit à l’exposition à une flamme ou une source de chaleur, soit à un contact direct avec un corps chaud ou un liquide bouillant. Ces brûlures sont souvent associées à des brûlures de la face (Abbaszadeh et al., 2010).
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Signes cliniques"
                    content={
                      <ul className="list-disc ml-6 mt-4">
                        <li>Destruction de l'épithélium superficiel de la cornée et de la conjonctive.</li>
                        <li>Nécrose des tissus profonds (pour des concentrations élevées de produits chimiques).</li>
                        <li>Blépharospasme.</li>
                        <li>Photophobie.</li>
                        <li>Larmoiement, rougeur, douleur oculaire.</li>
                        <li>Baisse de l’acuité visuelle (Hannouche et Hoangxuan, 2000).</li>
                      </ul>
                    }
                  />

                  <PathologySection
                    title="● Traitement"
                    content={
                      <div>
                        <p className="mt-4">
                          Rincer abondamment la cornée à l’aide de sérum physiologique. Le lavage abondant de la surface oculaire et des voies lacrymales doit précéder l’examen clinique (Miller et Rhaesa, 1996 ; Payern et al., 2006).
                        </p>
                        <p className="mt-4">
                          Utiliser une solution de lactate de Ringer ou une solution physiologique équilibrée (BSS) pour le lavage, car elles sont adaptées au milieu électrolytique du stroma cornéen (Hannouche et Hoangxuan, 2004).
                        </p>
                        <p className="mt-4">
                          Il ne faut surtout pas laver avec une solution de pH opposé, ce qui pourrait aggraver les lésions. Appliquer un antibiotique à large spectre localement pour prévenir les infections cornéennes et un substitut de larmes toutes les deux heures pour éviter la sécheresse oculaire.
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Pronostic"
                    content={
                      <p className="mt-4">
                        Les brûlures caustiques de la cornée peuvent être classées en quatre grades pronostiques. Le pronostic est bon pour les grades I et II, qui guérissent en quelques jours sans séquelles, mais il est mauvais pour les grades III et IV.
                      </p>
                    }
                  />

                  <img
                    src={test17}
                    alt="Brûlure chimique de la cornée (A : Colle sur la surface, B : Évolution)"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Brûlure chimique de la cornée (Abbaszadeh et al., 2010)
                  </p>
                </div>
              }
            />
            <h3 className="text-2xl font-semibold text-gray-200 my-3">1.2 Maladies sclérales</h3>


            <PathologySection
              title="1.2.1. Épisclérite granulomateuse nodulaire (NGE)"
              content={
                <div>
                  <p className="my-4">
                    Aussi appelé kératoconjonctivite proliférative, granulome limbique, pseudotumeur et granulome du colley.
                  </p>

                  <PathologySection
                    title="● Définition"
                    content={
                      <p className="mt-4">
                        Une maladie oculaire à médiation immunitaire (inflammatoire) qui touche la sclère, la cornée et la membrane nictitante.
                      </p>
                    }
                  />

                  <PathologySection
                    title="● Prédisposition raciale"
                    content={
                      <>
                        <p className="mt-4">
                          Le colley, le cocker américain et les bergers de Shetland (Hamzianpour et al., 2019).
                        </p>
                        <img
                          src={test18}
                          alt="Brûlure chimique de la cornée (A : Colle sur la surface, B : Évolution)"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Examen rapprochédes deux yeux. <br />
                          2a. Examen comparé de l’œil droit : noterla déformation sclérale à 9 h et12 h, le chémosis marqué, l’infiltrat cellulaire du stroma cornéen, les néo-vaisseaux périlimbiques et l’œdème associé
                          <br />  2b. Œil gaucheaprès dilatation.

                        </p>
                      </>
                    }
                  />

                  <PathologySection
                    title="● Symptômes"
                    content={
                      <>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Plusieurs masses charnues élevées.</li>
                          <li>Une seule masse survenant au limbe et infiltrant le stroma cornéen adjacent.</li>
                        </ul>
                        <img
                          src={test19}
                          alt="Épisclérite granulomateuse nodulaire"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Vues de face (A) et latérales (B) d'un chien atteint d'épisclérokératite granulomateuse nodulaire focale (Hamzianpour et al., 2019).
                        </p>
                      </>
                    }
                  />

                  <PathologySection
                    title="● Observations"
                    content={
                      <p className="mt-4">
                        Noter le gonflement sous-conjonctival, l'injection conjonctivale et l'œdème cornéen périphérique adjacent à la lésion.
                      </p>
                    }
                  />

                  <PathologySection
                    title="● Traitement"
                    content={
                      <div>
                        <p className="mt-4">
                          Généralement, la NGE a tendance à être bénigne, avec une bonne réponse à l'administration topique de corticostéroïdes.
                        </p>
                        <div className="flex justify-center items-center gap-3 flex-wrap">
                          <div>
                            <img
                              src={test20}
                              alt="Épisclérite granulomateuse nodulaire"
                              className="w-full max-w-3xl mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">
                              Figure : Aspect initial avec une NGE
                            </p>
                          </div>
                          <div>
                            <img
                              src={test21}
                              alt="Épisclérite granulomateuse nodulaire"
                              className="w-full max-w-3xl mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">
                              Figure : même œil après 3 semaines de traitement anti-inflammatoire
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 font-semibold">Procédures chirurgicales :</p>
                        <ul className="list-disc ml-6">
                          <li>Canthotomie latérale.</li>
                          <li>Kératectomie lamellaire associée à une sclérotomie.</li>
                          <li>Dissection de plan profond.</li>
                          <li>Excision des deux tiers de l’épaisseur du stroma cornéen.</li>
                          <li>Mise en place d’une greffe conjonctivale pédiculée et suturée par des points simples.</li>
                        </ul>
                        <img
                          src={test22}
                          alt="Épisclérite granulomateuse nodulaire"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          12. Kératectomie lamellaire et sclérotomie. <br />
                          13. Dissection du plan profond à l’aide du couteau de Crescent. <br />
                          14. Aspect de la zone après kératectomie. <br />
                          15. Aspect de l’œil droit après fixation du lambeau conjonctival pédiculé. <br />
                          photos : B. Michaud
                        </p>
                        <img
                          src={test23}
                          alt="Épisclérite granulomateuse nodulaire"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          17. Œil droit 3 jours après l’intervention. <br />
                          18. Œil droit 10 jours après l’intervention <br />
                          19. Œil droit 3 semaines après l’intervention <br />
                        </p>

                      </div>
                    }
                  />

                  <p className="mt-6">
                    Plus d’informations :{" "}
                    <a
                      href="https://ophtalmoveterinaire.com/maladies_oculaires/episclerite-nodulaire-granulomateuse/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Ophtalmologie vétérinaire
                    </a>
                  </p>
                </div>
              }
            />
            <PathologySection
              title="1.2.2. Sclérite"
              content={
                <div>
                  <p className="my-4">
                    Une maladie inflammatoire de la sclérotique divisée en :
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Sclérite granulomateuse non nécrosante</li>
                    <li>Sclérite granulomateuse nécrosante</li>
                  </ul>
                  <PathologySection
                    title="● Prédisposition raciale"
                    content={
                      <p className="mt-4">
                        Les races épagneul ; le cocker américain Épagneul +++
                      </p>
                    }
                  />
                  <PathologySection
                    title="● Symptômes"
                    content={
                      <>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Lésions rose-brun à proximité, mais postérieures au limbe.</li>
                          <li>Œdème cornéen.</li>
                          <li>Douleur oculaire.</li>
                          <li>Photophobie.</li>
                          <li>Larmoiement excessif.</li>
                        </ul>
                        <p className="mt-4">
                          Dans certains cas, une kératite, une uvéite antérieure peuvent être présentes car l'inflammation sclérale s'étend dans ces tissus adjacents.
                        </p>
                        <img
                          src={test24}
                          alt="Sclérite sévère, œdème cornéen périphérique et foyer de dégénérescence cornéenne"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Sclérite sévère, œdème cornéen périphérique et foyer de dégénérescence cornéenne (Maggs et al., 2018)
                        </p>
                      </>
                    }
                  />
                  <PathologySection
                    title="● Observations"
                    content={
                      <>
                        <p className="mt-4">
                          La lésion typique de la sclérite consiste en inflammation granulomateuse avec infiltration de lymphocytes, plasmocytes et macrophages épithélioïdes.
                        </p>
                        <p className="mt-4">
                          Lorsqu'une uvéite est présente, l'infiltrat uvéal est non granulomateux.
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                          <li>La sclère endommagée devient fibreuse.</li>
                          <li>Formation des kystes multifocaux dans la sclère affectée.</li>
                          <li>Présence des régions d’amincissement scléral.</li>
                        </ul>

                        <img
                          src={test25}
                          alt="Épisclérite diffuse chez un jeune labrador"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Episclérite diffuse chez un jeune labrador
                        </p>
                      </>
                    }
                  />
                  <PathologySection
                    title="● Traitement"
                    content={
                      <div>
                        <p className="mt-4">
                          Les corticostéroïdes intra-lésionnels favorisent généralement la régression des lésions.
                        </p>

                        <img
                          src={test26}
                          alt="Même œil après une semaine de corticothérapie"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Episclérite diffuse chez un jeune labrador
                        </p>

                        <img
                          src={test27}
                          alt="Même œil après une semaine de corticothérapie"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Même œil après une semaine de corticothérapie
                        </p>

                      </div>
                    }
                  />
                  <p className="mt-6">
                    Plus d’informations : {" "}
                    <a
                      href="https://visionanimale.fr/episclerite-chez-un-jeune-labrador/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Vision Animale
                    </a>
                  </p>
                </div>
              }
            />
            <PathologySection
              title="1.2.3. Masses cornéosclérales et Tumeurs"
              content={
                <div>
                  <p className="my-4">
                    Les masses cornéennes, limbiques et cornéosclérales sont rares chez les mammifères domestiques.
                    Elles peuvent inclure des kystes non-néoplasiques, abcès, troubles inflammatoires et des néoplasmes
                    tels que le carcinome épidermoïde, le mélanome, le papillome, le lymphome et l’hémangiome/hémangiosarcome.
                  </p>
                  <div className="flex justify-center flex-wrap items-center gap-4">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={test28}
                        alt="Section pédiculaire après greffe conjonctivale"
                        className=" w-full max-w-md mx-auto rounded-lg my-6"
                      />
                      <p className="text-center italic">Figure : Mélanome épibulbaire chez un labrador.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={test29}
                        alt="Section pédiculaire après greffe conjonctivale"
                        className="w-full max-w-md mx-auto rounded-lg my-6"
                      />
                      <p className="text-center italic">Figure : Aspect postopératoire après exérèse chirurgicale  du mélanome épibulbaire (de la photo précédente), associée au laser diode et à une greffe conjonctivale</p>
                    </div>
                  </div>
                  <PathologySection
                    title="1.2.3.1. Kystes d'inclusion épithéliale cornéenne"
                    content={
                      <>
                        <p className="my-4">La formation de kystes dans la cornée peut impliquer les quatre couches.
                          Ils sont généralement unilatéraux et solitaires.</p>
                        <PathologySection
                          title="● Symptômes"
                          content={
                            <ul className="list-disc ml-6 mt-4">
                              <li>Masses cornéennes surélevées, blanches à roses.</li>
                              <li>Typiquement chronique et non douloureuse, mais peut altérer la vision.</li>
                            </ul>
                          }
                        />
                        <PathologySection
                          title="● Étiologie"
                          content={
                            <p className="mt-4">
                              Une origine traumatique est souvent suspectée. Ces kystes peuvent également être congénitaux
                              ou se développer après une chirurgie cornéenne.
                            </p>
                          }
                        />
                        <PathologySection
                          title="● Traitement"
                          content={
                            <p className="mt-4">
                              Le traitement repose sur une kératectomie superficielle complète, avec ou sans greffe conjonctivale
                              ou autre intervention complémentaire.
                            </p>
                          }
                        />
                        <img
                          src={test30}
                          alt="Kystes d’inclusion épithéliaux chez un chien"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Kystes d’inclusion épithéliaux chez un chien
                        </p>
                        <img
                          src={test31}
                          alt="Kystes d’inclusion épithéliaux chez un chien"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : UN KYSTE CORNÉEN CHEZ UN BERGER DE BEAUCE (Service d'ophtalmologie du Centre Hospitalier Vétérinaire Cordeliers Meaux)
                        </p>
                        <PathologySection
                          title="● Observations"
                          content={
                            <>
                              <p className="mt-4">
                                Lésion kystique sous-épithéliale à paroi fine et transparente, au contenu beige pâteux.
                                Présence de débris épithéliaux dans la lumière du kyste formant un pseudo-hypopion.
                              </p>
                              <img
                                src={test31}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : Kératectomie sous microscope à l'aide d'un couteau cleave
                              </p>
                              <img
                                src={test32}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : La mise en place d'une lentille pansement va permettre la cicatrisation cornéenne
                              </p>
                              <img
                                src={test33}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : Résultat à un mois post opératoire <a href="https://www.facebook.com/photo/?fbid=1035154091259157&set=pcb.1035153181259248" target="_blank" rel="noopener noreferrer">(lien)</a>
                              </p>
                            </>
                          }
                        />
                      </>
                    }
                  />
                </div>
              }
            />

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;
