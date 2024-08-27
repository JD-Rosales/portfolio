import { useEffect, useState } from "react";

const useGetActiveHash = () => {
  const [activeHash, setActiveHash] = useState<string>("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { activeHash };
};

export { useGetActiveHash };
