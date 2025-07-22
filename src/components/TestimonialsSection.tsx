import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      company: "Pharmaceutical Research Ltd.",
      role: "Chief Technology Officer",
      content: "Basai Industries delivered exceptional vacuum systems for our pharmaceutical manufacturing. Their attention to detail and technical expertise exceeded our expectations. The equipment has been running flawlessly for over two years.",
      rating: 5,
      image: "/lovable-uploads/6871f047-7c28-470d-adf6-f7b1b022232b.png"
    },
    {
      name: "Ms. Priya Sharma",
      company: "Advanced Materials Inc.",
      role: "Operations Manager",
      content: "The thermal furnaces from Basai Industries have revolutionized our heat treatment processes. The precision and reliability of their equipment has significantly improved our product quality and reduced operational costs.",
      rating: 5,
      image: "/lovable-uploads/6871f047-7c28-470d-adf6-f7b1b022232b.png"
    },
    {
      name: "Mr. Arjun Patel",
      company: "Research Institute of Technology",
      role: "Laboratory Director",
      content: "Outstanding process instrumentation solutions! The measuring instruments provided by Basai Industries offer unmatched precision for our R&D applications. Their technical support team is always responsive and knowledgeable.",
      rating: 5,
      image: "/lovable-uploads/6871f047-7c28-470d-adf6-f7b1b022232b.png"
    },
    {
      name: "Dr. Anita Verma",
      company: "Industrial Automation Systems",
      role: "Project Manager",
      content: "Basai Industries has been our trusted partner for vacuum technology solutions. Their innovative approach and commitment to quality has helped us achieve remarkable results in our industrial automation projects.",
      rating: 5,
      image: "/lovable-uploads/6871f047-7c28-470d-adf6-f7b1b022232b.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with Basai Industries
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div
          className={`relative max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="industrial-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-industrial">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary font-semibold mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              size="icon"
              variant="secondary"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect hover:glow-effect"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect hover:glow-effect"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`industrial-card p-6 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial
                  ? "ring-2 ring-primary glow-effect"
                  : "hover:shadow-industrial"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-primary">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="industrial-card inline-block p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Satisfied Clients?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Experience the Basai Industries difference. Contact us today to discuss 
              your industrial equipment and instrumentation needs.
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;