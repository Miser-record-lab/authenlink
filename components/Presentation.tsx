"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaCheckCircle, FaCode, FaDatabase, FaPython } from "react-icons/fa";
import { MdEmail, MdOutlineDataUsage, MdOutlineAutorenew } from "react-icons/md";
import { RiRobot2Fill, RiSearchEyeFill } from "react-icons/ri";
import { SiGoogleanalytics, SiJavascript, SiMautic, SiMetabase, SiN8N, SiReact } from "react-icons/si";


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        Des services <span className="text-purple">Sur-Mesure :</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
    {
        category: "Implémentation d’Agent IA",
        title: "Automatisez vos process avec l'IA",
        src: "/virtual-assistant.jpg",
        content: (
          <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
              Déployez des agents IA capables de répondre aux prospects, gérer le support client et optimiser votre productivité en entreprise.
            </p>
            <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
              <li className="flex items-center gap-2"><RiRobot2Fill className="text-purple-500" /> Chatbots & Assistants IA</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Automatisation des interactions</li>
              <li className="flex items-center gap-2"><FaCode className="text-purple-500" /> Intégration sur mesure</li>
            </ul>
            <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
            <ul className="flex gap-6 mt-2 text-3xl">
              <SiReact className="text-blue-500" />
              <SiJavascript className="text-yellow-500" />
              <FaPython className="text-green-500" />
              <SiN8N className="text-orange-500" />
            </ul>
          </div>
        ),
      },
  {
    category: "Prospection & Cold Emailing Automatique",
    title: "Générez des leads en automatique",
    src: "/email-automation.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
          Optimisez votre prospection grâce à des campagnes d’emailing automatisées et ultra-ciblées, intégrées avec vos outils CRM.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
          <li className="flex items-center gap-2"><MdEmail className="text-purple-500" /> Campagnes automatisées</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Ciblage avancé des leads</li>
          <li className="flex items-center gap-2"><MdOutlineAutorenew className="text-purple-500" /> Relances intelligentes</li>
        </ul>
        <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
        <ul className="flex gap-6 mt-2 text-3xl"> 
          <SiMautic className="text-blue-500" />
          <SiN8N className="text-orange-700" />
          <SiJavascript className="text-yellow-500" />
        </ul>
      </div>
    ),
  },

  {
    category: "Services Growth Hacking",
    title: "Boostez votre acquisition client",
    src: "/growth-hacking.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
          Exploitez les meilleures techniques de growth hacking pour augmenter votre visibilité et transformer vos visiteurs en clients.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
          <li className="flex items-center gap-2"><MdOutlineDataUsage className="text-purple-500" /> Stratégies data-driven</li>
          <li className="flex items-center gap-2"><RiSearchEyeFill className="text-purple-500" /> Tests A/B automatisés</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Optimisation du tunnel de conversion</li>
        </ul>
        <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
        <ul className="flex gap-6 mt-2 text-3xl">
          <SiMetabase className="text-blue-500" />
          <SiN8N className="text-orange-500" />
          <FaCode className="text-gray-500" />
        </ul>
      </div>
    ),
  },
  {
    category: "Gestion et Analyse des Données",
    title: "Prenez de meilleures décisions avec la data",
    src: "/data-analyse.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
          Centralisez, analysez et visualisez vos données pour optimiser votre gestion et prendre des décisions stratégiques basées sur des KPI précis.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
          <li className="flex items-center gap-2"><SiGoogleanalytics className="text-purple-500" /> Tableaux de bord interactifs</li>
          <li className="flex items-center gap-2"><FaDatabase className="text-purple-500" /> Analyse des performances & ROI</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Prise de décision basée sur la data</li>
        </ul>
        <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
        <ul className="flex gap-6 mt-2 text-3xl">
          <SiMetabase className="text-blue-500" />
          <SiGoogleanalytics className="text-red-500" />
          <FaPython className="text-green-500" />
        </ul>
      </div>
    ),
  },
  
  {
    category: "Scraping & Enrichissement de Données",
    title: "Améliorez votre sourcing et la qualité de vos leads",
    src: "/scrapping.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
          Automatisez l&apos;extraction et l&apos;enrichissement des leads pour optimiser leur qualité et maximiser vos conversions.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
          <li className="flex items-center gap-2"><RiSearchEyeFill className="text-purple-500" /> Scraping et collecte de données</li>
          <li className="flex items-center gap-2"><MdOutlineAutorenew className="text-purple-500" /> Enrichissement et validation des leads</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Augmentation du taux de conversion</li>
        </ul>
        <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
        <ul className="flex gap-6 mt-2 text-3xl">
          <SiN8N className="text-orange-500" />
          <FaPython className="text-green-500" />
          <SiJavascript className="text-yellow-500" />
        </ul>
      </div>
    ),
  },
  
];



