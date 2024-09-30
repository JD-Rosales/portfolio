import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section className="flex min-h-[89vh] flex-col gap-6 md:flex-row">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="flex flex-1 items-center justify-center py-12"
      >
        <div className="flex w-full flex-col items-center gap-y-3 text-lg">
          <span className="flex items-center font-medium uppercase">
            Hello! <span className="animate-bounce text-2xl"> 👋</span>
          </span>
          <div className="text-6xl font-bold">
            <span>I'm </span>
            <span className="text-green-700">Jake Rosales</span>
          </div>

          <p className="max-w-[700px] text-center text-lg">
            A{" "}
            <span className="font-semibold text-green-700">
              full-stack developer
            </span>{" "}
            with over 2 years experience of building efficient and seamless web
            applications.
          </p>

          <div className="mt-4 flex gap-x-4">
            <a
              className="rounded-full bg-green-700 p-3 transition-all duration-300 hover:scale-110"
              href="https://github.com/JD-Rosales"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="rounded-full bg-green-700 p-3 transition-all duration-300 hover:scale-110"
              href="https://www.linkedin.com/in/jake-rosales-0a33a621a"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="rounded-full bg-green-700 p-3 transition-all duration-300 hover:scale-110"
              href="https://www.facebook.com/jake.rosales.562329/"
              target="_blank"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };
