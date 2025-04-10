import { cn } from "@/lib/utils";

export const BentoGridCompact = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridCompactItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-5 dark:bg-black-200 dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-3",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        {icon && <div className="mb-2">{icon}</div>}
        {title && (
          <div className="font-bold text-neutral-800 dark:text-neutral-100 text-base">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
