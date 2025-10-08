"use client";

import { WobbleCard } from "../ui/wobble-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaBolt, FaPenFancy } from "react-icons/fa";

const toolsLanding = [
  {
    id: 1,
    name: "Next.js",
    designation: "Framework web rapide",
    image: "/tools/logo-nextjs.png",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "Design system",
    image: "/tools/logo-tailwindcss.png",
  },
  {
    id: 3,
    name: "Vercel",
    designation: "Déploiement instantané",
    image: "/tools/logo-vercel.png",
  },
  {
    id: 4,
    name: "SEO Optimisé",
    designation: "Référencement naturel",
    image: "/tools/logo-seo.png",
  },
];

const toolsApps = [
  {
    id: 5,
    name: "Bubble.io",
    designation: "No-code app builder",
    image: "/tools/logo-bubble.png",
  },
  {
    id: 6,
    name: "React",
    designation: "Interface personnalisée",
    image: "/tools/logo-react.png",
  },
  {
    id: 7,
    name: "Supabase",
    designation: "ORM moderne",
    image: "/tools/logo-supabase.png",
  },
  {
    id: 8,
    name: "Node.js",
    designation: "Back-end serveur",
    image: "/tools/logo-nodejs.png",
  },
];

const DevWebCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-foreground text-center mb-10">
        Développement web & interfaces intelligentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Landing Page Card */}
        <WobbleCard>
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FaPenFancy className="text-primary text-2xl" />
              <h3 className="text-white text-2xl font-semibold">
                Landing Pages optimisées
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Création de landing pages modernes & efficaces pour capter vos
              prospects. Optimisation du tunnel de conversion, du SEO, et
              accompagnement sur le contenu.
            </p>
            <div className="pt-4 flex flex-wrap justify-center">
              <AnimatedTooltip items={toolsLanding} />
            </div>
          </div>
        </WobbleCard>

        {/* App Interne Card */}
        <WobbleCard>
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FaBolt className="text-primary text-2xl" />
              <h3 className="text-white text-2xl font-semibold">
                Apps internes & outils métiers
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Conception d&apos;applications internes en no-code (Bubble) ou en
              code, avec déploiement front-end et back-end. Base de données, UI
              & automatisations incluses.
            </p>
            <div className="pt-4 flex flex-wrap justify-center">
              <AnimatedTooltip items={toolsApps} />
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default DevWebCards;
