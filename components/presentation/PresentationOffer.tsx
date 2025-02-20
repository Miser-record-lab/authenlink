"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaBolt, FaUserTie } from "react-icons/fa";

const offerPoints = [
  { 
    icon: <FaCheckCircle className="text-teal-400 text-4xl" />, 
    title: "✅ Des outils performants et sur-mesure",
    description: "Nous intégrons des solutions IA et automatisations adaptées à votre entreprise pour maximiser l'efficacité de vos services." 
  },
  { 
    icon: <FaBolt className="text-teal-400 text-4xl" />, 
    title: "⚡ Un déploiement rapide et efficace",
    description: "Mise en place optimisée pour des résultats visibles en quelques semaines, sans complexité technique." 
  },
  { 
    icon: <FaUserTie className="text-teal-400 text-4xl" />, 
    title: "📢 Un accompagnement stratégique",
    description: "Nous nous occupons du développement, du marketing et de la gestion web pour une approche 360° adaptée à votre croissance." 
  }
];

const PresentationOffer = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Titre principal */}
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-teal-400 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Travailler avec AuthenLink, c’est :
      </motion.h1>

      {/* Liste des bénéfices */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {offerPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {point.icon}
            <h2 className="text-2xl font-semibold text-teal-400 mt-4">{point.title}</h2>
            <p className="text-gray-300 mt-2">{point.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Explication sur l'agence tout-en-un */}
      <motion.div 
        className="mt-12 text-center bg-gray-800 py-6 px-8 rounded-xl shadow-lg max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-lg text-teal-400 font-bold">💡 Pourquoi choisir une agence tout-en-un ?</p>
        <p className="text-gray-300 mt-4">
          Plutôt que de multiplier les prestataires et embaucher séparément un développeur, un data analyst et un expert en marketing,
          optez pour <strong>une seule agence</strong> qui gère l’ensemble de votre infrastructure digitale, vos automatisations et votre acquisition client.
        </p>
        <p className="text-gray-300 mt-2">
          🚀 Un seul interlocuteur, une vision globale et une exécution optimisée pour votre croissance.
        </p>
      </motion.div>

    </section>
  );
};

export default PresentationOffer;
