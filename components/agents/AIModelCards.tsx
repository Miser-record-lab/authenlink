"use client";

import { WobbleCard } from "../ui/wobble-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaBrain, FaDatabase } from "react-icons/fa";

const toolsFineTuning = [
  {
    id: 1,
    name: "Python",
    designation: "Langage d'entraînement",
    image: "/tools/logo-python.png",
  },
  {
    id: 2,
    name: "PyTorch",
    designation: "Framework deep learning",
    image: "/tools/logo-pytorch.png",
  },
  {
    id: 3,
    name: "Hugging Face",
    designation: "Hub de modèles",
    image: "/tools/logo-huggingface.png",
  },
  {
    id: 4,
    name: "LoRA",
    designation: "Fine-tuning efficace",
    image: "/tools/logo-lora.png",
  },
  {
    id: 5,
    name: "Vast.ai",
    designation: "GPUs on-demand",
    image: "/tools/logo-vastai.png",
  },
];

const toolsRAG = [
  {
    id: 6,
    name: "LangChain",
    designation: "Orchestration RAG",
    image: "/tools/logo-langchain.png",
  },
  {
    id: 7,
    name: "Pinecone",
    designation: "Vector database",
    image: "/tools/logo-pinecone.png",
  },
  {
    id: 8,
    name: "Neo4j",
    designation: "Graph database",
    image: "/tools/logo-neo4j.png",
  },
  {
    id: 9,
    name: "OpenAI",
    designation: "Embeddings",
    image: "/tools/logo-openai.png",
  },
  {
    id: 10,
    name: "Qdrant",
    designation: "Vector search",
    image: "/tools/logo-qdrant.png",
  },
];

const AIModelCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-foreground text-center mb-10">
        Fine-Tuning & Systèmes RAG
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Fine-Tuning Card */}
        <WobbleCard>
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FaBrain className="text-white text-2xl" />
              <h3 className="text-white text-2xl font-semibold">
                Fine-Tuning de Modèles
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Entraînement de modèles IA spécialisés sur vos données. Un petit
              modèle fine-tuné peut surpasser des modèles comme GPT-5 sur des
              tâches ciblées, tout en étant 10x moins coûteux et déployable en
              privé.
            </p>
            <div className="pt-4 flex flex-wrap justify-center">
              <AnimatedTooltip items={toolsFineTuning} />
            </div>
          </div>
        </WobbleCard>

        {/* RAG Card */}
        <WobbleCard>
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FaDatabase className="text-white text-2xl" />
              <h3 className="text-white text-2xl font-semibold">
                Systèmes RAG
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Développement de systèmes RAG (Retrieval-Augmented Generation)
              avec embeddings performants et Graph RAG. Vos agents IA répondent
              avec précision en utilisant vos propres données.
            </p>
            <div className="pt-4 flex flex-wrap justify-center">
              <AnimatedTooltip items={toolsRAG} />
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default AIModelCards;
