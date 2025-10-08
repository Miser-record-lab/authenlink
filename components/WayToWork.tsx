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

const Experience = () => {
  return (
    <div
      className="py-20 max-w-7xl mx-auto flex flex-col items-center px-5"
      id="Collaboration"
    >
      <h2 className="text-center text-4xl font-bold text-foreground mb-8">
        Notre <span className="text-primary">stack technologique</span> en 5
        étapes
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl">
        Du code personnalisé à l&apos;analyse de données : une infrastructure technique complète pour automatiser votre prospection et générer des leads qualifiés.
      </p>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 w-full">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<FaCog className="h-4 w-4 text-foreground" />}
          title="1. Audit Technique & Stack"
          description="Analyse de votre architecture CRM, APIs et bases de données. Mapping complet de vos flux de prospection et génération de leads sous 48h."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <FaDatabase className="h-4 w-4 text-foreground" />
          }
          title="2. Architecture Data & Marketing"
          description="Conception de pipelines d&apos;automatisation pour la prospection. Stratégie de data enrichment et scoring de leads avec ROI chiffré."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<FaCode className="h-4 w-4 text-foreground" />}
          title="3. Développement & Intégrations"
          description="Code sur-mesure : agents IA, webhooks, scraping éthique, API REST/GraphQL. Intégrations CRM, outils marketing et systèmes de génération de leads avec tests A/B."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <FaUserTie className="h-4 w-4 text-foreground" />
          }
          title="4. Formation Technique Équipes"
          description="Montée en compétences sur vos outils d&apos;automatisation, analyse de données marketing et workflows de prospection. Documentation technique et guides d&apos;utilisation."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <FaChartLine className="h-4 w-4 text-foreground" />
          }
          title="5. Analytics & Monitoring Tech"
          description="Dashboard temps réel avec KPIs de prospection, taux de conversion et performance des campagnes. Data analysis continue, optimisation algorithmique et support technique illimité 6 mois."
        />
      </ul>
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
