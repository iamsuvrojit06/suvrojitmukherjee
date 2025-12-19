import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Suvrojit Mukherjee. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary mx-1" /> in West Bengal, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
