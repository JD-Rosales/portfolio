import clsx from "clsx";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { AppRoute } from "~/data/data";
import { useActiveSectionContext, useClickOutside } from "~/hooks/hooks";
import { type ActiveSection } from "~/types/types";

import { NavItem } from "./nav-item";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLUListElement>(() => setIsOpen(false));
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleSidebarToggle = useCallback(
    (activeSection: ActiveSection): void => {
      setIsOpen((previousState) => !previousState);
      setActiveSection(activeSection);
      setTimeOfLastClick(Date.now());
    },
    [setIsOpen],
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 px-8 shadow-sm shadow-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a className="py-2 text-2xl font-bold" href="">
          JAKE
        </a>

        <button className="md:hidden" onClick={() => handleSidebarToggle}>
          <AiOutlineMenu size={24} color="#ffffff" />
        </button>

        <ul
          className={clsx(
            "fixed bottom-0 right-0 flex h-dvh w-[300px] translate-x-full flex-col items-center justify-center gap-y-5 bg-gray-900 text-sm transition-all duration-300 md:relative md:flex md:h-full md:w-auto md:transform-none md:flex-row md:space-x-4 md:bg-inherit",
            isOpen && "transform-none",
          )}
          ref={ref}
        >
          <button
            className="absolute left-7 top-5 md:hidden"
            onClick={() => handleSidebarToggle}
          >
            <IoMdClose size={24} color="white" />
          </button>

          {AppRoute.map((item) => (
            <NavItem
              href={item.href}
              isActive={activeSection === item.href}
              key={`menu-${item.label}`}
              onClick={handleSidebarToggle}
            >
              {item.label}
            </NavItem>
          ))}

          <li>
            <a
              className="flex items-center gap-x-1 rounded-2xl border-2 border-green-700 px-6 py-2 font-semibold transition-all duration-300 hover:scale-110"
              href=""
              download
            >
              <IoMdDownload size={20} />
              Resume
            </a>
          </li>

          <div className="mt-4 flex gap-x-5 md:hidden">
            <a
              className="rounded-full bg-green-700 p-2"
              href="https://github.com/JD-Rosales"
              target="_blank"
            >
              <FaGithub size={26} />
            </a>
            <a
              className="rounded-full bg-green-700 p-2"
              href="https://www.linkedin.com/in/jake-rosales-0a33a621a"
              target="_blank"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              className="rounded-full bg-green-700 p-2"
              href="https://www.facebook.com/jake.rosales.562329/"
              target="_blank"
            >
              <FaFacebook size={26} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
