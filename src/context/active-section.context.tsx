import { createContext } from "react";

import { type ActiveSection } from "~/types/types";

type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export { ActiveSectionContext };
