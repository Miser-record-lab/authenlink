"use client";

import dynamic from "next/dynamic";

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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Automatisation
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Workflow automatisé pour gagner du temps et réduire les erreurs
              manuelles.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🤖</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Intelligence AI
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Intégration d'agents AI pour des réponses intelligentes et
              contextuelles.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📊</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Analyse de données
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Collecte et analyse des métriques pour optimiser les performances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
