import clsx from "clsx";

import { type ActiveSection } from "~/types/types";

type Properties = {
  children: React.ReactNode;
  href: ActiveSection;
  isActive: boolean;
  onClick: (activeSection: ActiveSection) => void;
};

const NavItem: React.FC<Properties> = ({
  children,
  href,
  isActive,
  onClick,
}: Properties) => {
  return (
    <li>
      <a
        className={clsx(
          "flex items-center gap-x-1 rounded-2xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-110",
          isActive && "bg-slate-800",
        )}
        href={href}
        onClick={() => onClick(href)}
      >
        {children}
      </a>
    </li>
  );
};

export { NavItem };
