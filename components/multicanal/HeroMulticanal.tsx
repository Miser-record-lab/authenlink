import { FlipWords } from "../ui/flip-words";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlight";
import { FaCalendarAlt } from "react-icons/fa";

const HeroMulticanal = () => {
  return (
    <div className="pb-10 pt-20 mb-4 md:mb-16" id="multicanal">
      {/* Background Spotlight Effects */}
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

      <div className="h-[60vh] md:h-[65vh] w-full bg-background absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-primary max-w-100 mb-5">
            Prospection multicanale intelligente
          </p>

          <p className="text-center text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-normal font-bold md:font-normal mb-4">
            De la donnée au <span className="text-primary">rendez-vous</span>
            <br />
            grâce à des campagnes <br />
            multicanales via{" "}
            <FlipWords
              words={["emails", "LinkedIn", "WhatsApp", "SMS"]}
              duration={2500}
            />
          </p>

          <div className="flex gap-10 mt-6">
            <a
              href="https://calendly.com/authenlink/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default HeroMulticanal;
