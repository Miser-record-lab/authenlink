"use client"

import React from "react"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  FaSearch,
  FaUserCheck,
  FaEnvelope,
  FaCheckDouble,
  FaRobot,
  FaCalendarCheck,
} from "react-icons/fa"

// OUTILS pour chaque étape
  
  const toolMap = {
    icp: [
      {
        id: 1,
        name: "Apollo",
        designation: "Lead sourcing",
        image: "/tools/logo-apollo.png",
      },
      {
        id: 2,
        name: "PhantomBuster",
        designation: "LinkedIn scraping",
        image: "/tools/logo-phantombuster.png",
      },
    ],
    sourcing: [

        {
            id: 3,
            name: "Python",
            designation: "Scraping / automation",
            image: "/tools/logo-python.png",
          },
      {
        id: 4,
        name: "JavaScript",
        designation: "Scraping logic",
        image: "/tools/logo-javascript.png",
      },

      {
        id: 5,
        name: "Apify",
        designation: "Scraping bots",
        image: "/tools/logo-apify.png",
      },
      {
        id: 6,
        name: "Apollo",
        designation: "Data & segmentation",
        image: "/tools/logo-apollo.png",
      },
    ],
    enrich: [
        {
            id: 7,
            name: "Python",
            designation: "Custom enrich scripts",
            image: "/tools/logo-python.png",
          },
      {
        id: 8,
        name: "Dropcontact",
        designation: "Email enrichment",
        image: "/tools/logo-dropcontact.png",
      },
      {
        id: 9,
        name: "FullEnrich",
        designation: "Data enrichment",
        image: "/tools/logo-fullenrich.png",
      },
      {
        id: 10,
        name: "PhantomBuster",
        designation: "LinkedIn profile info",
        image: "/tools/logo-phantombuster.png",
      },

    ],
    campagnes: [
      {
        id: 11,
        name: "Lemlist",
        designation: "Cold email + LinkedIn",
        image: "/tools/logo-lemlist.png",
      },
      {
        id: 12,
        name: "Instantly",
        designation: "Cold email at scale",
        image: "/tools/logo-instantly.png",
      },
      {
        id: 13,
        name: "LaGrowthMachine",
        designation: "Multichannel sequencing",
        image: "/tools/logo-lagrowthmachine.png",
      },
      {
        id: 14,
        name: "Mailjet",
        designation: "Transactional emails",
        image: "/tools/logo-mailjet.png",
      },
      {
        id: 15,
        name: "Twilio",
        designation: "WhatsApp automation",
        image: "/tools/logo-twilio.png",
      },
      {
        id: 16,
        name: "PhantomBuster",
        designation: "LinkedIn automation",
        image: "/tools/logo-phantombuster.png",
      },
    ],
    auto: [
        {
            id: 17,
            name: "Python",
            designation: "Advanced flows",
            image: "/tools/logo-python.png",
          },
          {
            id: 18,
            name: "JavaScript",
            designation: "Custom logic",
            image: "/tools/logo-javascript.png",
          },

      {
        id: 19,
        name: "Make",
        designation: "No-code automation",
        image: "/tools/logo-make.png",
      },
      {
        id: 20,
        name: "Zapier",
        designation: "App integrations",
        image: "/tools/logo-zapier.png",
      },
      
      {
        id: 21,
        name: "n8n",
        designation: "Workflow automation",
        image: "/tools/logo-n8n.png",
      }
    ],
    rdv: [
      {
        id: 22,
        name: "Calendly",
        designation: "Meeting scheduling",
        image: "/tools/logo-calendly.png",
      },
      {
        id: 23,
        name: "Google Calendar",
        designation: "Meeting scheduling",
        image: "/tools/logo-googlecalendar.png",
      },
      {
        id: 24,
        name: "Slack",
        designation: "Team notifications",
        image: "/tools/logo-slack.png",
      },
    ],
  };
  
  

// STEPS avec leur lien vers tools
const steps = [
    {
      icon: <FaUserCheck className="text-purple text-2xl" />,
      title: "Définition de l’ICP",
      description: (
        <>
          Identification du client idéal, des personas clés et des signaux d’intention à suivre.
          <br />
          Cette étape permet de concentrer les efforts uniquement sur les prospects les plus susceptibles de convertir.
        </>
      ),
      tools: toolMap.icp,
    },
    {
      icon: <FaSearch className="text-purple text-2xl" />,
      title: "Sourcing & segmentation",
      description: (
        <>
          Scraping et tri de la donnée : taille, secteur, rôle, géo, levées de fonds, signaux forts.
          <br />
          On s’assure d’avoir une base ultra-ciblée pour maximiser les taux de réponse dès le départ.
        </>
      ),
      tools: toolMap.sourcing,
    },
    {
      icon: <FaEnvelope className="text-purple text-2xl" />,
      title: "Enrichissement",
      description: (
        <>
          Ajout des emails, LinkedIn, numéros, signaux, firmo & techno utilisées.
          <br />
          Grâce à cela, chaque message est ultra-personnalisé et pertinent pour son destinataire.
        </>
      ),
      tools: toolMap.enrich,
    },
    {
      icon: <FaCheckDouble className="text-purple text-2xl" />,
      title: "Création de campagnes",
      description: (
        <>
          Copywriting + séquences multicanales : email, LinkedIn, WhatsApp, SMS si pertinent.
          <br />
          On met en place une stratégie d’approche automatisée mais humaine, pensée pour engager.
        </>
      ),
      tools: toolMap.campagnes,
    },
    {
      icon: <FaRobot className="text-purple text-2xl" />,
      title: "Suivi automatisé",
      description: (
        <>
          Routage des réponses, alertes Slack, filtres de booking ou désinscription auto.
          <br />
          Cela permet de ne jamais rater une réponse chaude et de gagner un temps considérable au quotidien.
        </>
      ),
      tools: toolMap.auto,
    },
    {
      icon: <FaCalendarCheck className="text-purple text-2xl" />,
      title: "Prise de RDV",
      description: (
        <>
          Envoi des leads qualifiés ou booking direct dans l’agenda du Sales.
          <br />
          Le résultat : des rendez-vous qualifiés et une équipe commerciale qui se concentre uniquement sur les bons prospects.
        </>
      ),
      tools: toolMap.rdv,
    },
  ]
  
  

const ProcessAndStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 pb-20 flex flex-col gap-12 items-center justify-center" id="strategie">
      {/* Titre principal */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-6">
          Notre <span className="text-purple">approche multicanal</span> étape par étape
        </h2>
        <p className="text-white text-lg font-medium mb-4">
          Nous accompagnons nos clients à chaque étape de la prospection multicanal, en automatisant les tâches les plus chronophages pour générer des résultats concrets.
        </p>
      </div>

      {/* Étapes avec outil sous chaque bloc */}
      <BentoGrid className="md:grid-cols-3">
        {steps.map((step, index) => (
          <BentoGridItem
            key={index}
            title={step.title}
            description={
                <div className="flex flex-col justify-between h-full">
                  <p>{step.description}</p>
                  <div className="mt-4 flex justify-center items-center pt-4">
                    <AnimatedTooltip items={step.tools} />
                  </div>
                </div>
              }
              
            icon={step.icon}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default ProcessAndStack
