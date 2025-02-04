"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PresentationProblem2 = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6 relative">
      {/* Animation du texte */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold max-w-4xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Pendant que vous hésitez...
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Vos concurrents, eux, passent à l’action. 🚀
      </motion.p>

      {/* Graphiques illustratifs */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10 items-center">
        <motion.div
          className="p-6 bg-gray-900 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image 
            src="/bad-company.jpg" 
            width={250} 
            height={150} 
            alt="Entreprise qui stagne"
            className="h-[250px] w-[300px]"
          />
          <p className="text-red-400 mt-2 text-sm">Entreprise qui stagne ❌</p>
        </motion.div>

        <motion.div
          className="p-6 bg-teal-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Image 
            src="/good-company.jpg" 
            width={250} 
            height={150} 
            alt="Entreprise qui croît avec l'IA"
            className="h-[250px] w-[300px]"
          />
          <p className="text-green-400 mt-2 text-sm">Entreprise qui booste sa croissance ✅</p>
        </motion.div>
      </div>

      {/* Pause dramatique */}
      <motion.p
        className="text-lg sm:text-2xl text-gray-400 mt-8 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        La question est simple : allez-vous les laisser prendre de l’avance ?
      </motion.p>
    </section>
  );
};

export default PresentationProblem2;
