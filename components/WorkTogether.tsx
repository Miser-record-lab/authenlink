'use client';

import React from "react";
import { FaCog, FaDatabase, FaCode, FaRocket, FaUserTie } from "react-icons/fa"; // Importation des icônes

const WorkTogether = () => {
  return (
    <section className="w-full pt-20 pb-20 bg-[#000319]" id="collaboration">
      <div className="mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          Une approche <span className="text-purple">100% personnalisée</span> en 5 étapes
        </h2>
        <p className="text-center text-lg text-white mb-12">
          Comprendre en profondeur les besoins de de votre entreprise pour vous aider à scaler grace à des automatisations <span className="text-purple">100% personnalisée</span>.
        </p>

        {/* First group of 3 cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Step 1: Red Card */}
          <div className="relative bg-black-300 p-8 rounded-lg border border-red-700 shadow-lg hover:shadow-lg hover:shadow-red-700/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">1</h3>
              <FaCog className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Audit de votre infrastructure</h4>
            <p className="text-white">Examen complet de votre infrastructure pour identifier les outils et les automatisations à implémenter.</p>
          </div>

          {/* Step 2: Orange Card */}
          <div className="relative bg-black-300 p-8 rounded-lg border border-orange-500 shadow-lg hover:shadow-lg hover:shadow-orange-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">2</h3>
              <FaDatabase className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Propositions d’axes d&apos;améliorations</h4>
            <p className="text-white">Nous vous proposons une série d&apos;actions personnalisées à réaliser pour optimiser vos processus internes.</p>
          </div>

          {/* Step 3: Yellow Card */}
          <div className="relative bg-black-300 p-8 rounded-lg border border-yellow-400 shadow-lg hover:shadow-lg hover:shadow-yellow-400/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">3</h3>
              <FaCode className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Développement 100% personnalisé</h4>
            <p className="text-white">En collaboration avec les services concerné, nous développons les solutions pour répondre le plus précisément à vos besoins.</p>
          </div>
        </div>

        {/* Second group of 2 cards */}
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {/* Step 4: Green Card */}
          <div className="relative bg-black-300 p-8 rounded-lg border border-green-500 shadow-lg hover:shadow-lg hover:shadow-green-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">4</h3>
              <FaRocket className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Implémentation des solutions</h4>
            <p className="text-white">Nous déployons les automatisations validées au sein de votre entreprise et assurons un suivi pour leur bonne intégration.</p>
          </div>

          {/* Step 5: Blue Card */}
          <div className="relative bg-black-300 p-8 rounded-lg border border-blue-500 shadow-lg hover:shadow-lg hover:shadow-blue-500/[0.5] w-full max-w-[300px] h-auto lg:h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-center text-3xl font-semibold text-white border rounded-full border-white w-12 h-12 flex items-center justify-center">5</h3>
              <FaUserTie className="text-white text-4xl" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Formation et accompagnement</h4>
            <p className="text-white">Nous formons vos équipes pour qu&apos;elles puissent maîtriser les nouvelles automatisations mises en place.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
