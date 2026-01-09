import {
  FileDown,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { experienceStats } from "@/utils/experience.util";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Buildbot Technologies",
    location: "Vijayawada, India",
    duration: "Feb 2023 — Present",
    responsibilities: [
      "Built and scaled web applications using Vue.js, React.js, and TypeScript, with backend services in Node.js (Express, NestJS, Fastify, Koa) following clean architecture",
      "Designed and maintained RESTful and GraphQL APIs with JWT authentication, OAuth 2.0, RBAC, refresh tokens, and rate limiting",
      "Implemented real-time communication using WebSockets, Socket.io, and Redis Pub/Sub, and managed background processing with BullMQ and RabbitMQ",
      "Modeled and optimized data in PostgreSQL, MongoDB, and Redis using Prisma, TypeORM, Drizzle ORM, and Mongoose",
      "Containerized applications with Docker and Docker Compose, automated CI/CD pipelines (GitHub Actions, GitLab CI)",
      "Integrated AWS S3, Cloudinary, Twilio, SendGrid, FCM, and Google APIs for scalable cloud solutions",
    ],
  },
  {
    title: "QA Intern",
    company: "Shandy Systems",
    location: "Hyderabad, India",
    duration: "Sept 2022 — Nov 2022",
    responsibilities: [
      "Conducted manual testing including functional, UI, smoke, regression, and end-to-end testing",
      "Created and executed detailed test cases, prepared test data, and generated test execution reports",
      "Logged and tracked defects using Jira; worked closely with developers to verify fixes",
      "Ensured cross-browser compatibility, usability, and full requirements coverage before production releases",
    ],
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <TooltipProvider delayDuration={120}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="section-heading cursor-pointer">
                    Work <span className="gradient-text">Experience</span>
                  </h2>
                </TooltipTrigger>

                <TooltipContent
                  side="bottom"
                  align="center"
                  className="
        w-72 p-4 rounded-2xl
        bg-background/95 backdrop-blur
        border shadow-xl
      "
                >
                  {/* Header */}
                  <div className="mb-3">
                    <p className="text-sm font-semibold tracking-tight">
                      Experience Summary
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Professional timeline overview
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 text-sm">
                    {/* Full-time */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Full-time</span>
                      </div>
                      <span className="font-medium">
                        {experienceStats.fullTimeExact} yrs
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({experienceStats.fullTimeLabel})
                        </span>
                      </span>
                    </div>

                    {/* Internship */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-muted-foreground">
                          Internship
                        </span>
                      </div>
                      <span className="font-medium">
                        {experienceStats.internExact} yrs
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="border-t pt-3 flex items-center justify-between">
                      <span className="font-medium">Total Experience</span>
                      <span className="font-semibold text-primary">
                        {experienceStats.totalExact} yrs
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({experienceStats.totalLabel})
                        </span>
                      </span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <p className="text-muted-foreground">
              My professional journey and achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 md:p-8 gradient-border"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold font-display mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download Resume CTA */}
          <div className="glass-card p-8 md:p-12 text-center gradient-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6">
              <Briefcase className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold font-display mb-4">
              Want the full picture?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my complete resume to see my full experience, skills, and
              qualifications.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="glass-card hover:bg-primary/10 px-8 py-6 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105 border-primary/20"
              asChild
            >
              <a
                href="/resume.pdf"
                download="mabusubhani-fullstack-developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
