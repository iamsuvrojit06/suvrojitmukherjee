import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tappu06klna@gmail.com",
      href: "mailto:tappu06klna@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7001642863",
      href: "tel:+917001642863",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kalna, West Bengal, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Suvrojit Mukherjee",
      href: "https://linkedin.com/in/suvrojit-mukherjee",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, internship opportunities, or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
