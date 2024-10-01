import { useContext } from "react";

import { ActiveSectionContext } from "~/context/context";

const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
};

export { useActiveSectionContext };
