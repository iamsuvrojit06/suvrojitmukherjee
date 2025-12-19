import { GraduationCap, Calendar, Briefcase, Lightbulb, TrendingUp } from "lucide-react";

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
];

const processSteps = [
  { icon: Briefcase, title: "Business Planning", description: "Understanding requirements and project scope" },
  { icon: Lightbulb, title: "Design Strategy", description: "Creating efficient solutions and architecture" },
  { icon: TrendingUp, title: "Grow Your Skills", description: "Continuous learning and improvement" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,0 100,100 0,100" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Process Section */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            My Working Process
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 hover:bg-accent hover:text-white transition-all duration-300 group">
                  <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-hero-text mb-1">{step.title}</h3>
                <p className="text-sm text-hero-muted max-w-[200px]">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute">
                    <svg className="w-20 h-4 text-gray-300" viewBox="0 0 80 16">
                      <path d="M0 8 L70 8 M60 2 L70 8 L60 14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            Academic Journey
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                  edu.current ? 'border-l-4 border-l-accent' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-hero-text">{edu.degree}</h3>
                        {edu.current && (
                          <span className="text-xs px-2 py-1 rounded-full bg-accent text-white">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-hero-muted">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-hero-muted bg-white px-3 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;