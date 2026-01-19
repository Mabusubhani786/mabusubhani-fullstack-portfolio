import { ExternalLink, Github, Rocket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "ongoing";
}

const projects: Project[] = [
  {
    title: "Feedo",
    description:
      "Platform for organizations to create forms, collect and analyze insights in real-time. Features dynamic form builder and analytics dashboard.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Shadcn/Ui",
      "JWT",
    ],
    liveUrl: "https://feedo-ten.vercel.app/signin?isDemoAccount=true",
    status: "live",
  },
  {
    title: "FrameFlix",
    description:
      "Platform for discovering, reviewing, and getting details on movies and series. Includes search, filtering, and personalized recommendations.",
    techStack: ["Next.js", "REST API", "MUI"],
    liveUrl: "https://frame-flix.vercel.app",
    status: "live",
  },
  {
    title: "Edulyt",
    description:
      "School administration platform for messaging, attendance tracking, and comprehensive reporting. Streamlines communication between teachers, students, and parents.",
    techStack: ["React", "Node.js", "NestJS", "PostgreSQL", "Socket.io"],
    status: "ongoing",
  },
  {
    title: "Hoursy",
    description:
      "Time-tracking SaaS with real-time dashboards and automated invoicing. Helps freelancers and teams manage projects and billable hours efficiently.",
    techStack: ["Vue.js", "Nuxt.js", "TypeScript", "Prisma", "Redis", "Stripe"],
    status: "ongoing",
  },
  {
    title: "Spendex",
    description:
      "Personal finance and budgeting app with spending analytics. Provides insights into spending habits and helps users achieve their financial goals.",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB"],
    status: "ongoing",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work including live applications and ongoing
              developments
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card-hover p-6 flex flex-col gradient-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      project.status === "live"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {project.status === "live" ? (
                      <Rocket className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {project.status === "live" ? "Live" : "In Progress"}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 glass-card hover:bg-primary/10 border-primary/20"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card hover:bg-primary/10 border-primary/20"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
