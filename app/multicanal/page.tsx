"use client"

import { FloatingNav } from "@/components/ui/floatingNav"
import { navItemsMulticanal } from "@/data/navItemsMulticanal"
import HeroMulticanal from "@/components/multicanal/HeroMulticanal"
import ProcessAndStack from "@/components/multicanal/ProcessAndStack"
import MulticanalFooter from "@/components/multicanal/MulticanalFooter"
import MindMapMulticanal from "@/components/multicanal/Mindmap"
import Tools from "@/components/Tools"
import N8nChat from "@/components/N8nChat"

export default function MulticanalPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItemsMulticanal} />

      <div className="w-full">
        <HeroMulticanal />
        <section id="strategie">
          <ProcessAndStack />
        </section>
        <section id="funnel">
          <MindMapMulticanal />
        </section>
        <section id="rendez-vous">
          <MulticanalFooter />
        </section>
        <Tools />
        <N8nChat />
      </div>
    </main>
  )
}
