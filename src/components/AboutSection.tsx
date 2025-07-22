import { useEffect, useState } from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering superior quality products and services"
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Team of vacuum and flow specialists with extensive experience"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Advanced instruments for measuring thermal mass flow, level, temperature"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology in process instrumentation and vacuum systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Welcome to <span className="text-primary">Basai Industries</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6"></div>
            </div>

            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="mb-6">
                Basai Industries stands as one of India's leading companies in the field of 
                process instrumentation and vacuum technology. Established in 2019, we specialize 
                in wet, dry, and high-vacuum pumps, as well as advanced vacuum systems designed 
                specifically for the pharmaceutical sector.
              </p>
              
              <p className="mb-6">
                Our extensive product portfolio also includes precision instruments for measuring 
                thermal mass flow, level, temperature, and pressure—along with induction power 
                supplies, RF power supplies, and high-vacuum metallizers.
              </p>

              <p>
                Our Thermal Division is committed to the design and manufacture of high-temperature, 
                high-vacuum furnaces, engineered to meet the rigorous demands of process, medical, 
                and R&D applications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`industrial-card transition-all duration-500 delay-${index * 100}`}
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chairman Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Chairman Image */}
              <div className="industrial-card p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="/lovable-uploads/6871f047-7c28-470d-adf6-f7b1b022232b.png"
                    alt="Chairman Vinod"
                    className="w-64 h-80 object-cover rounded-lg mx-auto shadow-industrial"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Chairman Vinod
                </h3>
                <p className="text-primary font-semibold mb-4">
                  Founder & Chairman
                </p>
                <p className="text-muted-foreground">
                  "Leading innovation in process instrumentation and vacuum technology 
                  to deliver excellence in every project."
                </p>
              </div>

              {/* Mission Statement */}
              <div className="industrial-card mt-6 p-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Our Mission
                </h4>
                <p className="text-muted-foreground">
                  At Basai Industries, our team of vacuum and flow specialists is always 
                  ready to connect with you promptly to understand your requirements and 
                  deliver tailored solutions with efficiency and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;