import type { Project } from "./types";

/**
 * "Technical projects as side quests" — things built outside the day job.
 */
export const projects: Project[] = [
  {
    id: "decision-trees",
    title: "Decision Trees Visualizer",
    description:
      "An interactive visualization of how decision trees split data — built to make a classic ML algorithm intuitive.",
    stack: ["Python", "ML", "Visualization"],
    year: "2021",
    repo: "https://github.com/Dhirajdgandhi",
    demo: "#",
    featured: true,
  },
  {
    id: "donazon",
    title: "Donazon",
    description:
      "A donation-driven marketplace concept — full-stack app exploring service-oriented design and clean APIs.",
    stack: ["Java", "Spring", "React"],
    year: "2021",
    repo: "https://github.com/Dhirajdgandhi",
    demo: "#",
    featured: true,
  },
  {
    id: "student-portal",
    title: "Student Portal",
    description:
      "A portal for managing student records and workflows, with an emphasis on usable CRUD and role-based access.",
    stack: ["Java", "SQL", "Web"],
    year: "2020",
    repo: "https://github.com/Dhirajdgandhi",
  },
];
