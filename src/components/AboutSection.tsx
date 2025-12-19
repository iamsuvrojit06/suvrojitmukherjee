import { Code, Network, Music, Brain } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Know <span className="text-gradient">Who I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a 2nd-year{" "}
              <span className="text-foreground font-medium">
                BTech Computer Science & Engineering
              </span>{" "}
              student at Government College of Engineering and Leather
              Technology, with a deep passion for coding and understanding how
              systems work at their core.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My tech journey began with a{" "}
              <span className="text-foreground font-medium">
                Diploma in Communication & Computer Networking (CCN)
              </span>
              , where I gained strong fundamentals in networks, protocols, and
              system behavior. This foundation has shaped my approach to
              problem-solving and software development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm expanding my skills into full-stack web development
              with the{" "}
              <span className="text-foreground font-medium">MERN Stack</span>,
              while maintaining a strong focus on{" "}
              <span className="text-foreground font-medium">
                Data Structures & Algorithms
              </span>{" "}
              using C/C++ and Python.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I'm a creative individual who enjoys singing and
              music, which has helped me develop better teamwork and
              communication skills.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
