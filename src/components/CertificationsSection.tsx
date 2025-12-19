import { Award } from "lucide-react";

const certifications = [
  {
    title: "Digital 101 Journey",
    issuer: "Digital Skills Program",
  },
  {
    title: "C for Beginners",
    issuer: "Programming Fundamentals",
  },
  {
    title: "TCS iON Career Edge – IT for Non-IT",
    issuer: "Tata Consultancy Services",
  },
  {
    title: "Career Guidance Webinar",
    issuer: "E-Cell IIT Hyderabad",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-sm">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
