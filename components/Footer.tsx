import { FaCalendar } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-1">
      
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à <span className="text-purple">optimiser</span> vos services et <span className="text-purple">accélérer</span> votre croissance?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Prennez rendez-vous et discutons dès aujourd&apos;hui de la manière dont je peux vous aider <br />
          à atteindre vos objectifs.
        </p>

        {/* Lien vers la section "Rendez-vous" */}
        <a href="#rendez-vous">
          <MagicButton
            title="Prendre rendez-vous"
            icon={<FaCalendar />} // Icône ajoutée
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Authenlink/authenlink.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
