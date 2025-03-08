import { FaCog, FaDatabase, FaCode, FaUserTie } from "react-icons/fa";
import { MdFilter1, MdFilter2, MdFilter3, MdFilter4 } from "react-icons/md";

export const processSteps = [
  {
    id: 1,
    title: "Audit de votre infrastructure",
    desc: "Examen complet de votre infrastructure pour identifier les outils et les automatisations à implémenter.",
    icon: FaCog,
    numberIcon: MdFilter1,
  },
  {
    id: 2,
    title: "Propositions d’axes d'améliorations",
    desc: "Nous vous proposons une série d'actions personnalisées à réaliser pour optimiser vos processus internes.",
    icon: FaDatabase,
    numberIcon: MdFilter2,
  },
  {
    id: 3,
    title: "Développement 100% personnalisé",
    desc: "En collaboration avec les services concernés, nous développons les solutions pour répondre le plus précisément à vos besoins.",
    icon: FaCode,
    numberIcon: MdFilter3,
  },
  {
    id: 4,
    title: "Formation et accompagnement",
    desc: "Nous formons vos équipes pour qu'elles puissent maîtriser les nouvelles automatisations mises en place.",
    icon: FaUserTie,
    numberIcon: MdFilter4,
  },
];