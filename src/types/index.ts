export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline?: string;
  githubUrl: string;
  techStack: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
    context: string;
  };
  architecturalThemes: {
    title: string;
    detail: string;
  }[];
}

export interface SkillCategory {
  number: string;
  category: string;
  skills: string[];
}
