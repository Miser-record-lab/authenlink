"use client";

import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const PresentationGuaranteeAndCTA = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">

      {/* Garantie */}
      <motion.div
        className="flex flex-col items-center p-8 bg-gray-900 rounded-xl shadow-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaShieldAlt className="text-teal-400 text-6xl mb-4" />
        <h2 className="text-3xl font-bold text-teal-400">🎯 Satisfaction garantie</h2>
        <p className="text-lg text-gray-300 mt-4">
          Nous sommes tellement convaincus que notre solution vous apportera des résultats que si après la mise en place des infrastructures et les premiers résultats vous n’êtes pas satisfait, vous êtes remboursé après 1 mois !
        </p>
      </motion.div>

      {/* Séparateur */}
      <motion.div 
        className="h-1 w-24 bg-teal-400 mt-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      {/* Appel à l’action */}
      <motion.div
        className="mt-12 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-4xl font-bold text-white">
          📞 Passez à l’action maintenant !
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          🚀 Découvrez comment l’IA et l’automatisation peuvent transformer votre entreprise.
        </p>
        
        {/* Bouton CTA */}
      </motion.div>

    </section>
  );
};

export default PresentationGuaranteeAndCTA;
