"use client"

import React from 'react';
import { FlipWords } from '../ui/flip-words';
import MagicButton from '../ui/MagicButton';
import { Spotlight } from '../ui/Spotlight';
import { FaCalendarAlt } from 'react-icons/fa';

const HeroAgents = () => {
  return (
    <div className="pb-10 pt-20 mb-4 md:mb-16" id="agents">
      {/* Background Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[70vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Gradient Grid */}
      <div
        className="h-[60vh] md:h-[65vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100 mb-5">
            Agents IA, automatisation & développement web
          </p>

          <p className="text-center text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-normal font-bold md:font-normal mb-4">
            Automatisez vos processus <br />
            et boostez vos équipes avec des <br />
            <FlipWords
              words={["chatbots", "agents IA", "formulaires intelligents", "Landing Pages", "workflows automatisés", "apps sur-mesure"]}
              duration={3000}
            />
          </p>

          <div className="flex gap-10 mt-6">
            <a href="https://calendly.com/authenlink/30min" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Prendre rendez-vous"
                icon={<FaCalendarAlt />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAgents;
