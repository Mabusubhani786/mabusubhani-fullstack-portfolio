// src/constants/experiences.ts

export interface Experience {
  title: string;
  company: string;
  location: string;
  type: "FULL_TIME" | "INTERN";
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM | undefined = Present
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Buildbot Technologies",
    location: "Vijayawada, India",
    type: "FULL_TIME",
    startDate: "2023-02",
  },
  {
    title: "QA Intern",
    company: "Shandy Systems",
    location: "Hyderabad, India",
    type: "INTERN",
    startDate: "2022-09",
    endDate: "2022-11",
  },
];
