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
  phone: string;
  location: string;
  formattedPhone: string;
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
  { id: 1, title: "Design tools every digital product designer should know", readTime: "8 min", date: "Dec 2024" },
  { id: 2, title: "Designing for user delight", readTime: "5 min", date: "Nov 2024" },
  { id: 3, title: "Streamlining design workflows with design systems", readTime: "4 min", date: "Oct 2024" },
  { id: 4, title: "How side projects fuel personal growth for designers", readTime: "3 min", date: "Sep 2024" },
  { id: 5, title: "Mastering the art of design tools: a guide for product designers", readTime: "3 min", date: "Aug 2024" },
  { id: 6, title: "The evolution of design thinking: insights and perspectives", readTime: "4 min", date: "Jul 2024" },
  { id: 7, title: "Building an effective design system", readTime: "4 min", date: "Jun 2024" },
  { id: 8, title: "Side projects: from passion to portfolio-worthy designs", readTime: "6 min", date: "May 2024" },
];

export const CLIENTS: string[] = ["Trapeze", "Blitz", "Left Right", "Cup of", "Greeen", "Oval Over", "Eight", "Rounded & Right"];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Adrienne exceeded our expectations as a digital product designer. What sets her apart is not only her technical proficiency but also her dedication to understanding the end-users' needs.", name: "Michael Rodriguez", role: "Co-founder · Right Left", initials: "MR", bg: "#C9BDB0" },
  { quote: "Adrienne's creativity and attention to detail are unparalleled. Working with her on our digital product design was an absolute pleasure. She has a unique ability to translate complex ideas into simple things.", name: "Sarah Johnson", role: "Product Manager · Beam", initials: "SJ", bg: "#B0C9BD" },
  { quote: "Working with Adrienne was a game-changer for our project. She brought a perfect mix of creativity and practicality, seamlessly integrating our ideas into a design that functioned flawlessly.", name: "Alex Chen", role: "CTO · Cucumber", initials: "AC", bg: "#BDB0C9" },
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
  phone: "+46761462523",
  formattedPhone: "+46 (0) 76 146 25 23",
  location: "Umeå, Sweden",
};