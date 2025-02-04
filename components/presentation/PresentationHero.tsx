"use client";

import { motion } from "framer-motion";

const PresentationHero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6 relative z-10">

      <motion.h1
        className="text-4xl sm:text-6xl font-bold max-w-4xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Vous êtes une petite entreprise avec moins de 10 employés et souhaitez 
        intégrer des <span className="text-teal-400">outils et stratégies IA</span> performants...
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ... sans investir des milliers d’euros ni embaucher une équipe de développeurs ?
      </motion.p>

      <motion.div
        className="h-1 w-24 bg-teal-400 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>

      <motion.p
        className="text-lg sm:text-xl text-gray-400 mt-8 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Vous êtes au bon endroit. 🚀
      </motion.p>
    </section>
  );
};

export default PresentationHero;
