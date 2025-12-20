import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-hero-text font-semibold text-lg">
            SM
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/suvrojitmukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-hero-muted hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/iamsuvrojit06"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-hero-muted hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:tappu06klna@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-hero-muted hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-hero-muted">
            Made with <Heart className="w-4 h-4 text-accent fill-accent mx-1" /> by Suvrojit
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-hero-muted">
          © {new Date().getFullYear()} Suvrojit Mukherjee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;