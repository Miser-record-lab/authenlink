"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  FaCog,
  FaDatabase,
  FaCode,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";
import { AnimatedSpan, TypingAnimation, Terminal } from "./ui/terminal";

const Experience = () => {
  return (
    <div
      className=" max-w-7xl mx-auto flex flex-col items-center px-5"
      id="Collaboration"
    >
      <h2 className="text-center text-4xl font-bold text-foreground mb-8">
        Notre <span className="text-primary">process d’ingénierie</span> en 5
        étapes
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl">
        De l’audit technique à l’implémentation, nous concevons une
        infrastructure intelligente, automatisons vos workflows et intégrons des
        solutions IA sur mesure pour optimiser vos opérations et vos données.
      </p>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 w-full">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<FaCog className="h-4 w-4 text-foreground" />}
          title="1. Audit de Stack & Workflows"
          description="Inventaire complet de vos systèmes existants. Analyse des workflows métiers et identification des points d’optimisation."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<FaDatabase className="h-4 w-4 text-foreground" />}
          title="2. Architecture & Automatisation"
          description="Conception de pipelines techniques et workflows automatisés. Mise en place de logiques de collecte, traitement et enrichissement des données."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<FaCode className="h-4 w-4 text-foreground" />}
          title="3. Développement sur mesure"
          description="Création d’outils techniques adaptés : no-code, Python, React. Développement d’agents IA, APIs, webhooks et intégrations CRM."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<FaUserTie className="h-4 w-4 text-foreground" />}
          title="4. Déploiement & Intégration"
          description="Mise en production coordonnée avec vos équipes. Intégration complète dans vos systèmes, tests et validation de performance."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<FaChartLine className="h-4 w-4 text-foreground" />}
          title="5. Formation & Évolution"
          description="Formation technique pour vos équipes. Documentation et support pour faire évoluer vos workflows et infrastructures."
        />
      </ul>

      <div className="mt-10">
        <Terminal>
          <TypingAnimation>&gt; npm authenlink --init</TypingAnimation>

          <AnimatedSpan className="text-green-500">
            ✔ Audit de votre stack et workflows en cours...
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Analyse des systèmes existants complétée.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Identification des points d&apos;optimisation.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Conception de l&pos;architecture technique.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Design des workflows automatisés.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Développement des solutions sur mesure.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Tests et validation en cours.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Déploiement en production.
          </AnimatedSpan>

          <AnimatedSpan className="text-green-500">
            ✔ Intégration avec vos systèmes complétée.
          </AnimatedSpan>

          <AnimatedSpan className="text-blue-500">
            <span>ℹ Formation équipes:</span>
            <span className="pl-2">- Documentation complète</span>
            <span className="pl-2">- Support technique</span>
          </AnimatedSpan>

          <TypingAnimation className="text-muted-foreground">
            Success! Votre infrastructure est prête.
          </TypingAnimation>
        </Terminal>
      </div>
    </div>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-card p-6 md:p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-border p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-foreground md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-muted-foreground md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Experience;
