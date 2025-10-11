"use client";

import dynamic from "next/dynamic";
import { CardStack } from "./ui/card-stack";

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

const CARDS = [
  {
    id: 0,
    name: "Automatisation",
    designation: "Gain de temps et précision",
    content: (
      <div className="flex flex-col gap-3">
        <span className="text-4xl">⚡</span>
        <p className="text-base">
          Workflow automatisé pour gagner du temps et réduire les erreurs manuelles. Optimisez vos processus métiers.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Intelligence AI",
    designation: "Réponses contextuelles",
    content: (
      <div className="flex flex-col gap-3">
        <span className="text-4xl">🤖</span>
        <p className="text-base">
          Intégration d&apos;agents AI pour des réponses intelligentes et contextuelles adaptées à vos besoins.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Analyse de données",
    designation: "Performance optimisée",
    content: (
      <div className="flex flex-col gap-3">
        <span className="text-4xl">📊</span>
        <p className="text-base">
          Collecte et analyse des métriques pour optimiser les performances et prendre de meilleures décisions.
        </p>
      </div>
    ),
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

        {/* Informations supplémentaires */}
        <div className="mt-16 flex justify-center">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
}
