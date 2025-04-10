// components/AgentServices.tsx

"use client"

import React from "react"
import { HoverEffect } from "../ui/card-hover-effect"
import { FaComments, FaCogs, FaDatabase, FaEnvelopeOpenText, FaChartBar, FaPuzzlePiece } from "react-icons/fa"

const agentServices = [
  {
    title: (
      <span className="flex items-center gap-2">
        <FaComments className="text-purple text-lg" /> Agents conversationnels
      </span>
    ),
    description:
      "Mise en place de chatbots intelligents capables de qualifier des leads, automatiser le service client ou répondre à vos visiteurs 24/7.",
    link: "#agents-conversationnels",
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <FaCogs className="text-purple text-lg" /> Workflows IA personnalisés
      </span>
    ),
    description:
      "Automatisez des tâches complexes grâce à des agents IA capables d'interagir avec vos outils internes, d'extraire des données ou de gérer des process B2B.",
    link: "#workflows-ia",
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <FaDatabase className="text-purple text-lg" /> Extraction & Traitement de données
      </span>
    ),
    description:
      "Création d'agents de scraping intelligents pour collecter et structurer des données en ligne, avec enrichissement automatique des infos.",
    link: "#scraping",
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <FaEnvelopeOpenText className="text-purple text-lg" /> Automatisation CRM & Emailing
      </span>
    ),
    description:
      "Connexion de vos agents IA avec vos outils CRM ou marketing pour automatiser la segmentation, l'envoi d'emails et la relance commerciale.",
    link: "#automation-crm",
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <FaChartBar className="text-purple text-lg" /> Dashboards intelligents
      </span>
    ),
    description:
      "Mise en place de tableaux de bord dynamiques et intelligents exploitant vos données internes pour vous fournir des recommandations en temps réel.",
    link: "#ia-dashboards",
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <FaPuzzlePiece className="text-purple text-lg" /> Plug-ins IA personnalisés
      </span>
    ),
    description:
      "Création de plug-ins ou d'API utilisant l'IA pour vos outils internes ou vos clients, adaptés à vos besoins métiers spécifiques.",
    link: "#ia-plugins",
  },
]

const AgentServices = () => {
  return (
    <section className="pb-20 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        Nos solutions d&apos;<span className="text-purple">Agents IA</span>
      </h2>
      <p className="text-white-200 text-center max-w-2xl mx-auto mb-12">
        Nous créons des agents IA sur mesure pour automatiser, répondre, analyser ou interagir intelligemment avec vos outils. Voici quelques exemples concrets.
      </p>
      <HoverEffect items={agentServices} />
    </section>
  )
}

export default AgentServices
