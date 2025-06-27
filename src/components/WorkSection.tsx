import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "../data/projects.json";
import { Project } from "../types/project";

// Group projects by category
function groupProjectsByCategory(projects: Project[]) {
  const categories: { [key: string]: Project[] } = {};

  projects.forEach((project) => {
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    categories[project.category].push(project);
  });

  // Convert to array format for easier rendering
  return Object.entries(categories).map(([category, projects]) => ({
    category,
    projects,
  }));
}

function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const projectCategories = groupProjectsByCategory(projectsData);

  // Animate in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to format details text with bullet points if it contains Key Features section
  const formatDetails = (details: string) => {
    if (!details) return [];

    // Check if there's a "Key Features:" section
    const keyFeaturesMatch = details.match(/Key Features:(.+?)(?=\n\n|$)/s);

    if (keyFeaturesMatch) {
      // Extract bullet points
      const featuresText = keyFeaturesMatch[1];
      return featuresText
        .split("•")
        .filter((item) => item.trim().length > 0)
        .map((item) => item.trim());
    }

    return [];
  };

  return (
    <section className="tab-content relative flex h-full w-full flex-col overflow-auto py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Main Title with gradient styling - Centered */}
        <div
          className={`mb-12 text-center opacity-0 transform translate-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-chart-3 to-chart-5 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different aspects of my
            technical expertise.
          </p>
        </div>

        {/* Projects by Category */}
        {projectCategories.map((category, categoryIndex) => (
          <div
            key={category.category}
            className={`mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : ""
            }`}
            style={{ transitionDelay: `${200 + categoryIndex * 150}ms` }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              {category.category}
              <div className="w-16 h-1 bg-gradient-to-r from-chart-3 to-chart-5 rounded-full mt-2 mx-auto"></div>
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="group w-full max-w-sm rounded-xl border border-primary/20 bg-background/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-chart-3/5">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-chart-3/10 to-primary/5">
                        <span className="text-4xl font-bold text-chart-3/30">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Quick Links - Always visible but more prominent on hover */}
                    <div className="absolute bottom-0 right-0 p-3 flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 bg-chart-3 rounded-full flex items-center justify-center text-white hover:bg-chart-3/90 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 bg-chart-3 rounded-full flex items-center justify-center text-white hover:bg-chart-3/90 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content - with details from your format */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-center">
                      {project.description}
                    </p>

                    {/* Extract and display key features from details if available */}
                    {project.details &&
                      formatDetails(project.details).length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs uppercase tracking-wider text-chart-3 mb-2 text-center">
                            Key Features
                          </h4>
                          <ul className="text-sm space-y-1">
                            {formatDetails(project.details).map(
                              (feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-chart-3 mr-2">•</span>
                                  <span>{feature}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-chart-3/10 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* GitHub Profile Link */}
        <div
          className={`mt-6 text-center opacity-0 transform translate-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for additional projects and code samples
          </p>
          <a
            href="https://github.com/UmtHym"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-chart-3 text-white rounded-lg hover:bg-chart-3/90 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
