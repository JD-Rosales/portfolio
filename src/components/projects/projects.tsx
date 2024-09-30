import { ProjectsData } from "~/data/projects.data";

import { ProjectCard } from "./project-card";

const Projects: React.FC = () => {
  return (
    <section className="my-8 py-8">
      <h2 className="text-4xl font-bold text-green-700">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.map((project) => {
          return <ProjectCard data={project} />;
        })}
      </div>
    </section>
  );
};

export { Projects };
