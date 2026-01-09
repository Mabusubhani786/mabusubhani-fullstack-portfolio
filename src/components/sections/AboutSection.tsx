import { MapPin, Calendar, Code2 } from "lucide-react";
import profileImage from "@/assets/my.png";
import { experienceStats } from "@/utils/experience.util";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* About Card - Two Column Layout */}
          <div className="glass-card-hover p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="relative flex justify-center">
                <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden glass-card group">
                  <img
                    src={profileImage}
                    alt="Mabusubhani Shaik"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Decorative glow */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl pointer-events-none" />
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-6">
                {/* Info badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                    <MapPin className="w-4 h-4" />
                    Guntur, India
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm">
                    <Calendar className="w-4 h-4" />
                    <strong>{experienceStats.totalLabel}</strong> Years
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm">
                    <Code2 className="w-4 h-4" />
                    Full Stack
                  </div>
                </div>

                {/* Short Bio */}
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    I'm a{" "}
                    <span className="text-primary font-medium">
                      Full Stack Developer
                    </span>{" "}
                    who enjoys building scalable and elegant web applications.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Experienced with{" "}
                    <span className="text-foreground">
                      React, Vue, Next.js, Nuxt.js
                    </span>{" "}
                    on the frontend and{" "}
                    <span className="text-foreground">
                      Node.js, NestJS, Fastify, Express, Koa, Python, Django
                    </span>{" "}
                    on the backend, working with PostgreSQL and MongoDB.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about clean code, great UX, and delivering
                    products that make an impact. ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
