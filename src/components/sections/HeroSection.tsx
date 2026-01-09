import { ArrowDown, FileDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experienceStats } from "@/utils/experience.util";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gradient-text">Mabusubhani</span>
            <br />
            <span className="text-foreground">Shaik</span>
          </h1>

          {/* Role */}
          <div
            className="flex items-center justify-center gap-3 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              Full Stack Developer
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Full-stack developer with{" "}
            <strong>{experienceStats.totalLabel}</strong> years of experience
            delivering high-performance web applications using{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-accent font-medium">Vue.js</span>,{" "}
            <span className="text-primary font-medium">Next.js</span>, and{" "}
            <span className="text-accent font-medium">Node.js</span> with modern
            cloud technologies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
            >
              View Projects
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card hover:bg-primary/10 px-8 py-6 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105 border-primary/20"
              asChild
            >
              <a href="/resume.pdf" download>
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

export default HeroSection;
