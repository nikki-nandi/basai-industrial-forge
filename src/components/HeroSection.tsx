import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Function to open YouTube video
  const openVideo = () => {
    window.open("https://youtu.be/323FdedPm2g", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <h1 className="hero-title mb-6">BASAI INDUSTRIES</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto font-light">
            Leading the Way in Sustainable Bio-Agriculture
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Specializing in process instrumentation, vacuum technology,
            high-temperature furnaces, and precision measuring instruments for
            pharmaceutical, medical, and R&D applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Scroll to Services */}
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group px-8 py-4"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* ✅ Watch Video (Opens YouTube link) */}
            <Button
              onClick={openVideo}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 glass-effect"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass-effect rounded-lg p-6 text-center animate-float">
            <h3 className="text-3xl font-bold text-primary mb-2">2019+</h3>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
          <div
            className="glass-effect rounded-lg p-6 text-center animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div
            className="glass-effect rounded-lg p-6 text-center animate-float"
            style={{ animationDelay: "1s" }}
          >
            <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
            <p className="text-muted-foreground">Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
