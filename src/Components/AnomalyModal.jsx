import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const AnomalyModal = ({ isOpen, onClose, anomaly }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-7xl w-full overflow-auto max-h-[90%]"
            >
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl" />

                <div className="relative">
                  <Dialog.Title className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-800">
                    {anomaly?.title}
                  </Dialog.Title>



                  {/* Definition */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-50 mt-4 leading-relaxed"
                  >
                    {anomaly?.definition}
                  </motion.div>
                  {/* Main Image */}
                  {anomaly?.image && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      src={anomaly.image}
                      alt={anomaly.title}
                      className="h-96 mx-auto object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anomaly?.caption && (
                    <p className="text-gray-100 text-sm italic text-center">{anomaly.caption}</p>
                  )}
                   {anomaly?.defLink && (
                    <a href={anomaly?.defLink} className="text-gray-50 text-sm italic text-center flex justify-center mt-8 underline">(Cliquer ici pour voir le Lien)</a>
                  )}
                  {/* Signs */}
                  {anomaly?.signs && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4"
                    >
                      <h3 className="text-xl font-semibold text-orange-400">Signes cliniques :</h3>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-50 mt-4 leading-relaxed"
                      >
                        {anomaly.signs}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Additional Image */}
                  {anomaly?.additionalImage && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anomaly.additionalImage}
                      alt="Additional view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anomaly?.additionalCaption && (
                    <p className="text-gray-100 text-sm italic text-center">{anomaly.additionalCaption}</p>
                  )}

                  {/* Treatment Steps */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4"
                  >
                    <h3 className="text-xl font-semibold text-orange-400">
                      Traitement :{anomaly?.treatmentTitle && (anomaly.treatmentTitle)}
                    </h3>
                  </motion.div>

                  {anomaly?.steps && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-50 mt-4 leading-relaxed"
                    >
                      {anomaly?.steps}
                    </motion.div>
                  )}
                  {anomaly?.treatmentImage && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anomaly.treatmentImage}
                      alt="Additional view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}
                  {anomaly?.treatmentImageCaption && (
                    <p className="text-gray-100 text-sm italic text-center">{anomaly.treatmentImageCaption}</p>
                  )}
                  {anomaly?.treatmentImage2 && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anomaly.treatmentImage2}
                      alt="Additional view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}
                  {anomaly?.treatmentImageCaption2 && (
                    <p className="text-gray-100 text-sm italic text-center">{anomaly.treatmentImageCaption2}</p>
                  )}
                  {anomaly?.treatmentImage3 && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anomaly.treatmentImage3}
                      alt="Additional view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}
                  {anomaly?.treatmentImageCaption3 && (
                    <p className="text-gray-100 text-sm italic text-center">{anomaly.treatmentImageCaption3}</p>
                  )}
                  {anomaly?.treatmentVideo && (
                    <a href={anomaly?.treatmentVideo} className="text-gray-50 text-sm italic text-center flex justify-center mt-8 underline">(Cliquer ici pour voir le Video)</a>
                  )}
                   {anomaly?.link && (
                    <a href={anomaly?.link} className="text-gray-50 text-sm italic text-center flex justify-center mt-8 underline">(Cliquer ici pour voir le Lien)</a>
                  )}
                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={onClose}
                    className="mt-6 px-4 py-2 flex justify-end  rounded-lg bg-gradient-to-r from-orange-300 to-red-800 text-white font-semibold 
                             hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Fermer
                  </motion.button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AnomalyModal;
