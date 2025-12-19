const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "Networking Fundamentals", "Operating Systems Basics"],
  },
  {
    title: "Web Development",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Tools & Other Skills",
    skills: ["Pygame", "Git", "Problem Solving", "Logical Thinking"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in programming, algorithms, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border/50 hover:border-primary/30"
                    style={{
                      animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
