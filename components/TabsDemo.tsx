"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  // Définition des tabs avec les outils et leurs images
  const tabs = [
    {
      title: "Code",
      value: "Code",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]" style={{ backgroundColor: "#4B5563" }}>
        <p>Code</p>
          <Image
            src="/code.jpg"  // Image spécifique à Portainer
            alt="code"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
          />
        </div>
      ),
    },
    {
      
      title: "n8n",
      value: "n8n",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]"style={{ backgroundColor: "#F56565" }}>
            <p>n8n</p>
          <Image
            src="/workflown8n.jpg"  // Image spécifique à n8n
            alt="n8n"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
          />
        </div>
      ),
    },
    {
        title: "Metabase",
        value: "metabase",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]" style={{ backgroundColor: "#0052CC" }}>
              <p>Metabase</p>
            <Image
              src="/metabase.jpg"  // Image spécifique à n8n
              alt="metabase"
              width={1000}
              height={1000}
              className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
            />
          </div>
        ),
      },
    {
      title: "Mautic",
      value: "mautic",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]" style={{ backgroundColor: "#FFA500" }}>
            <p>Mautic</p>
          
          <Image
            src="/mautictest.jpg"  // Image spécifique à Mautic
            alt="Mautic"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
          />
        </div>
      ),
    },
    {
      title: "Grafana",
      value: "grafana",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]" style={{ backgroundColor: "#38B2AC" }}>
        <p>Grafana</p>    
          <Image
            src="/grafana.jpg"  // Image spécifique à Grafana
            alt="Grafana"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
          />
        </div>
      ),
    },
    {
      title: "Portainer",
      value: "portainer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-xl md:text-4xl font-bold p-10 text-white border border-white/[0.2]" style={{ backgroundColor: "#4c0519" }}>
        <p>Portainer</p>
          <Image
            src="/portainer.jpg"  // Image spécifique à Portainer
            alt="Portainer"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border border-t-white/[0.2] border-x-white/[0.2]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[33rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20" id="outils">
      <Tabs tabs={tabs} />
    </div>
  );
}
