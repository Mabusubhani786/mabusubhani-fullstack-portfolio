import { useState, useEffect } from "react";
import { experienceStats } from "@/utils/experience.util";

interface SkillCategory {
  title: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Vue.js",
      "Angular",
      "Next.js",
      "React Native",
      "TypeScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Bootstrap",
      "ShadCN/ui",
      "MUI",
    ],
    gradient: "from-primary to-accent",
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Koa",
      "Fastify",
      "Python",
      "Django",
      "FastAPI",
    ],
    gradient: "from-accent to-secondary",
  },
  {
    title: "Databases & ORM",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Drizzle",
      "Prisma",
      "TypeORM",
      "Mongoose",
    ],
    gradient: "from-secondary to-eucalyptus",
  },
  {
    title: "API & Architecture",
    skills: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Socket.io",
      "JWT/OAuth 2.0",
      "RBAC",
      "Microservices",
      "Firebase",
    ],
    gradient: "from-eucalyptus to-primary",
  },
  {
    title: "Real-Time & Async",
    skills: ["WebSockets", "Socket.io", "Redis Pub/Sub", "BullMQ", "RabbitMQ"],
    gradient: "from-primary to-terracotta",
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "AWS S3",
      "Vercel",
      "GitHub Actions",
      "GitLab CI",
      "Git",
    ],
    gradient: "from-terracotta to-apricot",
  },
  {
    title: "Integrations",
    skills: [
      "Cloudinary",
      "Twilio",
      "SendGrid",
      "FCM",
      "Google APIs",
      "Stripe",
    ],
    gradient: "from-apricot to-lilac",
  },
  {
    title: "Quality & Collaboration",
    skills: [
      "Unit Testing",
      "API Testing",
      "Jest",
      "Vitest",
      "ESLint",
      "Agile/Scrum",
      "Jira",
      "Confluence",
    ],
    gradient: "from-lilac to-primary",
  },
];

const SkillsSection = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive full-stack toolkit built over{" "}
              <strong>{experienceStats.totalLabel}</strong> years of production
              experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {(loading ? Array(8).fill({}) : skillCategories).map(
              (category, index) => (
                <div
                  key={category.title || index}
                  className="glass-card-hover p-6 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    {loading ? (
                      <div className="w-8 h-6 rounded-full bg-gray-300/30 animate-pulse" />
                    ) : (
                      <div
                        className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.gradient}`}
                      />
                    )}
                    <h3
                      className={`text-lg font-semibold font-display ${
                        loading
                          ? "bg-gray-300/30 animate-pulse w-32 h-5 rounded"
                          : ""
                      }`}
                    >
                      {!loading && category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {loading
                      ? Array(6)
                          .fill("")
                          .map((_, i) => (
                            <div
                              key={i}
                              className="h-6 w-20 bg-gray-300/30 rounded-full animate-pulse"
                            />
                          ))
                      : category.skills.map((skill) => (
                          <span key={skill} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
