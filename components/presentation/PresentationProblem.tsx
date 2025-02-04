"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PresentationProblem = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      {/* Animation du titre principal */}
      <motion.h2
        className="text-3xl sm:text-5xl font-bold max-w-4xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mais voilà le problème : ces technologies restent{" "}
        <span className="text-red-500">inaccessibles</span> pour 95% des entreprises.
      </motion.h2>

      {/* Sous-titre progressif */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Pourquoi ? Parce qu’elles nécessitent des compétences techniques et du temps, 
        que la plupart des entreprises n’ont pas.
      </motion.p>

      {/* Image du développeur débordé */}
      <motion.div
        className="relative mt-8 w-80 sm:w-96 h-52 sm:h-64"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src="/dev-deborde.jpg" // Remplace par l’image correcte
          alt="Développeur débordé devant son écran"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg border border-white"
        />
      </motion.div>

      {/* Question finale animée */}
      <motion.p
        className="text-2xl sm:text-3xl font-semibold text-teal-400 mt-8 mx-2 sm:mx-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Vous avez entendu parler de l&apos;IA, de l&apos;automatisation et des agents intelligents, mais vous ne savez pas comment les utiliser pour faire grandir votre entreprise ?
      </motion.p>
    </section>
  );
};

export default PresentationProblem;
