import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const AnatomyModal = ({ isOpen, onClose, anatomy }) => {
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
                    {anatomy?.title}
                  </Dialog.Title>

                  {/* Definition */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-100 mt-4 leading-relaxed"
                  >
                    {anatomy?.definition}
                  </motion.div>

                  {/* Main Image */}
                  {anatomy?.image && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      src={anatomy.image}
                      alt={anatomy.title}
                      className="h-96 mx-auto object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anatomy?.caption && (
                    <p className="text-gray-300 text-sm italic text-center">{anatomy.caption}</p>
                  )}

                  {/* Components Section */}
                  {anatomy?.composants && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4"
                    >
                      <h3 className="text-xl font-semibold text-orange-400">Composants :</h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-100 mt-4 leading-relaxed"
                      >
                        {anatomy.composants}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Components Image */}
                  {anatomy?.composantsImage && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anatomy.composantsImage}
                      alt="Components view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anatomy?.composantsImageCaption && (
                    <p className="text-gray-300 text-sm italic text-center">{anatomy.composantsImageCaption}</p>
                  )}
                   {anatomy?.composantsImage2 && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anatomy.composantsImage2}
                      alt="Components view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anatomy?.composantsImageCaption2 && (
                    <p className="text-gray-300 text-sm italic text-center">{anatomy.composantsImageCaption}</p>
                  )}
                   {anatomy?.composantsImage3 && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      src={anatomy.composantsImage3}
                      alt="Components view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anatomy?.composantsImageCaption3 && (
                    <p className="text-gray-300 text-sm italic text-center">{anatomy.composantsImageCaption}</p>
                  )}

                  {/* Note (Triangle Notification) */}
                  {anatomy?.note && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="relative mt-4 p-4 bg-blue-500/20 rounded-lg border-l-4 border-blue-400"
                    >
                      <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500/20"></div>
                      <p className="text-blue-200">{anatomy.note}</p>
                    </motion.div>
                  )}

                  {/* Properties Section */}
                  {anatomy?.proprities && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-4"
                    >
                      <h3 className="text-xl font-semibold text-orange-400">Propriétés :</h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-100 mt-4 leading-relaxed"
                      >
                        {anatomy.proprities}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Properties Image */}
                  {anatomy?.propritiesImage && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      src={anatomy.propritiesImage}
                      alt="Properties view"
                      className="mx-auto h-96 object-cover rounded-lg my-4 shadow-lg"
                    />
                  )}

                  {anatomy?.propritiesImageCaption && (
                    <p className="text-gray-300 text-sm italic text-center">{anatomy.propritiesImageCaption}</p>
                  )}

                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    onClick={onClose}
                    className="mt-6 px-4 py-2 flex justify-end rounded-lg bg-gradient-to-r from-orange-300 to-red-800 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
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

export default AnatomyModal;
