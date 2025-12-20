import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const categories = ["All", "Web App", "Python", "Frontend"];

const projects = [
  {
    title: "World Clock",
    description: "Interactive world clock app displaying real-time across multiple time zones with clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image: "/placeholder.svg",
  },
  {
    title: "Snake Game",
    description: "Classic snake game with smooth controls, scoring system, and graphical enhancements using Pygame.",
    tech: ["Python", "Pygame"],
    category: "Python",
    image: "/placeholder.svg",
  },
  {
    title: "Smart Weather App",
    description: "Modern weather forecasting app with clean UI that displays real-time weather data and conditions.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    category: "Web App",
    image: "/placeholder.svg",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-hero-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            Digital Product Showcases
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-white text-hero-muted hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/90 rounded-full text-hero-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-hero-text mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-hero-muted mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-hero-muted hover:text-accent hover:bg-accent/10 rounded-full"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-hero-muted hover:text-accent hover:bg-accent/10 rounded-full"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
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