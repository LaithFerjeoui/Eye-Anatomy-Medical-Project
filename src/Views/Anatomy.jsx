import React from "react";
import anatomie1 from "../../public/Figures/anatomie1.jpg";
import anatomie2 from "../../public/Figures/anatomie2.jpg";
import anatomie3 from "../../public/Figures/anatomie3.jpg";
import anatomie4 from "../../public/Figures/anatomie4.jpg";
import anatomie5 from "../../public/Figures/anatomie5.jpg";
import anatomie6 from "../../public/Figures/anatomie6.jpg";
import anatomie7 from "../../public/Figures/anatomie7.jpg";
import anatomie8 from "../../public/Figures/anatomie8.jpg";
import anatomie9 from "../../public/Figures/anatomie9.jpg";
import anatomie11 from "../../public/Figures/anatomie11.jpg";
import anatomie10 from "../../public/Figures/anatomie10.jpg";
import anatomie12 from "../../public/Figures/anatomie12.jpg";
import anatomie13 from "../../public/Figures/anatomie13.jpg";
import anatomie14 from "../../public/Figures/anatomie14.jpg";
import anatomie15 from "../../public/Figures/anatomie15.jpg";
import anatomie16 from "../../public/Figures/anatomie16.jpg";
import anatomie17 from "../../public/Figures/anatomie17.jpg";
import anatomie18 from "../../public/Figures/anatomie18.jpg";
import anatomie19 from "../../public/Figures/anatomie19.jpg";
import anatomie20 from "../../public/Figures/anatomie20.jpg";
import anatomie21 from "../../public/Figures/anatomie21.jpg";
import anatomie22 from "../../public/Figures/anatomie22.jpg";
import anatomie23 from "../../public/Figures/anatomie23.jpg";
import anatomie24 from "../../public/Figures/anatomie24.jpg";
import vid from "../../public/vid1.mp4";
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
        <div className="w-full flex justify-center items-center mt-20">
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
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              1) La sclère :
            </p>
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

              <p className=" text-neutral-300 pt-4">
                En avant, la sclère fusionne avec la cornée périphérique et la
                conjonctive bulbaire pour former une zone de transition(le
                limbe). Le limbe est une zone de transition très importante et
                constitue l’entrée chirurgicale dans la chambre antérieure. À ce
                point, la sclérotique est pigmentée à des degrés divers, et
                l'épithélium sus-jacent est plus épais, avec des cellules
                pigmentaires. La couche de Bowman à l'extérieur et la membrane
                de Descemet se terminent à l’intérieur de cette zone.
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
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-4xl my-5"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex-col justify-center items-center gap-12 ">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className=" text-neutral-300 ">
                La face externe de la sclère est recouverte d'une lame
                épisclérale qui est composée d'un tissu conjonctif lâche et
                relativement bien vascularisée par les vaisseaux sanguins
                épiscléraux. La lame épisclérale est attachée aux gaines du
                bulbe par de minces fibres conjonctives qui traversent l'espace
                épiscléral. Ce contact spongieux entre la sclère et les tissus
                conjonctifs et adipeux intrapériorbitaux donne au bulbe oculaire
                sa mobilité et l'espace nécessaire à celle-ci. Sur cette face
                externe s‟insèrent les muscles extrinsèques de l‟œil (Dubielzig
                et al., 2010). La région péricornéenne de la sclère est
                recouverte par la conjonctive bulbaire. Le bord antérieur de la
                sclère sert d‟ancrage à la cornée et la zone de transition
                constitue le limbe cornéen, encore appelé limbe scléro-cornéen
                ou limbe cornéoscléral (Dulaurent, 2006). Le bord postérieur est
                en continuité avec la gaine méningée du nerf optique : il se
                moule autour de son émergence (Roger, 2011). L'épaisseur
                sclérale varie considérablement d'une espèce à l'autre et dans
                différentes régions du globe, mais il est le plus fin près de
                l'équateur, postérieur aux insertions des muscles
                extraoculaires, et chez le chien n'est que de 0,12 mm de largeur
                (Kirk, 2014). Elle est la plus faible au niveau de l'équateur
                bulbaire (de 0,1 mm chez le Chat jusqu'à 0,5 mm chez le Cheval),
                tandis qu'elle est de trois à quatre fois plus forte au pôle
                postérieur de l'œil (de 0,3 mm chez le Chat jusqu'à 2 mm ou plus
                chez le Cheval et le Bœuf). A son bord antérieur ou péricornéen,
                la sclère est notablement plus épaisse (jusqu'à 1,5 mm chez le
                Chat et le Chien), et sa face interne porte l'anneau scléral,
                sorte de bague de tissu conjonctif peu saillante qui sert
                d'ancrage au muscle ciliaire (Barone, 2010 ; Kirk, 2014). La
                sclère est peu vascularisée et elle l'est essentiellement par
                les vaisseaux sanguins épiscléraux.
              </p>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className=" w-full my-5"
              >
                <img src={anatomie3} className="rounded-md w-full " />
              </motion.div>
              <p className=" text-neutral-300 ">
                D'autre part, elle est perforée par le passage d'un grand nombre
                de vaisseaux et de nerfs (Dubielzig et al., 2010). Le sillon
                scléral est traversé par les artères et les veines ciliaires
                antérieures et il contient le plexus veineux de la sclère qui,
                sert au drainage de l'humeur aqueuse (Kirk, 2014). Ce plexus,
                souvent appelé « cercle de Hovius » par les cliniciens
                ophtalmologistes, est particulièrement bien développé chez les
                Carnivores (Barone, 2010). Des vaisseaux sanguins et des nerfs
                utilisent des canaux dans la sclère pour vasculariser et
                innerver au tractus uvéal. Le plexus veineux scléral qui fournit
                l'écoulement de l'humeur aqueuse est situé dans la face
                antérieure de la sclère, dans la sclère proprement dite. Sur la
                face postérieure de la sclère, il existe une zone fenêtrée
                spécialisée appelée lamina cribosa, qui permet aux axones des
                cellules ganglionnaires rétiniennes de sortir du globe et
                forment le nerf optique (Labelle, 2017).
              </p>
              <p className=" text-neutral-300 mt-5 ">
                La région équatoriale du bulbe est perforée par les quatre
                veines vorticineuses. Les artères ciliaires postérieures et les
                nerfs ciliaires entrent dans le bulbe près du pôle postérieur de
                l'œil. Enfin, près de ce pôle et en situation ventro-latérale se
                trouve l'area cribrosa - anciennement « aire criblée de la
                sclère » par laquelle les faisceaux du nerf optique accompagnés
                des vaisseaux sanguins ciliorétiniens sortent du bulbe de l'œil
                (Barone, 2010).
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-4xl my-5"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex-col justify-center items-center gap-12 ">
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              2) Cornée :
            </p>
            <p className=" text-neutral-300">
              La cornée (Cornea) constitue la partie antérieure, transparente et
              avasculaire de la tunique fibreuse du bulbe. Elle est plus convexe
              que la sclère et de forme presque ronde chez le chien, représente
              la partie la plus antérieure de la tunique fibreuse (Figure 23)
              (Dulaurent, 2006 ; Dyce et al., 2010).
            </p>
            <img src={anatomie4} className="rounded-md w-full my-5" />
            <p className=" text-neutral-300">
              La cornée se trouve exposée aux rayons lumineux et assure, de par
              sa transparence, le rôle de premier dioptre dans la formation de
              l’image lumineuse (Roger, 2011). Elle est également résistante,
              capable d‟affronter les traumatismes liés à son exposition. Son
              épaisseur est plus fine en partie centrale qu‟en périphérie
              (Martin, 2010). La cornée est enchâssée dans la sclère à la
              manière d'un verre de montre, au niveau d'une zone annulaire de
              transition nommée limbe de la cornée. Elle est plus convexe que la
              sclère et son centre, qualifié de vertex de la cornée, correspond
              au pôle antérieur du globe oculaire (Barone, 2010). Chez les
              petits animaux domestiques, comme le Chat et le Lapin, la cornée
              représente 25 à 30% de la surface totale du bulbe oculaire contre
              7 à 10% seulement chez l'Homme. Son épaisseur varie entre 0,5 et 1
              mm chez le Chat et entre 1,5 et 2 mm chez le Bœuf (Barone, 2010).
              L‟épaisseur de la cornée varie selon les espèces, les régions de
              la cornée et l'âge (Labelle, 2017).
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                La face antérieure de la cornée est convexe et humidifiée par le
                film lacrymal précornéen, tandis que la face postérieure est
                concave et baignée par l'humeur aqueuse contenue dans la chambre
                antérieure du bulbe. Vue de l'extérieur, la périphérie de la
                face antérieure est presque circulaire chez les Carnivores comme
                chez l'Homme, tandis que chez les Ongulés elle est ovalaire avec
                un pôle médial obtus et un pôle latéral rétréci (Barone, 2010).{" "}
                <br />
                La transparence de la cornée résulte de l'absence de
                kératinisation de son épithélium antérieur, de celle de pigments
                et de vaisseaux dans son épaisseur, de la disposition bien
                organisée des fibres dans sa substance propre, de la
                perméabilité sélective des épithéliums antérieur et postérieur,
                et du drainage continu de son liquide interstitiel à travers
                l'épithélium postérieur (Barone, 2010 ; Dubielzig et al., 2010)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie5} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl my-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <img src={anatomie6} className="rounded-md" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie7} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-4xl my-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex-col justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <p className=" text-neutral-300 text-center">
              La cornée comporte cinq strates parallèles (Dubielzig et al.,
              2010)
            </p>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[80%] mx-auto mt-8"
            >
              <img src={anatomie8} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                • <b>Epithélium antérieur</b> : A la face antérieure se trouve
                l'épithélium antérieur, qui est pavimenteux, stratifié, mais non
                kératinisé et qui représente environ 10% de l'épaisseur totale
                de la cornée. Il est couvert du film lacrymal précornéen et à sa
                périphérie, notamment au niveau de l'anneau conjonctival, il se
                prolonge dans l'épithélium de la conjonctive bulbaire (Kirk,
                2014). Le film lacrymal est une couche fonctionnelle
                cliniquement importante qui recouvre l'épithélium cornéen, mais
                il ne peut pas être évalué histologiquement (Labelle, 2017).
                L'épithélium cornéen est de 5 à 7 couches d'épaisseur chez le
                chien et chats et environ 8 à 15 couches d'épaisseur chez les
                plus gros animaux. L'épithélium cornéen est complètement
                renouvelé tous les 5 à 7 jours (Labelle, 2017)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie9} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                • <b> Lame limitante antérieure :</b> La lame limitante
                antérieure anciennement « Membrane de Bowman » est une couche
                acellulaire constituée de microfilaments de collagène intriqués
                en tous sens. En microscopie optique elle se présente comme une
                bande hyaline, bien individualisée chez les Ongulés mais très
                mince (1 à 2 micromètres) chez les Carnivores et le Lapin.
                Souvent considérée comme la membrane basale de la conjonctive,
                cette lame représente en réalité une modification des couches
                les plus superficielles de la substance propre de la cornée qui
                sont appliquées à la surface interne de la membrane basale
                (Barone, 2010 ; Kirk, 2014).
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie10} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-4xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg  gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className=" text-neutral-300">
                • <b> Substance propre de la cornée :</b> La substance propre de
                la cornée est la couche la plus épaisse, qui représente presque
                90% de son épaisseur totale. Elle est complètement dépourvue de
                vaisseaux sanguins, pauvre en cellules et composée de faisceaux
                de fibres de collagène entrelacés et immergés dans une substance
                fondamentale riche en mucopolysaccharides (Dubielzig et al.,
                2010). Les faisceaux de collagène sont organisés parallèlement à
                la surface cornéenne, surtout dans la région centrale de la
                cornée ; au limbe de la cornée ils se joignent à la substance
                propre de la sclère (Barone, 2010).
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                • <b>Lame limitante postérieure </b>La lame limitante
                postérieure anciennement « membrane de Descemet », représente la
                membrane basale très épaisse de l'épithélium postérieur de la
                cornée. Composée de nombreux microfilaments de collagène, elle
                est pourtant douée de propriétés élastiques. Elle se présente
                comme une bande hyaline en microscopie optique (Barone, 2010).
                Au fur et à mesure que la cornée vieillit, la membrane de
                Descemet continue de s'étendre en largeur, comme on le voit en
                comparant les deux chiens de la figure suivante
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie11} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-4xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg  gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className=" text-neutral-300">
                En revanche, la cornée contient d'abondantes fibres nerveuses
                sensitives provenant des nerfs ciliaires longs issus du nerf
                nasociliaire. Ces fibres forment un plexus péricornéen au niveau
                du limbe puis se dirigent vers le centre de la cornée et
                pénètrent dans l'épithélium antérieur. Elles constituent la voie
                afférente des réflexes cornéens et oculocardiaque, par lesquels
                les paupières se ferment et le rythme cardiaque ralentit après
                un attouchement de la cornée (Dyce et al., 2010).
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <span className="text-4xl font-bold  bg-gradient-to-r from-gray-400 to-[white] bg-clip-text text-transparent">
              II. TUNIQUE VASCULAIRE (UVEE) :
            </span>

            <p className="py-7 text-neutral-300">
              La tunique vasculaire du bulbe (Tunica vasculosa bulbi) est située
              entre la sclère et la rétine, et pour cette raison souvent
              qualifiée de tunique moyenne de l'œil. Une appellation
              alternative, souvent employée dans la nomenclature histologique
              ancienne et encore aujourd'hui dans la clinique, est celle de «
              tractus uvéal » ou « uvée ». Ce terme évoque la couleur noirâtre
              de la tunique vasculaire qui, dépouillée de la tunique fibreuse,
              semble appendue au nerf optique comme l'est une baie de raisin
              noir (latin : uva) à son pédoncule (Barone, 2010) Comme l'indique
              son nom, la tunique vasculaire est abondamment vascularisée ; elle
              contient aussi des nerfs sensitifs et de grandes quantités de
              mélanine. Elle comprend trois parties :<br /> <br />
              <b>a)</b> la choroïde, (uvée postérieure) qui représente la partie
              postérieure et qui est la plus étendue ;<br /> <b>b)</b> le corps
              ciliaire, (uvée antérieure), qui forme le segment intermédiaire,
              circulaire et plissé ; <br /> <b>c) </b>l'iris, qui est situé
              antérieurement, entre les deux chambres de l'œil et perforé en son
              centre par l'orifice pupillaire (Figure 30) (Barone, 2010).
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                La tunique vasculaire joue un rôle nourricier via la choroïde,
                permet l‟accommodation et la production de l‟humeur aqueuse via
                le corps ciliaire, et contrôle la quantité de lumière reçue par
                la rétine via l‟iris (Dulaurent, 2006 ; Dyce et al., 2010). Ces
                trois couches sont irriguées par de denses réseaux vasculaires
                et présentent des degrés de pigmentation variables (Dziezyc et
                Millichamp, 2004).
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie12} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              1) Choroïde :
            </p>
            <p className=" text-neutral-300 my-6">
              La choroïde (Choroidea) est située dans le segment postérieur du
              globe oculare, la choroïde est la partie la plus postérieure de la
              tunique vasculaire. Elle s‟étend de l’ora serrata jusqu‟au nerf
              optique (Walde et al., 1990). On l‟appelle aussi uvée postérieure
              (Jongh, 2009) car située entre la rétine et la sclère (Crispin,
              2002). La choroïde est la grande partie postérieure de la couche
              uvéale, et se compose principalement de vaisseaux sanguins
              (principalement des veines à paroi mince) et pigmentés tissus de
              soutien. C'est la principale source de nutrition pour les couches
              externes de la rétine, qui sont immédiatement adjacent (Kirk,
              2014). Via sa vascularisation très importante, elle a un rôle
              nourricier, favorisé par la présence de pores au niveau de ses
              capillaires (Roger, 2011). La choroïde joue aussi un rôle de
              chambre noire grâce à sa forte pigmentation (Dulaurent, 2006).
            </p>
            <p className=" text-neutral-300">
              La plus importante partie de la choroïde est formée par un réseau
              compact de vaisseaux sanguins qui sont organisés en deux couches
              (Figure 32). La couche externe est la lame vasculaire anciennement
              « membrane de Ruysch » qui contient de très nombreuses artères et
              des veines de moyen calibre assemblées par un tissu conjonctif
              riche en mélanocytes (Barone, 2010). La couche interne de la
              choroïde ou lame choroïdocapillaire est un réseau compact et
              monostratifié de capillaires dont la paroi est fenêtrée. Cette
              lame possède une grande importance fonctionnelle car elle assure
              la nutrition des assises rétiniennes externes (Barone, 2010).
            </p>
          </motion.div>
        </div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <div className="flex flex-wrap justify-around items-center my-5">
              <div className="w-full md:w-1/2 p-2">
                <img src={anatomie13} className="rounded-lg w-full" />
              </div>
              <div className="w-full md:w-1/2  p-2">
                <img src={anatomie14} className="rounded-lg w-full" />
              </div>
            </div>
            <img
              src={anatomie15}
              className="rounded-lg flex justify-center w-full"
            />
          </motion.div>
        </div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              2) Corps ciliaire
            </p>
            <p className=" text-neutral-300 my-6">
              Le corps ciliaire (Corpus ciliare) est situé dans le segment
              pré-équatorial du bulbe, où il forme un anneau circulaire autour
              de l'équateur du cristallin. Attaché à l'intérieur de la sclère,
              il s'étend de la base de l'iris, où il forme la limite
              périphérique de la chambre antérieure, jusqu'à l'ora serrata,
              ligne circulaire finement festonnée au niveau de laquelle il se
              prolonge par la choroïde (Barone, 2010). Le corps ciliaire se
              compose de stroma conjonctif avec des vaisseaux sanguins et des
              nerfs et le muscle ciliaire. Ce muscle permet l'accommodation et
              augmente le drainage de l'humeur aqueuse à travers le maillage
              trabéculaire (Labelle, 2017).
            </p>
            <p className=" text-neutral-300">
              La plus importante partie de la choroïde est formée par un réseau
              compact de vaisseaux sanguins qui sont organisés en deux couches
              (Figure 32). La couche externe est la lame vasculaire anciennement
              « membrane de Ruysch » qui contient de très nombreuses artères et
              des veines de moyen calibre assemblées par un tissu conjonctif
              riche en mélanocytes (Barone, 2010). La couche interne de la
              choroïde ou lame choroïdocapillaire est un réseau compact et
              monostratifié de capillaires dont la paroi est fenêtrée. Cette
              lame possède une grande importance fonctionnelle car elle assure
              la nutrition des assises rétiniennes externes (Barone, 2010).
            </p>
          </motion.div>
        </div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <div className="flex flex-wrap justify-around items-center my-5">
              <div className="w-full md:w-1/2 p-2">
                <img src={anatomie16} className="rounded-lg w-full" />
              </div>
              <div className="w-full md:w-1/2  p-2">
                <img src={anatomie17} className="rounded-lg w-full" />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                Topographiquement le corps ciliaire se divise donc en deux zones
                : - La zone antérieure, ou pars plicata, correspond à un anneau
                de procès ciliaires en forme de lame (corona ciliaris) (Crispin,
                2002 ; Samuelson, 2013). Dans leur ensemble, les 80 à 100 procès
                ciliaires forment une couronne ciliaire. En avant, les procès
                ciliaires se continuent sur la face postérieure de l'iris. Ils
                contiennent un réseau dense de capillaires qui contribuent à la
                formation de l'humeur aqueuse (Barone, 2010). - La zone
                postérieure, ou pars plana, plate, s‟étend depuis la terminaison
                postérieure des procès ciliaires jusqu‟à l‟extrémité
                périphérique de la rétine, ou ora ciliaris retinae Dans la
                partie périphérique, l'anneau ciliaire est finement froncé de
                minces plis ciliaires dont la disposition contraste tant avec
                celle de la partie centrale. Dans la zone postérieure
                s‟attachent aussi les ligaments de suspension du cristallin, ou
                zonules (Crispin, 2002 ; Samuelson, 2013). Dans la partie
                centrale les procès ciliaires qui sont des plis beaucoup plus
                larges, séparés par des vallées profondes et régulièrement
                arrangés de manière radiale (Barone, 2010)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie18} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="flex justify-center my-5"
        >
          <img src={anatomie19} className="rounded-xl " />
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                Le corps ciliaire est composé d'un tissu conjonctif riche en
                mélanocytes et en vaisseaux sanguins et dont la surface
                postérieure est attachée par une lame basale à l'assise
                épithéliale bilaminaire qui constitue la partie ciliaire de la
                rétine (Samuelson, 2013). Le corps ciliaire est formé, à
                l‟exception des procès ciliaires, essentiellement de fibres
                musculaires lisses, attachées à la sclère et appelées muscles
                ciliaires ou accommodateurs, innervés par les fibres
                parasympathiques des nerfs ciliaires courts (Kirk, 2014). Ce
                muscle lisse, notablement plus développé chez l'Homme, se
                compose chez les animaux domestiques de fibres méridiennes
                (Muscle de Brucke) qui s'insèrent sur l'anneau scléral, et d'un
                nombre plus faible de fibres circulaires (Muscle de
                Muller-Pouget) plus grêles. Le muscle ciliaire est nettement
                mieux développé chez les Carnivores que chez les Ongulés. Il
                joue un rôle important dans l'accommodation, selon différents
                mécanismes. Leurs contractions tirent les procès vers l‟avant et
                vers l‟intérieur et détendent les zonules lentillaires. Ceci
                permet de déformer le cristallin et de jouer ainsi sur
                l‟accommodation (Samuelson, 2013 ; Kirk, 2014). La disposition
                simple et circulaire de ces fibres chez le chien permet une
                accommodation médiocre (Roger, 2011)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie20} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                Egalement, l‟épithélium non pigmentaire des procès ciliaires,
                permet la synthèse de l‟humeur aqueuse dans la chambre
                postérieure (Dulaurent, 2006 ; Labelle, 2017) par sécrétion
                active, ultrafiltration et simple diffusion. Le corps ciliaire
                génère ainsi la pression intraoculaire (PIO) et la contrôle en
                assurant l‟écoulement de l‟humeur aqueuse vers la chambre
                antérieure par l‟intermédiaire de sa musculature (Gum et Mackay,
                2013). Le corps ciliaire est aussi le principal centre de
                désintoxication de l‟œil, grâce à sa richesse en systèmes
                anti-oxydant et en microsomes (Figure 42) (Gum et Mackay, 2013).
                Chez le Chien le périmètre du corps ciliaire est nettement
                circulaire, tandis que chez les autres animaux domestiques (Chat
                inclus), il est asymétrique car la partie ventrale de l'anneau
                ciliaire est étroite et son secteur nasal presque complètement
                absent. Dans ces régions, la rétine optique s'étend plus en
                avant et élargit ainsi le champ visuel caudo-latéral.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              1
              <img src={anatomie21} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                Sur les procès et plis ciliaires, mais aussi dans les vallées
                qui les séparent, naissent les fibres zonulaires qui forment le
                ligament suspenseur du cristallin ou zonule. Le calibre de ces
                fibres fines et transparentes varie de 2 à 40 pm. Elles se
                composent de microfibrilles de nature glycoprotéinique
                apparentée à celle de l'élastine. La rupture de ce haubanage
                entraîne le déplacement du cristallin soit dans les chambres
                postérieure ou antérieure de l'œil, soit dans la chambre vitrée
                de l'œil : c'est la luxation du cristallin.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie22} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("up", "tween", 0.2, 0.7)}
          className="mx-auto max-w-6xl mb-4"
        >
          <div className=" bg-gray-800/20 p-10 rounded-lg flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[60%]"
            >
              <p className=" text-neutral-300">
                La tunique vasculaire du bulbe (Tunica vasculosa bulbi) est
                située entre la sclère et la rétine, et pour cette raison
                souvent qualifiée de tunique moyenne de l'œil. Une appellation
                alternative, souvent employée dans la nomenclature histologique
                ancienne et encore aujourd'hui dans la clinique, est celle de «
                tractus uvéal » ou « uvée ». Ce terme évoque la couleur noirâtre
                de la tunique vasculaire qui, dépouillée de la tunique fibreuse,
                semble appendue au nerf optique comme l'est une baie de raisin
                noir (latin : uva) à son pédoncule (Barone, 2010). Comme
                l'indique son nom, la tunique vasculaire est abondamment
                vascularisée ; elle contient aussi des nerfs sensitifs et de
                grandes quantités de mélanine. Elle comprend trois parties : a)
                la choroïde, (uvée postérieure) qui représente la partie
                postérieure et qui est la plus étendue ; b) le corps ciliaire,
                (uvée antérieure), qui forme le segment intermédiaire,
                circulaire et plissé ; et c) l'iris, qui est situé
                antérieurement, entre les deux chambres de l'œil et perforé en
                son centre par l'orifice pupillaire (Figure 30) (Barone, 2010).
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-1/2 w-full"
            >
              <img src={anatomie23} className="rounded-md" />
            </motion.div>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              3) Iris
            </p>
            <p className=" text-neutral-300 my-6">
              L'iris est le segment antérieur de la tunique vasculaire du bulbe.
              Coloré, il se situe en avant du corps ciliaire, séparant les
              chambres postérieure (Camera posterior bulbi) et antérieure
              (Camera anterior bulbi) de l’œil (Samuelson, 2013). Il joue le
              rôle de diaphragme de l'œil. En forme de large et mince couronne,
              il est légèrement incurvé en avant et percé en son centre d'une
              ouverture : la pupille (Pupilla), par laquelle la lumière est
              admise vers le fond de l'œil (Barone, 2010 ; Negro et al., 2017).
              Par sa position, l'iris subdivise l'espace situé entre la cornée
              et le cristallin en chambre antérieure et chambre postérieure du
              bulbe. Ces deux chambres sont remplies de l'humeur aqueuse et
              elles sont en continuité à travers la pupille (Labelle, 2017).
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-1/2 w-full flex justify-center my-4"
        >
          <img src={anatomie24} className="rounded-md" />
        </motion.div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-neutral-300 my-6">
              La fonction de l'iris est de contrôler la quantité de lumière
              entrant dans le segment postérieur par une pupille centrale. La
              contraction de la pupille réduit la quantité de lumière pénétrant
              dans l'œil. Rétrécissement de la pupille élimine également la
              partie périphérique du réfractif système, et il diminue
              lenticulaire sphérique et aberrations chromatiques. Pendant les
              périodes de réduction légère, la pupille se dilate largement,
              permettant une stimulation maximale des cellules photoréceptrices,
              en particulier des bâtonnets (Labelle, 2017).
            </p>
            <p className=" text-neutral-300 my-6">
              La plupart de l'iris est constitué de stroma conjonctif avec des
              vaisseaux sanguins et des nerfs. Des nombres variables de
              mélanocytes sont dispersés dans le stroma, principalement dans le
              stroma postérieur. L’Iris bleu a sensiblement moins de mélanocytes
              que les iris bruns (Labelle, 2017). L'aspect postérieur de l'iris
              est constitué d'une couche de neuroépithélium appelé épithélium de
              l'iris postérieur, qui est continu avec son homologue dans le
              corps ciliaire (Labelle, 2017).
            </p>
            <p className=" text-neutral-300 my-6">
              A sa périphérie, le bord ciliaire de l'iris s'insère sur la base
              (antérieure) du corps ciliaire et est attaché d'autre part au
              limbe scléro-cornéen par le ligament pectiné. Le bord libre,
              central, de l'iris circonscrit la pupille ; c'est pourquoi il est
              nommé bord pupillaire.
            </p>
            <p className=" text-neutral-300 my-6">
              Cette organisation tissulaire de l’iris permet de distinguer une
              zone périphérique ciliaire et une zone pupillaire centrale, plus
              mince et au bord irrégulier, avec pour zone de jonction, la
              collerette (Samuelson, 2013). Circulaire chez le chien, il est
              composé d’une bordure antérieure, d’un stroma, et d’un épithélium
              postérieur (Martin, 2010).
            </p>
          </motion.div>
        </div>
        <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              ● Bordure antérieure
            </p>
            <p className=" text-neutral-300 my-6">
              La bordure antérieure est représentée par des couches successives
              de fibroblastes et de mélanocytes (Martin, 2010). Elle ne présente
              pas de surface épithéliale et, par conséquent, l’échange de
              fluides avec la chambre antérieure est facilité (Dubielzig et al.,
              2010). Elle est issue embryologiquement du mésoderme (Shibuya et.,
              2003).
            </p>
            </motion.div>
            </div>
            <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
              ● Stroma
            </p>
            <p className=" text-neutral-300 my-6">
              Le stroma correspond à un tissu conjonctif lâche de collagène,
              dépourvu de vaisseaux lymphatiques mais peuplé par des vaisseaux
              sanguins, des nerfs, des fibroblastes et des mélanocytes. Ces
              derniers ont tendance à être plus denses dans le stroma
              postérieur, qui correspond à la couche mésodermique profonde. Les
              capillaires sanguins, non-fenêtrés, présentent des cellules
              endothéliales reliées les unes aux autres par des jonctions
              serrées. Cet endothélium peu perméable participe à la « barrière
              hémato-aqueuse ».
            </p>
            <p className=" text-neutral-300 my-6">
              Le stroma est issu embryologiquement du mésoderme (Crispin, 2002).
              Au sein du stroma postérieur se trouvent des fibres musculaires
              lisses antagonistes, sous contrôle d’une double innervation
              autonome réciproque.
            </p>
            <p className=" text-neutral-300 my-6">
              Il y a deux groupes de muscles lisses dans l'iris, le muscle
              constricteur de l’iris et le muscle dilatateur de l’iris, qui
              contrôlent la taille de la pupille et donc la pénétration de la
              lumière. Le sphincter de la pupille, ou muscle constricteur, est
              en contact avec le bord libre de l’iris. Circulaire, il est
              capable d’écraser le diaphragme pupillaire et donc de provoquer la
              fermeture de la pupille (pupilla) ou myosis (Roger, 2011). Il est
              constitué par une bande plate de faisceaux circulaires minces
              (Samuelson, 2013).
            </p>
            <p className=" text-neutral-300 my-6">
            Majoritairement sous contrôle parasympathique, il est innervé par le nerf oculomoteur ou N. crânien III qui intervient dans le réflexe photomoteur. Il est aussi, dans une moindre mesure, sous contrôle de fibres adrénergiques inhibitrices qui permettent la relaxation (Martin, 2010). Le muscle sphincter chez le cheval est coiffée par la granula iridica, qui est une prolifération de la partie postérieure de l’épithélium.
            </p>
            <p className=" text-neutral-300 my-6">
            Le muscle dilatateur de l’iris, sous-jacent au muscle du sphincter, séparé de ce dernier par une mince couche de tissu conjonctif, est constitué par une série de cellules myoépithéliales (Samuelson, 2013). Ces dernières s’étendent depuis la marge pupillaire jusqu’à la base de l'iris, formant une couche unique de fibres musculaires, appelée par certains auteurs « épithélium pigmentaire antérieur » (Samuelson, 2013). 
            </p>
            <p className=" text-neutral-300 my-6">
            Elles sont contiguës en arrière avec l’épithélium pigmentaire postérieur du corps ciliaire. D’autre part, elles font partie des cellules les plus complexes de l’organisme : elles possèdent dans leur cytoplasme basal des myofilaments qui se chevauchent, et qui leur confèrent des propriétés contractiles, tandis que leur cytoplasme apical contient des granules de mélanine, qui se concentrent autour du noyau (Dubielzig et al., 2010). 
            </p>
            <p className=" text-neutral-300 my-6">
            La contraction des fibres musculaires du muscle dilatateur réduit la hauteur de l’iris provoquant l’ouverture de la pupille, ou mydriase (Roger, 2011). Cette activité est majoritairement sous contrôle orthosympathique, via le nerf nasal de la division ophtalmique du nerf crânien V, et minoritairement sous contrôle de fibres cholinergiques inhibitrices (Martin, 2010).
            </p>
            <p className=" text-neutral-300 my-6">
            L’activité sympathique des deux muscles, tout comme celle du corps ciliaire, est médiée par des β-récepteurs (β1 et β2) et des α-récepteurs (α1 et α2). (Gum et Mackay, 2013). Elle stimule ainsi la dilatation pupillaire en relaxant les muscles du sphincter et en contractant le muscle dilatateur (Martin, 2010).
            </p>
            <p className=" text-neutral-300 my-6">
            La taille de la pupille varie en fonction de l'équilibre entre les deux groupes de muscles, tout en sachant que le muscle constricteur est le plus fort des deux (Gum et Mackay, 2013).
            </p>
            </motion.div>
            </div>
            <div className="mx-auto max-w-4xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className=" bg-gray-800/20 p-10 rounded-lg"
          >
            <p className=" text-gray-200 font-semibold my-4 text-2xl">
            ●	Epithélium postérieur
            </p>
            <p className=" text-neutral-300 my-6">
            La taille de la pupille varie en fonction de l'équilibre entre les deux groupes de muscles, tout en sachant que le muscle constricteur est le plus fort des deux (Gum et Mackay, 2013).
            </p>
            <p className=" text-neutral-300 my-6">
            L’épithélium postérieur pigmentaire est en continuité avec l’épithélium antérieur non pigmentaire du corps ciliaire (Dubielzig et al., 2010). Il contient des plis qui se prolongent jusqu’à la base des procès ciliaires (Samuelson, 2013). Les surfaces latérales des cellules épithéliales pigmentées présentent de nombreux processus minces, maintenus ensemble par des desmosomes, créant un espace intercellulaire qui permet un passage moléculaire extra-cellulaire et donc un libre accès à la chambre postérieure (Samuelson, 2013).
            </p>
            <p className=" text-neutral-300 my-6">
            Bordant et séparant l’épithélium de la chambre postérieure, une membrane basale est présente (Samuelson, 2013).
            </p>
            <p className=" text-neutral-300 my-6">
            L’épithélium postérieur pigmentaire est issu embryologiquement du neuroectoderme, (Crispin, 2002). tout comme le muscle dilatateur, le muscle du sphincter, la neurorétine et l’épithélium pigmentaire et non pigmentaire du corps ciliaire (Dubielzig et al., 2010).
            </p>
            <p className=" text-neutral-300 my-6">
            Chez les chevaux et les ruminants, l'épithélium postérieur de l'iris forme une structure nodulaire et kystique appelés corpora nigra chez les chevaux et granula iridica chez les ruminants. Cette saillie de neuroépithélium contribue en outre au contrôle de la pénétration de la lumière.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Anatomy;
