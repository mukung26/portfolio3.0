
export interface Project {
  id: string;
  title: string;
  meta: string;
  icon: string;
  excerpt: string;
  body: string;
  tags: string[];
  links: { label: string; href: string; external: boolean }[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  bullets: string[];
}
