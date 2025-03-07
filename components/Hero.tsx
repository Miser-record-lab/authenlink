import React from 'react';
import { FlipWords } from './ui/flip-words';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { FaCalendarAlt, FaPlayCircle } from 'react-icons/fa';


const Hero = () => {

  return (
    <div className="pb-10 pt-20 mb-20" id="acceuil">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[70vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-[60vh] md:h-[65vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Nouveau texte avec FlipWords pour les services */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-5">
            Marketing & data automation
          </p>
          <p className="text-center text-[40px] md:text-5xl lg:text-6xl">
            Création de solution d&apos;IA personnalisées <br /> pour vos services <br />
            <FlipWords
              words={["Marketing", "Data", "Ressources Humaines", "Service Client", "Finance", "Opérations"]}
              duration={3000} // Durée du changement des mots // Vous pouvez ajouter des classes CSS ici
            />
          </p>
          <div className="flex gap-10">
              {/* Bouton Voir la présentation */}
              <a href="/presentation">
                <MagicButton
                  title="Voir la présentation"
                  icon={<FaPlayCircle />} // Icône lecture pour indiquer une vidéo ou une présentation
                  position="right"
                />
              </a>

              {/* Bouton Prendre rendez-vous */}
              <a href="#rendez-vous">
                <MagicButton
                  title="Prendre rendez-vous"
                  icon={<FaCalendarAlt />} // Icône calendrier pour indiquer la prise de rendez-vous
                  position="right"
                />
              </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;


