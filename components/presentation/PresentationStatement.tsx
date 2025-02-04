"use client";

import { motion } from "framer-motion";

const PresentationStatement = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      {/* Texte principal avec animation d'apparition */}
      <motion.h2
        className="text-3xl sm:text-5xl font-bold max-w-4xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Saviez-vous que les plus grandes entreprises automatisent déjà une grande partie 
        de leurs <span className="text-teal-400">processus internes</span> avec l’IA ?
      </motion.h2>

      {/* Sous-titre avec animation progressive */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Aujourd’hui, vous pouvez faire exactement la même chose...
      </motion.p>

      {/* Mise en avant de la phrase clé */}
      <motion.p
        className="text-4xl sm:text-6xl font-extrabold text-teal-400 mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        … pour quelques centaines d’euros par mois !
      </motion.p>

      {/* Animation de zoom sur la phrase clé */}
      <motion.div
        className="mt-6 w-40 h-2 bg-teal-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      ></motion.div>
    </section>
  );
};

export default PresentationStatement;
