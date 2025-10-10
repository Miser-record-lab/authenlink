import { FaCalendarAlt } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";
import { useRouter } from "next/navigation";

const FooterAgents = () => {
  const router = useRouter();

  const handleNavigateToCollaboration = () => {
    router.push("/#contact");
  };
  return (
    <footer className="w-full pt-20 pb-1" id="Rendez-vous">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Envie de <span className="text-primary">créer votre agent IA</span> ou
          d&apos;<span className="text-primary">automatiser</span> vos workflows
          ?
        </h1>
        <p className="text-muted-foreground md:mt-10 my-5 text-center max-w-2xl">
          Discutons ensemble de vos besoins en automatisation, extraction de
          données ou assistants IA sur mesure. Une démo ou une stratégie
          concrète peut démarrer en 30 minutes.
        </p>

        <div className="flex gap-10 mt-6">
          <MagicButton
            title="Prendre rendez-vous"
            icon={<FaCalendarAlt />}
            position="right"
            handleClick={handleNavigateToCollaboration}
          />
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Authenlink/authenlink.com
        </p>
      </div>
    </footer>
  );
};

export default FooterAgents;
