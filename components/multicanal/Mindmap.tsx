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

const notes = [
  <>
    🎯 <strong>Objectif :</strong> créer un point d’entrée engageant<br /><br />
    🛠️ <strong>Méthodes :</strong> quiz, checklist, guides interactifs
  </>,
  <>
    🤖 <strong>IA copywriting</strong> + personnalisation dynamique<br /><br />
    📈 <strong>Résultats :</strong> +30% d’ouverture / +15% réponses
  </>,
  <>
    ⚙️ Tri des leads chauds / froids<br /><br />
    🧠 Alertes slack + filtres pour tri automatique
  </>,
  <>
    📅 Intégration directe avec Calendly<br /><br />
    🚀 Optimisation du taux de closing via préqualification
  </>,
]


const MindMapMulticanal = () => {
  return (
    <section
      className="py-20 px-4 flex flex-col items-center justify-center w-full max-w-6xl mx-auto"
      id="funnel"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Funnel d&apos;acquisition multicanal
      </h2>

      {/* Sources */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {sources.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 bg-purple rounded-full mb-2">{src.icon}</div>
            <span className="text-white text-sm font-medium">{src.name}</span>
          </div>
        ))}
      </div>

      {/* Flèche vers le funnel */}
      <div className="flex justify-center items-center mb-6">
        <BsChevronDown className="text-white text-3xl animate-bounce" />
      </div>

      {/* Funnel étapes */}
      <div className="flex flex-col gap-16 items-center text-center relative">
        {[
            {
              title: "Lead Magnet",
              desc: "Création et mise en place d’un contenu à forte valeur pour capter l’attention du prospect.\n Nous concevons votre lead magnet de A à Z.",
              note: notes[0],
            },
            {
              title: "Séquences personnalisées",
              desc: "Emails, LinkedIn, WhatsApp, SMS adaptés au persona.\nLes leads sont enrichis et les messages sont personnalisés avec de l’IA pour maximiser les taux de réponse.",
              note: notes[1],
            },
            {
              title: "Réponses & engagement",
              desc: "Chaque réponse est analysée automatiquement pour déclencher la bonne action : relance, prise de RDV ou désinscription.",
              note: notes[2],
            },
            {
              title: "Prise de RDV",
              desc: "Les prospects les plus qualifiés sont orientés automatiquement vers un créneau de RDV ou une relance humaine.",
              note: notes[3],
            },
        ].map((step, i) => (
          <div key={i} className="relative flex justify-center w-full">
            {/* Card principale */}
            <div className="bg-black-200 p-6 rounded-xl border border-white/[0.2] max-w-md w-full text-center z-10">
              <h3 className="text-white text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-white-100 text-sm">{step.desc}</p>
            </div>

            {/* Note à droite */}
            <div className="hidden lg:flex absolute left-1/2 translate-x-[270px] bg-yellow-300/10 text-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg max-w-xs w-64 h-full items-center justify-center">
              <p className="text-sm leading-snug">{step.note}</p>
            </div>

            {/* Flèche centrée dessous */}
            {i < 3 && (
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
                <BsChevronDown className="text-white text-xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MindMapMulticanal
