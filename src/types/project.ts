export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  mediaType?: string;
  details?: string;
  image?: string;
}
