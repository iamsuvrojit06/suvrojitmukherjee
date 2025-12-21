import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_fwxxj34";
const EMAILJS_TEMPLATE_ID = "template_zyf88q1";
const EMAILJS_PUBLIC_KEY = "KK2Q4tnxI7AveDfNe";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      href: "https://www.linkedin.com/in/suvrojitmukherjee",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-hero-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full blur-xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            Let's Connect
          </h2>
          <p className="text-hero-muted max-w-2xl mx-auto">
            I'm always open to discussing new projects, internship opportunities, or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-hero-text mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-hero-muted">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-hero-text hover:text-accent transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-hero-text font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-hero-text mb-6">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-hero-muted mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-hero-text"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-hero-muted mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-hero-text"
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-hero-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-hero-text resize-none"
                  placeholder="Your message here..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl shadow-lg shadow-accent/30" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;