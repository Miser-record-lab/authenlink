"use client";

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
          Ce que nous vous <span className="text-purple">apportons</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">

          {/* Bénéfice 1 - Visibilité et acquisition clients */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                
                {/* Titre */}
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Augmentez votre <span className="text-purple">Visibilité & Acquisition</span>
                </CardItem>

                {/* Description principale */}
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Nous boostons votre visibilité en ligne avec un site performant, des landing pages optimisées et des stratégies SEO efficaces.
                </CardItem>

                {/* Bénéfice */}
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  🚀 <strong>Résultat :</strong> Plus de trafic qualifié, plus de prospects, et une acquisition client facilitée.
                </CardItem>

                {/* Image */}
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/code.jpg"
                    alt="Amélioration de la visibilité en ligne"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>

              </CardBody>
            </CardContainer>
          </div>


          {/* Bénéfice 2 - Automatisation et IA */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Gagnez du temps grâce à <span className="text-purple">l&apos;Automatisation & l&apos;IA</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Nous automatisons vos tâches répétitives et intégrons des IA qui accélèrent et optimisent vos process métier.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  🤖 <strong>Résultat :</strong> Moins de travail manuel, des opérations plus fluides et une productivité boostée.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/workflown8n.jpg"
                    alt="Automatisation & IA"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>


          {/* Bénéfice 3 - Analyse et exploitation des données */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Exploitez vos <span className="text-purple">Données intelligemment</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Nous analysons et structurons vos données pour vous fournir des insights stratégiques et actionnables.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  📊 <strong>Résultat :</strong> Des décisions basées sur des analyses précises et une meilleure rentabilité.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/metabasecustomers.jpg"
                    alt="Analyse et exploitation des données"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl border border-white/[0.2]"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Bénéfice 4 - Prospection & conversion clients */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Convertissez plus de <span className="text-purple">prospects en clients</span>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Nous mettons en place des campagnes ultra-personnalisées pour capter et convertir vos prospects efficacement.
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  📩 <strong>Résultat :</strong> Une meilleure acquisition et un retour sur investissement optimisé.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/mautictest.jpg"
                    alt="Prospection & Conversion"
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
