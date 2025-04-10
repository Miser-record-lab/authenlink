"use client"

import { FaCalendar } from "react-icons/fa"
import MagicButton from "@/components/ui/MagicButton"

const MulticanalFooter = () => {
  return (
    <footer className="w-full pt-20 pb-1 bg-black-100" id="rendez-vous">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Prêt à <span className="text-purple">lancer</span> une campagne de prospection multicanale ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Réservez un créneau de 30 minutes pour échanger sur vos objectifs, vos cibles, et comment on peut automatiser votre acquisition avec efficacité.
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

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Authenlink/authenlink.com
        </p>
      </div>
    </footer>
  )
}

export default MulticanalFooter
