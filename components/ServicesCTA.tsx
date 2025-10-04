"use client";

import Link from "next/link";
import { Button } from "@/components/ui/MovingBorders";
import { FaRobot, FaEnvelopeOpenText } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";

const offers = [
  {
    id: 1,
    iconBig: <FaEnvelopeOpenText className="text-5xl text-white" />,
    icon: <FaEnvelopeOpenText className="text-2xl text-white" />,
    title: "Infrastructure Marketing",
    desc: "Solutions clés en main pour votre acquisition : campagnes multicanales, génération de leads qualifiés et automatisation de votre prospection.",
    href: "/multicanal",
  },
  {
    id: 2,
    iconBig: <FaRobot className="text-5xl text-white" />,
    icon: <FaRobot className="text-2xl text-white" />,
    title: "Agents IA & Automatisation",
    desc: "Optimisation de vos processus métiers grâce à l'intelligence artificielle : agents conversationnels, automatisation des tâches et développement d'outils sur mesure.",
    href: "/agents",
  },
];

const ServiceCTA = () => {
  return (
    <section
      className="py-20 max-w-7xl mx-auto flex flex-col items-center"
      id="services"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        <span className="text-purple">Deux expertises</span> au service de votre
        croissance
      </h2>
      <p className="text-center text-lg text-white mb-12">
        Intelligence artificielle et marketing digital : des solutions
        innovantes pour transformer vos opérations et accélérer votre
        développement.
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 justify-center items-center">
        {offers.map((offer) => (
          <Button
            key={offer.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex flex-col text-white border-neutral-200 dark:border-slate-800 p-4"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-white">{offer.iconBig}</div>
              <h3 className="text-2xl font-bold">{offer.title}</h3>
              <p className="text-white-100 font-medium">{offer.desc}</p>
            </div>

            <div className="flex justify-center mt-4 md:mt-0">
              <Link href={offer.href}>
                <MagicButton
                  title="Découvrir"
                  icon={offer.icon}
                  position="left"
                />
              </Link>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ServiceCTA;
