export interface CarouselImage {
  src?: string; // path to an image in public/; omitted to show a color placeholder
  color?: string; // placeholder background shown while src is unset
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  color: string;
  desc: string;
  images: CarouselImage[];
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

// Generic placeholder slides shown until real project photos are added to
// public/ — swap in a `src` per slide and these colors are ignored.
const PLACEHOLDER_SLIDES: CarouselImage[] = [
  { color: "#E2DDD6", label: "Overview" },
  { color: "#D6DDE2", label: "Detail" },
  { color: "#DDD6E2", label: "Process" },
];

export const PROJECTS: Project[] = [
  { id: 1, slug: "pokemon-starters", title: "Choose Your Starter!", category: "Side project", year: "2025", color: "#b3b3c1", desc: "A website for choosing your favorite Pokémon starter. Built with standard HTML5 and CSS3 and more.", images: [
    { src: `${BASE_PATH}/starters/index.png`, label: "Home" },
    { src: `${BASE_PATH}/starters/bulbasaur.png`, label: "Bulbasaur" },
    { src: `${BASE_PATH}/starters/charmander.png`, label: "Charmander" },
    { src: `${BASE_PATH}/starters/squirtle.png`, label: "Squirtle" },
    { src: `${BASE_PATH}/starters/movesets.png`, label: "Movesets" },
    { src: `${BASE_PATH}/starters/facts.png`, label: "Facts" },
  ] },
  { id: 2, slug: "tic-tac-toe", title: "Tic-Tac-Toe", category: "Side project", year: "2023", color: "#fcead7", desc: "A Tic-tac-toe game built with C#, SignalR, ASP.NET, and NoSQL. Following the MVC design pattern. The project was hosted on Azure but is currently unavailable.", images: [
    { src: `${BASE_PATH}/tictactoe/index.png`, label: "Home" },
    { src: `${BASE_PATH}/tictactoe/settings.png`, label: "Settings" },
    { src: `${BASE_PATH}/tictactoe/active_game.png`, label: "Active game" },
  ] },
  { id: 3, slug: "lithium", title: "Lithium", category: "Product design", year: "2023", color: "#556378", desc: "An app for charging electric vehicles designed in Figma. Designed at Umeå University Design campus.", images: [
    { src: `${BASE_PATH}/lithium/profile.png`, label: "Profile" },
    { src: `${BASE_PATH}/lithium/map.png`, label: "Map" },
    { src: `${BASE_PATH}/lithium/driving.png`, label: "Driving" },
    { src: `${BASE_PATH}/lithium/charging.png`, label: "Charging" },
    { src: `${BASE_PATH}/lithium/receipt.png`, label: "Receipt" },
  ] },
];

export const ABOUT_SLIDES: CarouselImage[] = [
  { src: `${BASE_PATH}/me/climbing.jpeg`, color: "#c9bdb0", label: "Climbing" },
  { src: `${BASE_PATH}/me/skiing.jpeg`, color: "#c9bdb0", label: "Skiing" },
];

export const ARTICLES: Article[] = [
  { id: 1, title: "Master's Thesis: Intention Recognition in Training", readTime: "90 min", date: "Jun 2026", url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A2083162&dswid=5156" },
  { id: 2, title: "Student Conference: Comparing React Native and Ionic Frameworks", readTime: "20 min", date: "Dec 2025", url: `${BASE_PATH}/Comparing_React_Native_and_Ionic.pdf` },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "XX", name: "John Doe", role: "Co-founder at Company", initials: "MR", bg: "#C9BDB0" },
  { quote: "YY", name: "Jane Doe", role: "Product Manager at Company", initials: "SJ", bg: "#B0C9BD" },
];

export const EXPERIENCES: Experience[] = [
  { id: 1, role: "Intern", company: "Oryx Simulations", startDate: "2026-01", endDate: "2026-06", description: "Wrote my master's thesis." },
  { id: 2, role: "Some Role", company: "Another Company", startDate: "2022-01", endDate: "2024-05", description: "I worked." },
  { id: 3, role: "Exchange Student in Tokyo", company: "Tokyo Metropolitan University", startDate: "2024-09", endDate: "2025-02", description: "Studied abroad and gained international experience in Japan." },
  { id: 4, role: "Master's in Interactiontechnology and Design", company: "Umeå University", startDate: "2021-07", endDate: "2026-06", description: "Pursuing a master's degree in interaction technology and design." },
  { id: 5, role: "Exchange Student in Phoenix", company: "Arizona School of the Arts", startDate: "2018-07", endDate: "2019-06", description: "Studied abroad and gained international experience in the United States." },

].sort((a, b) => {
  const aEnd = a.endDate ?? "9999-12";
  const bEnd = b.endDate ?? "9999-12";
  return bEnd.localeCompare(aEnd) || b.startDate.localeCompare(a.startDate);
});

export const SERVICES: Service[] = [
  { num: "01", label: "Frontend Developer" },
  { num: "02", label: "Backend Developer" },
  { num: "03", label: "UX Researcher" },
  { num: "04", label: "Product Designer" },
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