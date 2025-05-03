import { useState, useEffect, useRef } from "react";
import { ExternalLink, Code, Play, Info, X } from "lucide-react";
import projectsData from "../data/projects.json";
import { Project } from "../types/project";

function WorkSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Use the imported projects data
  const projects: Project[] = projectsData as Project[];

  // Filter projects based on the current filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  // Animate in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cleanup function to close modal and reset selectedProject when component unmounts
  useEffect(() => {
    return () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };
  }, []);

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
        // Reset selectedProject after animation completes
        setTimeout(() => {
          setSelectedProject(null);
        }, 300);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Safe modal opening function with null checking
  const openProjectModal = (project: Project) => {
    if (!project) return; // Guard clause to prevent opening with null project

    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="tab-content relative flex h-full w-full flex-col overflow-auto py-8">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Section Header */}
        <div
          className={`relative mb-12 opacity-0 transform translate-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Code-inspired header */}
          <div className="w-full rounded-t-lg bg-slate-900 px-4 pt-3 pb-2 font-mono text-sm text-blue-400 flex items-center">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500"></span>
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="mr-4 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>projects.js</span>
          </div>

          <div className="w-full rounded-b-lg bg-slate-800 p-4 font-mono text-sm text-green-400 shadow-lg">
            <div className="text-slate-400">
              // Featured projects by Umit Hayim
            </div>
            <div className="mt-2">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300"> projects </span>
              <span className="text-white">=</span>
              <span className="text-blue-300"> [</span>
            </div>
            <div className="mt-2 ml-4 text-4xl font-bold text-white">
              My Work
            </div>
            <div className="text-blue-300">];</div>
          </div>
        </div>

        {/* Filters */}
        <div
          className={`mb-10 flex justify-center gap-4 opacity-0 transform translate-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => setFilter("all")}
            className={`relative overflow-hidden rounded-full px-6 py-2 transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {filter === "all" && (
              <span className="absolute inset-0 -z-10 animate-pulse-slow bg-primary/20 blur-sm"></span>
            )}
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`relative overflow-hidden rounded-full px-6 py-2 transition-all ${
              filter === "featured"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {filter === "featured" && (
              <span className="absolute inset-0 -z-10 animate-pulse-slow bg-primary/20 blur-sm"></span>
            )}
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm border border-border shadow-lg transition-all duration-500 hover:shadow-xl hover:border-primary/30 opacity-0 transform translate-y-8 ${
                isVisible ? "opacity-100 translate-y-0" : ""
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Project Media */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>

                {project.mediaType === "image" && project.mediaSrc && (
                  // Image with error handling
                  <div className="h-full w-full">
                    <img
                      src={project.mediaSrc}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                )}

                {project.mediaType === "video" && project.mediaSrc && (
                  // Video thumbnail with play button
                  <div className="relative h-full w-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-primary/80 p-3 text-primary-foreground transform transition-transform duration-300 group-hover:scale-110 hover:bg-primary">
                        <Play className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                )}

                {(project.mediaType === "none" || !project.mediaSrc) && (
                  // Default display when no media is available
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                    <div className="text-4xl text-gray-400 dark:text-gray-600">
                      <Code className="h-12 w-12" />
                    </div>
                  </div>
                )}

                {/* Link buttons */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-transform hover:scale-110 hover:bg-white"
                    aria-label="View Details"
                  >
                    <Info className="h-5 w-5" />
                  </button>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-transform hover:scale-110 hover:bg-white"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-transform hover:scale-110 hover:bg-white"
                      aria-label="View Code on GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full z-10 shadow-md">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div
          className={`mt-12 text-center opacity-0 transform translate-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{
            transitionDelay: `${400 + filteredProjects.length * 200}ms`,
          }}
        >
          <a
            href="https://github.com/UmtHym"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span>View More on GitHub</span>
            <Code className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Project Details Modal with proper null checking */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-background p-6 shadow-xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Only render modal content if selectedProject exists */}
            {selectedProject && (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={`modal-${selectedProject.id}-${tech}`}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media display with null checks */}
                <div className="mb-6 overflow-hidden rounded-lg">
                  {selectedProject.mediaType === "image" &&
                    selectedProject.mediaSrc && (
                      <img
                        src={selectedProject.mediaSrc}
                        alt={selectedProject.title}
                        className="h-auto w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    )}

                  {selectedProject.mediaType === "video" &&
                    selectedProject.mediaSrc && (
                      <div className="relative w-full pt-[56.25%]">
                        <video
                          className="absolute inset-0 h-full w-full object-cover"
                          controls
                        >
                          <source
                            src={selectedProject.mediaSrc}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}

                  {(selectedProject.mediaType === "none" ||
                    !selectedProject.mediaSrc) && (
                    <div className="h-64 w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                      <div className="text-center">
                        <Code className="h-16 w-16 mx-auto mb-2 text-gray-400 dark:text-gray-600" />
                        <p className="text-muted-foreground">
                          No preview available
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project details with null check */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">
                    Project Overview
                  </h3>
                  <div className="whitespace-pre-line text-muted-foreground">
                    {selectedProject.details ||
                      "No detailed description available."}
                  </div>
                </div>

                {/* Action links with null checks */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkSection;
