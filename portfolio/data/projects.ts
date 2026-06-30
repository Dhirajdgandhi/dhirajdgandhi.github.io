import type { Project } from "./types";

/**
 * "Technical projects as side quests" — things built outside the day job.
 */
export const projects: Project[] = [
  {
    id: "uninex",
    title: "UniNex",
    description:
      "An AI-orchestrated alumni platform where students, professors, and alumni converge to share knowledge, fund innovation, and build what's next — with searchable alumni, AI mentorship matching, and one-click Stripe giving.",
    stack: ["Next.js", "AI", "Stripe", "OAuth"],
    year: "2026",
    demo: "https://uninex.studentportal.live/",
    image: "/projects/uninex.png",
    featured: true,
  },
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
