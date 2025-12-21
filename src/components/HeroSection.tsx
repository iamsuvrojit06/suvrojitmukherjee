import { Download, Play, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 bg-hero-light relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-[15%] hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent/40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-[10%] hidden lg:block">
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-accent">
          <polygon points="15,0 30,30 0,30" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-hero-text animate-fade-up leading-tight">
              Hello, I'm{" "}
              <br className="hidden sm:block" />
              <span className="text-hero-text">Suvrojit Mukherjee</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-accent">CSE Student</span>
            </h1>

            <p className="text-hero-muted text-lg mb-8 max-w-md mx-auto lg:mx-0 animate-fade-up animation-delay-100">
              B.Tech CSE '28 @ GCELT | CCN Diploma | C++ | Python | DSA | Aspiring MERN Stack Developer
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up animation-delay-200">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/30"
                asChild
              >
                <a href="#contact">
                  Get Started
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-hero-text hover:bg-accent/10 rounded-full gap-2"
                asChild
              >
                <a href="/resume.pdf" download>
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Download className="w-4 h-4 text-accent" />
                  </div>
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3">
                <span className="text-hero-muted text-sm">Connect with me</span>
                <div className="flex -space-x-2">
                  <a
                    href="https://www.linkedin.com/in/suvrojitmukherjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                  </a>
                  <a
                    href="https://github.com/iamsuvrojit06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center relative animate-fade-up animation-delay-200">
            {/* Main Image Container */}
            <div className="relative">
              {/* Yellow blob background */}
              <div className="absolute -top-8 -right-8 w-80 h-80 sm:w-96 sm:h-96 bg-accent rounded-blob animate-blob" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-blob overflow-hidden z-10">
                <img 
                  src={profileImage} 
                  alt="Suvrojit Mukherjee" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-4 bottom-1/4 bg-white rounded-2xl px-4 py-3 shadow-xl z-20 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-hero-text">2+</span>
                  <div className="text-xs text-hero-muted leading-tight">
                    <span>Years</span>
                    <br />
                    <span>Learning</span>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-8 hidden sm:block">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  {[...Array(16)].map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 4) * 20 + 10}
                      cy={Math.floor(i / 4) * 20 + 10}
                      r="3"
                      className="fill-accent/30"
                    />
                  ))}
                </svg>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-6 left-1/4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float animation-delay-200 z-20">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute -bottom-2 right-1/4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float animation-delay-400 z-20">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
