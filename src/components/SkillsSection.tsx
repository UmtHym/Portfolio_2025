import { useState, useEffect } from "react";
import skillCategoriesData from "../data/skillCategories.json";

interface SkillCardProps {
  name: string;
  icon: string;
  level?: number;
}

interface Skill {
  name: string;
  icon: string;
  level?: number;
}

interface Category {
  title: string;
  description?: string;
  skills: Skill[];
}

const SkillCard = ({ name, icon, level }: SkillCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-secondary/30 rounded-md p-2">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm">{name}</h3>
          {level && (
            <div className="mt-2 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${level}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  // Type assertion to tell TypeScript the JSON structure
  const skillCategories: Category[] = skillCategoriesData;

  // Animate in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="tab-content w-full py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`mb-12 opacity-0 transform translate-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            As a full-stack developer, I work with various technologies to build
            modern, responsive, and scalable web applications.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card rounded-lg border border-border p-6 shadow-sm opacity-0 transform translate-y-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : ""
              }`}
              style={{ transitionDelay: `${200 + categoryIndex * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h2 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-chart-1 to-chart-3 rounded-full mb-4"></div>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
