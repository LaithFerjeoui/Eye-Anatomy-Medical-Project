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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;
