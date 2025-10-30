"use client";

import {
  FaRobot,
  FaSearch,
  FaBrain,
  FaPlug,
  FaExternalLinkAlt,
} from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { NumberTicker } from "../ui/number-ticker";
import { HoverEffect } from "../ui/card-hover-effect-hero";

const GEO = () => {
  const handleNavigateToDocs = () => {
    window.open("https://docs.authenlink.com/docs/geo", "_blank");
  };

  const piliers = [
    {
      title: (
        <div className="flex items-center gap-3">
          <FaSearch className="text-primary text-2xl" />
          <span>GEO & SEO Nouvelle Génération</span>
        </div>
      ),
      description:
        "Optimisez vos contenus pour être cité et recommandé par les IA comme ChatGPT, Claude, Perplexity, et les moteurs de recherche traditionnels. Apparaissez dans les réponses générées par les assistants IA les plus populaires.",
      link: "#",
    },
    {
      title: (
        <div className="flex items-center gap-3">
          <FaPlug className="text-primary text-2xl" />
          <span>Intégration Web IA</span>
        </div>
      ),
      description:
        "Rendez votre site web interactif pour les IA grâce aux standards modernes (MCP, APIs structurées) et permettez aux assistants d'interagir directement avec vos services. De la découverte à l'action en une seule conversation.",
      link: "#",
    },
  ];

  return (
    <section className="pt-10 pb-20 max-w-7xl mx-auto px-4 md:px-10" id="geo">
      {/* En-tête avec présentation */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-4xl font-bold text-foreground">
            <span className="text-primary">GEO</span> & Visibilité IA
          </h2>
        </div>

        <p className="text-lg text-muted-foreground mb-6">
          Optimisez votre présence pour les moteurs de recherche IA et préparez
          votre site web pour l&apos;ère de l&apos;interaction IA. Les
          intelligences artificielles comme ChatGPT, Claude, Perplexity et
          Gemini deviennent les nouveaux intermédiaires entre vous et vos
          clients.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaSearch className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">
              <NumberTicker
                value={60}
                decimalPlaces={0}
                className="text-2xl font-bold tracking-tighter whitespace-pre-wrap text-foreground"
              />
              %
            </p>
            <p className="text-sm text-muted-foreground">Recherches via IA</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaBrain className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">
              <NumberTicker
                value={4}
                decimalPlaces={0}
                className="text-2xl font-bold tracking-tighter whitespace-pre-wrap text-foreground"
              />
              +
            </p>
            <p className="text-sm text-muted-foreground">Plateformes IA</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaRobot className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">
              <NumberTicker
                value={100}
                decimalPlaces={2}
                className="text-2xl font-bold tracking-tighter whitespace-pre-wrap text-foreground"
              />
              %
            </p>
            <p className="text-sm text-muted-foreground">Optimisation GEO</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaPlug className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">MCP</p>
            <p className="text-sm text-muted-foreground">Intégration IA</p>
          </div>
        </div>
      </div>

      {/* Deux piliers */}
      <div className="mb-12">
        <HoverEffect items={piliers} className="grid-cols-1 md:grid-cols-2" />
      </div>

      {/* Call to action */}
      <div className="text-center flex flex-col items-center gap-3">
        <p className="text-muted-foreground text-lg max-w-2xl">
          Découvrez comment apparaître dans ChatGPT, Perplexity et Claude, et
          comment intégrer votre business avec les assistants IA.
        </p>
        <div className="flex gap-4 mt-6">
          <MagicButton
            title="Consulter la documentation"
            icon={<FaExternalLinkAlt />}
            position="right"
            handleClick={handleNavigateToDocs}
          />
        </div>
      </div>
    </section>
  );
};

export default GEO;
