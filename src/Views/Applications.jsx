import React, { useState } from "react";
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
import AnomalyModal from "../Components/AnomalyModal";

const anomalies = [
  {
    id: 1,
    title: "Dermoïde cornéen - Dermoïde à kyste",
    definition: (
      <ul>
        <li>
          Un morceau de peau qui provient de la cornée sclérotique ou
          conjonctivale.
        </li>
        <li>Localisé partiellement ou complètement sur la cornée.</li>
        <li>
          Peut-être unilatéral ou bilatéral avec d'autres malformations
          oculaires (
          <span>Yeruham et al., 2002 ; Saraiva et Delgado, 2020</span>).
        </li>
      </ul>
    ),
    image: "/Figures/app1.jpg",
    caption: "Dermoïde oculaire dans l'œil gauche d'un chiot",
    signs: (
      <ul>
        <li>
          Présence d’une masse pigmentée généralement en regard du canthus
          externe de l’œil.
        </li>
        <li>Présence des poils en surface de cette formation.</li>
      </ul>
    ),
    additionalImage: "/Figures/app2.jpg",
    additionalCaption: "Dermoïde oculaire dans l'œil gauche d'un chien",
    treatmentTitle: "Kératectomie superficielle",
    steps: (
      <>
        <ul>
          <li>
            L’opération de kératectomie superficielle est le type de traitement
            le plus radical.
          </li>
          <li>
            Si la profondeur de la lésion est supérieure à la moitié de
            l’épaisseur totale de la cornée, après kératectomie, la zone doit
            être fermée avec un rabat conjonctival pour éviter la perforation
            cornéenne (Saraiva et Delgado, 2020).
          </li>
        </ul>

        <p>Après l'opération :</p>
        <ol>
          <li>Utilisation des antibiotiques topiques.</li>
          <li>
            Vérification de la régénération de la cornée à intervalles réguliers
            avec le test à fluorescéine.
          </li>
        </ol>

        <p>
          Une rechute peut survenir dans certains cas (Gelatt, 2008 ; Chaudieu
          et Denisc, 2016).
        </p>
      </>
    ),
    treatmentImage: "/Figures/treatment1.png",
    treatmentImageCaption:
      "Figure : les procédures de la kératectomie superficielle",
    treatmentVideo: "https://www.youtube.com/watch?v=nmrl8EqFdVA",
  },
  {
    id: 2,
    title: "Pigmentation mélanique",
    definition: (
      <ul>
        <li>
          Le pigment de la mélanine se trouve en diverses proportions dans les
          tissus oculaires.
        </li>
        <li>
          La mélanine protège contre diverses maladies oculaires qui peuvent
          causer cécité, y compris le mélanome uvéal et la dégénérescence
          maculaire liée à l'âge (
          <span>Sarna et Swartz 1998 ; Hu, 2005 ; Sanchez et al., 2020</span>).
        </li>
      </ul>
    ),
    image: "/Figures/melanine.png",
    caption:
      "Cas de kératite pigmentaire causée par des plis du nez frottant contre la cornée.",
    signs: (
      <ul>
        <li>
          Dépôt de mélanine dans le stroma antérieur et l’épithélium cornéen à
          la suite d’une inflammation chronique.
        </li>
        <li>
          Les néovaisseaux cornéens transportent les pigments qui se déposent le
          long de leur trajet.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/melanine2.png",
    additionalCaption: "Pigmentation mélanique chez un chien",
    steps: (
      <ul>
        <li>
          Anti-inflammatoires par voie locale en particulier les corticoïdes (en
          l’absence d’ulcère cornéen) jusqu’à disparition de la
          néovascularisation cornéenne.
        </li>
        <li>
          La chirurgie d’exérèse des plages cornéennes pigmentées est réalisable
          avec des résultats décevants à moyen et long terme.
        </li>
        <li>
          Il est fréquent qu’une néovascularisation se développe après une
          kératectomie superficielle et que les pigments se redéposent
          rapidement.
        </li>
        <li>
          La cryothérapie ciblée peut être efficace lorsque l’affection causale
          est traitée en parallèle- Il est fréquent qu’une néovascularisation se
          développe après une kératectomie superficielle et que les pigments se
          redéposent rapidement .
        </li>
      </ul>
    ),
    treatmentImage: "/Figures/melanine3.png",
    treatmentImageCaption:
      "Figure : Exemples de pigmentation mélanique chez deux chiens (Sanchez et al., 2020)",
    treatmentVideo: "https://www.youtube.com/watch?v=C_NnjINv0YM",
  },
  {
    id: 3,
    title: "Membranes pupillaires permanentes et opacités cornéennes",
    definition: (
      <ul>
        <li>
          Un changement congénital caractérisé par des restes de membrane fœtale
          qui persistent comme tissu filamenteux dans toute la pupille (
          <span>Khalkhal, 2011 ; Seong et al., 2018</span>).
        </li>
      </ul>
    ),
    image: "/Figures/3rd1.png",
    caption: "Persistance de la membrane pupillaire chez un chien",
    signs: (
      <ul>
        <li>
          • Formation des foyers d’opacités cornéennes diffuses. Les opacités
          focales sont formées par l'épaississement et la déformation de la
          membrane de descement.
        </li>
        <li>
          • Dans les opacités diffuses, il se produit à la suite de l'atteinte
          de la membrane de décroissance dans une zone beaucoup plus grande et
          du développement d'un œdème dans la zone (Gelatt, 2008 ; Seong et al.,
          2018).
        </li>
        <li>
          <li>
            • Dans les opacités diffuses, il se produit à la suite de l'atteinte
            de la membrane de décroissance dans une zone beaucoup plus grande et
            du développement d'un œdème dans la zone (Gelatt, 2008 ; Seong et
            al., 2018).
          </li>
        </li>
      </ul>
    ),
    additionalImage: "/Figures/3rd2.png",
    additionalCaption: "Membranes pupillaires permanentes chez un chien",
    steps: (
      <ul>
        <li>
          L’atropine topique pour dilater la pupille peut aider à décomposer les
          PPM.
        </li>
        <li>
          La chirurgie et l’intervention au laser peuvent être nécessaires pour
          les grandes membranes opaques.
        </li>
        <li>
          Il est conseillé de ne pas reproduire des sujets atteints de formes
          graves.
        </li>
      </ul>
    ),
    treatmentImage: "/Figures/3rd3.png",
    treatmentImageCaption:
      "Figure : Persistance de la membrane pupillaire chez un chien https://clinique-veterinaire-de-la-riviere.com/la-persistance-de-la-membrane-pupillaire/ ",
  },
  {
    id: 4,
    title: "Ulcères cornéens",
    definition: (
      <ul>
        <li>Toute kératopathie dans laquelle il y a une perte d'épithélium.</li>
        <li>
          Observations : Notez l'indentation visible et le changement de contour
          de la surface oculaire.
        </li>
      </ul>
    ),
    image: "/Figures/4th1.png",
    caption:
      "Figure : Ulcère cornéen profond chez un carlin (vue latérale) (Jaksz et Buss,2017) ",
    signs: (
      <ul>
        <li>Une rougeur </li>
        <li>
          Une douleur, associée à une sensation de corps étranger dans l'œil.
        </li>
        <li>Une photophobie</li>
        <li>Un larmoiement</li>
        <li>Blépharospasme</li>
        <li>Oedème cornéen </li>
        <li>Myosis (Jaksz et Buss, 2017 ; Farghali et al., 2021). </li>
      </ul>
    ),
    additionalImage: "/Figures/4th2.png",
    additionalCaption:
      "Ulcère cornéen superficiel (A : Oeil souffrant d'ulcère cornéen, B : après application d'un colorant fluorescent montrant le type et la profondeur des ulcères cornéens) (Farghali et al., 2021)",
    steps: (
      <ul>
        <li>
          1) Traitement des ulcères cornéens non compliqués (simples) : -
          Antibiothérapie à large spectre. - Un examen de contrôle doit toujours
          être programmé dans les 7 jours.
        </li>
        <li>
          2) Traitement des ulcères cornéens profonds (stromal) ou Descemétocèle
          :
          <br /> - Un grattage est prélevé et évalué cytologiquement, et un
          échantillon soumis pour la culture et la sensibilité bactérienne et
          fongique aérobies essai.
          <br />- La cause déclenchante doit être recherchée et éliminée.
          <br /> - Association d’antibiotique topique à large spectre et un
          traitement mydriatique avec un collier élisabéthain devrait être
          fourni (Pandey et al., 2018 ; Prado et al., 2021).
          <br />- Les ulcères du stroma doivent être traités localement
          médicamenté avec des antibiotiques aussi souvent que toutes les heures
          pour les 1 à 2 jours (Maggs et al., 2018).
          <br /> - Si l'ulcère est plus profond que la moitié de l'épaisseur de
          la cornée : traitement chirurgical
          <br /> - Une fois l'ulcère cornéen guéri, l'apport sanguin au greffon
          -conjonctival peut être coupé.
          <br /> - Après anesthésique topique, des ciseaux peuvent être placés
          sous la partie pédiculaire du greffon, qui n'adhère pas à l’épithélium
          cornéen normal sous-jacente (Kirk, 2014 ; Prado et al., 2021).
        </li>
      </ul>
    ),
    treatmentImage: "/Figures/4th.png",
    treatmentImage2: "/Figures/4th3.png",
    treatmentImageCaption2: (
      <>
        {" "}
        <span>Figure :</span>
        <li>(A) Ulcère cornéen perforant chez un chien</li>
        <li>(B) Un greffon de conjonctive est préparé</li>
        <li>(C) Le greffon de conjonctive est suturé sur l’ulcère</li>
        <li>(D) Le même œil 3 semaines après la chirurgie</li>
        <li>(E) Le même œil 8 semaines après la chirurgie</li>
        <li>
          (F) Le même œil 12 semaines après la chirurgie et section du pédicule
          conjonctive : une petite cicatrice centrale persiste
        </li>
      </>
    ),
    treatmentImage3: "/Figures/4th5.png",
    treatmentImageCaption3:
      "Figure : Section pédiculaire après greffe conjonctivale (Kirk, 2014) ",
  },
  {
    id: 5,
    title: "Kératite superficielle chronique (Pannus) ",
    definition:
      "Une maladie progressive, bilatérale, inflammatoire et potentiellement aveuglante : maladie de la cornée canine. Connue sous le nom de « pannus dégénératif ». ",
    image: "/Figures/5th1.png",
    caption:
      "Figure : Kératite superficielle chronique https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/keratite-superficielle-chronique/",
    signs: (
      <ul>
        <li>
          Une lésion rouge, vascularisée, conjonctivale au niveau inférieur du
          limbe temporal.
        </li>
        <li>
          Au début de la maladie : la vascularisation et la pigmentation se
          produit au niveau de la cornée temporale et progresse de manière
          centralisée. (Dubielzig et al., 2010 ; Castillo, 2019).
        </li>
        <li>
          Propagation vers la cornée centrale sous la forme d'un corps charnu,
          bien vascularisé
        </li>
        <li>
          Une ligne cristalline blanche ou petites taches blanches dans le
          stroma cornéen clair, 1-2 mm devant le bord d'attaque de la lésion.{" "}
        </li>
        <li>
          Finalement : toute la cornée peut devenir vascularisée, pigmentée et
          opaque.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/5th2.png",
    additionalCaption:
      "Figure : Kératite superficielle chronique chez une chienne croisée berger de 4 ans. Observation : Les lésions se situent dans la partie temporale de la cornée. On observe une vascularisation cornéenne superficielle, une pigmentation et une infiltration cellulaire de la cornée bordée d'un oedème cornéen ainsi qu'une infiltration de la membrane nictitante se traduisant par une décoloration de son bord libre, un épaississement et une irrégularité de sa surface https://www.depecheveterinaire.com/keratite-superficielle-chronique-du-chien-le-diagnostic_67984E823465A263.html",
    steps: (
      <span>
        • Des onguents ou de solutions corticostéroïdes topiques trois à quatre
        fois par jour pendant 3 à 4 semaines, suivi d’un programme d'entretien
        réduit.
        <br /> • Une injection sous-conjonctivale de corticoïdes dans un
        traitement topique pour contrôler la maladie <br />• Rayonnement β
        (strontium-90β plésiothérapie) sont utilisé en concomitance avec
        thérapie. <br />• La kératectomie superficielle pour cas graves dans
        lesquels la cécité est due à la pigmentation de la cornée centrale
      </span>
    ),
    treatmentImage: "/Figures/5th3.png",
    treatmentImageCaption2: (
      <>
        {" "}
        Figure : A : Kératite superficielle chronique chez un chien B : même œil
        après 4 semaines de traitement
      </>
    ),
  },
  {
    id: 6,
    title: "Dégénérescence cornéenne ",
    definition:
      "Une accumulation de lipides, de cholestérol, ou de calcium, qui sont précédés d'une kératite, d’une vascularisation et éventuellement de la mélanose (Brooks et al., 1990 ; Kirk, 2014).",
    image: "/Figures/6th1.png",
    caption:
      "Figure : Dégénérescence cornéenne diffuse avec une plaque blanche dense et une vascularisation (Maggs et al., 2018)",
    signs: (
      <ul>
        <li>Les lésions blanc dense / blanc grisâtre. </li>
        <li>
          Se trouve dans n'importe quelle zone de la cornée, généralement axiaux
          ou paraxiaux (Sansom et Blunden, 2010).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/6th2.png",
    additionalCaption:
      "Figure : la dégénérescence cornéenne chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/degenerescence-corneenne/",
    steps: (
      <ul>
        <br />- Pas de traitement médical
        <br /> - La corticothérapie doit être évitée dans la dégénérescence
        cornéenne, car elle diminuera la vascularisation, la fonction des
        macrophages, et par la suite la résolution de la lésion.
        <br /> - La kératectomie : si la lésion est évolutive et la vision
        compromise. Complétée par’une greffe de biomatériau en fonction de la
        profondeur d’atteinte. (Sansom et Blunden, 2010 ; Berryhill et al.,
        2016).
      </ul>
    ),
    treatmentImage: "/Figures/6th3.png",

    treatmentImageCaption:
      "Figure : Dégénérescence cornéenne chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/degenerescence-corneenne/",
  },
  {
    id: 7,
    title: "Dystrophie endothéliale cornéenne ",
    definition:
      "Une dégénérescence bilatérale progressive des cellules endothéliales cornéennes qui se traduit par un œdème, et une cornée avasculaire.",
    image: "/Figures/7th1.png",
    caption: "Figure : Dystrophie endothéliale cornéenne chez un chien",
    signs: (
      <ul>
        <li>Un aspect blanc bleuté de l'opacité cornéenne </li>
        <li>
          Un manque de vascularisation de la cornée ou hyperémie conjonctivale.{" "}
        </li>
      </ul>
    ),
    additionalImage: "/Figures/7th2.png",
    additionalCaption:
      "Figure : Œdème cornéen diffus chez un Boston Terrier avec dystrophie endothéliale cornéenne avancée (Kirk, 2014)",
    steps: (
      <ul>
        <br />- La thérapie palliative est le plus souvent utilisée pour la
        dystrophie endothéliale.
        <br />- Les hyperosmotiques peuvent diminuer l'étendue de la formation
        de bulles, mais un éclaircissement cornéen important ne peut se
        produire.
        <br /> - La thermokératoplastie (cautérisation thermique avec
        utilisation de points multifocaux de cautérisation thermique
        superficielle appliqué de manière circulaire sur la cornée exposée
        (Casola et al., 2020).
      </ul>
    ),
    treatmentImage: "/Figures/7th3.png",
    treatmentImageCaption:
      "Figure : Thermokératoplastie lors de dystrophie endothéliale cornéenne (Kirk, 2014) ",
  },
  {
    id: 8,
    title: "Lacérations cornéennes ",
    definition:
      "Souvent secondaires à des blessures causées par les griffes du chat",
    image: "/Figures/8th1.png",
    caption:
      "Figure : Lacération du bord libre de la troisième paupière chez un chien suite à une griffure de chat. La pupille a été pharmacologiquement dilatée pour rechercher une éventuelle lésion intraoculaire © Elizabeth Giuliano",
    signs: (
      <ul>
        <li>Lésion douloureuse</li>
        <li>Un blépharospasme </li>
        <li>
          Un épiphora séreux à muco-purulent en fonction de l’ancienneté de
          l’affection{" "}
        </li>
        <li>Une hyperhémie conjonctivale parfois importante. </li>
      </ul>
    ),
    additionalImage: "/Figures/8th2.png",
    additionalCaption:
      "Figure : Lacération cornéenne (A) avec rupture de la capsule antérieure du cristallin (B) (Maggs et al., 2018)",
    steps: (
      <ul>
        <br />- Traitement des ulcères : pour les lacérations qui ne pénètrent
        que les couches cornéennes superficielles (bon pronostic) (Maggs et al.,
        2018).
        <br />- Les plaies perforantes avec rupture du globe ont un pronostic
        plus sombre (des lésions intraoculaires) : guérison par vascularisation.
        <br /> - Un traitement médical seul : Les ulcères cornéens superficiels
        ou peu profonds .
        <br /> - La chirurgie : les lésions cornéennes profondes, perforantes ou
        de grande taille. On réalisera selon le cas des sutures cornéennes, un
        lambeau conjonctival, une greffe de biomatériau…
      </ul>
    ),
    treatmentImage: "/Figures/8th3.png",
    treatmentImageCaption: "Figure : Lacération cornéenne ",
    treatmentVideo: "https://www.youtube.com/watch?v=yAYaHEP15Ds&rco=1",
  },
  {
    id: 9,
    title: "Corps étrangers cornéens  ",
    definition: (
      <span>
        2 types différents :
        <br /> 1. Ceux qui adhèrent à la surface cornéenne par tension
        superficielle
        <br />
        2. Ceux qui pénètrent dans la cornée et parfois dans le globe lui-même
        (Sandmeyer et al., 2016).
      </span>
    ),
    image: "/Figures/9th1.png",
    caption:
      "Figure : œil gauche d'un braque avec un corps étranger sur la surface de la cornée (Sandmeyer et al., 2016)",
    signs: (
      <ul>
        <li>Douleur intense, </li>
        <li>Myosis, hypopion, hyphéma </li>
        <li>
          Un bouchon de fibrine et une hypotonie oculaire (si l’humeur aqueuse a
          fuité par la brèche){" "}
        </li>
      </ul>
    ),
    additionalImage: "/Figures/9th2.png",
    additionalCaption:
      "Figure : Corps étranger implanté dans la cornée d’un chien et faisant protrusion dans la chambre antérieure",
    steps: (
      <ul>
        <br />- Suppression de ces corps étrangers pour limiter la douleur,
        réduire le risque d'infection et prévenir la vascularisation et la
        formation de cicatrices.
        <br />- Les petits corps étrangers collés sont les meilleurs retirés
        avec un fin jet de rinçage oculaire ou de solution saline dirigé avec
        force à la surface cornéenne après l'application d'un topique
        anesthésique.
        <br /> - Une intervention chirurgicale pour les corps étrangers les plus
        problématiques : retrait au moyen d'une incision pratiquée dans la
        cornée au-dessus du grand axe du corps étranger au microscope opératoire
        (Lew et al., 2015).
        <br /> - Après élimination de corps étranger : un examen à large
        spectre,
        <br />- Un antibiotique topique et de l'atropine pour limiter
        l'infection et les effets de l'uvéite secondaire
        <br />- Si une perforation de globe s'est produite : un antibiotique
        administré par voie systémique.
      </ul>
    ),
    treatmentImage: "/Figures/9th3.png",
    treatmentImageCaption:
      "Figure : Corps étranger (épine) dans la partie médiane de la cornée (Lew et al., 2015) ",
    treatmentVideo: "https://www.youtube.com/watch?v=sO83JAJsziI",
  },
  {
    id: 10,
    title: "Brulures cornéennes ",
    definition:
      "-	Des urgences absolues en raison des séquelles graves qu’elles peuvent entraîner. De nature chimique ou thermique.  Abbaszadeh et al., 2010).",
    image: "/Figures/10th1.png",
    caption:
      "Figure : Brulure par produit chimique (A : Colle sur la surface de la cornée) et évolution de la brulure (B) (Abbaszadeh et al., 2010)",
    signs: (
      <ul>
        <li>
          Destruction de l'épithélium superficiel de la cornée et de la
          conjonctive.{" "}
        </li>
        <li>
          Nécrose des tissus profond (Pour des concentrations élevées de
          produits chimiques) (Hannouche et Hoangxuan, 2000 ; Abbaszadeh et al.,
          2010).{" "}
        </li>
        <li>Un blépharospasme </li>
        <li>une photophobie</li>
        <li>un larmoiement, une rougeur, une douleur oculaire </li>
        <li>une baisse de l’acuité visuelle (Hannouche et Hoangxuan, 2000).</li>
      </ul>
    ),
    additionalImage: "/Figures/10th2.png",
    additionalCaption:
      "Figure : Brulure par un produit chimique avec un agent de dégivrage chez un chien de race croisé agé de 3 ans.(E3S Web of Conferences 510, 01035 (2024)",
    steps: (
      <ul>
        <br />- Rincer abondamment la cornée à l’aide de sérum physiologique.
        <br />- Il ne faut surtout pas laver avec une solution de pH opposé qui
        ne ferait qu’aggraver les lésions.
        <br /> - Utiliser un antibiotique à large spectre localement pour
        prévenir les infections cornéennes.
        <br /> - Appliquer un substitut de larmes sur la cornée toutes les deux
        heures pour éviter la sécheresse oculaire.
      </ul>
    ),
    treatmentImage: "/Figures/10th3.png",
    treatmentImageCaption:
      "Figure : Chien beagle, 1 an, brulure chimique avec cyanoacrylate, Observation : défaillance des cellules limbales et par conséquent un descmetocelle.(E3S Web of Conferences 510, 01035 (2024)",
    treatmentVideo: "https://www.youtube.com/watch?v=sO83JAJsziI",
  },
  {
    id: 11,
    title: "Épisclérite granulomateuse nodulaire (NGE)",
    definition:
      "Une maladie oculaire à médiation immunitaire (inflammatoire) qui touche la sclère, la cornée et la membrane nictitante.",
    image: "/Figures/11th1.png",
    caption:
      "Figure : Examen rapproché des deux yeux. 2a. Examen comparé de l’œil droit : Noter la déformation sclérale à 9 h et12 h, le chémosis marqué,l’infiltrat cellulaire du stroma cornéen, les néo-vaisseaux périlimbiques et l’œdème associé 2b. Œil gauche après dilatation.",
    signs: (
      <ul>
        <li>Plusieurs masses charnues élevées</li>
        <li>
          Une seule masse survenant au limbe et infiltrant le stroma cornéen
          adjacent.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/11th2.png",
    additionalCaption: (
      <span>
        Figure : Vues de face (A) et latérales (B) d'un chien atteint
        d'épisclérokératite granulomateuse nodulaire focale (Hamzianpour et al.,
        2019) <br /> <b>✔Observations :</b> Noter le gonflement
        sous-conjonctival, l'injection conjonctivale et l'œdème cornéen
        périphérique adjacent à la lésion.
      </span>
    ),
    steps: (
      <ul>
        <br />- Généralement, la NGE a tendance à être bénigne, avec une bonne
        réponse à l'administration topique de corticostéroïdes.
        <br />- L’excision chirurgicale locale par kératectomie lamellaire
        <br />- Par irradiation et la cryothérapie
        <br /> - Appliquer un substitut de larmes sur la cornée toutes les deux
        heures pour éviter la sécheresse oculaire.
      </ul>
    ),
    treatmentImage: "/Figures/11th3.png",
    treatmentImageCaption:
      "Figure : (A) Aspect initial avec une NGE (B) même œil après 3 semaines de traitement anti-inflammatoire",
    treatmentImage2: "/Figures/11th4.png",
    treatmentImageCaption2: (
      <>
        {" "}
        <span>Figure :</span>
        <li>12. Kératectomie lamellaire et sclérotomie.</li>
        <li>13. Dissection du plan profond à l’aide du couteau de Crescent.</li>
        <li>14. Aspect de la zone après kératectomie.</li>
        <li>
          15. Aspect de l’œil droit après fixation du lambeau conjonctival
          pédiculé. photos : B. Michaud{" "}
        </li>
        https://ophtalmoveterinaire.com/maladies_oculaires/episclerite-nodulaire-granulomateuse/
      </>
    ),
    treatmentImage3: "/Figures/11th5.png",
    treatmentImageCaption3: (
      <>
        {" "}
        <span>Figure :</span>
        <li>17. Œil droit 3 jours après l’intervention.</li>
        <li>18. Œil droit 10 jours après l’intervention</li>
        <li>14. Aspect de la zone après kératectomie.</li>
        <li>19. Œil droit 3 semaines après l’intervention</li>
        https://ophtalmoveterinaire.com/maladies_oculaires/episclerite-nodulaire-granulomateuse/
      </>
    ),
  },
  {
    id: 12,
    title: "Sclérite ",
    definition:
      "Une maladie inflammatoire de la sclérotique divisée en : Sclérite granulomateuse non nécrosante / Sclérite granulomateuse nécrosante.",
    signs: (
      <ul>
        <li>lésions rose-brun à proximité, mais postérieures au limbe.</li>
        <li>œdème cornéen </li>
        <li>douleur oculaire </li>
        <li>photophobie </li>
        <li>larmoiement excessif.</li>
      </ul>
    ),
    additionalImage: "/Figures/12th1.png",
    additionalCaption:
      "Figure : Sclérite sévère, œdème cornéen périphérique et foyer de dégénérescence cornéenne (Maggs et al., 2018)",
    steps: (
      <ul>
        Les corticostéroïdes intra lésionnels favorisent généralement la
        régression des lésions.
      </ul>
    ),
    treatmentImage: "/Figures/12th2.png",
    treatmentImageCaption:
      "Figure : (A1-A2) Episclérite diffuse chez un jeune labrador (B1-B2) même œil après une semaine de corticothérapie https://visionanimale.fr/episclerite-chez-un-jeune-labrador/",
  },
  {
    id: 13,
    title: "Kystes d'inclusion épithéliale cornéenne   ",
    definition: (
      <span>
        La formation de kystes dans la cornée peut impliquer les quatre couches.
        Les kystes sont généralement unilatéraux et solitaires.
      </span>
    ),
    image: "/Figures/13th1.png",
    caption:
      "Figure : Kystes d’inclusion épithéliaux chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/kystes-dinclusion-epitheliaux/",
    signs: (
      <ul>
        <li>masses cornéennes surélevées, blanches à roses.</li>
        <li>
          typiquement chronique et non douloureuse, mais peut altérer la vision.{" "}
        </li>
      </ul>
    ),
    additionalImage: "/Figures/13th2.png",
    additionalCaption: (
      <span>
        Figure : UN KYSTE CORNÉEN CHEZ UN BERGER DE BEAUCE (Service
        d'ophtalmologie du Centre Hospitalier Vétérinaire Cordeliers Meaux){" "}
        <br /> <b>✔Observations :</b> une lésion kystique sous-épithéliale à la
        paroi fine et transparente, au contenu beige pâteux. Des débris
        épithéliaux sont présents dans la lumière du kyste formant cet aspect de
        pseudo-hypopion.
      </span>
    ),
    steps: (
      <ul>
        Une complète kératectomie superficielle, avec ou sans greffe
        conjonctivale ou autre
      </ul>
    ),
    treatmentImage: "/Figures/13th3.png",
    treatmentImageCaption:
      "Figure : (A1-A2) Kératectomie sous microscope à l'aide d'un couteau cleave (B) La mise en place d'une lentille pansement va permettre la cicatrisation cornéenne https://www.facebook.com/photo/?fbid=1035154091259157&set=pcb.1035153181259248 ",
  },
  {
    id: 14,
    title: "Papillomes",
    definition:
      "Des tumeurs cornéennes primitives qui surviennent le plus souvent chez les jeunes animaux. ",
    steps: (
      <ul>
        <br />- Excision par kératectomie.
        <br />- La récidive peut être diminuée par cryochirurgie utilisant un
        double cycle gel-dégel après la masse a été enlevée par kératectomie
        superficielle
      </ul>
    ),
    treatmentImage: "/Figures/14th1.png",
    treatmentImageCaption:
      "Figure : Papillome chez un chien caniche âgé de 10 ans https://ophtavet.com/wp-content/uploads/2020/08/98.pdf ",
    treatmentVideo: "https://www.youtube.com/watch?v=sO83JAJsziI",
  },
  {
    id: 15,
    title: "Carcinome squameux  ",
    definition:
      "Le carcinome épidermoïde primitif de la cornée survient lorsque la masse néoplasique provient directement de la cornée.",
    signs: (
      <ul>
        <li>Une masse rose à blanche. </li>
        <li>
          Le limbe cornéoscléral peut être impliqué, avec vascularisation
          superficielle ainsi qu’une opalescence diffuse du reste de la cornée.{" "}
        </li>
      </ul>
    ),
    steps: (
      <ul>
        <br />- Exérèse par kératectomie lamellaire (taux de récidives locales
        sont élevés) (Kirk, 2014 ; María del Mar et al., 2019).
      </ul>
    ),
    treatmentImage: "/Figures/15th1.png",
    treatmentImageCaption:
      "Figure : Carcinome épidermoïde de la cornée d'un Carlin avec kératoconjonctivite sèche chronique et pigmentaire kératite (María del Mar et al., 2019) ",
  },
  {
    id: 16,
    title: "Lymphosarcome cornéen  ",
    definition:
      "Le lymphosarcome ressemble à un infiltrat cellulaire rose à blanc qui peut envahir la cornée.",

    signs: (
      <ul>
        <li>Localisation intrastromale, sclérale ou épisclérale </li>
        <li>Non douloureux à moins que la cornée ne devienne ulcérée. </li>
        Le pronostic est mauvais et le traitement est dirigé vers la
        chimiothérapie.
      </ul>
    ),
  },
  {
    id: 17,
    title: "Autres néoplasmes cornéens ",
    definition:
      "Les hémangiomes, les hémangiosarcomes, et adénocarcinome. Les hémangiomes cornéens et les hémangiosarcomes sont rares et peuvent être des néoplasmes cornéens primaires ou provenir du limbe. ",
    image: "/Figures/17th1.png",
    caption:
      "Hémangiome intrascléral canin https://www.vetmed.wisc.edu/lab/coplow/wp-content/uploads/sites/14/2023/03/CanineConjLidsOrbit2016.pdf",
    signs: (
      <ul>
        <li>Des masses surélevées, rouges et irrégulières </li>
        <li>Œdème périlésionnel. </li>
      </ul>
    ),
    steps: (
      <ul>
        <br />- Exérèse chirurgicale et peut être combiné avec cryothérapie ou
        irradiation.
        <br />- Greffes cornéosclérales ou énucléation : pour les vastes
        hémangiosarcomes, (Kirk, 2014 ; Maggs et al., 2018).
      </ul>
    ),
    treatmentImage: "/Figures/17th2.png",
    treatmentImageCaption:
      "Figure : Hémangiome chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/conjonctive-et-membrane-nictitante/symblepharon-2-4-11/ ",
  },
  {
    id: 18,
    title: "Membrane pupillaire persistante (MPP)",
    definition: (
      <span>
        - Au cours du développement, la membrane pupillaire nourrit le
        cristallin en s'étendant sur la pupille et une partie de l'iris.
        <br /> - Chez le chien, cette membrane est normalement résorbée pendant
        le développement fœtal, mais des résidus peuvent parfois persister
        pendant plusieurs mois sans affecter la vision. (Dos Santos Costa et
        al., 2020).
      </span>
    ),

    signs: (
      <ul>
        • Les MPP peuvent s'étendre d'une région de l'iris à l'autre (parfois
        croisant la pupille) ou ils peuvent s'étendre à la cornée ou le
        cristallin, créant des opacités dans ces structures.
      </ul>
    ),
    additionalImage: "/Figures/18th1.png",
    additionalCaption: (
      <span>
        Figure : Membrane pupillaire persistante chez un jeune chien Saint
        Bernard <br />- Observation : Contrairement à la synéchie antérieure
        post inflammatoire, ces brins indiqués proviennent près de la région de
        la collerette de l’iris. Les synéchies antérieuresseraient originaires
        du bord pupillaire ou de la périphérie lointaine de l’iris, près de
        l’angle iridocornéen (Courtesy University of Wisconsin–Madison
        Veterinary Ophthalmology Service Collection.)
      </span>
    ),
    steps: (
      <ul>
        <br />- La thérapie n'est généralement pas nécessaire ou possible.
        <br /> - La meilleure méthode de prévention de la maladie est d’examiner
        les reproducteurs et n'élever que des animaux indemnes de MPP.
        <br /> - La biomicroscopie à lampe à fente est essentielle pour l’examen
        (Dos Santos Costa et al., 2020).
      </ul>
    ),
    treatmentImage: "/Figures/18th2.png",
    treatmentImageCaption: (
      <span>
        Figure : Persistance de la membrane pupillaire chez un chien
        <br />- Observations : Des filaments membraneux sont présents dans les
        pupilles des deux yeux (cercle rouge).
      </span>
    ),
    link: "https://ophtalmoveterinaire.com/wp-content/uploads/2021/12/Persistance-de-membrane-pupillaire-copie.pdf ",
  },
  {
    id: 19,
    title: "Colobome  ",
    definition: (
      <span>
        Un défaut de l'œil résultant d'une fermeture de la fissure embryonnaire.{" "}
      </span>
    ),
    image: "/Figures/19th1.png",
    caption:
      "Figure : Colobome irien chez un berger australien (Color Atlas of Canine and Feline Ophtalmology, Joan Dziezyc, Nicolas J.Millichamp) ",
    signs: (
      <ul>
        <li>
          • Se produisent dans la partie inféromédiale de l'iris ou de la
          choroïde ou adjacente au disque optique (Maggs et al., 2018).{" "}
        </li>
        <li>
          • Bien que la fissure embryonnaire ne soit pas impliquée, le colobome
          est également appliqué aux défauts de la paupière et au secteur
          défauts de l'iris et du cristallin (Cook et Cynthia, 2013{" "}
        </li>
      </ul>
    ),
    additionalImage: "/Figures/19th2.png",
    additionalCaption:
      "Figure : Colobome irien chez un berger australien (Color Atlas of Canine and Feline Ophtalmology, Joan Dziezyc, Nicolas J.Millichamp)",
  },
  {
    id: 20,
    title: "Dysgénésie du segment antérieur   ",
    definition: (
      <span>Un trait autosomique récessif dans le Doberman pinscher </span>
    ),
    image: "/Figures/9th1.png",
    caption:
      "Figure : œil gauche d'un braque avec un corps étranger sur la surface de la cornée (Sandmeyer et al., 2016)",
    signs: (
      <ul>
        <li>• Des degrés variables de microphtalmie </li>
        <li>• Opacité cornéenne </li>
        <li>• Absence de chambre antérieure </li>
        <li>• Iris et corps ciliaire indifférenciés </li>
        <li>• Restes d'artère hyaloïde </li>
        <li>• Absence ou cristallin rudimentaire </li>
        <li>• Dysplasie rétinienne et décollements</li>
      </ul>
    ),

    steps: (
      <ul>
        <b>
          Il n'y a pas de traitement pour ce trouble (Gilger, 2011 ; Sandmeyer
          et al., 2016).{" "}
        </b>
      </ul>
    ),
  },
  {
    id: 21,
    title: "Troubles de la pigmentation ",
    definition: (
      <span>
        L'albinisme partiel (subalbinisme) fait référence à la réduction de la
        pigmentation.{" "}
      </span>
    ),

    signs: (
      <ul>
        <li>
          • Une partie ou la totalité de l'iris peut manquer de pigment et
          apparaître bleu.{" "}
        </li>
        <li>• Chez un vrai albinos, l'iris est rose. </li>
      </ul>
    ),
    additionalImage: "/Figures/21th1.png",
    additionalCaption:
      "Figure : Le subalbinisme chez un chien (Color Atlas of Canine and Feline Ophtalmology, Joan Dziezyc, Nicolas J.Millichamp)",
  },
  {
    id: 22,
    title: "Hétérochromie  ",
    definition: <span>- Des variations de la coloration de l'iris. </span>,
    image: "/Figures/22th1.png",
    caption:
      "Figure : Heterochromie iridis chez un Berger Australien (Color Atlas of Canine and Feline Ophtalmology, Joan Dziezyc, Nicolas J.Millichamp)",
    signs: (
      <ul>
        <li>
          • Les deux yeux, seulement un œil, ou seulement une partie de l'iris
          peut être affecté.
        </li>
        <li>
          • L’Hétérochromie iridis fait référence aux variations de pigmentation
          de différentes régions de l’iris dans le même œil.
        </li>
        <li>
          • Heterochromia iridium fait référence aux variations de coloration
          entre les deux yeux d'un même animal (Kirk, 2014).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/22th2.png",
    additionalCaption:
      "Figure : Heterochromiairidis (iris bleu et brun) chez un chien (Kirk, 2014)",
  },
  {
    id: 23,
    title: "Uvéites",
    definition: (
      <span>
        Uvéite ou inflammation de l'iris, du corps ciliaire et de la choroïde,
        ou une combinaison de ceux-ci, se produit généralement en conjonction
        avec de nombreuses maladies intraoculaires et systémiques.
      </span>
    ),
    image: "/Figures/23th1.PNG",
    caption:
      "Figure : Yeux de chiens atteints d’uvéite : noter les changements de couleur (iris plus foncé) et même les pigments marron (photo de gauche)",
    defLink:
      "https://centredmvet.com/wp-content/uploads/2013/09/Ophtalmologie-Vet-Uveite_FR.pdf ",
    signs: (
      <ul>
        <li>Une photophobie, </li>
        <li>Blépharospasme </li>
        <li>La douleur</li>
        <li>Une épiphora (Jost et al., 2020).</li>
        <li>Hypopion ou hyphéma</li>
        <li>Œdème cornéen</li>
        <li>Myosis</li>
        <li>Résistance aux mydriatiques</li>
        <li>Réduction de la PIO</li>
        <li>Synéchies antérieures ou postérieures</li>
        <li>Aspect gonflé ou terne de l'iris</li>
        <li>Augmentation de la pigmentation de l'iris</li>
        <li>Œdème, exsudat ou décollement de la rétine</li>
      </ul>
    ),
    additionalImage: "/Figures/23th2.PNG",
    additionalCaption: (
      <span>
        Figure : Cas d’uvéites chez le Golden Retriever (Jost et al., 2020){" "}
        <br /> <b>✔Observations :</b> - D : Une synéchie postérieure est
        présente et concerne 3 quadrants du bord de la pupille. Une cataracte
        mature est également présente ; <br />
        - E : Du matériel fibrineux est présent sur toute la face de la capsule
        antérieure du cristallin ; <br /> - F : Œdème cornéen diffus, synéchies
        postérieures étendues, matériel fibrineux dans toute la chambre
        antérieure, et glaucome sont présents.
      </span>
    ),
    steps: (
      <ul>
        <br />- Trouver la cause à l'uvéite.
        <br />- L'analyse hématologique de routine et les profils de chimie
        sérique sont utiles pour indiquer la présence de troubles inflammatoires
        et maladie systémique (Townsend et Gornik, 2013 ; Patrick et al., 2018).
        <br /> - Les corticostéroïdes peuvent être administrés via la voie
        topique, systémique ou, occasionnellement, sous-conjonctivale.
        <br /> - Pour prévenir les séquelles indésirables des
        mydriatique/cycloplégique et des médicaments anti-glaucome sont
        préconisés (Sapienza et al., 2000).
      </ul>
    ),
    treatmentImage: "/Figures/23th3.PNG",
    treatmentImageCaption:
      "Figure : Uvéite pigmentaire montrant des synéchies postérieures étendues (Townsend et al., 2020)",
  },
  {
    id: 24,
    title: "Prolapsus de l'iris",
    definition: (
      <span>
        Une séquelle fréquente de la pénétration cornéenne plaies ou ulcères
        cornéens rompus. <br />
        L'iris est reporté dans le défaut cornéen en s'échappant de la solution
        aqueuse.
      </span>
    ),
    signs: (
      <ul>
        <li>
          La couleur de la partie prolabée devient plus claire que l’iris
          restant.{" "}
        </li>
        <li>
          Le tissu de l'iris en saillie forme un monticule sur la cornée.{" "}
        </li>
        <li>
          Le tissu a un aspect gélatineux mucoïde et attire fréquemment les
          brins adhérents de mucus conjonctival.
        </li>
        <li>
          La pupille est excentrique à cause de la traction du tissu d'iris
          saillant.
        </li>
        <li>
          La plaie cornéenne est souvent masquée par l'iris œdémateux tissu.{" "}
        </li>
      </ul>
    ),
    steps: (
      <ul>
        <br />- Si la plaie cornéenne est petite, le prolapsus de l'iris peut
        être traité temporairement avec un lambeau de la troisième paupière et
        des solutions d’antibiotiques topique et systémique.
        <br />- Dans des plaies plus importantes nécessitant une réparation
        immédiate, une tentative est faite en remplaçant l'iris par une spatule
        à iris avant que la cornée ne soit suturée.
      </ul>
    ),
  },
  {
    id: 25,
    title: "Kystes de l'uvée ",
    definition: (
      <span>
        Ils sont également couramment observés chez les terriers de Boston
        (Townsend et al., 2020).
      </span>
    ),
    image: "/Figures/25th1.PNG",
    caption:
      "Figure : Multiples kystes uvéaux chez un chien (Townsend et al., 2020)",
    signs: (
      <ul>
        <li>
          Des structures remplies de liquide, ovoïdes à sphériques qui
          proviennent de l'épithélium pigmenté postérieur de l'iris ou le corps
          ciliaire.{" "}
        </li>
        <li>Souvent vus qu'à l'âge adulte. </li>
        <li>
          Peuvent survenir à la suite d’une inflammation. Ils restent attachés
          ou se libèrent et flottent dans la chambre antérieure, seul ou en
          groupe
        </li>
        <li>
          Dans la chambre antérieure, ils peuvent flotter librement ou adhérer à
          l'iris ou à l'endothélium cornéen, parfois obstruant l'axe visuel et
          la pupille (Townsend et al., 2020).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/25th2.PNG",
    additionalCaption:
      "Figure : Kystes iridociliaires à parois minces chez un chien https://www.vetmed.wisc.edu/lab/coplow/wp-content/uploads/sites/14/2023/03/Canine-Miscellaneous-2016.pdf ",
    steps: (
      <ul>
        <br />- L'ablation d'un kyste de l'uvée est rarement indiquée mais doit
        être considéré si la pupille est obstruée, ce qui altère la vision ou
        lors de déplacement de l'iris par un grand nombre de kystes.
        <br />- Les kystes sont retirés par aspiration sous microchirurgie
        (Holly et al., 2016 ; Townsend et al., 2020).
      </ul>
    ),
    treatmentImage: "/Figures/25th3.PNG",
    treatmentImageCaption:
      "Figure : Des kystes iridociliaires chez un chien de race Boston Terrier https://www.vetmed.wisc.edu/lab/coplow/wp-content/uploads/sites/14/2023/03/Canine-Miscellaneous-2016.pdf",
  },
  {
    id: 26,
    title: "Tumeurs primaires  ",
    definition: (
      <span>
        Parmi les types de tumeurs primaires de l'uvée, l'adénome,
        l'adénocarcinome et le mélanome sont les plus fréquents (Scott et
        Miller, 2020).
      </span>
    ),
    image: "/Figures/26th1.PNG",
    caption:
      "Figure : Adénome Iridociliaire Pigmenté chez un chien https://www.vetmed.wisc.edu/lab/coplow/wp-content/uploads/sites/14/2023/03/Glaucoma2016.pdf",
    signs: (
      <ul>
        <span>✔ Adénocarcinome et adénome :</span>
        <li>Une seule masse saillante de derrière l'iris dans la pupille.</li>
        <li>
          La masse peut être pigmentée ou non pigmentée, selon qu'elle soit
          apparue de l'épithélium ciliaire pigmenté ou non pigmenté.{" "}
        </li>
      </ul>
    ),
    additionalImage: "/Figures/26th2.PNG",
    additionalCaption:
      "Figure : Adénome du corps ciliaire s'étendant du corps ciliaire à travers l'iris et dans la chambre antérieure d'un chien (Scott et Miller, 2020)",
    steps: (
      <ul>
        <br />- Ablation de la tumeur et des cellules ciliaires adjacentes.
      </ul>
    ),
    treatmentImage: "/Figures/26th3.PNG",
    treatmentImageCaption: (
      <span>
        Figure : (A) Aspect normal de l’œil droit <br />
        (B) Adénome des corps ciliaire chez un coton de Tuléar (Vue rapprochée
        de l’œil gauche, notez la déformation de l’iris et la taie cornéenne)
        <br />
        (C) Vue tangentielle de l’œil gauche, notez la déformation de l’iris qui
        rentre en contact avec l’endothélium cornée
        <br />- Observations : ✔ la présence d’un pannus cornéen en regard du
        canthus externe, une déformation néoplasique de l’iris est en appui
        contre l’endothélium cornéen. <br />✔ La pression oculaire est
        anormalement élevée.Ce glaucome est expliqué par la compression de
        l’angle irido-cornéen par la masse ainsi qu’une infiltration cellulaire
        de l’angle qui limite la filtration de l’humeur aqueuse.
      </span>
    ),
  },
  {
    id: 27,
    title: "Mélanocytome et mélanome",
    definition: (
      <span>
        Bien que la grande majorité des mélanomes de l'uvée soient bénins,
        tumeurs malignes provenant de l'iris, du corps ciliaire ou, moins
        généralement, la choroïde se produit.
      </span>
    ),
    image: "/Figures/27th1.PNG",
    caption:
      "Figure :Mélanome épibulbaire chez un Berger Allemand (Kirk, 2014)",
    signs: (
      <ul>
        <li>
          Se produit plus fréquemment dans l'iris et le corps ciliaire que dans
          la choroïde.
        </li>
        <li>
          Un pronostic de survie raisonnable si l'œil est énucléé avant que la
          tumeur n'ait pénétré la sclérotique.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/27th2.PNG",
    additionalCaption:
      "Figure : Tumeur du corps ciliaire (mélanome) chez un chien (Maggs et al., 2018)",
    steps: (
      <ul>
        <br />- Excision locale avec iridectomie ou iridocyclectomie, une
        photocoagulation : si la tumeur est petite ou localisée.
        <br />- L'énucléation du globe est souvent mandatée par la présence de
        glaucome réfractaire, d'uvéite ou d'hyphéma (Scott et Miller, 2020).
      </ul>
    ),
    treatmentImage: "/Figures/27th3.PNG",
    treatmentImageCaption:
      "Mélanome au niveau de la choroïde chez un chien https://www.vetmed.wisc.edu/lab/coplow/wp-content/uploads/sites/14/2023/03/Glaucoma2016.pdf",
  },
  {
    id: 28,
    title: " Plis rétiniens et dysplasie rétinienne ",
    definition: <span>Un développement désorganisé du tissu rétinien.</span>,
    signs: (
      <ul>
        <li>Des plis rétiniens curvilignes focaux ou multifocaux</li>
        <li>
          Des lésions géographiques accompagnées d'une dégénérescence rétinienne
          localisée.
        </li>
        <li>
          Dans sa forme la plus grave : un décollement total de la rétine avec
          une dysplasie vitréo-rétinienne (Kirk, 2014 ; Iwabe et al., 2019).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/28th2.PNG",
    additionalCaption:
      "Figure : Plis rétiniens félins congénitaux (flèches) (Iwabe et al., 2019)",
  },
  {
    id: 29,
    title: "Anomalie de l'œil du colley",
    definition: (
      <span>
        Cette anomalie du fond d'œil canin, héritée de façon récessive, a des
        effets primaires, visibles à l'ophtalmoscopie, sur l'EPR et la choroïde.
      </span>
    ),
    signs: (
      <ul>
        <li>Des degrés variables d'hypoplasie choroïdienne.</li>
        <li>
          Des défauts colobomateux impliquant la tête du nerf optique, ou la
          choroïde péripapillaire (Kucharczyk et al., 2019).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/29th2.PNG",
    additionalCaption:
      "Figure : Hypoplasie choroïdienne chez un chien atteint de l’anomalie de l'œil du colley (Kucharczyk et al., 2019)",
  },
  {
    id: 30,
    title: "Atrophie rétinienne progressive généralisée ",
    definition: (
      <span>
        L’atrophie progressive de la rétine (APR) représente un groupe
        diversifié de troubles héréditaires.
      </span>
    ),
    signs: (
      <ul>
        <li>Une atteinte oculaire bilatérale et symétrique.</li>
        <li>
          Dégénérescence des photorécepteurs qui est progressive et conduit à la
          cécité.
        </li>
        <li>Une réduction des réflexes pupillaires à la lumière. </li>
        <li>Atténuation des vaisseaux sanguins rétiniens.</li>
        <li>
          Agglutination de pigments visible dans le fond de l'œil non-tapetum.
        </li>
      </ul>
    ),
    steps: (
      <ul>
        <br />- Ces globes sont généralement énucléés en raison d'une affection
        secondaire ou sans rapport, par exemple un glaucome ou une néoplasie
        oculaire (Kirk, 2014 ; Hitti-Malin et al., 2020).
      </ul>
    ),
    treatmentImage: "/Figures/30th3.PNG",
    treatmentImageCaption:
      "Modifications du fond d'œil observées chez un chien atteint d’atrophie progressive de la rétine (A) (B : fond d'œil normal) (Hitti-Malin et al., 2020)",
  },
  {
    id: 31,
    title: "Décollement de rétine ",
    definition: (
      <span>
        - Une séparation de la rétine neurosensorielle de l’épithélium rétinien
        pigmenté. <br />
        - Il en résulte une accumulation de liquide entre ces deux couches
        (Vainisi, 2001).
        <br />- Considéré comme une urgence dans la mesure où la neurorétine
        dégénère lorsqu’elle est privée de l’apport vasculaire de la choroïde
        (Roze, 1992).
      </span>
    ),
    signs: (
      <ul>
        <li>La cécité</li>
        <li>L’œil est en mydriase</li>
        <li>Les réflexes photomoteurs sont lents voire absents.</li>
        <li>
          On peut observer, à travers la pupille, en arrière du cristallin, une
          membrane souvent grisâtre ou des vaisseaux sanguins (Smith, 2000).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/31th2.PNG",
    additionalCaption:
      "Figure : Décollement de la rétine chez un chien (Dubielzig et al., 2010)",
    steps: (
      <ul>
        <br />- Le traitement varie en fonction de la cause.
        <br />- Les décollements rhegmatogènes ne répondent pas au traitement
        médical et leur thérapeutique est microchirurgicale, nécessitant un
        matériel coûteux et une haute technicité. (Vainisi, 2001 ; Martin,
        2005).
        <br />- Le traitement médical fait appel à des diurétiques et des
        corticoïdes.
      </ul>
    ),
  },
  {
    id: 32,
    title: "Maladie vasculaire rétinienne ",
    definition: (
      <span>
        L'hypertension systémique est une cause relativement courante, mais
        probablement méconnue, de maladie oculaire chez le chien. L'œil est
        fréquemment le premier organe à manifester des complications
        cliniquement apparentes de l'hypertension systémique chez le chien. Les
        lésions sont bilatérales mais pas nécessairement symétriques.
      </span>
    ),
    image: "/Figures/32th1.PNG",
    caption: (
      <span>
        Figure : Choriorétinopathie hypertensive chez le chien (Maggs et al.,
        2018) <br /> <b>✔Observations :</b> - A : Photo brute montrant un globe
        canin avec un décollement de la rétine et une hémorragie intraoculaire
        étendue (hypertension systémique). <br />- B : Photomicrographie
        sous-grossie montrant une montrant une hémorragie, un décollement de la
        rétine et un foyer de fibrine dans la rétine (flèche).
      </span>
    ),
    signs: (
      <ul>
        <span>✔ Vasculopathie hypertensive :</span>
        <li>
          Observées dans les artérioles de la rétine, de la choroïde ou, moins
          fréquemment, de l'iris.
        </li>
        <li>
          Les artérioles malades ont un profil vasculaire épaissi et un diamètre
          luminal réduit.
        </li>
        <li>
          Les lésions vasculaires ne sont pas uniformes dans l'ensemble des
          tissus oculaires et leur identification nécessite une coloration PAS.
        </li>
        <li>
          Des dépôts solides ou lamellaires PAS-positifs, effaçant la paroi du
          vaisseau, sont associés à une nécrose fibrinoïde
        </li>
        <span>✔ Neuropathie optique hypertensive : </span>
        <li>
          L'œdème papillaire peut rarement être reconnu comme une
          caractéristique clinique chez les animaux souffrant d'hypertension
          grave.
        </li>
        <li>
          L'atrophie optique peut résulter d'une ischémie du nerf optique, en
          particulier en cas d'hypertension chronique.
        </li>
        <span>✔ Rétinopathie diabétique : </span>
        <li>
          Associée à une perte de vision cliniquement apparente chez le chien
          (Olivares et al., 2017).
        </li>
        <li>La perte des péricytes capillaires.</li>
        <li>Épaississement des membranes basales vasculaires.</li>
        <li>Hémorragies intra-rétiniennes focales.</li>
        <li>
          Des zones focales de dégénérescence de la rétine neurosensorielle.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/32th2.PNG",
    additionalCaption: (
      <span>
        Figure : Rétinopathie diabétique canine (Kirk, 2014) <br />{" "}
        <b>✔Observations :</b> - A : Photographie du fond de l'œil montrant des
        hémorragies rétiniennes (flèches) dans un globe aphaque. <br />- B : :
        Angiographie à la fluorescéine montrant des foyers néovasculaires
        (flèche).
      </span>
    ),
  },
  {
    id: 33,
    title: "Maladies inflammatoires de la rétine",
    definition: (
      <span>
        - Les maladies inflammatoires de la rétine sont souvent associées à des
        inflammations de l'uvée ou du système nerveux central. <br />
        - Divers agents pathogènes (bactériens, viraux, fongiques, algaux et
        parasitaires) peuvent provoquer cette inflammation, souvent par
        extension de l'uvéite postérieure. <br />
        - Parmi ces agents, le virus de la maladie de Carré.
        <br />- Une infection active par Toxoplasma gondii peut provoquer une
        choriorétinite multifocale chez les animaux affectés.
      </span>
    ),
    image: "/Figures/33th1.PNG",
    caption: (
      <span>
        Figure 147 : Rétinopathie lors de Maladie de Carré canine (Maggs et al.,
        2018) <br /> <b>✔Observations :</b> - A : Photo brute montrant la
        surface rétinienne d'un segment postérieur avec des foyers coalescents
        foyers de dégénérescence et de pigmentation (flèches). <br />- B : : Vue
        agrandie du même spécimen montrant la partie la partie affectée de la
        rétine
      </span>
    ),
    additionalImage: "/Figures/33th2.PNG",
    additionalCaption: (
      <span>
        Figure : Larve oculaire de Toxocara canis migrans dans la rétine
        temporale (Waindok et al., 2021) <br /> <b>✔Observations :</b> granulome
        intrarétinien avec un œdème périlésionnel et néovascularisation
        (flèche). Des larves de Toxocara canis ont été identifiées dans l'œil et
        le cerveau de ce chien qui a fait une crise.
      </span>
    ),
  },
  {
    id: 34,
    title: "Néoplasie de la rétine ",
    definition: (
      <span>
        Les tumeurs de la rétine sont rares. Ils présentant des caractéristiques
        de différenciation neuronale : tumeurs neuroectodermiques primitives
        (PNET), y compris le médulloépithéliome et le rétinoblastome. <br />
        Les PNET se situent généralement dans la rétine périphérique ou en
        continuité avec le corps ciliaire
      </span>
    ),
    signs: (
      <ul>
        <span>✔ Le médulloépithéliome :</span>
        <li>
          Présence de rosettes tubulaires épaisses avec un revêtement
          multicellulaire complexe et un lumen distinct.
        </li>
        <li>
          Des rosettes plus simples de type Flexner-Wintersteiner ou
          Homer-Wright peuvent être présentes dans le médulloépithéliome.
        </li>
        <li>
          La plupart des tumeurs médulloépithéliales proviennent du corps
          ciliaire ou du nerf optique, rarement de la rétine (Dubielzig, 2008).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/34th2.PNG",
    additionalCaption:
      "Figure : Médulloépithéliome rétinien et tumeur neuroectodermique primitive (PNET) chez un chien de 5 ans (flèches) (Dubielzig, 2008)",
  },
  {
    id: 35,
    title: "Hypoplasie du nerf optique canin ",
    definition: (
      <span>
        L'hypoplasie du nerf optique est suspectée d'être héritée dans un
        certain nombre de races, y compris les Teckels, les Caniches et les
        ShihTzu.
      </span>
    ),
    signs: (
      <ul>
        <li>La tête et le nerf optique sont de petit diamètres</li>
        <li>Le neuropil est densément gliotique</li>
        <li>
          La rétine présente toujours une diminution marquée du nombre de
          cellules ganglionnaires et il peut y avoir des segments de rétine
          présentant une atrophie plus profonde (Becker et al., 2020).
        </li>
      </ul>
    ),
    additionalImage: "/Figures/35th2.PNG",
    additionalCaption: (
      <span>
        Figure :Hypoplasie du nerf optique chez un chien (Becker et al., 2020){" "}
        <br /> <b>✔Observations :</b> - A : Photographie brute du cerveau d’un
        chien présentant une hypoplasie du nerf optique montrant des restes
        vestigiaux du tissu du nerf optique (flèches) ; *nerfs oculomoteurs){" "}
        <br /> - B : Photomicrographie à faible grossissement d'un nerf optique
        hypoplasique montrant un disque étroit (*) et des méandres de tissu
        nerveux
      </span>
    ),
  },
  {
    id: 36,
    title: "Aplasie du nerf optique chez le chien ",
    definition: (
      <span>
      Aucun tissu du nerf optique n'est détectable grossièrement ou microscopiquement, à l'exception de l'apparition rare de restes vestigiaux de tissu glial dans le tissu nerveux périphérique. 
      </span>
    ),
    signs: (
      <ul>
        <li>La rétine est étirée sur le dos du cristallin et n'est pas en contact avec le pôle postérieur du globe. </li>
        <li>Le tissu rétinien est totalement dépourvu de cellules ganglionnaires et il y a une désorganisation des couches rétiniennes et il est totalement avasculaire (Dubielzig et al., 2010 ; Kirk, 2014).</li>
      </ul>
    ),
    additionalImage: "/Figures/36th2.PNG",
    additionalCaption: (
      <span>
        Figure :Aplasie du nerf optique chez un chien (Dubielzig et al., 2010){" "}
        <br /> <b>✔Observations :</b> A et B : seul un tapetum hyper-réfléchissant est présent dans la zone qui devrait contenir le disque optique et les vaisseaux rétiniens. {" "}
        <br /> C, D : Photographies brutes d'yeux de canidés dans lesquels la rétine s'étend sur le dos de la lentille et n'entre jamais en contact avec le pôle postérieur du globe postérieur du globe, car il n'y a pas de nerf optique.
      </span>
    ),
  },
  {
    id: 37,
    title: "2.1.3.	Colobome du nerf optique ",
    definition: (
      <span>
      Les colobomes du nerf optique ou de la sclère postérieure peuvent faire partie d'un syndrome plus complexe, tel que l'anomalie de l'œil du Colley ou ils peuvent se présenter comme une anomalie isolée. 
      </span>
    ),
    signs: (
      <ul>
        <li>La tête du nerf est élargie  </li>
        <li>Un renflement du vitré vers l'extérieur</li>
        <li>Un défaut segmentaire de la lamina cribrosa   </li>
        <li>Une ectasie de la sclère postérieure (Brown et al., 2018 </li>
      </ul>
    ),
    additionalImage: "/Figures/37th2.PNG",
    additionalCaption: "Figure : Médulloépithéliome rétinien et tumeur neuroectodermique primitive (PNET) chez un chien de 5 ans (flèches) (Dubielzig, 2008)",
  },
  {
    id: 38,
    title: "Névrite optique",
    definition: (
      <span>
      Une inflammation du nerf optique sur une ou plusieurs de ses portions (bulbaire, rétrobulbaire ou intracrânienne). 
      Seule l’atteinte bulbaire (papillite) est décelable ophtalmoscopiquement.       
      </span>
    ),
    signs: (
      <ul>
        <li>
      Peut-être unilatérale ou bilatérale
        </li>
        <li>
    Si bilatérale : une cécité soudaine avec une mydriase et l’absence de réflexe photomoteur (Glover, 2000 ; Hofmeister et al., 2006 ; Smith et al., 2018).
        </li>
        <li>
   	Au niveau du fond de l’œil on note certaines anomalies de la papille comme une hyperhémie, une hémorragie ou un œdème qui peut s’étendre à sa périphérie. 
        </li>
        <li>
      	Les vaisseaux rétiniens sont congestionnés. 
        </li>
        <li>
    	Le fond de l’œil peut apparaitre normal lorsque la cause est complètement rétrobulbaire.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/38th2.PNG",
    additionalCaption:
      "Figure : Fond de l’œil d’un Golden Retriever présentant une névrite optique isolée (Smith et al., 2018)",
    steps: (
      <ul>
        <br />-	Le traitement étiologique est souhaitable. 
        <br />--	Dans les cas idiopathiques ou de suspicion de méningo‐encéphalomyélite granulomateuse : administration de la prednisolone (2‐4 mg/kg/j) par voie générale, répartie en deux prises, pendant 10 jours puis à dose décroissante sur une période de 3 à 4 semaines (Martin, 2005).
      </ul>
    ),
  },
  {
    id: 39,
    title: "Inflammation du nerf optique",
    definition: (
      <span>
      L'inflammation du nerf optique est assez fréquente en pratique clinique, souvent dans le cadre de processus inflammatoires plus généralisés touchant le SNC, l'orbite ou l'œil (Smith et al., 2018).
      </span>
    ),
    signs: (
      <ul>
        <li>
     	Un gonflement et une congestion vasculaire de la tête du nerf optique avec œdème et/ou exsudats de la rétine péripapillaire
        </li>
        <li>
     Un décollement de la rétine péripapillaire et des hémorragies dans la rétine ou à la surface de la tête du nerf optique. 
        </li>
        <li>
     	La vision est réduite avec déficit du réflexe pupillaire afférent à la lumière (Maggs et al., 2018 ; Smith et al., 2018).
        </li>
      </ul>
    ),
    steps: (
      <ul>
        <br />-	En l'absence d'autres signes de maladie du SNC, de l'orbite ou de l'œil, il est peu probable qu'une névrite optique idiopathique ou présumée à médiation immunitaire justifie l'énucléation ou l'euthanasie. 
      </ul>
    ),
    treatmentImage: "/Figures/39th3.PNG",
    treatmentImageCaption:
    (
      <span>
        Figure : Névrite optique chez un Berger Allemand (Smith et al., 2018){" "}
        <br /> <b>✔Observations :</b>: la papille optique est sévèrement enflammée (A) avec une vascularisation accrue, surélevée (B : flèche)
      </span>
    ),
  },
  {
    id: 40,
    title: "Glaucomes",
    definition: (
      <span>
      Une maladie de l'œil, caractérisée par une atrophie du nerf optique et une altération irrémédiable du champ visuel. 
      Elle touche surtout les sujets âgés.       
      </span>
    ),
    image: "/Figures/40th1.PNG",
    caption:
      "Figure :Œil de chien isolé montrant un glaucome aigu chez un chien (Dubielzak, 2010)",
    signs: (
      <ul>
        <li>
    	Augmentation de la pression intraoculaire : une valeur supérieure à25 mmHg constitue un diagnostic de certitude du glaucome (Hebert, 2006 ; Zibura et al., 2021).
        </li>
        <li>
     Buphtalmie : Le diamètre horizontal normal chez le chien est de 15 à 17 mm
        </li>
        <li>
      Mydriase aréflexive : l’élévation de la PIO altère la fonction du muscle sphincter de l’iris.
           </li>
           <li>
    Congestion des vaisseaux épiscléraux et des veines conjonctivales
              </li>
              <li>
           	Opacification de la cornée : elle peut être due à un œdème de la cornée
                 </li>
                 <li>
            Epiphora
                    </li>
                    <li>
                Photophobie
                       </li>
                       <li>
                     	Douleur
                          </li>
                          <li>
                    	Changements de la rétine et du nerf optique : Les changements observés du fundus dans les cas de glaucome varient, allant de l’œdème papillaire et de l'hémorragie péri-papillaire dans les cas graves, à des atrophies du disque optique, de la rétine péri-papillaire, de la rétine diffuse, et à des infarctus focaux de la rétine.
                             </li>
      </ul>
      
    ),
    additionalImage: "/Figures/40th2.PNG",
    additionalCaption:
      "Figure : Maladie de la rétine dans le glaucome aigu (Dibuelzig, 2010)",
    steps: (
      <ul>
        <br />Le traitement d'urgence : traitement médical, consiste à diminuer la PIO par : Une réduction du volume de fluide de la chambre postérieure, en augmentant le drainage et en diminuant la production d’humeur aqueuse (Clerc, 1997 ; Desfontis, 2005 ; Hebert, 2006 ; Ketring, 2006 ; Zibura et al., 2021).
        <br />- Par les diurétiques osmotiques 
        <br />-	Par l'acétazolamide (Diamox N.D.), inhibiteur de l'anhydrase carbonique (IAC). 
        <br />-	Il faut aussi améliorer le drainage de l'humeur aqueuse, en ouvrant l'angle irido‐cornéen, les myotiques favorisent le drainage de l'humeur aqueuse (Zibura et al., 2021).
      </ul>
    ),
  },
  {
    id: 41,
    title: "Tumeurs du nerf optique",
    definition: (
      <span>
      La forme la plus courante touchant le nerf optique, provient des cellules de la calotte arachnoïdienne du nerf optique. 
      Bien que la tumeur ne soit pas toujours située à l'intérieur des méninges, elle s'étend dans les tissus conjonctifs orbitaires entourant le nerf optique.
      
      </span>
    ),
    signs: (
      <ul>
        <li>
      	Des agrégats de grandes cellules polygonales infiltrant le tissu adipeux orbitaire 
        </li>
        <li>
     	Présence de multiples foyers d'os métaplasique, de cartilage ou de stroma myxomateux indifférencié. 
        </li>
        <li>
    	Le néoplasme se propage dans le nerf optique par extension à partir du calvarium (Kirk, 2014).
         </li>
      </ul>
    ),
  },
  {
    id: 42,
    title: "Gliome du nerf optique (astrocytome)",
    definition: (
      <span>
      Elle est unilatérale et provoque une expansion du nerf optique. 
      La tumeur peut également se trouver dans la rétine centrale et ne pas impliquer le nerf optique, et une implication étendue du chiasma optique a également été rapportée (Kirk, 2014).      
      </span>
    ),
    signs: (
      <ul>
        <li>
  	Un effacement du neuropil du nerf optique par des cellules néoplasiques fusiformes à stellées et les processus cytoplasmiques de ces cellules forment un enchevêtrement de tissus fibrillaires.
        </li>
      </ul>
    ),
    additionalImage: "/Figures/42th2.PNG",
    additionalCaption:
      "Figure : Photographies brutes du même œil de chien montrant un Gliome du nerf optique (A, B) (Dibuelzig, 2010)",
  },
];
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
  const [selectedAnomaly, setSelectedAnomaly] = useState(null);

  const openModal = (anomaly) => {
    setSelectedAnomaly(anomaly);
  };
  console.log(selectedAnomaly);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnomalyModal
        isOpen={selectedAnomaly !== null}
        onClose={() => setSelectedAnomaly(null)}
        anomaly={selectedAnomaly}
      />
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

            <PathologySection
              title="1.1.1.1. Dermoïde cornéen - Dermoïde à kyste"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anomalies[0])}
                >
                  <h3 className="text-xl font-semibold text-gray-200 text-center">
                    Voir la Maladie
                  </h3>
                </motion.div>
              }
            />

            <div className="mt-6">
              <PathologySection
                title="1.1.1.2. Pigmentation mélanique"
                content={
                  <motion.div
                    className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openModal(anomalies[1])}
                  >
                    <h3 className="text-xl font-semibold text-gray-200 text-center">
                      Voir la Maladie
                    </h3>
                  </motion.div>
                }
              />
            </div>

            <div className="mt-6">
              <PathologySection
                title="1.1.1.3. memberanes pupillaires permanentes et opacités cornéennes"
                content={
                  <motion.div
                    className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openModal(anomalies[2])}
                  >
                    <h3 className="text-xl font-semibold text-gray-200 text-center">
                      Voir la Maladie
                    </h3>
                  </motion.div>
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
                  <motion.div
                    className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openModal(anomalies[3])}
                  >
                    <h3 className="text-xl font-semibold text-gray-200 text-center">
                      Voir la Maladie
                    </h3>
                  </motion.div>
                }
              />
            </div>

            <PathologySection
              title="Ulcères cornéens"
              content={
                <motion.div
                  className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(anomalies[4])}
                >
                  <h3 className="text-xl font-semibold text-gray-200 text-center">
                    Voir la Maladie
                  </h3>
                </motion.div>
              }
            />

            {/* Types of Ulcers Section */}
            <PathologySection
              title="Types des ulcères"
              content={
                <div>
                  <p className="font-semibold mb-2">
                    1) L'ulcère superficiel :
                  </p>
                  <p>
                    L'ulcère superficiel, où la perte de substance touche
                    l'épithélium cornéen et éventuellement la partie
                    superficielle du stroma ; il peut également présenter des
                    bords décollés.
                  </p>
                  <img
                    src={type1}
                    alt="Ulcère superficiel"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">
                    Ulcère superficiel à bord décollés chez un chien
                  </p>

                  <p className="font-semibold mb-2 mt-4">
                    2) L'ulcère stromal :
                  </p>
                  <img
                    src={type2}
                    alt="Ulcère stromal"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">
                    Description de l'ulcère stromal
                  </p>

                  <p className="font-semibold mb-2 mt-4">
                    3) La descemétocèle :
                  </p>
                  <p>
                    Dans laquelle la membrane de Descemet fait hernie au travers
                    de la perte de substance stromale.
                  </p>
                  <img
                    src={type3}
                    alt="Descemétocèle"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">
                    Description de la descemétocèle
                  </p>

                  <p className="font-semibold mb-2 mt-4">
                    4) L'ulcère perforé :
                  </p>
                  <p>
                    Dans lequel la brèche touche l'ensemble de l'épaisseur de la
                    cornée, autorisant l'issue de l'humeur aqueuse et parfois de
                    l'iris.
                  </p>
                  <img
                    src={type4}
                    alt="Ulcère perforé"
                    className="w-full max-w-3xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">
                    Description de l'ulcère perforé
                  </p>

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
                    Une rougeur, une douleur, sont souvent associés à une
                    sensation de corps étranger dans l'œil.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Une photophobie</li>
                    <li>Un larmoiement</li>
                    <li>Blépharospasme</li>
                    <li>Oedème cornéen</li>
                    <li>
                      Myosis (Jaksz et Buss, 2017 ; Farghali et al., 2021)
                    </li>
                  </ul>
                  <p>
                    Les ulcères superficiels simples guérissent généralement
                    rapidement, avec formation d'une cicatrice minime. Les
                    ulcères profonds compliqués (avec une infection microbienne)
                    peuvent conduire à l'altération de la vision en raison de
                    cicatrices cornéennes ou, lorsque une perforation cornéenne
                    se produit, jusqu'à la formation de synéchies antérieures
                    (Kirk, 2014 ; Jaksz et al., 2021).
                  </p>
                  <img
                    src={symp1}
                    alt="Symptômes des ulcères cornéens"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-4 my-6"
                  />
                  <p className="text-center italic">
                    Œil de chien montrant un entropion avec un ulcère cornéen
                    (Farghali et al., 2021)
                  </p>
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
                    Les ulcères cornéens chroniques infectés ou évolutifs
                    doivent subir une culture microbiologique et des tests de
                    sensibilité aux antibiotiques et un examen cytologique des
                    échantillons de cornée. Ces procédures de diagnostic aident
                    à orienter la thérapie d'antimicrobiens spécifiques (Pandey
                    et al., 2018).
                  </p>
                  <p>
                    Le diagnostic d'un ulcère cornéen est fait sur la base des
                    signes cliniques, et la rétention du colorant (fluorescéine)
                    appliqué localement par les troma cornéen (Figure 101)
                    (Farghali et al., 2021).
                  </p>
                  <img
                    src={diag}
                    alt="Diagnostic d'ulcère cornéen"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Ulcère cornéen superficiel (A : Oeil souffrant d'ulcère
                    cornéen, B : après application d'un colorant fluorescent
                    montrant le type et la profondeur des ulcères cornéens)
                    (Farghali et al., 2021)
                  </p>
                </div>
              }
            />

            {/* Treatment Section */}
            <PathologySection
              title="Traitement"
              content={
                <div>
                  <p className="font-semibold mb-2">
                    1) Traitement des ulcères cornéens non compliqués (simples)
                    :
                  </p>
                  <p>
                    Lors d'ulcère superficiel simple, la cicatrisation est
                    rapide (5 jours en moyenne), par migration et allongement
                    des cellules épithéliales. Le traitement associe un collyre
                    antibiotique (3 ou 4 fois/j pendant 10 jours), un
                    cycloplégique (atropine, 2 fois/j pendant 6 jours) et des
                    cicatrisants, lubrifiants et anticollagénases (3 ou 4 fois/j
                    pendant 10 jours). Un examen de contrôle doit toujours être
                    programmé dans les 7 jours.
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait1}
                        alt="Traitement ulcère cornéen 1"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">
                        J0 : chémosis et ulcère épithélial étendu
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait2}
                        alt="Traitement ulcère cornéen 2"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">
                        J2 : chémosis atténué et ulcère épithélial résiduel{" "}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        src={trait3}
                        alt="Traitement ulcère cornéen 3"
                        className="w-full max-w-xs rounded-lg"
                      />
                      <p className="text-center italic">
                        J8 : guérison complète
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold mb-2 mt-4">
                    2) Traitement des ulcères cornéens profonds (stromal) ou
                    Descemétocèle :
                  </p>
                  <p>
                    Les ulcères qui évoluent rapidement / qui ont des zones de
                    fonte du stroma / une perte stromale / infiltration
                    cellulaire marquée sont tous considérés compliqués et
                    infectés. Une cause déclenchante doit être recherchée et
                    éliminée ou contrôlée si possible ; antibiotique topique à
                    large spectre et un traitement mydriatique doit être
                    instauré et un collier élisabéthain devrait être fourni
                    (Pandey et al., 2018 ; Prado et al., 2021). Si l'ulcère est
                    plus profond que la moitié de l'épaisseur de la cornée, il
                    bénéficie également de la chirurgie car le stroma cornéen
                    n'a une capacité limitée à se régénérer, et la guérison est
                    lente, nécessitant souvent une infiltration fibrovasculaire.
                    Ce processus peut prendre des semaines s'il se produit
                    spontanément à partir du limbe mais peut être rapidement
                    fourni par greffe conjonctivale (Maggs et al., 2018).
                  </p>
                  <p>
                    Les avantages des greffes conjonctivales :
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Support mécanique pour une cornée fine ou fragilisée
                      </li>
                      <li>
                        Un approvisionnement continu de sérum, qui contient des
                        anticollagénases et des facteurs de croissance
                      </li>
                      <li>
                        Une source immédiate de fibroblastes à réplication
                        active pour régénération du collagène dans le stroma
                      </li>
                      <li>
                        Une voie pour les antibiotiques systémiques à livrer à
                        l'ulcère cornéen.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Les sutures cornéennes devraient être placées environ
                    d'épaisseur cornéenne aux trois quarts et sans pénétrer
                    chambre antérieure (Maggs et al., 2018). 5 types de greffes
                    conjonctivales :
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Greffons insulaires ou libres</li>
                      <li>Greffes complètes ou à 360 degrés</li>
                      <li>Avancement simple ou greffes de capuchon</li>
                      <li>Greffes pédiculaires rotatives</li>
                      <li>Greffes de pont</li>
                    </ul>
                  </p>
                  <p>
                    Les greffes de type avancement (capot ou 360 degrés) sont
                    plus faciles à récolter et à placer. Une bande de
                    conjonctive d'une longueur et d'une largeur suffisante pour
                    atteindre et couvrir l'ulcère est libérée du Tenon
                    sous-jacent capsule. Un greffon conjonctival fin et mobile,
                    est suturé à la cornée viable entourant l'ulcère avec de
                    simples points de suture interrompus (Pandey et al., 2018).
                    Une approche alternative consiste à clouer le greffon avec
                    quatre à six simples sutures puis sursouder le périmètre du
                    greffon avec un motif continu simple. Des sutures
                    supplémentaires au limbe peuvent aider à sécuriser la
                    greffe. Il n'est pas indispensable de fermer le loyer en la
                    conjonctive bulbaire ; cependant, cela a tendance à réduire
                    les douleurs postopératoires (Maggs et al., 2018 ; Prado et
                    al., 2021).
                  </p>
                  <img
                    src={trait4}
                    alt="Greffe conjonctivale type avancement"
                    className="w-full max-w-3xl mx-auto rounded-lg my-4"
                  />
                  <p className="text-center italic">
                    Greffe conjonctivale type avancement (Maggs et al., 2018)
                  </p>
                  <img
                    src={trait5}
                    alt="Greffe de pédicule conjonctival"
                    className="w-full max-w-3xl mx-auto rounded-lg my-4"
                  />
                  <p className="text-center italic">
                    Figure : Greffe de pédicule conjonctival immédiatement après
                    avoir été coupé
                  </p>
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
                    <li>
                      A : Une petite incision limbique est pratiquée à côté de
                      la lésion.
                    </li>
                    <li>B : Le lambeau est miné par dissection mousse.</li>
                    <li>
                      C : Des incisions conjonctivales parallèles ou légèrement
                      divergentes sont faites vers le fornix, avec une largeur
                      du lambeau suffisante pour couvrir la lésion cornéenne.
                    </li>
                    <li>
                      D : Le lambeau conjonctival est avancé centralement pour
                      couvrir la lésion cornéenne et suturé en place avec de
                      simples sutures interrompues de polyglactine.
                    </li>
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
                  <p className="text-center italic">
                    Captions for the first two observation images here
                  </p>
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
                  <p className="text-center italic">
                    Captions for the second two observation images here
                  </p>
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
                  <p className="text-center italic">
                    Captions for the last two observation images here
                  </p>
                  <p className="mt-4">
                    Une fois l'ulcère cornéen guéri, l'apport sanguin au greffon
                    conjonctival peut être coupé. Après anesthésique topique,
                    des ciseaux peuvent être placés sous la partie pédiculaire
                    du greffon, qui n'adhère pas à l'épithélium cornéen normal
                    sous-jacent (Figure 107) (Kirk, 2014 ; Prado et al., 2021).
                  </p>
                  <img
                    src={obs7}
                    alt="Section pédiculaire après greffe conjonctivale"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Section pédiculaire après greffe conjonctivale
                    (Kirk, 2014)
                  </p>
                </div>
              }
            />
            <PathologySection
              title="1.1.2.2. Kératite superficielle chronique (Pannus) "
              content={
                <>
                  <div>
                    <p className="mt-4">
                      La kératite superficielle chronique (CSK) est une maladie
                      progressive, bilatérale, inflammatoire et potentiellement
                      aveuglante : maladie de la cornée canine. Connue sous le
                      nom de « pannus dégénératif ».
                    </p>
                    <img
                      src={test1}
                      alt="Section pédiculaire après greffe conjonctivale"
                      className="w-full max-w-3xl mx-auto rounded-lg my-6"
                    />
                    <p className="text-center italic">
                      Figure : Kératite superficielle chronique
                      <a
                        href="https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/keratite-superficielle-chronique/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 ml-1"
                      >
                        (Source)
                      </a>{" "}
                    </p>
                  </div>

                  <PathologySection
                    title="●	Etiologie : "
                    content={
                      <div>
                        <p className="mt-4">
                          La cause de la CSK chez le chien n'a pas été établie,
                          mais les preuves actuelles suggèrent la condition est
                          une maladie à médiation immunitaire d'origine
                          génétique. <br />
                          La cornée possède des antigènes tissu-spécifiques qui
                          peuvent être modifiés par des facteurs externes tels
                          que la lumière ultraviolette (UV). Le rayonnement UV
                          peut altérer l'antigénicité des cornées sensibles,
                          entraînant ainsi inflammation à médiation cellulaire
                          chez les chiens sensibles. La CSK peut être contrôlée
                          par l'administration topique de corticostéroïdes et
                          ciclosporine (Castillo, 2019).
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
                          Une lésion rouge, vascularisée, conjonctivale au
                          niveau inférieur du limbe temporal. Au début de la
                          maladie : la vascularisation et la pigmentation se
                          produit au niveau de la cornée temporale et progresse
                          de manière centralisée. (Figure 108) (Dubielzig et
                          al., 2010 ; Castillo, 2019). Elle se propage vers la
                          cornée centrale sous la forme d'un corps charnu, bien
                          vascularisé. Une ligne cristalline blanche ou petites
                          taches blanches sont observés dans le stroma cornéen
                          clair, 1-2 mm devant le bord d'attaque de la lésion.
                          La partie supérieure de la cornée reste généralement
                          inchangée jusqu'à la fin de la maladie. Finalement,
                          toute la cornée peut devenir vascularisée, pigmentée
                          et opaque. Un épaississement et pigmentation de la
                          surface palpébrale de la membrane nictitante peuvent
                          être développés.
                        </p>
                        <img
                          src={test3}
                          alt="Section pédiculaire après greffe conjonctivale"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Kératite superficielle chronique chez une
                          chienne croisée berger de 4 ans. Les lésions se
                          situent dans la partie temporale de la cornée. On
                          observe une vascularisation cornéenne superficielle,
                          une pigmentation et une infiltration cellulaire de la
                          cornée bordée d'un oedème cornéen ainsi qu'une
                          infiltration de la membrane nictitante se traduisant
                          par une décoloration de son bord libre, un
                          épaississement et une irrégularité de sa surface
                          <a
                            href="https://www.depecheveterinaire.com/keratite-superficielle-chronique-du-chien-le-diagnostic_67984E823465A263.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 ml-1"
                          >
                            (Source)
                          </a>{" "}
                        </p>
                      </div>
                    }
                  />
                  <PathologySection
                    title="●	Diagnostic différentiel: "
                    content={
                      <div>
                        <p className="mt-4">
                          La CSK doit être distinguée de la kératite pigmentaire
                          résultant d'autres causes (par exemple, irritation
                          chronique), et de la granulation cornéenne résultant
                          de la cicatrisation vasculaire des plaies cornéennes
                          (Dubielzig et al., 2010 ; Kirk, 2014).
                        </p>
                      </div>
                    }
                  />
                  <PathologySection
                    title="●	Traitement: "
                    content={
                      <div>
                        <p className="mt-4">
                          La gravité de cette maladie et le pronostic dépendent
                          de nombreux facteurs : l'âge d'apparition, altitude,..
                          Le traitement initial consiste d'onguents ou de
                          solutions corticostéroïdes topiques trois à quatre
                          fois par jour pendant 3 à 4 semaines, suivi d’un
                          programme d'entretien réduit. Pour les cas où le
                          contrôle médical n'est pas satisfaisant, une injection
                          sous-conjonctivale de corticoïdes dans un traitement
                          topique peut également être nécessaire pour contrôler
                          la maladie, ou rayonnement β (strontium-90β
                          plésiothérapie) peut être utilisé en concomitance avec
                          thérapie.
                        </p>
                        <div className="flex justify-center flex-wrap items-center gap-4">
                          <div className="flex flex-col justify-center items-center">
                            <img
                              src={test4}
                              alt="Section pédiculaire après greffe conjonctivale"
                              className=" w-full max-w-md mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">
                              Figure : Kératite superficielle chronique{" "}
                            </p>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <img
                              src={test5}
                              alt="Section pédiculaire après greffe conjonctivale"
                              className="w-full max-w-md mx-auto rounded-lg my-6"
                            />
                            <p className="text-center italic">
                              Figure : Même oeil, après 4 semaines de traitement{" "}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4">
                          Une kératectomie superficielle peut être nécessaire
                          pour cas graves dans lesquels la cécité est due à la
                          pigmentation de la cornée centrale, mais les récidive
                          doivent être attendues et répéter les kératectomies
                          (généralement limité à deux ou trois) peut être
                          nécessaire.
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
                    Les dégénérescences cornéennes sont des altérations qui font
                    perdre à la cornée une ou plusieurs de ses propriétés
                    normales, secondaires à des changements pathologiques dans
                    la cornée. (Sansom et Blunden, 2010 ; Maggs et al., 2018).{" "}
                    <br />
                    Une accumulation de lipides, de cholestérol, ou de calcium,
                    qui sont précédés d'une kératite, d’une vascularisation et
                    éventuellement de la mélanose (Brooks et al., 1990 ; Kirk,
                    2014).
                  </p>
                  <img
                    src={test6}
                    alt="Dégénérescence cornéenne diffuse avec une plaque blanche dense et une vascularisation"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Dégénérescence cornéenne diffuse avec une plaque
                    blanche dense et une vascularisation (Maggs et al., 2018)
                  </p>

                  <PathologySection
                    title="● Diagnostic :"
                    content={
                      <div>
                        <p className="mt-4">
                          Les lésions peuvent être d'un blanc dense ou blanc
                          grisâtre. Les frontières du cristallin sont bien
                          délimitées. Elles peuvent se produire dans n'importe
                          quelle zone de la cornée, mais généralement elles sont
                          axiales ou paraxiales (Sansom et Blunden, 2010).{" "}
                          <br />
                          Au fur et à mesure que la dégénérescence progresse,
                          des dépôts de cholestérol et de calcium sont observés.
                          La présence de calcium peut contribuer à un retard de
                          la guérison de la cornée (Brooks et al., 1990 ; Maggs
                          et al., 2018). <br />
                          La dégénérescence calcique peut être secondaire à une
                          maladie ou spontanée (associée à une inflammation
                          locale). L’hypercalcémie, l’hyperphosphatémie,
                          l’hyperadrénocorticisme, l’urémie et l’hypervitaminose
                          D peuvent potentiellement être accompagnés de
                          calcification cornéenne secondaire. <br />
                          La dégénérescence graisseuse et la dégénérescence
                          hyaline peuvent précéder ou accompagner la
                          calcification cornéenne (Maggs et al., 2018).
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
                          Il n’existe pas de traitement médical efficace
                          permettant de faire régresser les dépôts dans le
                          stroma cornéen. Lorsqu’une cause est identifiée, comme
                          une kératite, une uvéite, une épisclérite ou un ulcère
                          cornéen, elle doit être gérée de manière spécifique.{" "}
                          <br />
                          La corticothérapie doit être évitée dans la
                          dégénérescence cornéenne, car elle diminue la
                          vascularisation, la fonction des macrophages, et par
                          la suite la résolution de la lésion. <br />
                          La kératectomie peut être envisagée si la lésion est
                          évolutive et la vision compromise. Une greffe de
                          biomatériau peut compléter l’intervention en fonction
                          de la profondeur de la lésion. La kératectomie peut
                          être envisagée si la lésion est évolutive et la vision
                          compromise. On complètera d’une greffe de biomatériau
                          en fonction de la profondeur d’atteinte. (Sansom et
                          Blunden, 2010 ; Berryhill et al., 2016).
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
                    Un œdème cornéen progressif résultant de la présence de
                    cellules endothéliales dystrophiques anormales (Kirk, 2014).{" "}
                    <br />
                    Une dégénérescence bilatérale progressive des cellules
                    endothéliales cornéennes qui se traduit par un œdème, et une
                    cornée avasculaire.
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
                          Un manque de vascularisation de la cornée ou hyperémie
                          conjonctivale. <br />
                          La première lésion : l'œdème cornéen, localisé
                          temporellement et progresse lentement, sur plusieurs
                          mois à quelques années, pour impliquer toute la
                          cornée. <br />
                          Elle est initialement asymétrique puis progresse à une
                          opacité cornéenne complète et bilatérale (Casola et
                          al., 2020).
                        </p>
                        <img
                          src={test9}
                          alt="Œdème cornéen diffus chez un Boston Terrier"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Œdème cornéen diffus chez un Boston Terrier
                          avec dystrophie endothéliale cornéenne avancée (Kirk,
                          2014).
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          La thérapie palliative est le plus souvent utilisée
                          pour la dystrophie endothéliale. <br />
                          Les hyperosmotiques peuvent diminuer l'étendue de la
                          formation de bulles, mais un éclaircissement cornéen
                          important ne peut se produire. <br />
                          La thermokératoplastie (cautérisation thermique) est
                          préconisée avec utilisation de points multifocaux de
                          cautérisation thermique superficielle appliqués de
                          manière circulaire sur la cornée exposée (Casola et
                          al., 2020).
                        </p>
                        <img
                          src={test10}
                          alt="Thermokératoplastie lors de dystrophie endothéliale cornéenne"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Thermokératoplastie lors de dystrophie
                          endothéliale cornéenne (Kirk, 2014).
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
                    Souvent secondaires à des blessures causées par les griffes
                    du chat, les lacérations cornéennes se distinguent en deux
                    types : les lacérations pénétrant la cornée et les
                    lacérations perforantes. Quelle que soit la cause, des
                    facteurs doivent être établis dans toutes les lacérations
                    cornéennes : profondeur de la lacération, atteinte du
                    cristallin, et l'extension de la lacération au-delà du limbe
                    (Kirk, 2014).
                  </p>
                  <img
                    src={test11}
                    alt="Lacération du bord libre de la troisième paupière chez un chien suite à une griffure de chat"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Lacération du bord libre de la troisième paupière
                    chez un chien suite à une griffure de chat. La pupille a été
                    pharmacologiquement dilatée pour rechercher une éventuelle
                    lésion intraoculaire © Elizabeth Giuliano
                  </p>

                  <PathologySection
                    title="● Symptômes :"
                    content={
                      <div>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Lésion douloureuse</li>
                          <li>Blépharospasme</li>
                          <li>Myosis</li>
                          <li>
                            Épiphora séreux à muco-purulent selon l’ancienneté
                            de l’affection
                          </li>
                          <li>Hyperhémie conjonctivale parfois importante</li>
                        </ul>
                        <p className="mt-4">
                          Les lacérations pénétrantes entraînent un ulcère
                          cornéen de profondeur variable. Ces lacérations
                          peuvent être ponctiformes, avoir un aspect
                          caractéristique de déchirure rectiligne ou se
                          matérialiser sous forme de soulèvement d’une portion
                          de cornée (« scalp cornéen »). Dans ce cas, la douleur
                          est intense, et des signes plus ou moins prononcés
                          d’uvéite antérieure (myosis, hypopion, hyphéma, etc.)
                          sont souvent associés. Un examen minutieux est
                          effectué pour évaluer l'étendue de la blessure, en
                          prenant soin d'éviter toute pression sur le globe afin
                          d'éviter des lésions intraoculaires supplémentaires
                          (Kirk, 2014). Les lacérations s'étendant au-delà du
                          limbe comportent un risque élevé de dommages au
                          cristallin, au corps ciliaire sous-jacent, et à la
                          rétine, avec une uvéite marquée.
                        </p>
                        <img
                          src={test12}
                          alt="Lacération cornéenne avec rupture de la capsule antérieure du cristallin"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Lacération cornéenne (A) avec rupture de la
                          capsule antérieure du cristallin (B) (Maggs et al.,
                          2018)
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          Les lacérations qui ne pénètrent que les couches
                          cornéennes superficielles, plutôt que toute
                          l'épaisseur de la cornée, ont généralement un bon
                          pronostic avec une prise en charge adaptée. Elles sont
                          traitées de manière similaire aux ulcères cornéens
                          (Maggs et al., 2018). Les plaies perforantes avec
                          rupture du globe présentent un pronostic plus sombre
                          en raison des lésions intraoculaires et d'une plus
                          grande rupture des tissus au bord de la plaie. Les
                          ulcères cornéens superficiels ou peu profonds et de
                          petite taille peuvent être gérés par un traitement
                          médical seul. Les scalps cornéens, ainsi que les
                          lésions cornéennes profondes, perforantes ou de grande
                          taille, nécessitent une prise en charge chirurgicale :
                          sutures cornéennes, lambeau conjonctival, ou greffe de
                          biomatériau, selon le cas.
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
                    Les corps étrangers cornéens se distinguent en deux types
                    différents :
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>
                      Ceux qui adhèrent à la surface cornéenne par tension
                      superficielle et peuvent par la suite devenir encore plus
                      solidement attachés par création d’une région ulcérée à
                      leurs bords.
                    </li>
                    <li>
                      Ceux qui pénètrent dans la cornée et parfois dans le globe
                      lui-même (Sandmeyer et al., 2016).
                    </li>
                  </ul>
                  <img
                    src={test14}
                    alt="Œil gauche d'un braque avec un corps étranger sur la surface de la cornée"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : œil gauche d'un braque avec un corps étranger sur
                    la surface de la cornée (Sandmeyer et al., 2016)
                  </p>
                  <p className="mt-4">
                    Ces corps étrangers doivent être supprimés pour limiter la
                    douleur, réduire le risque d'infection et prévenir la
                    vascularisation et la formation de cicatrices.
                  </p>
                  <img
                    src={test15}
                    alt="Corps étranger implanté dans la cornée d’un chien et faisant protrusion dans la chambre antérieure"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Corps étranger implanté dans la cornée d’un chien
                    et faisant protrusion dans la chambre antérieure
                  </p>

                  <PathologySection
                    title="● Traitement :"
                    content={
                      <div>
                        <p className="mt-4">
                          Le traitement consiste tout d’abord à extraire le
                          corps étranger, sous anesthésie locale ou générale en
                          fonction de sa profondeur et de la patience de
                          l’animal. L’extraction peut être effectuée avec :
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                          <li>Une pince</li>
                          <li>Une aiguille de 25G</li>
                          <li>Un coton-tige</li>
                          <li>Du sérum physiologique s’il est superficiel</li>
                        </ul>
                        <p className="mt-4">
                          Pour les corps étrangers pénétrants ou perforants, une
                          microchirurgie est nécessaire, incluant selon les cas
                          : des sutures cornéennes, la fixation d’un
                          biomatériau, ou un lambeau conjonctival.
                        </p>
                        <p className="mt-4">
                          Les petits corps étrangers collés sont mieux retirés
                          avec un jet de solution saline dirigé avec force sur
                          la surface cornéenne après application d’un topique
                          anesthésique. Cette procédure est sûre uniquement si
                          la cornée n’est pas affaiblie, car un courant de
                          fluide peut rompre un descemétocèle ou un autre ulcère
                          profond (Lew et al., 2015 ; Sandmeyer et al., 2016).
                        </p>
                        <p className="mt-4">
                          Les corps étrangers pénétrants sont plus
                          problématiques et devraient être référés pour une
                          intervention chirurgicale. L'extraction est réalisée
                          au microscope opératoire avec une incision pratiquée
                          dans la cornée au-dessus du grand axe du corps
                          étranger (Lew et al., 2015).
                        </p>
                        <img
                          src={test16}
                          alt="Corps étranger (épine) dans la partie médiane de la cornée"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Corps étranger (épine) dans la partie médiane
                          de la cornée (Lew et al., 2015)
                        </p>
                        <p className="mt-4">
                          Après élimination de tout corps étranger, un
                          traitement antibiotique topique à large spectre et de
                          l’atropine sont administrés pour limiter l'infection
                          et les effets de l'uvéite secondaire. Si une
                          perforation du globe s'est produite, un antibiotique
                          systémique doit également être utilisé.
                        </p>
                        <p className="mt-4">
                          La cicatrisation épithéliale cornéenne est normalement
                          rapide tant que l'infection secondaire est contrôlée.
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
                    Les brûlures cornéennes sont de nature chimique ou
                    thermique. Ce sont des urgences absolues en raison des
                    séquelles graves qu’elles peuvent entraîner (Abbaszadeh et
                    al., 2010).
                  </p>

                  <PathologySection
                    title="● Étiologie et pathogénie"
                    content={
                      <div>
                        <p className="mt-4">
                          Les acides sont responsables de lésions de la surface
                          oculaire. Ils précipitent et dénaturent les protéines
                          de l’épithélium cornéen, qui prend un aspect
                          nécrotique blanchâtre sur un stroma sous‐jacent clair
                          (Beltran et Clerc, 1998 ; Hannouche et Hoangxuan,
                          2000).
                        </p>
                        <p className="mt-4">
                          Les brûlures thermiques sont dues soit à l’exposition
                          à une flamme ou une source de chaleur, soit à un
                          contact direct avec un corps chaud ou un liquide
                          bouillant. Ces brûlures sont souvent associées à des
                          brûlures de la face (Abbaszadeh et al., 2010).
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Signes cliniques"
                    content={
                      <ul className="list-disc ml-6 mt-4">
                        <li>
                          Destruction de l'épithélium superficiel de la cornée
                          et de la conjonctive.
                        </li>
                        <li>
                          Nécrose des tissus profonds (pour des concentrations
                          élevées de produits chimiques).
                        </li>
                        <li>Blépharospasme.</li>
                        <li>Photophobie.</li>
                        <li>Larmoiement, rougeur, douleur oculaire.</li>
                        <li>
                          Baisse de l’acuité visuelle (Hannouche et Hoangxuan,
                          2000).
                        </li>
                      </ul>
                    }
                  />

                  <PathologySection
                    title="● Traitement"
                    content={
                      <div>
                        <p className="mt-4">
                          Rincer abondamment la cornée à l’aide de sérum
                          physiologique. Le lavage abondant de la surface
                          oculaire et des voies lacrymales doit précéder
                          l’examen clinique (Miller et Rhaesa, 1996 ; Payern et
                          al., 2006).
                        </p>
                        <p className="mt-4">
                          Utiliser une solution de lactate de Ringer ou une
                          solution physiologique équilibrée (BSS) pour le
                          lavage, car elles sont adaptées au milieu
                          électrolytique du stroma cornéen (Hannouche et
                          Hoangxuan, 2004).
                        </p>
                        <p className="mt-4">
                          Il ne faut surtout pas laver avec une solution de pH
                          opposé, ce qui pourrait aggraver les lésions.
                          Appliquer un antibiotique à large spectre localement
                          pour prévenir les infections cornéennes et un
                          substitut de larmes toutes les deux heures pour éviter
                          la sécheresse oculaire.
                        </p>
                      </div>
                    }
                  />

                  <PathologySection
                    title="● Pronostic"
                    content={
                      <p className="mt-4">
                        Les brûlures caustiques de la cornée peuvent être
                        classées en quatre grades pronostiques. Le pronostic est
                        bon pour les grades I et II, qui guérissent en quelques
                        jours sans séquelles, mais il est mauvais pour les
                        grades III et IV.
                      </p>
                    }
                  />

                  <img
                    src={test17}
                    alt="Brûlure chimique de la cornée (A : Colle sur la surface, B : Évolution)"
                    className="w-full max-w-3xl mx-auto rounded-lg my-6"
                  />
                  <p className="text-center italic">
                    Figure : Brûlure chimique de la cornée (Abbaszadeh et al.,
                    2010)
                  </p>
                </div>
              }
            />
            <h3 className="text-2xl font-semibold text-gray-200 my-3">
              1.2 Maladies sclérales
            </h3>

            <PathologySection
              title="1.2.1. Épisclérite granulomateuse nodulaire (NGE)"
              content={
                <div>
                  <p className="my-4">
                    Aussi appelé kératoconjonctivite proliférative, granulome
                    limbique, pseudotumeur et granulome du colley.
                  </p>

                  <PathologySection
                    title="● Définition"
                    content={
                      <p className="mt-4">
                        Une maladie oculaire à médiation immunitaire
                        (inflammatoire) qui touche la sclère, la cornée et la
                        membrane nictitante.
                      </p>
                    }
                  />

                  <PathologySection
                    title="● Prédisposition raciale"
                    content={
                      <>
                        <p className="mt-4">
                          Le colley, le cocker américain et les bergers de
                          Shetland (Hamzianpour et al., 2019).
                        </p>
                        <img
                          src={test18}
                          alt="Brûlure chimique de la cornée (A : Colle sur la surface, B : Évolution)"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Examen rapprochédes deux yeux. <br />
                          2a. Examen comparé de l’œil droit : noterla
                          déformation sclérale à 9 h et12 h, le chémosis marqué,
                          l’infiltrat cellulaire du stroma cornéen, les
                          néo-vaisseaux périlimbiques et l’œdème associé
                          <br /> 2b. Œil gaucheaprès dilatation.
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
                          <li>
                            Une seule masse survenant au limbe et infiltrant le
                            stroma cornéen adjacent.
                          </li>
                        </ul>
                        <img
                          src={test19}
                          alt="Épisclérite granulomateuse nodulaire"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Vues de face (A) et latérales (B) d'un chien
                          atteint d'épisclérokératite granulomateuse nodulaire
                          focale (Hamzianpour et al., 2019).
                        </p>
                      </>
                    }
                  />

                  <PathologySection
                    title="● Observations"
                    content={
                      <p className="mt-4">
                        Noter le gonflement sous-conjonctival, l'injection
                        conjonctivale et l'œdème cornéen périphérique adjacent à
                        la lésion.
                      </p>
                    }
                  />

                  <PathologySection
                    title="● Traitement"
                    content={
                      <div>
                        <p className="mt-4">
                          Généralement, la NGE a tendance à être bénigne, avec
                          une bonne réponse à l'administration topique de
                          corticostéroïdes.
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
                              Figure : même œil après 3 semaines de traitement
                              anti-inflammatoire
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 font-semibold">
                          Procédures chirurgicales :
                        </p>
                        <ul className="list-disc ml-6">
                          <li>Canthotomie latérale.</li>
                          <li>
                            Kératectomie lamellaire associée à une sclérotomie.
                          </li>
                          <li>Dissection de plan profond.</li>
                          <li>
                            Excision des deux tiers de l’épaisseur du stroma
                            cornéen.
                          </li>
                          <li>
                            Mise en place d’une greffe conjonctivale pédiculée
                            et suturée par des points simples.
                          </li>
                        </ul>
                        <img
                          src={test22}
                          alt="Épisclérite granulomateuse nodulaire"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          12. Kératectomie lamellaire et sclérotomie. <br />
                          13. Dissection du plan profond à l’aide du couteau de
                          Crescent. <br />
                          14. Aspect de la zone après kératectomie. <br />
                          15. Aspect de l’œil droit après fixation du lambeau
                          conjonctival pédiculé. <br />
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
                          <li>
                            Lésions rose-brun à proximité, mais postérieures au
                            limbe.
                          </li>
                          <li>Œdème cornéen.</li>
                          <li>Douleur oculaire.</li>
                          <li>Photophobie.</li>
                          <li>Larmoiement excessif.</li>
                        </ul>
                        <p className="mt-4">
                          Dans certains cas, une kératite, une uvéite antérieure
                          peuvent être présentes car l'inflammation sclérale
                          s'étend dans ces tissus adjacents.
                        </p>
                        <img
                          src={test24}
                          alt="Sclérite sévère, œdème cornéen périphérique et foyer de dégénérescence cornéenne"
                          className="w-full max-w-3xl mx-auto rounded-lg my-6"
                        />
                        <p className="text-center italic">
                          Figure : Sclérite sévère, œdème cornéen périphérique
                          et foyer de dégénérescence cornéenne (Maggs et al.,
                          2018)
                        </p>
                      </>
                    }
                  />
                  <PathologySection
                    title="● Observations"
                    content={
                      <>
                        <p className="mt-4">
                          La lésion typique de la sclérite consiste en
                          inflammation granulomateuse avec infiltration de
                          lymphocytes, plasmocytes et macrophages épithélioïdes.
                        </p>
                        <p className="mt-4">
                          Lorsqu'une uvéite est présente, l'infiltrat uvéal est
                          non granulomateux.
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                          <li>La sclère endommagée devient fibreuse.</li>
                          <li>
                            Formation des kystes multifocaux dans la sclère
                            affectée.
                          </li>
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
                          Les corticostéroïdes intra-lésionnels favorisent
                          généralement la régression des lésions.
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
                    Plus d’informations :{" "}
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
                    Les masses cornéennes, limbiques et cornéosclérales sont
                    rares chez les mammifères domestiques. Elles peuvent inclure
                    des kystes non-néoplasiques, abcès, troubles inflammatoires
                    et des néoplasmes tels que le carcinome épidermoïde, le
                    mélanome, le papillome, le lymphome et
                    l’hémangiome/hémangiosarcome.
                  </p>
                  <div className="flex justify-center flex-wrap items-center gap-4">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={test28}
                        alt="Section pédiculaire après greffe conjonctivale"
                        className=" w-full max-w-md mx-auto rounded-lg my-6"
                      />
                      <p className="text-center italic">
                        Figure : Mélanome épibulbaire chez un labrador.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={test29}
                        alt="Section pédiculaire après greffe conjonctivale"
                        className="w-full max-w-md mx-auto rounded-lg my-6"
                      />
                      <p className="text-center italic">
                        Figure : Aspect postopératoire après exérèse
                        chirurgicale du mélanome épibulbaire (de la photo
                        précédente), associée au laser diode et à une greffe
                        conjonctivale
                      </p>
                    </div>
                  </div>
                  <PathologySection
                    title="1.2.3.1. Kystes d'inclusion épithéliale cornéenne"
                    content={
                      <>
                        <p className="my-4">
                          La formation de kystes dans la cornée peut impliquer
                          les quatre couches. Ils sont généralement unilatéraux
                          et solitaires.
                        </p>
                        <PathologySection
                          title="● Symptômes"
                          content={
                            <ul className="list-disc ml-6 mt-4">
                              <li>
                                Masses cornéennes surélevées, blanches à roses.
                              </li>
                              <li>
                                Typiquement chronique et non douloureuse, mais
                                peut altérer la vision.
                              </li>
                            </ul>
                          }
                        />
                        <PathologySection
                          title="● Étiologie"
                          content={
                            <p className="mt-4">
                              Une origine traumatique est souvent suspectée. Ces
                              kystes peuvent également être congénitaux ou se
                              développer après une chirurgie cornéenne.
                            </p>
                          }
                        />
                        <PathologySection
                          title="● Traitement"
                          content={
                            <p className="mt-4">
                              Le traitement repose sur une kératectomie
                              superficielle complète, avec ou sans greffe
                              conjonctivale ou autre intervention
                              complémentaire.
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
                          Figure : UN KYSTE CORNÉEN CHEZ UN BERGER DE BEAUCE
                          (Service d'ophtalmologie du Centre Hospitalier
                          Vétérinaire Cordeliers Meaux)
                        </p>
                        <PathologySection
                          title="● Observations"
                          content={
                            <>
                              <p className="mt-4">
                                Lésion kystique sous-épithéliale à paroi fine et
                                transparente, au contenu beige pâteux. Présence
                                de débris épithéliaux dans la lumière du kyste
                                formant un pseudo-hypopion.
                              </p>
                              <img
                                src={test31}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : Kératectomie sous microscope à l'aide
                                d'un couteau cleave
                              </p>
                              <img
                                src={test32}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : La mise en place d'une lentille
                                pansement va permettre la cicatrisation
                                cornéenne
                              </p>
                              <img
                                src={test33}
                                alt="Kystes d’inclusion épithéliaux chez un chien"
                                className="w-full max-w-3xl mx-auto rounded-lg my-6 mt-10"
                              />
                              <p className="text-center italic">
                                Figure : Résultat à un mois post opératoire{" "}
                                <a
                                  href="https://www.facebook.com/photo/?fbid=1035154091259157&set=pcb.1035153181259248"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  (lien)
                                </a>
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
