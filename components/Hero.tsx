import { FlipWords } from "./ui/flip-words";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { FaCalendarAlt } from "react-icons/fa";
import { DottedMap } from "./ui/dotted-map";

const Hero = () => {
  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
    { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
    { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
    { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
    { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
    { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
    { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
    { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
    { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
    { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
    { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
    { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
  ];

  return (
    <div className="pb-10 pt-20 mb-4 md:mb-16" id="acceuil">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="oklch(var(--primary))"
        />
        <Spotlight
          className="h-[70vh] w-[50vw] top-10 left-full"
          fill="oklch(var(--primary))"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="oklch(var(--accent))"
        />
      </div>

      <div className="h-[60vh] md:h-[65vh] w-full bg-background absolute top-10 left-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 opacity-30">
          <DottedMap markers={markers} />
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <p className="uppercase tracking-widest text-md text-primary max-w-80 mb-5">
            Marketing & data automation
          </p>

          <div className="text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-normal font-bold md:font-normal text-foreground">
            Création de solution d&apos;IA personnalisées{" "}
            <br className="hidden sm:block" /> pour vos services{" "}
            <br className="hidden sm:block" />
            <FlipWords
              words={[
                "Marketing",
                "Data",
                "Ressources Humaines",
                "Service Client",
                "Finance",
                "Opérations",
              ]}
              duration={3000}
            />
          </div>

          {/* Bouton Prendre rendez-vous */}
          <div className="lg:mt-0 mt-4 min-w-[230px]">
            <MagicButton
              title="Prendre rendez-vous"
              icon={<FaCalendarAlt />}
              position="right"
              handleClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
