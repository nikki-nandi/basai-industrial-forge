import { useEffect, useState } from "react";
import { Wrench, Zap, Target, Shield, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Zap,
      title: "Heat Treatment",
      description: "Advanced heat treatment processes for materials enhancement and property modification",
      features: ["Annealing", "Hardening", "Tempering", "Stress Relief"]
    },
    {
      icon: Shield,
      title: "Hardening Services",
      description: "Specialized hardening techniques to improve material durability and performance",
      features: ["Surface Hardening", "Through Hardening", "Case Hardening", "Induction Hardening"]
    },
    {
      icon: Target,
      title: "Shot Blasting",
      description: "Surface preparation and finishing services using advanced shot blasting technology",
      features: ["Surface Cleaning", "Rust Removal", "Paint Preparation", "Texture Creation"]
    },
    {
      icon: Wrench,
      title: "Equipment Installation",
      description: "Professional installation and commissioning of industrial equipment and systems",
      features: ["System Integration", "Commissioning", "Testing", "Training"]
    },
    {
      icon: Clock,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and support services for all equipment and systems",
      features: ["Preventive Maintenance", "Emergency Repairs", "Spare Parts", "Technical Support"]
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and certification services ensuring industry standards",
      features: ["ISO Certification", "Quality Testing", "Documentation", "Compliance"]
    }
  ];

  const whyChooseUs = [
    {
      number: "5+",
      title: "Years Experience",
      description: "Established expertise in industrial solutions"
    },
    {
      number: "99%",
      title: "Quality Assurance",
      description: "Commitment to excellence in every project"
    },
    {
      number: "24/7",
      title: "Expert Support",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "100%",
      title: "Sustainable Approach",
      description: "Environmentally conscious solutions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive industrial services tailored to meet your specific requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="industrial-card h-full relative overflow-hidden">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:animate-pulse-glow">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Basai Industries?</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, sustainability, and innovation makes us 
              the preferred choice for industrial solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`text-center transition-all duration-500 delay-${index * 100}`}
              >
                <div className="industrial-card group hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                    {item.number}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="industrial-card p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Our Service Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your requirements" },
                { step: "02", title: "Planning", desc: "Designing optimal solutions" },
                { step: "03", title: "Implementation", desc: "Professional execution" },
                { step: "04", title: "Support", desc: "Ongoing maintenance & support" }
              ].map((process, index) => (
                <div key={process.step} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;