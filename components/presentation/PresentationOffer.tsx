"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaBolt, FaUserTie } from "react-icons/fa";

const offerPoints = [
  { 
    icon: <FaCheckCircle className="text-teal-400 text-4xl" />, 
    title: "✅ Accès à des infrastructures performantes",
    description: "Des outils puissants, sans abonnement SaaS coûteux, au prix le plus bas du marché." 
  },
  { 
    icon: <FaBolt className="text-teal-400 text-4xl" />, 
    title: "⚡ Déploiement ultra-rapide",
    description: "Mise en place des agents IA, campagnes marketing et dashboards en moins de 30 jours." 
  },
  { 
    icon: <FaUserTie className="text-teal-400 text-4xl" />, 
    title: "📢 Accompagnement sur-mesure",
    description: "Formation et support pour que votre équipe maîtrise les outils déployés." 
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

      {/* Offre de lancement - Animation du prix */}
      <motion.div 
        className="mt-12 text-center bg-gray-800 py-6 px-8 rounded-xl shadow-lg max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-lg text-gray-300">📢 <span className="text-teal-400 font-bold">Notre offre de lancement :</span></p>
        <motion.p 
          className="text-4xl sm:text-5xl font-bold text-white mt-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{ yoyo: Infinity, duration: 1 }}
        >
          1500€ / mois
        </motion.p>
        <p className="text-gray-400 mt-2">pendant 3 mois pour un accompagnement complet.</p>
        <motion.p 
          className="text-xl sm:text-2xl font-bold text-white mt-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{ yoyo: Infinity, duration: 1 }}
        >
          Des agents IA et autres automatisation à partir de 500€ / mois
        </motion.p>
        <motion.p 
          className="text-lg text-teal-400 font-bold mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          🔹 Jusqu’à 3X moins cher qu’un développeur interne !
        </motion.p>
      </motion.div>

    </section>
  );
};

export default PresentationOffer;
