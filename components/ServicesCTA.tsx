"use client";

import { FaRobot, FaEnvelopeOpenText } from "react-icons/fa";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaPython, FaJsSquare, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiN8N, SiMetabase, SiOpenai } from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect-hero";

const OffersServices = [
  {
    icon: <FaEnvelopeOpenText className="text-primary text-4xl" />,
    title: "Infrastructure Marketing & Growth",
    description:
      "Solutions clés en main pour votre acquisition : campagnes multicanales, génération de leads qualifiés et automatisation de votre prospection.",
    link: "/multicanal",
    buttonText: "En savoir plus",
  },
  {
    icon: <FaRobot className="text-primary text-4xl" />,
    title: "Agents IA & Automatisation",
    description:
      "Optimisation de vos processus métiers grâce à l'intelligence artificielle : agents conversationnels, automatisation des tâches et analyse en continue.",
    link: "/agents",
    buttonText: "En savoir plus",
  },
];

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 border-border bg-card p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  python: () => <FaPython className="w-6 h-6 text-foreground" />,

  javascript: () => <FaJsSquare className="w-6 h-6 text-foreground" />,

  n8n: () => <SiN8N className="w-6 h-6 text-foreground" />,

  metabase: () => <SiMetabase className="w-6 h-6 text-foreground" />,

  mail: () => <FaEnvelope className="w-6 h-6 text-foreground" />,

  openai: () => <SiOpenai className="w-6 h-6 text-primary" />,

  phone: () => <FaPhone className="w-6 h-6 text-foreground" />,
};

const ServiceCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-20 max-w-7xl mx-auto flex flex-col items-center"
      id="services"
    >
      <h2 className="text-center text-4xl font-bold text-foreground mb-8">
        <span className="text-primary">Deux expertises</span> au service de
        votre croissance
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-6">
        Intelligence artificielle et marketing digital : des solutions
        innovantes pour transformer vos opérations et accélérer votre
        développement.
      </p>
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
        <HoverEffect items={OffersServices} />
      </div>

      {/* Animated Beam Section */}
      <div className="w-full mt-10">
        <h3 className="text-center text-3xl font-bold text-foreground mb-4">
          Une <span className="text-primary">infrastructure</span> connectée
        </h3>
        <p className="text-center text-lg text-muted-foreground">
          Nous connectons vos outils existants pour créer un écosystème fluide
          et automatisé
        </p>

        <div
          className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background pb-10"
          ref={containerRef}
        >
          <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <Icons.python />
              </Circle>
              <Circle ref={div5Ref}>
                <Icons.phone />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <Icons.javascript />
              </Circle>
              <Circle ref={div4Ref} className="size-16">
                <Icons.openai />
              </Circle>
              <Circle ref={div6Ref}>
                <Icons.mail />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Icons.n8n />
              </Circle>
              <Circle ref={div7Ref}>
                <Icons.metabase />
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
