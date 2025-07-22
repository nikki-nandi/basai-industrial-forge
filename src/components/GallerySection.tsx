import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import thermalFurnace from "@/assets/thermal-furnace.jpg";
import vacuumPump from "@/assets/vacuum-pump.jpg";
import processInstrumentation from "@/assets/process-instrumentation.jpg";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      src: thermalFurnace,
      title: "High-Temperature Furnace",
      category: "Manufacturing",
      description: "Advanced thermal processing equipment",
    },
    {
      src: vacuumPump,
      title: "Vacuum Pump System",
      category: "Equipment",
      description: "Industrial vacuum technology",
    },
    {
      src: processInstrumentation,
      title: "Process Control",
      category: "Instrumentation",
      description: "Precision measurement systems",
    },
    {
      src: thermalFurnace,
      title: "Laboratory Setup",
      category: "Research",
      description: "R&D facility equipment",
    },
    {
      src: vacuumPump,
      title: "Installation Project",
      category: "Services",
      description: "On-site equipment installation",
    },
    {
      src: processInstrumentation,
      title: "Quality Testing",
      category: "Quality",
      description: "Rigorous testing procedures",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of our industrial projects and equipment installations
          </p>
        </div>

        {/* Featured Image Carousel */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="industrial-card p-4 overflow-hidden">
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

                {/* Image Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {galleryImages[currentImageIndex].title}
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          {galleryImages[currentImageIndex].category}
                        </p>
                        <p className="text-muted-foreground">
                          {galleryImages[currentImageIndex].description}
                        </p>
                      </div>
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() => openModal(galleryImages[currentImageIndex].src)}
                        className="glass-effect hover:glow-effect"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect hover:glow-effect"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect hover:glow-effect"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="industrial-card p-4 overflow-hidden">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/20 backdrop-blur-sm text-primary text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {image.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="industrial-card p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Watch Our Process Videos
            </h3>
            <p className="text-muted-foreground mb-6">
              See our equipment and processes in action
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <div
                className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedVideo("https://www.youtube.com/embed/323FdedPm2g")}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-transparent border-l-primary ml-1"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Gas Flow Meters Demo</p>
                </div>
              </div>

              {/* Video 2 */}
              <div
                className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedVideo("https://www.youtube.com/embed/Goyn9bQbYIU")}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-transparent border-l-primary ml-1"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Vacuum Pumps Operation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-glow"
            />
            <Button
              size="icon"
              variant="secondary"
              onClick={closeModal}
              className="absolute top-4 right-4 glass-effect"
            >
              ×
            </Button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={selectedVideo}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <Button
              size="icon"
              variant="secondary"
              onClick={closeModal}
              className="absolute top-4 right-4 glass-effect"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
