export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  color: string;
  desc: string;
}

export interface Article {
  id: number;
  title: string;
  readTime: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  bg: string;
}

export interface Service {
  num: string;
  label: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface Contacts {
  name: string;
  email: string;
  location: string;
}

export type PageName = "Home" | "Work" | "Writing" | "About" | "Contact";

export const PAGE_PATHS: Record<PageName, string> = {
  Home: "/",
  Work: "/work",
  Writing: "/writing",
  About: "/about",
  Contact: "/contact",
};

// next.config.ts sets trailingSlash: true, so usePathname() reports "/work/"
// rather than "/work" — normalize before comparing against PAGE_PATHS.
export function isActivePath(pathname: string, path: string): boolean {
  const normalized = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return normalized === path;
}

export const PROJECTS: Project[] = [
  { id: 1, title: "Sleep", category: "Brand identity", year: "2024", color: "#E2DDD6", desc: "A comprehensive brand identity for a sleep wellness startup — identity system, packaging, and digital touchpoints." },
  { id: 2, title: "Air Provision", category: "Design systems", year: "2024", color: "#D6DDE2", desc: "Built a scalable component library and dashboard used across 6 enterprise product teams serving millions of users." },
  { id: 3, title: "Parameter", category: "Product design", year: "2023", color: "#DDD6E2", desc: "Led 0→1 product design for an analytics platform — from research and flows to final UI across web and mobile." },
  { id: 4, title: "Facade", category: "Side projects", year: "2023", color: "#E2DDD6", desc: "A personal side project exploring generative pattern systems and their application to print and digital media." },
];

export const ARTICLES: Article[] = [
  { id: 1, title: "Master thesis", readTime: "8 min", date: "Dec 2024" },
  { id: 2, title: "React paper", readTime: "5 min", date: "Nov 2024" },
];

export const CLIENTS: string[] = ["Trapeze", "Blitz", "Left Right", "Cup of", "Greeen", "Oval Over", "Eight", "Rounded & Right"];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "XX", name: "John Doe", role: "Co-founder at Company", initials: "MR", bg: "#C9BDB0" },
  { quote: "YY", name: "Jane Doe", role: "Product Manager at Company", initials: "SJ", bg: "#B0C9BD" },
];

export const SERVICES: Service[] = [
  { num: "01", label: "Product Designer" },
  { num: "02", label: "UX Researcher" },
  { num: "03", label: "Frontend Developer" },
  { num: "04", label: "Backend Developer" },
];

export const SOCIALS: Social[] = [
  { name: "GitHub", url: "https://github.com/jacobhella" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jacob-hellstr%C3%B6m-876227203/" },
];

export const CONTACTS: Contacts = {
  name: "Jacob Hellström",
  email: "jacob.hellst@gmail.com",
  location: "Umeå, Sweden",
};