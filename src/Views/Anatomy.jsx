import React from "react";
import anatomie1 from "../../public/Figures/anatomie1.jpg";
import anatomie2 from "../../public/Figures/anatomie2.jpg";
import anatomie3 from "../../public/Figures/anatomie3.jpg";
import anatomie4 from "../../public/Figures/anatomie4.jpg";
import anatomie5 from "../../public/Figures/anatomie5.jpg";
import anatomie6 from "../../public/Figures/anatomie6.jpg";
import anatomie7 from "../../public/Figures/anatomie7.jpg";
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
      </div>
    </>
  );
};

export default Anatomy;
