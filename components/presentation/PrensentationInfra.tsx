"use client";

import { motion } from "framer-motion";
import { FaServer, FaRobot, FaEnvelopeOpenText } from "react-icons/fa";

const infrastructures = [
  {
    icon: <FaRobot className="text-teal-400 text-5xl" />,
    title: "Workflow Automation & Agents IA",
    description: "Automatisation des tâches, agents IA et intégrations intelligentes.",
    points: [
      "⚡ Gagnez jusqu'à 30% de productivité en automatisant vos tâches répétitives.",
      "🤖 50% des demandes clients traitées automatiquement via des agents IA.",
    ],
    pricing: "💰 Prix : de 200€ à 800€/mois pour une automatisation complète d’un service."
  },
  {
    icon: <FaEnvelopeOpenText className="text-teal-400 text-5xl" />,
    title: "📢 Prospection BtoB & Leads",
    description: "Mise en place d’une infrastructure de mailing performante et vente de leads qualifiés.",
    points: [
      "📩 Plus de 100K emails envoyés chaque mois à des prospects qualifiés.",
      "🎯 Vente de leads ultra-qualifiés à partir de vos critères spécifiques.",
    ],
    pricing: "💰 Mise en place : 1000€ | Leads qualifiés : 0,05€/lead (prix dégressif dès 10K leads)."
  }
];

const PresentationInfra = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Titre principal */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🏗️ Votre infrastructure sur-mesure
      </motion.h1>

      {/* Schéma du serveur central */}
      <motion.div
        className="relative mt-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Serveur central */}
        <motion.div
          className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg border border-white/10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <FaServer className="text-teal-400 text-6xl" />
          <h2 className="text-2xl font-semibold text-teal-400 mt-2">Serveur IA</h2>
          <p className="text-gray-300 text-sm">Héberge vos outils d’automatisation sans abonnement SaaS.</p>
        </motion.div>

        {/* Branches vers les infrastructures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {infrastructures.map((infra, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg border border-white/10 max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              {infra.icon}
              <h3 className="text-xl font-semibold text-teal-400 mt-4">{infra.title}</h3>
              <p className="text-gray-300 text-sm mt-2 pb-4 mb-4 border-b border-teal-400">{infra.description}</p>

              {/* Liste des avantages */}
              <ul className="mt-4 text-left text-sm text-gray-300 space-y-4">
                {infra.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-4">
                    ✅ {point}
                  </li>
                ))}
              </ul>

              {/* Section Prix */}
              <div className="mt-4 bg-teal-500 text-black px-4 py-2 rounded-lg font-bold text-sm">
                {infra.pricing}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default PresentationInfra;
