import { useEffect, useState } from "react";
import { Thermometer, Gauge, Zap, Cpu, Settings, FlaskConical } from "lucide-react";
import thermalFurnace from "@/assets/thermal-furnace.jpg";
import vacuumPump from "@/assets/vacuum-pump.jpg";
import processInstrumentation from "@/assets/process-instrumentation.jpg";

const ProductsSection = () => {
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

    const element = document.getElementById("products");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      icon: Thermometer,
      title: "High-Temperature Furnaces",
      description: "High-vacuum furnaces engineered for process, medical, and R&D applications",
      image: thermalFurnace,
      features: ["High-temperature capability", "Vacuum technology", "Medical grade", "R&D optimized"]
    },
    {
      icon: Gauge,
      title: "Vacuum Pumps & Systems",
      description: "Wet, dry, and high-vacuum pumps for pharmaceutical applications",
      image: vacuumPump,
      features: ["Pharmaceutical grade", "High efficiency", "Low maintenance", "Reliable operation"]
    },
    {
      icon: Cpu,
      title: "Process Instrumentation",
      description: "Precision instruments for measuring thermal mass flow, level, temperature, and pressure",
      image: processInstrumentation,
      features: ["High precision", "Digital control", "Real-time monitoring", "Advanced calibration"]
    },
    {
      icon: Zap,
      title: "Power Supplies",
      description: "Induction and RF power supplies for industrial applications",
      image: processInstrumentation,
      features: ["High efficiency", "Stable output", "Industrial grade", "Remote control"]
    },
    {
      icon: Settings,
      title: "Vacuum Metallizers",
      description: "High-vacuum metallizers for coating and surface treatment",
      image: vacuumPump,
      features: ["Uniform coating", "High vacuum", "Automated control", "Quality assurance"]
    },
    {
      icon: FlaskConical,
      title: "Laboratory Equipment",
      description: "Specialized equipment for research and development applications",
      image: thermalFurnace,
      features: ["Research grade", "Precision control", "Data logging", "Safety features"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of process instrumentation and vacuum technology solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="industrial-card h-full overflow-hidden">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-primary/20 backdrop-blur-sm rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-xs text-muted-foreground bg-muted/30 rounded-md px-2 py-1"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="industrial-card inline-block p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Our team of specialists can design and manufacture custom equipment 
              tailored to your specific requirements and applications.
            </p>
            <button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 rounded-lg text-primary-foreground font-semibold">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;