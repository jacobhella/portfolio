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
  return `${formatExperienceDate(e.startDate)} - ${e.endDate ? formatExperienceDate(e.endDate) : "Present"}`;
}

export const PROJECTS: Project[] = [
  { id: 1, slug: "choose-your-starter", title: "Choose Your Starter!", category: "Side project", year: "2025", color: "#b3b3c1", desc: "A website that displays information and some fun facts on the first generation Pokémon starters, built with standard HTML5 and CSS. The purpose of this website was for me to practice my frontend skills and learn some new CSS tricks. You can find the project here: https://jacobhella.github.io/pokemon_starters/", images: [
    { src: `${BASE_PATH}/starters/index.png`, label: "Home" },
    { src: `${BASE_PATH}/starters/bulbasaur.png`, label: "Bulbasaur" },
    { src: `${BASE_PATH}/starters/charmander.png`, label: "Charmander" },
    { src: `${BASE_PATH}/starters/squirtle.png`, label: "Squirtle" },
    { src: `${BASE_PATH}/starters/movesets.png`, label: "Movesets" },
    { src: `${BASE_PATH}/starters/facts.png`, label: "Facts" },
  ] },
  { id: 2, slug: "tic-tac-toe", title: "Tic-Tac-Toe", category: "Side project", year: "2023", color: "#fcead7", desc: "A Tic-tac-toe game I built with C#, ASP.NET, NoSQL, HTML and SignalR. The database stored information of the accounts and the current games that were being played by the users. New accounts had to be verified by an emailsender that I set up with Sendgrid and the passwords were stored with a hashcode. A user could play locally with a bot or with a friend via WebSockets communication. SignalR is a library for ASP.NET that enables real-time communication between the server and clients with WebSockets. The project followed the MVC design pattern. The project was hosted on Azure but is currently unavailable.", images: [
    { src: `${BASE_PATH}/tictactoe/index.png`, label: "Home" },
    { src: `${BASE_PATH}/tictactoe/settings.png`, label: "Settings" },
    { src: `${BASE_PATH}/tictactoe/active_game.png`, label: "Active game" },
  ] },
  { id: 3, slug: "lithium", title: "Lithium", category: "Product design", year: "2023", color: "#556378", desc: "An app for charging electric vehicles designed in Figma. This app was designed at Umeå Institute of Design. In the project we used an iterative and user-centered design approach. The app helps users find and navigate to charging stations and keep track of their charging sessions.", images: [
    { src: `${BASE_PATH}/lithium/profile.png`, label: "Profile" },
    { src: `${BASE_PATH}/lithium/map.png`, label: "Map" },
    { src: `${BASE_PATH}/lithium/driving.png`, label: "Driving" },
    { src: `${BASE_PATH}/lithium/charging.png`, label: "Charging" },
    { src: `${BASE_PATH}/lithium/receipt.png`, label: "Receipt" },
  ] },
  { id: 4, slug: "sudoku", title: "Sudoku", category: "Side project", year: "2023", color: "#c9bdb0", desc: "Built a simple Sudoku generator in C during my spare time. As a big Sudoku enthusiast, it was nice to always have new Sudoku puzzles on hand.", images: [
    { label: "Sudoku" },
  ] },
];

export const ABOUT_SLIDES: CarouselImage[] = [
  { src: `${BASE_PATH}/me/climbing.jpeg`, color: "#A5C9CA", label: "Climbing" },
  { src: `${BASE_PATH}/me/skiing.jpeg`, color: "#A5C9CA", label: "Skiing" },
];

export const ARTICLES: Article[] = [
  { id: 1, title: "Master's Thesis: Intention Recognition in Training", readTime: "90 min", date: "Jun 2026", url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A2083162&dswid=5156" },
  { id: 2, title: "Student Conference: Comparing React Native and Ionic Frameworks", readTime: "20 min", date: "Dec 2025", url: `${BASE_PATH}/Comparing_React_Native_and_Ionic.pdf` },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "XX", name: "John Doe", role: "Position at Company", initials: "MR", bg: "#C9BDB0" },
  { quote: "YY", name: "Jane Doe", role: "Position at Company", initials: "SJ", bg: "#B0C9BD" },
];

export const EXPERIENCES: Experience[] = [
  { id: 1, role: "Intern", company: "Oryx Simulations", startDate: "2026-01", endDate: "2026-06", description: "Conducted my master's thesis research at Oryx Simulations AB in Umeå. Researched intention recognition and how AI can be implemented in Komatsu Forest simulators to act as a virtual teacher. I facilitated usertests to see how users perceive virtual teaching compared to a human instructor. During this time I was a part of one of the Scrum teams at Oryx and gained a lot of valuable experiences." },
  { id: 2, role: "Exchange Student in Tokyo", company: "Tokyo Metropolitan University", startDate: "2024-09", endDate: "2025-02", description: "Completed an exchange semester in Tokyo, Japan. In Tokyo, I studied Japanese, AI, robotics, accounting, and photography. I loved my time in Japan and learned a ton about the Japanese culture." },
  { id: 3, role: "Master's in Interaction Technology and Design", company: "Umeå University", startDate: "2021-07", endDate: "2026-06", description: "Pursuing a master's degree in Interaction Technology and Design." },
  { id: 4, role: "Exchange Student in Phoenix", company: "Arizona School of the Arts", startDate: "2018-07", endDate: "2019-06", description: "Completed an exchange year during high school in Phoenix, AZ. In Phoenix, I studied English, Spanish, music composition, and mathematics." },
  { id: 5, role: "Mentor in Mathematics", company: "Umeå University", startDate: "2022-08", endDate: "2022-09", description: "Worked as a mentor in mathematics at Umeå University on the course Introductory Algebra (5MA173). The course is a week-long introduction course for newly enrolled engineering students. I was responsible for facilitating classes of 15 students and supervised a test and the end of the course." },
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