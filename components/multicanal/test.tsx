"use client"

import React from "react"
import { FaEnvelope, FaLinkedin, FaSms, FaWhatsapp } from "react-icons/fa"
import { BsChevronDown } from "react-icons/bs"

const sources = [
  { name: "Email", icon: <FaEnvelope className="text-xl text-white" /> },
  { name: "LinkedIn", icon: <FaLinkedin className="text-xl text-white" /> },
  { name: "WhatsApp", icon: <FaWhatsapp className="text-xl text-white" /> },
  { name: "SMS", icon: <FaSms className="text-xl text-white" /> },
]

const MindMapMulticanal = () => {
  return (
    <section className="py-20 px-4 flex flex-col items-center justify-center w-full max-w-6xl mx-auto" id="funnel">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Funnel d&apos;acquisition multicanal
      </h2>

      {/* Sources de contact */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {sources.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 bg-purple rounded-full mb-2">
              {src.icon}
            </div>
            <span className="text-white text-sm font-medium">{src.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mb-6">
        <BsChevronDown className="text-white text-3xl animate-bounce" />
      </div>

      {/* Funnel étapes + notes explicatives */}
      <div className="flex flex-col gap-16 items-center text-center">
        {/* ÉTAPE 1 */}
        <div className="relative flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="bg-black-200 p-6 rounded-xl border border-white/[0.2] max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-1">Lead Magnet</h3>
            <p className="text-white-100 text-sm">
              Création et mise en place d’un contenu ou d’une offre à forte valeur pour capter l’attention du prospect.<br />
              Nous concevons votre lead magnet de A à Z.
            </p>
          </div>
          <div className="bg-yellow-300/10 text-yellow-100 p-4 rounded-lg shadow-md border border-yellow-300 w-full md:max-w-sm">
            <p className="text-sm font-medium">
              🎯 <strong>Objectif :</strong> créer un point d’entrée engageant<br />
              🛠️ <strong>Méthodes :</strong> quiz, checklist, guides interactifs
            </p>
          </div>
        </div>

        <BsChevronDown className="text-white text-xl" />

        {/* ÉTAPE 2 */}
        <div className="relative flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="bg-black-200 p-6 rounded-xl border border-white/[0.2] max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-1">Séquences personnalisées</h3>
            <p className="text-white-100 text-sm">
              Emails, LinkedIn, WhatsApp, SMS adaptés au persona.<br />
              Les messages sont enrichis et personnalisés via IA pour un taux de réponse élevé.
            </p>
          </div>
          <div className="bg-yellow-300/10 text-yellow-100 p-4 rounded-lg shadow-md border border-yellow-300 w-full md:max-w-sm">
            <p className="text-sm font-medium">
              🤖 <strong>IA copywriting</strong> + personnalisation dynamique<br />
              📈 <strong>Résultats :</strong> +30% d’ouverture / +15% réponses
            </p>
          </div>
        </div>

        <BsChevronDown className="text-white text-xl" />

        {/* ÉTAPE 3 */}
        <div className="relative flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="bg-black-200 p-6 rounded-xl border border-white/[0.2] max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-1">Réponses & engagement</h3>
            <p className="text-white-100 text-sm">
              Analyse des réponses, gestion automatique ou en temps réel selon les signaux d’intention détectés.
            </p>
          </div>
          <div className="bg-yellow-300/10 text-yellow-100 p-4 rounded-lg shadow-md border border-yellow-300 w-full md:max-w-sm">
            <p className="text-sm font-medium">
              ⚙️ Tri des leads chauds / froids<br />
              🧠 Alertes slack + filtres pour tri automatique
            </p>
          </div>
        </div>

        <BsChevronDown className="text-white text-xl" />

        {/* ÉTAPE 4 */}
        <div className="relative flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="bg-black-200 p-6 rounded-xl border border-white/[0.2] max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-1">Prise de RDV</h3>
            <p className="text-white-100 text-sm">
              Leads qualifiés orientés vers une prise de rendez-vous automatisée ou manuelle avec le bon interlocuteur.
            </p>
          </div>
          <div className="bg-yellow-300/10 text-yellow-100 p-4 rounded-lg shadow-md border border-yellow-300 w-full md:max-w-sm">
            <p className="text-sm font-medium">
              📅 Intégration directe avec Calendly<br />
              🚀 Optimisation du taux de closing via préqualification
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MindMapMulticanal
