import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home, Loader, Navbar } from "~/components/components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="px-8 md:px-10">
            <Home />
          </main>
        </>
      )}
    </>
  );
}

export default App;
