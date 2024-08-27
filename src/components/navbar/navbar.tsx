import clsx from "clsx";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { LINKS } from "~/data/data";

import { NavItem } from "./nav-item";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = useCallback((): void => {
    setIsOpen((previousState) => !previousState);
  }, [setIsOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950 px-8 shadow-sm shadow-gray-900 md:px-10">
      <div className="mx-auto flex h-16 items-center justify-between">
        <a className="p-2 text-3xl font-bold" href="">
          JAKE
        </a>

        <button className="md:hidden" onClick={handleSidebarToggle}>
          <AiOutlineMenu size={24} color="#ffffff" />
        </button>

        <ul
          className={clsx(
            "fixed bottom-0 right-0 flex h-screen w-[300px] translate-x-full flex-col items-center justify-center gap-y-8 bg-gray-900 transition-all duration-300 md:relative md:flex md:h-full md:w-auto md:translate-x-0 md:flex-row md:space-x-2 md:bg-inherit",
            isOpen && "translate-x-0",
          )}
        >
          <button
            className="absolute left-7 top-5 md:hidden"
            onClick={handleSidebarToggle}
          >
            <IoMdClose size={24} color="#ffffff" />
          </button>

          {LINKS.map((item) => (
            <NavItem
              href={item.href}
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
            <a href="https://github.com/JD-Rosales" target="_blank">
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/jake-rosales-0a33a621a"
              target="_blank"
            >
              <FaLinkedin size={26} />
            </a>
            <a
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
