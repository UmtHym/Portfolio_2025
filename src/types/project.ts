export interface Project {
  id: string;
  title: string;
  description: string;
  mediaType: "image" | "video" | "none";
  mediaSrc?: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  details?: string;
  featured: boolean;
}
