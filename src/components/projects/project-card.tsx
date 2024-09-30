import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaGithub, FaLink } from "react-icons/fa";

import { type ProjectsType } from "~/data/data";

type Properties = {
  data: ProjectsType;
};

const ProjectCard: React.FC<Properties> = ({ data }: Properties) => {
  return (
    <div
      className="flex flex-col gap-3 text-white"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Splide className="w-full">
        {data.image.map((image, index) => {
          return (
            <SplideSlide key={`slide-image-${index}`}>
              <div className="aspect-h-9 aspect-w-16">
                <img
                  alt={`${data.name}`}
                  className="h-full w-full object-cover object-left-top"
                  src={image}
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

      {data.tech && (
        <div className="flex flex-wrap gap-2">
          {data.tech.map((techStack) => {
            return (
              <div className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs">
                <div className="h-2 w-2 rounded-full bg-green-700" />
                <span>{techStack}</span>
              </div>
            );
          })}
        </div>
      )}

      <div className="mb-4 flex flex-col">
        <span className="block text-center text-lg font-bold underline">
          {data.name}
        </span>
        {data.association && (
          <span className="block text-center text-sm text-gray-400">
            Associated with {data.association}
          </span>
        )}
        <p className="mt-4 text-sm">{data.description}</p>
      </div>

      <div className="mt-auto flex gap-3 text-xs">
        {data.gitHub ? (
          <a
            className="flex items-center justify-center gap-x-2 rounded-2xl border-2 border-green-700 px-4 py-2 font-semibold transition-all duration-300 hover:scale-105"
            href={data.gitHub}
          >
            <FaGithub size={20} /> GitHub
          </a>
        ) : (
          <div className="flex items-center justify-center gap-x-2 rounded-2xl border-2 border-green-700 px-4 py-2 font-semibold line-through opacity-70">
            <FaGithub size={20} /> GitHub
          </div>
        )}

        {data.link ? (
          <a
            className="flex items-center justify-center gap-x-2 rounded-2xl border-2 border-green-700 px-4 py-2 font-semibold transition-all duration-300 hover:scale-105"
            href={data.link}
          >
            <FaLink size={18} /> Visit Site
          </a>
        ) : (
          <div className="flex items-center justify-center gap-x-2 rounded-2xl border-2 border-green-700 px-4 py-2 font-semibold line-through transition-all duration-300">
            <FaLink size={18} /> Visit Site
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectCard };
