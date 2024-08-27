import { LINKS } from "~/data/data";
import { NavItem } from "./nav-item";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky z-50 w-full bg-gray-950 px-8 shadow-sm shadow-gray-900 md:px-10">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <a className="p-2 text-2xl font-bold" href="">
            JAKE
          </a>
        </div>

        <ul className="hidden items-center space-x-3 md:flex">
          {LINKS.map((item) => (
            <NavItem
              href={item.href}
              key={`menu-${item.label}`}
              label={item.label}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
