import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-vertical-timeline-component/style.min.css";
import "@splidejs/react-splide/css";

import {
  About,
  Experience,
  Footer,
  Home,
  Loader,
  Navbar,
  Projects,
} from "~/components/components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });

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
          <main className="container mx-auto px-4 md:px-0">
            <Home />
            <About />
            <Projects />
            <Experience />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
