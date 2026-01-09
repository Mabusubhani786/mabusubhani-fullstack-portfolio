import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  type: "degree" | "course";
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "St. Mary's Group Of Institutions, JNTU Kakinada",
    location: "Guntur, India",
    duration: "Jun 2018 — Jun 2022",
    description:
      "Completed B.Tech with focus on computer science fundamentals, software engineering principles, and practical development skills.",
    type: "degree",
  },
  {
    degree: "Python Programming",
    institution: "Naresh IT",
    location: "Hyderabad, India",
    duration: "Aug 2022 — Nov 2022",
    description:
      "Intensive Python course covering core programming, data structures, and backend development fundamentals.",
    type: "course",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              <span className="gradient-text">Education</span> & Courses
            </h2>
            <p className="text-muted-foreground">
              My academic journey and professional certifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

            {/* Education Items */}
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent hidden md:block transform -translate-x-1/2 ring-4 ring-background" />

                  {/* Card */}
                  <div className="glass-card-hover p-6 md:p-8 gradient-border">
                    {/* Type badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                      {item.type === "degree" ? (
                        <GraduationCap className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                      {item.type === "degree" ? "Degree" : "Course"}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold font-display mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      {item.institution}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
