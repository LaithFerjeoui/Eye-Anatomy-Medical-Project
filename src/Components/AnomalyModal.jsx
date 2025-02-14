import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const AnomalyModal = ({ isOpen, onClose, anomaly }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
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
              className="mx-auto max-w-2xl w-full overflow-hidden"
            >
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl" />
                
                <div className="relative">
                  <Dialog.Title className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-800">
                    {anomaly?.title}
                  </Dialog.Title>
                  
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    src={anomaly?.image}
                    alt={anomaly?.title}
                    className="w-full h-64 object-cover rounded-lg my-4 shadow-lg"
                  />
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-100 mt-2 leading-relaxed"
                  >
                    {anomaly?.description}
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={onClose}
                    className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-300 to-red-800 text-white font-semibold 
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