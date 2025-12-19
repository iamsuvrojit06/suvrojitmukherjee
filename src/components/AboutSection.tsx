import { Code, Network, Music, Brain, Play } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Problem Solver",
    description: "Strong focus on Data Structures & Algorithms with C/C++ and Python",
  },
  {
    icon: Network,
    title: "Networking Fundamentals",
    description: "Solid foundation in networks, protocols, and system behavior from CCN diploma",
  },
  {
    icon: Brain,
    title: "MERN Stack Learner",
    description: "Currently learning MongoDB, Express, React, and Node.js for full-stack development",
  },
  {
    icon: Music,
    title: "Creative Mind",
    description: "Passionate singer who believes creativity enhances problem-solving abilities",
  },
];

const stats = [
  { value: "5+", label: "Complete Projects" },
  { value: "2+", label: "Years of Learning" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative">
              {/* Yellow blob */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent rounded-blob animate-blob opacity-80" />
              
              {/* Profile placeholder */}
              <div className="relative w-64 h-64 rounded-blob overflow-hidden bg-gradient-to-br from-accent/30 to-accent/50 flex items-center justify-center z-10">
                <span className="text-6xl font-bold text-accent/60">SM</span>
              </div>

              {/* Stats cards */}
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`absolute ${index === 0 ? '-right-4 top-10' : '-bottom-4 left-1/3'} bg-white rounded-xl px-4 py-3 shadow-xl z-20`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Play className="w-3 h-3 text-accent fill-accent" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-hero-text">{stat.value}</span>
                      <p className="text-xs text-hero-muted">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-hero-text">
              Designing Solutions, Not Just Visuals
            </h2>
            
            <div className="space-y-4 text-hero-muted">
              <p>
                I'm a 2nd-year BTech Computer Science & Engineering student at Government 
                College of Engineering and Leather Technology, with a deep passion for 
                coding and understanding how systems work at their core.
              </p>
              <p>
                My tech journey began with a Diploma in Communication & Computer Networking (CCN), 
                where I gained strong fundamentals in networks, protocols, and system behavior.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-hero-text text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-hero-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;