export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A CLI tool that does something useful. Built to solve a real problem with an elegant interface.",
    tags: ["rust", "cli"],
    github: "https://github.com/username/project-alpha",
  },
  {
    title: "Project Beta",
    description:
      "A web application with a clean UI and fast performance. Focused on developer experience.",
    tags: ["typescript", "react", "next.js"],
    github: "https://github.com/username/project-beta",
    live: "https://project-beta.vercel.app",
  },
  {
    title: "Project Gamma",
    description:
      "A backend API with solid architecture. Handles high throughput with minimal latency.",
    tags: ["go", "api", "postgres"],
    github: "https://github.com/username/project-gamma",
  },
  {
    title: "Project Delta",
    description:
      "A machine learning project exploring novel approaches to an interesting problem.",
    tags: ["python", "ml", "pytorch"],
    github: "https://github.com/username/project-delta",
  },
];
