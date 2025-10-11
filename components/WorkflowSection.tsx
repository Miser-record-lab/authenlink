"use client";

import dynamic from "next/dynamic";
import { HoverEffect } from "./ui/card-hover-effect";
import { FaCog, FaRobot, FaChartLine } from "react-icons/fa";

// Import dynamique pour éviter les problèmes SSR avec ReactFlow
const Workflow = dynamic(() => import("./Workflow"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Chargement du workflow...
        </p>
      </div>
    </div>
  ),
});

const workflowFeatures = [
  {
    title: (
      <div className="flex items-center gap-3">
        <FaCog className="text-3xl text-primary" />
        <span>Automatisation</span>
      </div>
    ),
    description:
      "Workflow automatisé pour gagner du temps et réduire les erreurs manuelles.",
    link: "#",
  },
  {
    title: (
      <div className="flex items-center gap-3">
        <FaRobot className="text-3xl text-primary" />
        <span>AI Agents</span>
      </div>
    ),
    description:
      "Intégration d'agents AI pour des réponses intelligentes et contextuelles.",
    link: "#",
  },
  {
    title: (
      <div className="flex items-center gap-3">
        <FaChartLine className="text-3xl text-primary" />
        <span>Analyse de données</span>
      </div>
    ),
    description:
      "Collecte et analyse des métriques pour optimiser les performances.",
    link: "#",
  },
];

export default function WorkflowSection() {
  return (
    <section className="w-full py-20" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Un petit aperçu de{" "}
            <span className="text-primary">nos workflows ?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nous utilisons n8n pour réaliser certaines infrastructures mais
            également les prototypes avant de développement en Python / React.
          </p>
        </div>

        {/* Container du workflow */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="h-[600px] w-full">
            <Workflow />
          </div>
        </div>

        {/* Informations supplémentaires avec HoverEffect */}
        <HoverEffect items={workflowFeatures} className="mt-8" />
      </div>
    </section>
  );
}
