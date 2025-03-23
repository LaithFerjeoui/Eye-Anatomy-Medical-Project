import React, { useState } from 'react'
import AnomalyModal from './AnomalyModal';
import { motion } from 'framer-motion'
const MaladiesCourantes = () => {
    const [openSection, setOpenSection] = useState(false)

    const anomalies = [
        {
            id: 1,
            title: "Dermoïde cornéen - Dermoïde à kyste",
            definition: (
                <ul>
                    <li>Un morceau de peau qui provient de la cornée sclérotique ou conjonctivale.</li>
                    <li>Localisé partiellement ou complètement sur la cornée.</li>
                    <li>
                        Peut-être unilatéral ou bilatéral avec d'autres malformations oculaires
                        (<span>Yeruham et al., 2002 ; Saraiva et Delgado, 2020</span>).
                    </li>
                </ul>
            ),
            image: "/Figures/app1.jpg",
            caption: "Dermoïde oculaire dans l'œil gauche d'un chiot",
            signs: (
                <ul>
                    <li>Présence d’une masse pigmentée généralement en regard du canthus externe de l’œil.</li>
                    <li>Présence des poils en surface de cette formation.</li>
                </ul>
            ),
            additionalImage: "/Figures/app2.jpg",
            additionalCaption: "Dermoïde oculaire dans l'œil gauche d'un chien",
            treatmentTitle: "Kératectomie superficielle",
            steps: (
                <>
                    <ul>
                        <li>L’opération de kératectomie superficielle est le type de traitement le plus radical.</li>
                        <li>Si la profondeur de la lésion est supérieure à la moitié de l’épaisseur totale de la cornée, après kératectomie, la zone doit être fermée avec un rabat conjonctival pour éviter la perforation cornéenne (Saraiva et Delgado, 2020).</li>
                    </ul>

                    <p>Après l'opération :</p>
                    <ol>
                        <li>Utilisation des antibiotiques topiques.</li>
                        <li>Vérification de la régénération de la cornée à intervalles réguliers avec le test à fluorescéine.</li>
                    </ol>

                    <p>Une rechute peut survenir dans certains cas (Gelatt, 2008 ; Chaudieu et Denisc, 2016).</p>
                </>
            ),
            treatmentImage: "/Figures/treatment1.png",
            treatmentImageCaption: "Figure : les procédures de la kératectomie superficielle",
            treatmentVideo: "https://www.youtube.com/watch?v=nmrl8EqFdVA"
        },
        {
            id: 2,
            title: "Pigmentation mélanique",
            definition: (
                <ul>
                    <li>Le pigment de la mélanine se trouve en diverses proportions dans les tissus oculaires.</li>
                    <li>
                        La mélanine protège contre diverses maladies oculaires qui peuvent causer cécité,
                        y compris le mélanome uvéal et la dégénérescence maculaire liée à l'âge
                        (<span>Sarna et Swartz 1998 ; Hu, 2005 ; Sanchez et al., 2020</span>).
                    </li>
                </ul>
            ),
            image: "/Figures/melanine.png",
            caption: "Cas de kératite pigmentaire causée par des plis du nez frottant contre la cornée.",
            signs: (
                <ul>
                    <li>Dépôt de mélanine dans le stroma antérieur et l’épithélium cornéen à la suite d’une inflammation chronique.</li>
                    <li>
                        Les néovaisseaux cornéens transportent les pigments qui se déposent le long de leur trajet.
                    </li>
                </ul>
            ),
            additionalImage: "/Figures/melanine2.png",
            additionalCaption: "Pigmentation mélanique chez un chien",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <li>Anti-inflammatoires par voie locale en particulier les corticoïdes (en l’absence d’ulcère cornéen) jusqu’à disparition de la néovascularisation cornéenne.</li>
                    <li>
                        La chirurgie d’exérèse des plages cornéennes pigmentées est réalisable avec des résultats décevants à moyen et long terme.
                    </li>
                    <li>
                        Il est fréquent qu’une néovascularisation se développe après une kératectomie superficielle et que les pigments se redéposent rapidement.
                    </li>
                    <li>
                        La cryothérapie ciblée peut être efficace lorsque l’affection causale est traitée en parallèle-	Il est fréquent qu’une néovascularisation se développe après une kératectomie superficielle et que les pigments se redéposent rapidement    .
                    </li>
                </ul>
            ),
            treatmentImage: "/Figures/melanine3.png",
            treatmentImageCaption: "Figure : Exemples de pigmentation mélanique chez deux chiens (Sanchez et al., 2020)",
            treatmentVideo: "https://www.youtube.com/watch?v=C_NnjINv0YM"
        },
        {
            id: 3,
            title: "Membranes pupillaires permanentes et opacités cornéennes",
            definition: (
                <ul>
                    <li>
                        Un changement congénital caractérisé par des restes de membrane fœtale qui persistent comme tissu filamenteux dans toute la pupille
                        (<span>Khalkhal, 2011 ; Seong et al., 2018</span>).
                    </li>
                </ul>
            ),
            image: "/Figures/3rd1.png",
            caption: "Persistance de la membrane pupillaire chez un chien",
            signs: (
                <ul>
                    <li>•	Formation des foyers d’opacités cornéennes diffuses. Les opacités focales sont formées par l'épaississement et la déformation de la membrane de descement.</li>
                    <li>
                        •	Dans les opacités diffuses, il se produit à la suite de l'atteinte de la membrane de décroissance dans une zone beaucoup plus grande et du développement d'un œdème dans la zone (Gelatt, 2008 ; Seong et al., 2018).
                    </li>
                    <li>
                        <li>
                            •	Dans les opacités diffuses, il se produit à la suite de l'atteinte de la membrane de décroissance dans une zone beaucoup plus grande et du développement d'un œdème dans la zone (Gelatt, 2008 ; Seong et al., 2018).
                        </li>
                    </li>
                </ul>
            ),
            additionalImage: "/Figures/3rd2.png",
            additionalCaption: "Membranes pupillaires permanentes chez un chien",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <li>L’atropine topique pour dilater la pupille peut aider à décomposer les PPM.</li>
                    <li>La chirurgie et l’intervention au laser peuvent être nécessaires pour les grandes membranes opaques.</li>
                    <li>Il est conseillé de ne pas reproduire des sujets atteints de formes graves.</li>
                </ul>
            ),
            treatmentImage: "/Figures/3rd3.png",
            treatmentImageCaption: "Figure : Persistance de la membrane pupillaire chez un chien https://clinique-veterinaire-de-la-riviere.com/la-persistance-de-la-membrane-pupillaire/ ",
        },
        {
            id: 4,
            title: "Ulcères cornéens",
            definition: (
                <ul>
                    <li>Toute kératopathie dans laquelle il y a une perte d'épithélium.</li>
                    <li>Observations : Notez l'indentation visible et le changement de contour de la surface oculaire.</li>
                </ul>
            ),
            image: "/Figures/4th1.png",
            caption: "Figure : Ulcère cornéen profond chez un carlin (vue latérale) (Jaksz et Buss,2017) ",
            signs: (
                <ul>
                    <li>Une rougeur </li>
                    <li>Une douleur, associée à une sensation de corps étranger dans l'œil.</li>
                    <li>Une photophobie</li>
                    <li>Un larmoiement</li>
                    <li>Blépharospasme</li>
                    <li>Oedème cornéen </li>
                    <li>Myosis (Jaksz et Buss, 2017 ; Farghali et al., 2021). </li>
                </ul>
            ),
            additionalImage: "/Figures/4th2.png",
            additionalCaption: "Ulcère cornéen superficiel (A : Oeil souffrant d'ulcère cornéen, B : après application d'un colorant fluorescent montrant le type et la profondeur des ulcères cornéens) (Farghali et al., 2021)",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <li>1) Traitement des ulcères cornéens non compliqués (simples) :
                        - Antibiothérapie à large spectre.
                        - Un examen de contrôle doit toujours être programmé dans les 7 jours.
                    </li>
                    <li>2) Traitement des ulcères cornéens profonds (stromal) ou Descemétocèle :
                        <br /> - Un grattage est prélevé et évalué cytologiquement, et un échantillon soumis pour la culture et la sensibilité bactérienne et fongique aérobies essai.
                        <br />-	La cause déclenchante doit être recherchée et éliminée.
                        <br /> -	Association d’antibiotique topique à large spectre et un traitement mydriatique avec un collier élisabéthain devrait être fourni (Pandey et al., 2018 ; Prado et al., 2021).
                        <br />-	Les ulcères du stroma doivent être traités localement médicamenté avec des antibiotiques aussi souvent que toutes les heures pour les 1 à 2 jours (Maggs et al., 2018).
                        <br /> -	Si l'ulcère est plus profond que la moitié de l'épaisseur de la cornée : traitement chirurgical
                        <br /> -	Une fois l'ulcère cornéen guéri, l'apport sanguin au greffon -conjonctival peut être coupé.
                        <br /> -	Après anesthésique topique, des ciseaux peuvent être placés sous la partie pédiculaire du greffon, qui n'adhère pas à l’épithélium cornéen normal sous-jacente (Kirk, 2014 ; Prado et al., 2021).
                    </li>
                </ul>
            ),
            treatmentImage: "/Figures/4th.png",
            treatmentImage2: "/Figures/4th3.png",
            treatmentImageCaption2: (<> <span>Figure :</span>

                <li>(A) Ulcère cornéen perforant chez un chien</li>
                <li>(B) Un greffon de conjonctive est préparé</li>
                <li>(C) Le greffon de conjonctive est suturé sur l’ulcère</li>
                <li>(D) Le même œil 3 semaines après la chirurgie</li>
                <li>(E) Le même œil 8 semaines après la chirurgie</li>
                <li>(F) Le même œil 12 semaines après la chirurgie et section du pédicule conjonctive : une petite cicatrice centrale persiste</li>
            </>),
            treatmentImage3: "/Figures/4th5.png",
            treatmentImageCaption3: "Figure : Section pédiculaire après greffe conjonctivale (Kirk, 2014) ",
        },
        {
            id: 5,
            title: "Kératite superficielle chronique (Pannus) ",
            definition: "Une maladie progressive, bilatérale, inflammatoire et potentiellement aveuglante : maladie de la cornée canine. Connue sous le nom de « pannus dégénératif ». ",
            image: "/Figures/5th1.png",
            caption: "Figure : Kératite superficielle chronique https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/keratite-superficielle-chronique/",
            signs: (
                <ul>
                    <li>Une lésion rouge, vascularisée, conjonctivale au niveau inférieur du limbe temporal.</li>
                    <li>Au début de la maladie : la vascularisation et la pigmentation se produit au niveau de la cornée temporale et progresse de manière centralisée. (Dubielzig et al., 2010 ; Castillo, 2019).</li>
                    <li>Propagation vers la cornée centrale sous la forme d'un corps charnu, bien vascularisé</li>
                    <li>Une ligne cristalline blanche ou petites taches blanches dans le stroma cornéen clair, 1-2 mm devant le bord d'attaque de la lésion. </li>
                    <li>Finalement : toute la cornée peut devenir vascularisée, pigmentée et opaque.</li>

                </ul>
            ),
            additionalImage: "/Figures/5th2.png",
            additionalCaption: "Figure : Kératite superficielle chronique chez une chienne croisée berger de 4 ans. Observation : Les lésions se situent dans la partie temporale de la cornée. On observe une vascularisation cornéenne superficielle, une pigmentation et une infiltration cellulaire de la cornée bordée d'un oedème cornéen ainsi qu'une infiltration de la membrane nictitante se traduisant par une décoloration de son bord libre, un épaississement et une irrégularité de sa surface https://www.depecheveterinaire.com/keratite-superficielle-chronique-du-chien-le-diagnostic_67984E823465A263.html",
            treatmentTitle: "Traitement",
            steps: (< span >•	 Des onguents ou de solutions corticostéroïdes topiques trois à quatre fois par jour pendant 3 à 4 semaines, suivi d’un programme d'entretien réduit.<br /> •	Une injection sous-conjonctivale de corticoïdes dans un traitement topique pour contrôler la maladie <br />•	 Rayonnement β (strontium-90β plésiothérapie) sont utilisé en concomitance avec thérapie. <br />•	 La kératectomie superficielle pour cas graves dans lesquels la cécité est due à la pigmentation de la cornée centrale</span>),
            treatmentImage: "/Figures/5th3.png",
            treatmentImageCaption2: (<> Figure : A : Kératite superficielle chronique chez un chien
                B : même œil après 4 semaines de traitement
            </>),
        },
        {
            id: 6,
            title: "Dégénérescence cornéenne ",
            definition: "Une accumulation de lipides, de cholestérol, ou de calcium, qui sont précédés d'une kératite, d’une vascularisation et éventuellement de la mélanose (Brooks et al., 1990 ; Kirk, 2014).",
            image: "/Figures/6th1.png",
            caption: "Figure : Dégénérescence cornéenne diffuse avec une plaque blanche dense et une vascularisation (Maggs et al., 2018)",
            signs: (
                <ul>
                    <li>Les lésions blanc dense / blanc grisâtre. </li>
                    <li>Se trouve dans n'importe quelle zone de la cornée, généralement axiaux ou paraxiaux (Sansom et Blunden, 2010).</li>
                </ul>
            ),
            additionalImage: "/Figures/6th2.png",
            additionalCaption: "Figure : la dégénérescence cornéenne chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/degenerescence-corneenne/",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />-	Pas de traitement médical
                    <br /> -	La corticothérapie doit être évitée dans la dégénérescence cornéenne, car elle diminuera la vascularisation, la fonction des macrophages, et par la suite la résolution de la lésion.
                    <br /> -	La kératectomie : si la lésion est évolutive et la vision compromise. Complétée par’une greffe de biomatériau en fonction de la profondeur d’atteinte. (Sansom et Blunden, 2010 ; Berryhill et al., 2016).

                </ul>
            ),
            treatmentImage: "/Figures/6th3.png",

            treatmentImageCaption: "Figure : Dégénérescence cornéenne chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/degenerescence-corneenne/",
        },
        {
            id: 7,
            title: "Dystrophie endothéliale cornéenne ",
            definition: "Une dégénérescence bilatérale progressive des cellules endothéliales cornéennes qui se traduit par un œdème, et une cornée avasculaire.",
            image: "/Figures/7th1.png",
            caption: "Figure : Dystrophie endothéliale cornéenne chez un chien",
            signs: (
                <ul>
                    <li>Un aspect blanc bleuté de l'opacité cornéenne </li>
                    <li>Un manque de vascularisation de la cornée ou hyperémie conjonctivale. </li>
                </ul>
            ),
            additionalImage: "/Figures/7th2.png",
            additionalCaption: "Figure : Œdème cornéen diffus chez un Boston Terrier avec dystrophie endothéliale cornéenne avancée (Kirk, 2014)",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />- La thérapie palliative est le plus souvent utilisée pour la dystrophie endothéliale.
                    <br />- Les hyperosmotiques peuvent diminuer l'étendue de la formation de bulles, mais un éclaircissement cornéen important ne peut se produire.
                    <br /> - La thermokératoplastie (cautérisation thermique avec utilisation de points multifocaux de cautérisation thermique superficielle appliqué de manière circulaire sur la cornée exposée (Casola et al., 2020).
                </ul>
            ),
            treatmentImage: "/Figures/7th3.png",
            treatmentImageCaption: "Figure : Thermokératoplastie lors de dystrophie endothéliale cornéenne (Kirk, 2014) ",
        },
        {
            id: 8,
            title: "Lacérations cornéennes ",
            definition: "Souvent secondaires à des blessures causées par les griffes du chat",
            image: "/Figures/8th1.png",
            caption: "Figure : Lacération du bord libre de la troisième paupière chez un chien suite à une griffure de chat. La pupille a été pharmacologiquement dilatée pour rechercher une éventuelle lésion intraoculaire © Elizabeth Giuliano",
            signs: (
                <ul>
                    <li>Lésion douloureuse</li>
                    <li>Un blépharospasme  </li>
                    <li>Un épiphora séreux à muco-purulent en fonction de l’ancienneté de l’affection  </li>
                    <li>Une hyperhémie conjonctivale parfois importante.  </li>
                </ul>
            ),
            additionalImage: "/Figures/8th2.png",
            additionalCaption: "Figure : Lacération cornéenne (A) avec rupture de la capsule antérieure du cristallin (B) (Maggs et al., 2018)",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />-	Traitement des ulcères : pour les lacérations qui ne pénètrent que les couches cornéennes superficielles (bon pronostic) (Maggs et al., 2018).
                    <br />-	Les plaies perforantes avec rupture du globe ont un pronostic plus sombre (des lésions intraoculaires) : guérison par vascularisation.
                    <br /> - Un traitement médical seul : Les ulcères cornéens superficiels ou peu profonds .
                    <br /> - La chirurgie : les lésions cornéennes profondes, perforantes ou de grande taille. On réalisera selon le cas des sutures cornéennes, un lambeau conjonctival, une greffe de biomatériau…
                </ul>
            ),
            treatmentImage: "/Figures/8th3.png",
            treatmentImageCaption: "Figure : Lacération cornéenne ",
            treatmentVideo: "https://www.youtube.com/watch?v=yAYaHEP15Ds&rco=1"
        },
        {
            id: 9,
            title: "Corps étrangers cornéens  ",
            definition: (<span>2 types différents :
                <br /> 1.	Ceux qui adhèrent à la surface cornéenne par tension superficielle
                <br />2.	Ceux qui pénètrent dans la cornée et parfois dans le globe lui-même (Sandmeyer et al., 2016).</span>),
            image: "/Figures/9th1.png",
            caption: "Figure : œil gauche d'un braque avec un corps étranger sur la surface de la cornée (Sandmeyer et al., 2016)",
            signs: (
                <ul>
                    <li>Douleur intense, </li>
                    <li>Myosis, hypopion, hyphéma  </li>
                    <li>Un bouchon de fibrine et une hypotonie oculaire (si l’humeur aqueuse a fuité par la brèche)   </li>

                </ul>
            ),
            additionalImage: "/Figures/9th2.png",
            additionalCaption: "Figure : Corps étranger implanté dans la cornée d’un chien et faisant protrusion dans la chambre antérieure",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />-	Suppression de ces corps étrangers pour limiter la douleur, réduire le risque d'infection et prévenir la vascularisation et la formation de cicatrices.
                    <br />-	Les petits corps étrangers collés sont les meilleurs retirés avec un fin jet de rinçage oculaire ou de solution saline dirigé avec force à la surface cornéenne après l'application d'un topique anesthésique.
                    <br /> -	Une intervention chirurgicale pour les corps étrangers les plus problématiques : retrait au moyen d'une incision pratiquée dans la cornée au-dessus du grand axe du corps étranger au microscope opératoire (Lew et al., 2015).
                    <br /> - Après élimination de corps étranger : un examen à large spectre,
                    <br />-	Un antibiotique topique et de l'atropine pour limiter l'infection et les effets de l'uvéite secondaire
                    <br />- Si une perforation de globe s'est produite : un antibiotique administré par voie systémique.
                </ul>
            ),
            treatmentImage: "/Figures/9th3.png",
            treatmentImageCaption: "Figure : Corps étranger (épine) dans la partie médiane de la cornée (Lew et al., 2015) ",
            treatmentVideo: "https://www.youtube.com/watch?v=sO83JAJsziI"
        },
        {
            id: 10,
            title: "Brulures cornéennes ",
            definition: "-	Des urgences absolues en raison des séquelles graves qu’elles peuvent entraîner. De nature chimique ou thermique.  Abbaszadeh et al., 2010).",
            image: "/Figures/10th1.png",
            caption: "Figure : Brulure par produit chimique (A : Colle sur la surface de la cornée) et évolution de la brulure (B) (Abbaszadeh et al., 2010)",
            signs: (
                <ul>
                    <li>Destruction de l'épithélium superficiel de la cornée et de la conjonctive. </li>
                    <li>Nécrose des tissus profond (Pour des concentrations élevées de produits chimiques) (Hannouche et Hoangxuan, 2000 ; Abbaszadeh et al., 2010).  </li>
                    <li>Un blépharospasme </li>
                    <li>une photophobie</li>
                    <li>un larmoiement, une rougeur, une douleur oculaire  </li>
                    <li>une baisse de l’acuité visuelle (Hannouche et Hoangxuan, 2000).</li>
                </ul>
            ),
            additionalImage: "/Figures/10th2.png",
            additionalCaption: "Figure : Brulure par un produit chimique avec un agent de dégivrage chez un chien de race croisé agé de 3 ans.(E3S Web of Conferences 510, 01035 (2024)",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />-	Rincer abondamment la cornée à l’aide de sérum physiologique.
                    <br />-	Il ne faut surtout pas laver avec une solution de pH opposé qui ne ferait qu’aggraver les lésions.
                    <br /> -	Utiliser un antibiotique à large spectre localement pour prévenir les infections cornéennes.
                    <br /> - 	Appliquer un substitut de larmes sur la cornée toutes les deux heures pour éviter la sécheresse oculaire.
                </ul>
            ),
            treatmentImage: "/Figures/10th3.png",
            treatmentImageCaption: "Figure : Chien beagle, 1 an, brulure chimique avec cyanoacrylate, Observation : défaillance des cellules limbales et par conséquent un descmetocelle.(E3S Web of Conferences 510, 01035 (2024)",
            treatmentVideo: "https://www.youtube.com/watch?v=sO83JAJsziI"
        },
        {
            id: 11,
            title: "Épisclérite granulomateuse nodulaire (NGE)",
            definition: "Une maladie oculaire à médiation immunitaire (inflammatoire) qui touche la sclère, la cornée et la membrane nictitante.",
            image: "/Figures/11th1.png",
            caption: "Figure : Examen rapproché des deux yeux. 2a. Examen comparé de l’œil droit : Noter la déformation sclérale à 9 h et12 h, le chémosis marqué,l’infiltrat cellulaire du stroma cornéen, les néo-vaisseaux périlimbiques et l’œdème associé 2b. Œil gauche après dilatation.",
            signs: (
                <ul>
                    <li>Plusieurs masses charnues élevées</li>
                    <li>Une seule masse survenant au limbe et infiltrant le stroma cornéen adjacent.</li>

                </ul>
            ),
            additionalImage: "/Figures/11th2.png",
            additionalCaption: (<span>Figure : Vues de face (A) et latérales (B) d'un chien atteint d'épisclérokératite granulomateuse nodulaire focale (Hamzianpour et al., 2019) <br /> <b>✔Observations :</b> Noter le gonflement sous-conjonctival, l'injection conjonctivale et l'œdème cornéen périphérique adjacent à la lésion.</span>),
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    <br />-	Généralement, la NGE a tendance à être bénigne, avec une bonne réponse à l'administration topique de corticostéroïdes.
                    <br />-	L’excision chirurgicale locale par kératectomie lamellaire
                    <br />-	Par irradiation et la cryothérapie
                    <br /> - 	Appliquer un substitut de larmes sur la cornée toutes les deux heures pour éviter la sécheresse oculaire.
                </ul>
            ),
            treatmentImage: "/Figures/11th3.png",
            treatmentImageCaption: "Figure : (A) Aspect initial avec une NGE (B) même œil après 3 semaines de traitement anti-inflammatoire",
            treatmentImage2: "/Figures/11th4.png",
            treatmentImageCaption2: (<> <span>Figure :</span>

                <li>12. Kératectomie lamellaire et sclérotomie.</li>
                <li>13. Dissection du plan profond à l’aide du couteau de Crescent.</li>
                <li>14. Aspect de la zone après kératectomie.</li>
                <li>15. Aspect de l’œil droit après fixation du lambeau conjonctival pédiculé.
                    photos : B. Michaud </li>
                https://ophtalmoveterinaire.com/maladies_oculaires/episclerite-nodulaire-granulomateuse/
            </>),
            treatmentImage3: "/Figures/11th5.png",
            treatmentImageCaption3: (<> <span>Figure :</span>

                <li>17. Œil droit 3 jours après l’intervention.</li>
                <li>18. Œil droit 10 jours après l’intervention</li>
                <li>14. Aspect de la zone après kératectomie.</li>
                <li>19. Œil droit 3 semaines après l’intervention</li>
                https://ophtalmoveterinaire.com/maladies_oculaires/episclerite-nodulaire-granulomateuse/
            </>),
        },
        {
            id: 12,
            title: "Sclérite ",
            definition: "Une maladie inflammatoire de la sclérotique divisée en : Sclérite granulomateuse non nécrosante / Sclérite granulomateuse nécrosante.",
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
            additionalCaption: "Figure : Sclérite sévère, œdème cornéen périphérique et foyer de dégénérescence cornéenne (Maggs et al., 2018)",
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                   Les corticostéroïdes intra lésionnels favorisent généralement la régression des lésions.
                </ul>
            ),
            treatmentImage: "/Figures/12th2.png",
            treatmentImageCaption: "Figure : (A1-A2) Episclérite diffuse chez un jeune labrador (B1-B2) même œil après une semaine de corticothérapie https://visionanimale.fr/episclerite-chez-un-jeune-labrador/",
        },
        {
            id: 13,
            title: "Kystes d'inclusion épithéliale cornéenne   ",
            definition: (<span>La formation de kystes dans la cornée peut impliquer les quatre couches. 
                Les kystes sont généralement unilatéraux et solitaires. 
                </span>),
            image: "/Figures/13th1.png",
            caption: "Figure : Kystes d’inclusion épithéliaux chez un chien https://visionanimale.fr/loeil-animal-principales-affections/principales-affections-oculaires/sclere-et-cornee/kystes-dinclusion-epitheliaux/",
            signs: (
                <ul>
                    <li>masses cornéennes surélevées, blanches à roses.</li>
                    <li>typiquement chronique et non douloureuse, mais peut altérer la vision.  </li>
      
                </ul>
            ),
            additionalImage: "/Figures/13th2.png",
            additionalCaption: (<span>Figure : UN KYSTE CORNÉEN CHEZ UN BERGER DE BEAUCE (Service d'ophtalmologie du Centre Hospitalier Vétérinaire Cordeliers Meaux) <br /> <b>✔Observations :</b> une lésion kystique sous-épithéliale à la paroi fine et transparente, au contenu beige pâteux. Des débris épithéliaux sont présents dans la lumière du kyste formant cet aspect de pseudo-hypopion.</span>),
            treatmentTitle: "Traitement",
            steps: (
                <ul>
                    Une complète kératectomie superficielle, avec ou sans greffe conjonctivale ou autre
                </ul>
            ),
            treatmentImage: "/Figures/13th3.png",
            treatmentImageCaption: "Figure : (A1-A2) Kératectomie sous microscope à l'aide d'un couteau cleave (B) La mise en place d'une lentille pansement va permettre la cicatrisation cornéenne https://www.facebook.com/photo/?fbid=1035154091259157&set=pcb.1035153181259248 ",

        },
    ];

    const [selectedAnomaly, setSelectedAnomaly] = useState(null);

    const openModal = (anomaly) => {
        setSelectedAnomaly(anomaly);
    };
    return (
        <div className='mb-6'>
            <div className='flex justify-center items-center gap-4'>
                <span className='text-gray-200 font-semibold'>Consultez les Maladies Courantes?</span>
                <button onClick={() => setOpenSection(!openSection)} className='bg-gray-400/30 px-4 py-1 rounded-lg font-sans border border-gray-400 text-gray-300 hover:bg-gray-400 duration-200 hover:text-gray-700'>Cliquez ici!</button>
            </div>
            {openSection ? (<div className="max-w-5xl mx-auto px-8 mt-10 mb-16">
                <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-800">
                    Anomalies Courantes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {anomalies.map((anomaly) => (
                        <motion.div
                            key={anomaly.id}
                            className="p-4 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openModal(anomaly)}
                        >
                            <h3 className="text-xl font-semibold text-gray-200">{anomaly.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>) : null}


            <AnomalyModal
                isOpen={selectedAnomaly !== null}
                onClose={() => setSelectedAnomaly(null)}
                anomaly={selectedAnomaly}
            />
        </div>
    )
}

export default MaladiesCourantes