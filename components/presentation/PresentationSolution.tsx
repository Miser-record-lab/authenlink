"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PresentationSolution = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Animation du logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Image 
          src="/favicon.ico" 
          width={80} 
          height={80} 
          alt="AuthenLink Logo"
        />
      </motion.div>

      {/* Titre principal */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold max-w-4xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        C’est pourquoi nous avons créé <span className="text-teal-400">AuthenLink.</span>
      </motion.h1>

      {/* Texte explicatif */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Une agence spécialisée dans l’implémentation d’infrastructures open-source et d’outils d’automatisation**,
        hébergés sur votre propre serveur, sans abonnement SaaS coûteux, et à moindre coût.
      </motion.p>

      {/* Animation des mots-clés (Zoom progressif) */}
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        {["open-source", "sans abonnement SaaS", "à moindre coût"].map((word, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-900 rounded-xl shadow-lg text-lg font-semibold text-teal-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PresentationSolution;
