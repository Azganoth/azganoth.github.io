import type { TechStack } from "./types";

export const TECH_STACK_LABELS: Record<TechStack, string> = {
  html5: "HTML",
  css3: "CSS",
  javascript: "Javascript",
  typescript: "Typescript",
  python: "Python",
  react: "React",
  preact: "Preact",
  vue: "Vue",
  svelte: "Svelte",
  next: "Next",
  astro: "Astro",
  sass: "SASS",
  tailwindcss: "TailwindCSS",
  styledcomponents: "Styled Components",
  node: "Node",
  docker: "Docker",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  jest: "Jest",
  vitest: "Vitest",
  testinglibrary: "Testing Library",
  cypress: "Cypress",
  git: "Git",
  github: "GitHub",
  githubactions: "GitHub Actions",
  figma: "Figma",
};

export const TECH_STACK_ORDER = Object.keys(TECH_STACK_LABELS);

export const PROJECTS_ORDER = [
  "azganoth",
  "galleria",
  "github-user-search",
  "tic-tac-toe",
  "body-mass-index-calculator",
  "skilled-e-learning",
  "equalizer",
  "workit",
  "suite",
];
