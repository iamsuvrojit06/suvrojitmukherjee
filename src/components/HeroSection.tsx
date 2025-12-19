import { Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-up">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Available for Internships
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up animation-delay-100">
              Hello, I'm{" "}
              <span className="text-gradient">Suvrojit Mukherjee</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-up animation-delay-200">
              BTech CSE '28 | CCN Diploma | C++ & Python Coder | DSA Enthusiast
              | Emerging MERN Stack Developer
            </p>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-300">
              A curious and hardworking computer science student with strong
              fundamentals in networking and programming. I love solving complex
              problems through code and building meaningful applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-up animation-delay-500">
              <a
                href="https://linkedin.com/in/suvrojit-mukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/suvrojitmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image/Avatar */}
          <div className="flex-1 flex justify-center animate-fade-up animation-delay-300">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full glass-card glow flex items-center justify-center animate-pulse-glow">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <span className="text-6xl sm:text-8xl font-bold text-gradient">
                    SM
                  </span>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-lg flex items-center justify-center animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-lg flex items-center justify-center animate-float animation-delay-300">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
