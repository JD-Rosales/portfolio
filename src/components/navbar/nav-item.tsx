import clsx from "clsx";
import { LINKS } from "~/data/data";
import { useGetActiveHash } from "~/hooks/hooks";

type Properties = {
  href: (typeof LINKS)[number]["href"];
  label: (typeof LINKS)[number]["label"];
};

const NavItem: React.FC<Properties> = ({ href, label }: Properties) => {
  const { activeHash } = useGetActiveHash();

  return (
    <li>
      <a
        className={clsx(
          "rounded-2xl px-6 py-2 font-semibold transition-all duration-300",
          activeHash === href && "bg-slate-800",
        )}
        href={href}
      >
        {label}
      </a>
    </li>
  );
};

export { NavItem };
