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
                <ol>
                    <li>Anesthésie</li>
                    <li>Préparation du site : désinfection de la zone périoculaire</li>
                    <li>Mise en place d’un blépharostat</li>
                    <li>Réalisation d’une kératectomie lamellaire à l’aide d’un couteau à cornée en suivant les marges du dermoïde</li>
                    <li>
                        Dissection du plan profond à l’aide d’un couteau de crescent angled bevel up.
                        Les deux tiers de l’épaisseur du stroma cornéen sont excisés afin d’enlever complètement le dermoïde.
                    </li>
                </ol>
            ),
        }
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