type AppRouteType = {
  label: string;
  href: string;
};

const AppRoute: AppRouteType[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export { AppRoute };
