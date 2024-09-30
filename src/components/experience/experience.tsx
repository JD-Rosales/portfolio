import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { ExperienceData } from "~/data/data";

const Experience: React.FC = () => {
  return (
    <section className="my-8 min-h-screen py-8">
      <h3 className="text-4xl font-bold text-green-700">Experience</h3>
      <div className="mt-8">
        <VerticalTimeline lineColor="#15803d">
          {ExperienceData.map((experience, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background: "#1e293b",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "#15803d",
                fontSize: "1.5rem",
              }}
              key={index}
            >
              <div className="flex flex-1 flex-wrap items-center gap-x-2">
                <span className="text-center text-xl">
                  {experience.company}
                </span>
                <span className="text-center text-green-500">
                  ({experience.title})
                </span>
              </div>

              <ul className="mt-4 flex list-disc flex-col gap-y-3">
                {experience.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export { Experience };
