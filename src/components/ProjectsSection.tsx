import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Amazon Clone Website",
    description:
      "Full frontend Amazon-style e-commerce UI with product listing, cart system, and authentication pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Snake Game",
    description:
      "Classic snake game with smooth controls, scoring system, and graphical enhancements using Pygame.",
    tech: ["Python", "Pygame"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Smart Weather App",
    description:
      "Modern weather forecasting app with clean UI that displays real-time weather data and conditions.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <span className="text-4xl font-bold text-foreground/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
