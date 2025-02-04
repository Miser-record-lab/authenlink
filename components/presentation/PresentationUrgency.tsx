"use client";

import { motion } from "framer-motion";
import { FaClock, FaGift, FaCalendarAlt } from "react-icons/fa";

const urgencyPoints = [
  { 
    icon: <FaClock className="text-teal-400 text-4xl" />, 
    title: "⏳ Offre limitée",
    description: "Nous recherchons nos premiers clients et proposons un accompagnement VIP ultra-privilégié." 
  },
  { 
    icon: <FaGift className="text-teal-400 text-4xl" />, 
    title: "🎁 Audit 100% offert",
    description: "Appelez-nous dès aujourd’hui et bénéficiez d’une analyse gratuite de vos besoins en IA et automatisation." 
  }
];

const PresentationUrgency = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Titre principal */}
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-teal-400 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📢 Pourquoi agir maintenant ?
      </motion.h1>

      {/* Liste des raisons d’agir */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {urgencyPoints.map((point, index) => (
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

      {/* Call-to-action : Réserver un RDV */}
      <motion.div 
        className="mt-12 text-center bg-teal-500 hover:bg-teal-600 py-4 px-8 rounded-xl shadow-lg cursor-pointer transition-all"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <a 
          href="http://calendly.com/authenlink/30min" 
          className="flex items-center space-x-2 text-white text-xl font-bold"
        >
          <FaCalendarAlt className="text-white text-2xl" />
          <span>📅 Réservez votre RDV maintenant</span>
        </a>
      </motion.div>

    </section>
  );
};

export default PresentationUrgency;
