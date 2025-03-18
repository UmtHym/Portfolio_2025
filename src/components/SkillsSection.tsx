import React from "react";

import html5Icon from "../assets/images/icons/html5.png";
import cssIcon from "../assets/images/icons/css3.png";
import javascriptIcon from "../assets/images/icons/javascript.png";
import typescriptIcon from "../assets/images/icons/typescript.png";
import reactIcon from "../assets/images/icons/reactjs.png";
import nodeIcon from "../assets/images/icons/nodejs.png";
import expressIcon from "../assets/images/icons/express.png";
import mongodbIcon from "../assets/images/icons/mongodb.png";
import mysqlIcon from "../assets/images/icons/mysql.png";
import tailwindIcon from "../assets/images/icons/tailwind.png";
import pythonIcon from "../assets/images/icons/python.png";
import gitIcon from "../assets/images/icons/git.png";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "HTML5", icon: html5Icon },
      { name: "CSS3", icon: cssIcon },
      { name: "TailwindCSS", icon: tailwindIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Python", icon: pythonIcon },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git", icon: gitIcon },
      // Add more tools as needed with their icons
    ],
  },
];

function SkillsSection() {
  return (
    <section
      className="tab-content relative flex h-full w-full flex-col overflow-auto py-8"
      data-tab-name="skills"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>

      <div className="flex flex-col gap-8 px-4 md:px-8 max-w-5xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title} className="w-full">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-lg border-2 border-primary bg-white shadow-lg hover:shadow-xl transition-shadow p-3"
                >
                  <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm text-center font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
