"use client";

import ContactAndAppointment from "@/components/ContactAndAppointment";
import Footer from "@/components/Footer";
import { BentoGridThirdDemo } from "@/components/GridTemplate";
import Hero from "@/components/Hero";
import ServicesCTA from "@/components/ServicesCTA";
import Tools from "@/components/Tools";
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
import Experience from "@/components/WayToWork";
import { navItems } from "@/data/navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-1 px-1">
      <div className=" w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton href="#contact" variant="dark">
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
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="text-neutral-600 dark:text-neutral-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <TracingBeam>
          <Hero />
          <BentoGridThirdDemo />
          <ServicesCTA />
          <Experience />
          <ContactAndAppointment />
          <Footer />
          <Tools />
        </TracingBeam>
      </div>
    </main>
  );
}
