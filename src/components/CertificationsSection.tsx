import { Award, Star } from "lucide-react";

const testimonials = [
  {
    title: "Digital 101 Journey",
    issuer: "Digital Skills Program",
    rating: 5,
  },
  {
    title: "C for Beginners",
    issuer: "Programming Fundamentals",
    rating: 5,
  },
  {
    title: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services",
    rating: 5,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-hero-text">
            What People Say's About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(cert.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-hero-muted text-sm mb-6 leading-relaxed">
                Successfully completed the certification program demonstrating proficiency 
                in the subject matter and practical application of concepts learned.
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-hero-text text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-hero-muted">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;