import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  ExternalLink,
} from "lucide-react";

interface EducationItem {
  level: "U.G" | "Intermediate" | "SSC" | "Course";
  degreeType?: "Bachelor Degree" | "Intermediate" | "SSC" | "Certification";
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  certificateUrl?: string;
  type: "degree" | "course";
}

interface CourseItem {
  title: string;
  institution: string;
  duration: string;
  certificateUrl: string;
}

const educationData: EducationItem[] = [
  {
    level: "U.G",
    degreeType: "Bachelor Degree",
    degree: "B.Tech in Computer Science Engineering",
    institution: "St. Mary’s Group of Institutions",
    location: "Guntur, Andhra Pradesh",
    duration: "Jun 2018 — Jun 2022",
    description:
      "Focused on computer science fundamentals, software engineering, and full-stack development.",
    type: "degree",
  },
  {
    level: "Intermediate",
    degreeType: "Intermediate",
    degree: "Intermediate (12th)",
    institution: "Narayana Junior College",
    location: "Guntur, Andhra Pradesh",
    duration: "Jun 2016 — Jun 2018",
    type: "degree",
  },
  {
    level: "SSC",
    degreeType: "SSC",
    degree: "10th Standard",
    institution: "Jubilation High School",
    location: "Guntur, Andhra Pradesh",
    duration: "Jun 2015 — Jun 2016",
    type: "degree",
  },
];

const courseData: CourseItem[] = [
  {
    title: "Python Programming",
    institution: "Naresh IT",
    duration: "Aug 2022 — Nov 2022",
    certificateUrl:
      "https://drive.google.com/file/d/1KyAUeWbK6MRyfuK3TdbbBs75pg-P5VJd/view",
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground">
              Academic background and educational qualifications
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-20">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent hidden md:block transform -translate-x-1/2 ring-4 ring-background" />

                  <div className="glass-card-hover p-6 md:p-8 gradient-border">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                      <GraduationCap className="w-4 h-4" />
                      Education
                    </div> */}
                    <div className="flex items-center justify-between mb-3">
                      {/* Degree / Course badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {item.type === "degree" ? (
                          <GraduationCap className="w-3.5 h-3.5" />
                        ) : (
                          <BookOpen className="w-3.5 h-3.5" />
                        )}
                        {item.level}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold font-display mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      {item.institution}
                    </p>

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

          {/* Courses & Certifications */}
          <div>
            <div className="text-center mb-16">
              <h3 className="section-heading">
                Courses & <span className="gradient-text">Certifications</span>
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-8">
                Professional development and technical certifications
              </p>
            </div>

            <div className="space-y-6">
              {courseData.map((course, index) => (
                <div
                  key={index}
                  className="glass-card-hover p-6 md:p-8 gradient-border"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm mb-4">
                    <BookOpen className="w-4 h-4" />
                    Course
                  </div>

                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-accent font-medium mb-4">
                    {course.institution}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {course.duration}
                    </div>

                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline pointer-events-auto relative z-10"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
