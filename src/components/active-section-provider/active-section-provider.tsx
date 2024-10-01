import { useState } from "react";

import { ActiveSectionContext } from "~/context/context";
import { type ActiveSection } from "~/types/types";

type Properties = {
  children: React.ReactNode;
};

const ActiveSectionProvider: React.FC<Properties> = ({
  children,
}: Properties) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider };
