import clsx from "clsx";
import { AppRoute } from "~/data/data";
import { useGetActiveHash } from "~/hooks/hooks";

type Properties = {
  children: React.ReactNode;
  href: (typeof AppRoute)[number]["href"];
  onClick: () => void;
};

const NavItem: React.FC<Properties> = ({
  children,
  href,
  onClick,
}: Properties) => {
  const { activeHash } = useGetActiveHash();

  return (
    <li>
      <a
        className={clsx(
          "flex items-center gap-x-1 rounded-2xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-110",
          activeHash === href && "bg-slate-800",
        )}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};

export { NavItem };
