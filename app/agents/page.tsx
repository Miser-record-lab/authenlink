"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
  NavbarThemeToggle,
} from "@/components/ui/resizable-navbar";
import { navItemsAgents } from "@/data/navItemsAgents";
import Tools from "@/components/Tools";
import HeroAgents from "@/components/agents/HeroAgents";
import AgentServices from "@/components/agents/AgentServices";
import FooterAgents from "@/components/agents/FooterAgents";
import AIModelCards from "@/components/agents/AIModelCards";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useState } from "react";

export default function AgentsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItemsAgents} />
          <div className="flex items-center gap-2">
            <NavbarThemeToggle />
            <NavbarButton href="/#contact" variant="dark">
              Rendez-vous
            </NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <NavbarThemeToggle />
              <MobileNavToggle
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItemsAgents.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <TracingBeam>
        <div className="w-full">
          <HeroAgents />

          {/* Section Agents IA */}
          <section id="agents-ia">
            <AgentServices />
          </section>

          {/* Section Fine-Tuning & RAG */}
          <section id="fine-tuning-rag">
            <AIModelCards />
          </section>

          {/* Section Prise de RDV */}
          <section id="rendez-vous">
            <FooterAgents />
          </section>

          <Tools />
        </div>
      </TracingBeam>
    </main>
  );
}
