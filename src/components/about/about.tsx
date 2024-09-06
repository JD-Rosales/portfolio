import { TechStack } from "~/data/data";

import { AboutImage } from "./about-image";

const About: React.FC = () => {
  return (
    <section className="min-h-screen overflow-x-hidden py-8">
      <h1 className="text-4xl font-bold text-green-700">About</h1>
      <div className="mt-8 flex flex-col gap-y-12 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-full"
          >
            <AboutImage />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-12">
          <div data-aos="fade-left" data-aos-duration="1500">
            <span className="text-2xl font-bold text-green-700">
              More About Me
            </span>
            <p className="mt-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam! Fuga possimus eaque doloribus eveniet deserunt
              inventore quaerat sunt! Nesciunt perferendis magnam, voluptates a
              tempora perspiciatis pariatur optio dolores consectetur.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <span className="text-2xl font-bold text-green-700">
              Tech Stack
            </span>

            <div className="mt-6 grid grid-cols-2 flex-wrap gap-x-3 gap-y-4 overflow-hidden sm:flex sm:gap-x-4">
              {TechStack.map((stack, index) => (
                <div
                  className="flex items-center justify-center gap-x-2 rounded-full bg-slate-900 px-5 py-2"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 150}`}
                  data-aos-duration="1000"
                  key={`${stack.name}`}
                >
                  <img alt={stack.name} className="h-5 w-5" src={stack.icon} />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
