import { ProjectsData } from "~/data/projects.data";
import { useSectionInView } from "~/hooks/hooks";

import { ProjectCard } from "./project-card";

const Projects: React.FC = () => {
  const { ref } = useSectionInView("#projects", 0.2);

  return (
    <section className="my-8 scroll-mt-16 py-8" id="projects" ref={ref}>
      <h2 className="text-4xl font-bold text-green-700">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.map((project, index) => {
          return <ProjectCard data={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export { Projects };
