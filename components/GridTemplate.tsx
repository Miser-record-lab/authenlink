"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconTableColumn,
  IconTrendingUp,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useMemo } from "react";
import { NumberTicker } from "./ui/number-ticker";

export function BentoGridThirdDemo() {
  return (
    <div>
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl sm:text-4xl font-bold text-foreground text-center mb-20">
        Intégrez des services <span className="text-primary">Sur-Mesure :</span>{" "}
        pour développer votre croissance et réduire vos coûts.
      </h2>

      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] mb-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 "
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-primary shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 w-3/4 ml-auto bg-card"
      >
        <div className="w-full bg-muted h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-primary shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-primary shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const widths = useMemo(() => {
    return new Array(6).fill(0).map(() => Math.random() * (100 - 40) + 40);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {widths.map((width, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: width + "%",
          }}
          className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-muted w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center"
      >
        <Image
          src="/testimonial2.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Entreprise de services à la consommation
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Ne pas contacter
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center">
        <Image
          src="/testimonial1.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          CTO Saas proptech
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Lead
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center"
      >
        <Image
          src="/testimonial3.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Dirigeante agence Marketing
        </p>
        <p className="border border-blue-500 bg-orange-100 dark:bg-orange-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Potentiel Lead
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-border p-2 items-start space-x-2 bg-card"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-muted-foreground">
          Pouvez-vous nous aider à créer un agent supplémentaire dédié à
          l’analyse des comptes clients ?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-card"
      >
        <p className="text-xs text-muted-foreground">
          Bien sûr, nous pouvons planifier cela pour jeudi.
        </p>

        <div className="h-6 w-6 rounded-full bg-primary shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Agents Autonomes",
    description: (
      <span className="text-sm">
        Réduisez la charge opérationnelle et{" "}
        <strong>
          accélérez les temps de réponse de{" "}
          <NumberTicker
            value={80}
            decimalPlaces={0}
            className="text-sm font-bold tracking-tighter whitespace-pre-wrap text-primary"
          />
          %
        </strong>{" "}
        grâce à des workflows intelligents capables de
        <strong>gérer les tâches répétitives</strong> et d’assurer une
        <strong>disponibilité continue</strong>.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-muted-foreground" />,
  },

  {
    title: "Agents Data",
    description: (
      <span className="text-sm">
        Centralisez vos données dispersées et{" "}
        <strong>
          automatisez jusqu’à{" "}
          <NumberTicker
            value={70}
            decimalPlaces={0}
            className="text-sm font-bold tracking-tighter whitespace-pre-wrap text-primary"
          />
          %
        </strong>
        du travail d’analyse pour <strong>obtenir une vision claire</strong> et
        <strong>prendre des décisions plus rapides et précises</strong>.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-muted-foreground" />,
  },

  {
    title: "Agents Marketing & Stratégie",
    description: (
      <span className="text-sm">
        Automatisez la création de contenu, la diffusion multicanale et
        l’analyse des performances pour <strong>améliorer la visibilité</strong>{" "}
        et
        <strong>optimiser vos stratégies d’acquisitions</strong> en continu.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconTrendingUp className="h-4 w-4 text-muted-foreground" />,
  },

  {
    title: "Extraction & Enrichissement Données",
    description: (
      <span className="text-sm">
        Automatisez la prospection et{" "}
        <strong>identifiez les bons contacts</strong>
        en quelques minutes. Accédez à{" "}
        <strong>des milliers de leads qualifiés</strong>
        enrichis en temps réel pour{" "}
        <strong>accélérer la croissance commerciale</strong>.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-muted-foreground" />,
  },

  {
    title: "Accompagnement de vos équipes",
    description: (
      <span className="text-sm">
        Nous initions vous et vos équipes à utilisez les outils IA les plus
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-muted-foreground" />,
  },
];
