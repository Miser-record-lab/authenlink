import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const Features = () => {
  return (
    <div className="py-20" id="presentation">  
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        <p className="text-center text-2xl sm:text-3xl text-white mb-20">
          Optez pour une <span className="text-purple">infrastructure optimisée</span> pour automatiser, analyser et maximiser vos performances.
        </p>

        <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6">
          Nos <span className="text-purple">Infrastructures</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">

          {/* Infrastructure 1 - Développement Web & Optimisation */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                
                {/* Titre */}
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Infrastructure <span className="text-purple">Web & SEO Automatisé</span>
                </CardItem>

                {/* Description principale */}
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Développement de sites web performants, création de landing pages optimisées et intégration de blogs SEO automatisés pour générer du trafic qualifié.
                </CardItem>

                {/* Bénéfice */}
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  🚀 <strong>Bénéfice :</strong> Améliorez votre infrastructure web pour en faire un outil d’acquisition client puissant et automatisé.
                </CardItem>


                {/* Image */}
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/code.jpg"
                    alt="Création de sites web et SEO automatisé"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>

              </CardBody>
            </CardContainer>
          </div>


          {/* Infrastructure 2 - Automatisation des Processus */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Infrastructure d’<span className="text-purple">Automatisation & IA</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Mise en place de workflows automatisés avec <span className="text-purple">n8n</span> et intégration de langages d’IA avancée pour l’optimisation des processus métier.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  🤖 <strong>Bénéfice :</strong> Des processus optimisés, une gestion plus rapide et une réduction des tâches manuelles.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/workflown8n.jpg"
                    alt="Workflow Automation & AI"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>


          {/* Infrastructure 3 - Gestion et Analyse des Données */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Infrastructure de <span className="text-purple">Data Analyse</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Intégration de solutions comme <span className="text-purple">Metabase</span> pour transformer vos données en insights actionnables.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  📊 <strong>Bénéfice :</strong> Améliorez vos prises de décisions grâce à une visualisation des KPI et du ROI.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/metabasecustomers.jpg"
                    alt="Metabase Analytics"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Infrastructure 4 - Prospection & Cold Mailing */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Infrastructure de <span className="text-purple">Prospection & Cold Emailing</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Mise en place d’une infrastructure <span className="text-purple">Mautic</span> pour automatiser vos campagnes de prospection et maximiser la conversion.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  📩 <strong>Bénéfice :</strong> Envoyez des campagnes ultra-personnalisées et suivez vos résultats en temps réel.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/mautictest.jpg"
                    alt="Mautic Cold Emailing"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
