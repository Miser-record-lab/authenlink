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
} from "@/components/ui/resizable-navbar";
import { navItemsMulticanal } from "@/data/navItemsMulticanal";
import HeroMulticanal from "@/components/multicanal/HeroMulticanal";
import ProcessAndStack from "@/components/multicanal/ProcessAndStack";
import MulticanalFooter from "@/components/multicanal/MulticanalFooter";
import MindMapMulticanal from "@/components/multicanal/Mindmap";
import Tools from "@/components/Tools";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useState } from "react";

export default function MulticanalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItemsMulticanal} />
          <NavbarButton href="#rendez-vous" variant="dark">
            Rendez-vous
          </NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItemsMulticanal.map((item, idx) => (
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
        </div>
      </TracingBeam>
    </main>
  );
}
