import React from 'react';
import { motion } from 'framer-motion';
import app1 from "../../public/Figures/app1.jpg";

const PathologySection = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/20 p-6 rounded-lg mb-4"
    >
      <h3 className="text-xl font-semibold text-gray-200 mb-3">{title}</h3>
      <div className="text-neutral-300 space-y-2">
        {content}
      </div>
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
                      Un morceau de peau qui provient de la cornée sclérotique ou conjonctivale
                    </li>
                    <li>
                      Localisé partiellement ou complètement sur la cornée
                    </li>
                    <li>
                      Peut-être unilatéral ou bilatéral avec d'autres malformations oculaires 
                      (Yeruham et al., 2002 ; Saraiva et Delgado, 2020)
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
                  alt="Dermoïde cornéen" 
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
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Applications;