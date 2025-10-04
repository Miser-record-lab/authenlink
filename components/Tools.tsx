import {
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaPlug,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaReact } from "react-icons/fa";

const tools = [
  {
    title: "Agents IA",
    icon: <FaRobot className="text-black dark:text-white" />,
    href: "/agents-ia",
  },
  {
    title: "n8n",
    icon: <FaPlug className="text-black dark:text-white" />,
    href: "/n8n",
  },
  {
    title: "Metabase",
    icon: <FaChartLine className="text-black dark:text-white" />,
    href: "/metabase",
  },
  {
    title: "Python",
    icon: <FaPython className="text-black dark:text-white" />,
    href: "/python",
  },
  {
    title: "React",
    icon: <FaReact className="text-black dark:text-white" />,
    href: "/react",
  },
  {
    title: "SQL",
    icon: <FaDatabase className="text-black dark:text-white" />,
    href: "/sql",
  },
  {
    title: "JavaScript",
    icon: <FaJs className="text-black dark:text-white" />,
    href: "/javascript",
  },
  {
    title: "Automatisation",
    icon: <FaPlug className="text-black dark:text-white" />,
    href: "/automatisation",
  },
  {
    title: "Scraping",
    icon: <FaDatabase className="text-black dark:text-white" />,
    href: "/scraping",
  },
];

export const Tools = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FloatingDock
          items={tools}
          desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2"
          mobileClassName="fixed bottom-10 right-10"
        />
      </div>
    </div>
  );
};

export default Tools;
