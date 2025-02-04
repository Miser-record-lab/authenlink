"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const benefits = [
  { text: "✅ Une infrastructure IA sur-mesure pour votre entreprise" },
  { text: "✅ Sans abonnement coûteux, 3X moins cher qu’un employé" },
  { text: "✅ Un accompagnement complet et des résultats concrets dès le premier mois" },
  { text: "✅ Satisfait ou remboursé" },
];

const PresentationPostScript = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-black-100 text-white px-6">
      
      {/* Titre */}
      <motion.h2
        className="text-4xl font-bold text-teal-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🔥 Récapitulatif des bénéfices
      </motion.h2>

      {/* Liste des bénéfices */}
      <div className="mt-6 space-y-4">
        {benefits.map((benefit, index) => (
          <motion.p
            key={index}
            className="text-lg text-gray-300 flex items-center justify-center space-x-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <FaCheckCircle className="text-teal-400 text-2xl" />
            <span>{benefit.text}</span>
          </motion.p>
        ))}
      </div>

      {/* Séparateur */}
      <motion.div 
        className="h-1 w-24 bg-teal-400 mt-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h3 className="text-2xl font-semibold text-white">
          📞 Passez à l’action maintenant et réservez votre appel !
        </h3>

        {/* Bouton CTA */}
        <motion.a
          href="http://calendly.com/authenlink/30min"
          className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-xl flex items-center space-x-2 transition-all"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaCalendarAlt className="text-white text-2xl" />
          <span>📅 Je réserve mon appel maintenant</span>
        </motion.a>
      </motion.div>

      {/* Logo AuthenLink */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <Image
          src="/favicon.ico"
          alt="AuthenLink - IA & Automatisation"
          width={150}
          height={150}
          className="opacity-80"
        />
      </motion.div>

    </section>
  );
};

export default PresentationPostScript;
