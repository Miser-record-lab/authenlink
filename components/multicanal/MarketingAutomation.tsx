"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  FaRobot,
  FaChartLine,
  FaVideo,
  FaImage,
  FaCalendar,
} from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";

const MarketingAutomation = () => {
  const marketingServices = [
    {
      quote:
        "Génération automatique de plans marketing complets avec analyse de marché, personas, calendrier éditorial et KPIs. Gagnez 15h/semaine sur votre stratégie marketing.",
      name: "Plans Marketing IA",
      title: "⏱️ 90% de temps gagné • 📊 Stratégies data-driven",
    },
    {
      quote:
        "Production de contenus optimisés pour tous vos réseaux sociaux : LinkedIn, Instagram, X, TikTok. Jusqu'à 120 posts/mois générés automatiquement avec votre ligne éditoriale.",
      name: "Contenu Multi-Réseaux",
      title: "📱 120 posts/mois • 🎯 Engagement +250%",
    },
    {
      quote:
        "Création automatisée de visuels sur-mesure pour vos posts, stories et publicités. Design adapté à votre charte graphique avec variations A/B pour optimiser la performance.",
      name: "Visuels & Design IA",
      title: "🎨 300+ visuels/mois • ⚡ Production 10x plus rapide",
    },
    {
      quote:
        "Production de vidéos marketing, reels et ads optimisés pour chaque plateforme. Scripts, montage, sous-titres et formats adaptés automatiquement. Jusqu'à 40 vidéos/mois.",
      name: "Vidéos & Publicités",
      title: "🎬 40 vidéos/mois • 💰 Coût réduit de 85%",
    },
  ];

  return (
    <section className="pt-10 pb-20 max-w-7xl mx-auto px-4 md:px-10">
      {/* En-tête avec présentation */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaRobot className="text-primary text-3xl" />
          <h2 className="text-4xl font-bold text-foreground">
            Marketing <span className="text-primary">100% automatisé</span> par
            IA
          </h2>
        </div>

        <p className="text-lg text-muted-foreground mb-6">
          Transformez votre production marketing grâce à nos workflows IA de
          pointe. De la stratégie à la création de contenus, visuels et vidéos :
          tout est automatisé pour multiplier votre output par 10.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaChartLine className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">90%</p>
            <p className="text-sm text-muted-foreground">Temps gagné</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaRobot className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">120+</p>
            <p className="text-sm text-muted-foreground">Posts/mois</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaImage className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">300+</p>
            <p className="text-sm text-muted-foreground">Visuels/mois</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/50">
            <FaVideo className="text-primary text-3xl mb-2" />
            <p className="text-2xl font-bold text-foreground">40+</p>
            <p className="text-sm text-muted-foreground">Vidéos/mois</p>
          </div>
        </div>
      </div>

      {/* Cards défilantes */}
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={marketingServices}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Call to action */}
      <div className="text-center mt-6 flex flex-col items-center gap-3">
        <p className="text-muted-foreground text-lg max-w-2xl">
          Vous souhaitez découvrir les workflows IA adaptés à votre entreprise
          et multiplier votre production de contenus ?
        </p>
        <a
          href="https://calendly.com/authenlink/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Prendre rendez-vous"
            icon={<FaCalendar />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default MarketingAutomation;
