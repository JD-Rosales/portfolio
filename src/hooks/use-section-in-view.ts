import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { type ActiveSection } from "~/types/types";

import { useActiveSectionContext } from "./use-active-section.hook";

const useSectionInView = (activeSection: ActiveSection, threshold = 0.5) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [inView, setActiveSection, timeOfLastClick, activeSection]);

  return {
    ref,
  };
};

export { useSectionInView };
