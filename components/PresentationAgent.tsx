"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaCheckCircle, FaCode,  FaPython, FaRocket, FaSearch } from "react-icons/fa";
import { MdEmail,  MdOutlineAutorenew, MdWeb } from "react-icons/md";
import { RiRobot2Fill, RiSearchEyeFill } from "react-icons/ri";
import { SiFramer,  SiJavascript, SiMautic,  SiN8N, SiReact } from "react-icons/si";

export function AppleCardsCarouselDemo() {
  const cards = services.map((service, index) => (
    <Card key={service.src} card={service} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        Nos Services <span className="text-purple">IA & Automatisation</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const services = [
  {
    category: "Chatbot Support Client",
    title: "Automatisez vos échanges clients",
    src: "/virtual-assistant.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl">
          Mettez en place un chatbot IA intelligent pour gérer votre service client et répondre instantanément aux demandes.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl space-y-2 mt-4">
          <li className="flex items-center gap-2"><RiRobot2Fill className="text-purple-500" /> Support 24/7</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Intégration CRM & site web</li>
          <li className="flex items-center gap-2"><FaCode className="text-purple-500" /> Intelligence et apprentissage</li>
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
    category: "Email Manager",
    title: "Automatisez la gestion de vos emails",
    src: "/email-automation.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl">
          Classement automatique des emails, réponses intelligentes et gestion optimisée de votre boîte de réception.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl space-y-2 mt-4">
          <li className="flex items-center gap-2"><MdEmail className="text-purple-500" /> Tri intelligent</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Rédaction automatisée</li>
          <li className="flex items-center gap-2"><MdOutlineAutorenew className="text-purple-500" /> Gain de temps</li>
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
    category: "Automatisation postes Réseaux Sociaux",
    title: "Publiez du contenu automatiquement",
    src: "/growth-hacking.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl">
          Un agent IA pour gérer vos publications sur Instagram, Facebook et LinkedIn.
        </p>
        <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl space-y-2 mt-4">
          <li className="flex items-center gap-2"><FaRocket className="text-purple-500" /> Publication automatique</li>
          <li className="flex items-center gap-2"><MdOutlineAutorenew className="text-purple-500" /> Planification avancée</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Contenu généré par IA</li>
        </ul>
        <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
        <ul className="flex gap-6 mt-2 text-3xl">
          <SiN8N className="text-orange-500" />
          <SiFramer className="text-purple-500" />
          <SiJavascript className="text-yellow-500" />
        </ul>
      </div>
    ),
  },
    {
      category: "Prospection & Cold Emailing Automatique",
      title: "Générez des leads en automatique",
      src: "/prospection.jpg",
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
      category: "Développement Web & Optimisation SEO",
      title: "Boostez votre visibilité et vos conversions",
      src: "/devweb.jpg",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-black-300 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-2xl font-sans max-w-3xl">
            Améliorez votre présence en ligne avec un site optimisé, rapide et structuré pour un référencement naturel efficace.
          </p>
          <ul className="text-neutral-600 dark:text-neutral-100 text-lg md:text-xl font-sans max-w-3xl mx-auto mt-4 space-y-2">
            <li className="flex items-center gap-2"><FaRocket className="text-blue-500" /> Création de landing pages performantes</li>
            <li className="flex items-center gap-2"><MdWeb className="text-blue-500" /> Développement et intégration de blogs</li>
            <li className="flex items-center gap-2"><FaSearch className="text-blue-500" /> Optimisation SEO on-page et technique</li>
            <li className="flex items-center gap-2"><MdOutlineAutorenew className="text-blue-500" /> Automatisation des processus web (formulaires, tracking, etc.)</li>
          </ul>
          <h4 className="text-lg font-bold mt-6">Outils utilisés :</h4>
          <ul className="flex gap-6 mt-2 text-3xl">
            <SiJavascript className="text-yellow-500" />
            <FaPython className="text-green-500" />
            <SiN8N className="text-orange-500" />
            <SiFramer className="text-purple-500" />
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

export default AppleCardsCarouselDemo;
