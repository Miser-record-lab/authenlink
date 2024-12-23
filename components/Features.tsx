import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Importation des composants de cartes
import Image from "next/image";  // Importation de l'image de Next.js

const Features = () => {
  return (
    <div className="py-20" id="presentation">  
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6 z-110">
          Nos <span className="text-purple">Solutions</span>
        </h2>
        {/* Grille de 4 cartes */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 justify-center items-center">

        <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Développement Web & <span className="text-purple">Optimisation</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Nous utilisons le <span className="text-purple">code</span> pour améliorer vos différents services en tirant pleinement parti de vos outils existants.
                </CardItem>

                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/code.jpg"  // Remplace par l'image du workflow N8n
                    alt="code image"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

         <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Automatisation des <span className="text-purple">Processus interne</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Utiliser l&apos;<span className="text-purple">IA</span> pour automatiser les tâches répétitives et accélérer votre croissance.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/workflown8n.jpg"  // Remplace par l'image des outils Open-Source
                    alt="Outils Open-Source"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>


          {/* Carte 1 - Marketing Automatisé */}


          {/* Carte 2 - Analyse de données */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Gestions et analyses des <span className="text-purple">Données</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Collecter, tracker, analyser et exploiter les données de votre plateforme pour optimiser la <span className="text-purple">gestion de vos leads</span> et améliorer la <span className="text-purple">réactivité de votre service client.</span>
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/metabasecustomers.jpg"  // Remplace par l'image de Metabase (en attendant)
                    alt="Metabase"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          <div className="flex justify-center">
            <CardContainer className="relative w-full flex flex-wrap">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                Infrastructure <span className="text-purple">Email Marketing</span> & <span className="text-purple">Cold Mailing</span>
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Opter pour une infrastrucutre de marketing Automation pour <span className="text-purple">gérer</span> et <span className="text-purple">activer</span> vos leads grace à des campagnes sur mesure (BtoB & BtoC).
              </CardItem>

                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/mautictest.jpg"  // Remplace par l'image de Mautic
                    alt="Mautic"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Carte 3 - Assistant Virtuel */}
        </div>
      </div>
    </div>
  );
};

export default Features;
