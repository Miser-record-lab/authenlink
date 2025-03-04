"use client";

import { motion } from "framer-motion";
import { FaRobot, FaEnvelopeOpenText, FaTools } from "react-icons/fa";

const features = [
  { 
    icon: <FaRobot className="text-teal-400 text-4xl" />, 
    title: "Agent IA", 
    description: "Automatisation service client, chatbot, gestion des boîtes mails, publications sur les réseaux sociaux et bien plus." 
  },
  { 
    icon: <FaEnvelopeOpenText className="text-teal-400 text-4xl" />, 
    title: "Infrastructure de prospection BtoB", 
    description: "Sourcing des leads, set up d’infrastructure de mailing (+100K emails/mois), campagnes automatisées." 
  },
  { 
    icon: <FaTools className="text-teal-400 text-4xl" />, 
    title: "Optimisation & Automatisations", 
    description: "Optimisation web, création de blogs, développement, automatisations sur-mesure pour votre activité." 
  }
];

const PresentationCuriosity = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Titre principal */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🔎 Que pouvons-nous faire pour vous ?
      </motion.h1>

      {/* Liste animée des services */}
      <div className="mt-8 space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {feature.icon}
            <div className="text-left">
              <h2 className="text-xl font-semibold text-teal-400">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Affichage du coût estimé */}
      <motion.div
        className="mt-10 text-2xl font-bold bg-teal-500 text-black px-6 py-3 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        💰 Pour seulement quelques centaines d’euros par mois, votre serveur IA et vos premières automatisations sont prêts à l’emploi !
      </motion.div>

    </section>
  );
};

export default PresentationCuriosity;
