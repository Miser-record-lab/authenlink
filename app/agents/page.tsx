"use client"

import { FloatingNav } from "@/components/ui/floatingNav"
import { navItemsAgents } from "@/data/navItemsAgents"
import Tools from "@/components/Tools"
import N8nChat from "@/components/N8nChat"
import HeroAgents from "@/components/agents/HeroAgents"
import AgentServices from "@/components/agents/AgentServices"
import FooterAgents from "@/components/agents/FooterAgents"
import DevWebCards from "@/components/agents/DevWebCard"

export default function AgentsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItemsAgents} />

      <div className="w-full">
        <HeroAgents />

        {/* Section Agents IA */}
        <section id="agents-ia">
          <AgentServices />
        </section>

        {/* Section Développement Web */}
        <section id="developpement">
          <DevWebCards />
        </section>

        {/* Section Prise de RDV */}
        <section id="rendez-vous">
          <FooterAgents />
        </section>

        <Tools />
        <N8nChat />
      </div>
    </main>
  )
}
