"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity, FaRocket, FaLaptopCode, FaTools } from "react-icons/fa";

const experiences = [
  { icon: <FaUniversity className="text-teal-400 text-4xl" />, title: "🎓 Master en école de commerce", description: "Formation en stratégie, marketing et business development." },
  { icon: <FaRocket className="text-teal-400 text-4xl" />, title: "🚀 Expérience en startup tech", description: "1 an et demi dans une startup innovante en Proptech." },
  { icon: <FaLaptopCode className="text-teal-400 text-4xl" />, title: "💻 Développement & IA", description: "1 an d'apprentissage autodidacte des outils d'automatisation et du code." },
  { icon: <FaTools className="text-teal-400 text-4xl" />, title: "🛠️ Mise en place d'infrastructures IA", description: "Optimisation des process pour finance, marketing et service client." }
];

const PresentationAuthority = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Photo & Présentation */}
      <motion.div
        className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Photo de Hugo */}
        <Image
          src="/hugomiseryphoto.jpg"
          alt="Hugo Misery - Expert IA & Automatisation"
          width={200}
          height={200}
          className="rounded-full border-4 border-teal-400 shadow-lg"
        />

        {/* Introduction */}
        <div className="text-left max-w-xl">
          <motion.h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            🔥 Pourquoi m’écouter ?
          </motion.h1>
          <p className="text-lg text-gray-300 mt-4">
            Je m’appelle <span className="text-teal-400 font-bold">Hugo Misery</span>, et j’ai découvert très tôt l’impact énorme que peut avoir la technologie sur une entreprise. 
            <br /><br />
            Après avoir travaillé avec des équipes marketing, finance et service client, j’ai mis en place des outils IA et d’automatisation qui ont transformé leur manière de travailler.
            <br /><br />
            Aujourd’hui, je veux faire la même chose pour vous.
          </p>
        </div>
      </motion.div>

      {/* Expérience & Expertise */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl shadow-lg max-w-lg mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {exp.icon}
            <div className="text-left">
              <h2 className="text-xl font-semibold text-teal-400">{exp.title}</h2>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default PresentationAuthority;
