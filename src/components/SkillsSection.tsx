import { Palette, Code, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Programming",
    description: "Strong foundation in C, C++, Python with focus on DSA and problem-solving",
    highlighted: false,
  },
  {
    icon: Palette,
    title: "Web Development",
    description: "Learning MERN Stack - MongoDB, Express.js, React.js, Node.js for full-stack apps",
    highlighted: true,
  },
  {
    icon: Smartphone,
    title: "Networking",
    description: "Solid understanding of networks, protocols, and system behavior from CCN diploma",
    highlighted: false,
  },
];

const skills = [
  { name: "C/C++", level: 85 },
  { name: "Python", level: 80 },
  { name: "Data Structures", level: 75 },
  { name: "React.js", level: 60 },
  { name: "Node.js", level: 55 },
  { name: "Networking", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-hero-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-hero-muted max-w-2xl mx-auto">
            Building a strong foundation in programming, algorithms, and modern web technologies
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                service.highlighted 
                  ? 'bg-accent text-white shadow-xl shadow-accent/30' 
                  : 'bg-white text-hero-text shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                service.highlighted ? 'bg-white/20' : 'bg-accent/10'
              }`}>
                <service.icon className={`w-8 h-8 ${service.highlighted ? 'text-white' : 'text-accent'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className={`text-sm ${service.highlighted ? 'text-white/80' : 'text-hero-muted'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-hero-text mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-hero-text">{skill.name}</span>
                  <span className="text-sm text-hero-muted">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;