export interface Project {
  id: number;
  slug: string;
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
  url: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  bg: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string; // "YYYY-MM"
  endDate: string | null; // "YYYY-MM", null = present
  description: string;
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

// Mirrors next.config.ts's basePath — links to files in public/ aren't
// rewritten by Next automatically (unlike next/link), so it must be
// prefixed manually here.
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatExperienceDate(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatExperienceRange(e: Experience): string {
  return `${formatExperienceDate(e.startDate)} – ${e.endDate ? formatExperienceDate(e.endDate) : "Present"}`;
}

export const PROJECTS: Project[] = [
  { id: 1, slug: "sleep", title: "Sleep", category: "Brand identity", year: "2024", color: "#E2DDD6", desc: "A comprehensive brand identity for a sleep wellness startup — identity system, packaging, and digital touchpoints." },
  { id: 2, slug: "air-provision", title: "Air Provision", category: "Design systems", year: "2024", color: "#D6DDE2", desc: "Built a scalable component library and dashboard used across 6 enterprise product teams serving millions of users." },
  { id: 3, slug: "parameter", title: "Parameter", category: "Product design", year: "2023", color: "#DDD6E2", desc: "Led 0→1 product design for an analytics platform — from research and flows to final UI across web and mobile." },
  { id: 4, slug: "facade", title: "Facade", category: "Side projects", year: "2023", color: "#E2DDD6", desc: "A personal side project exploring generative pattern systems and their application to print and digital media." },
];

export const ARTICLES: Article[] = [
  { id: 1, title: "Master's thesis", readTime: "8 min", date: "Dec 2024", url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A2083162&dswid=5156" },
  { id: 2, title: "React paper", readTime: "5 min", date: "Nov 2024", url: `${BASE_PATH}/A_study_on_React_and_Ionic.pdf` },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "XX", name: "John Doe", role: "Co-founder at Company", initials: "MR", bg: "#C9BDB0" },
  { quote: "YY", name: "Jane Doe", role: "Product Manager at Company", initials: "SJ", bg: "#B0C9BD" },
];

export const EXPERIENCES: Experience[] = [
  { id: 1, role: "Frontend Developer", company: "Example Co", startDate: "2024-06", endDate: null, description: "Building and maintaining the design system and marketing site." },
  { id: 2, role: "Junior Developer", company: "Another Co", startDate: "2022-01", endDate: "2024-05", description: "Worked across the product team shipping features end to end." },
].sort((a, b) => {
  const aEnd = a.endDate ?? "9999-12";
  const bEnd = b.endDate ?? "9999-12";
  return bEnd.localeCompare(aEnd) || b.startDate.localeCompare(a.startDate);
});

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