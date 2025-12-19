import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "BTech in Computer Science & Engineering",
    institution: "Government College of Engineering and Leather Technology",
    period: "2025 – 2028",
    current: true,
  },
  {
    degree: "Diploma in Communication & Computer Networking (CCN)",
    institution: "Abacus Institute of Engineering & Management",
    period: "2023 – 2025",
    current: false,
  },
  {
    degree: "Class XII (WBCHSE – Arts)",
    institution: "Kalna Ambika Mahismardini High School",
    period: "2021 – 2023",
    current: false,
  },
  {
    degree: "ITI – Draughtsman Civil (NSQF)",
    institution: "Govt. Industrial Training Institute, Hooghly",
    period: "2020 – 2022",
    current: false,
  },
  {
    degree: "Class X (WBBSE)",
    institution: "Kalna Ambika Mahismardini High School",
    period: "2015 – 2020",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 top-6 z-10">
                  {edu.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-10 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 inline-block w-full ${
                      edu.current ? "border-primary/30 glow" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.current && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
