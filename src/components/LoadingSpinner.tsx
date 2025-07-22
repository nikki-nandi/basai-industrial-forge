import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Company Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/ec08749f-5cbe-4871-9371-36786c3796d1.png"
            alt="Basai Industries"
            className="h-20 w-auto mx-auto animate-pulse"
          />
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-transparent rounded-full animate-spin border-t-primary-glow absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-primary animate-pulse">
            Basai Industries
          </h2>
          <p className="text-muted-foreground animate-pulse">
            Loading industrial excellence...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full mx-auto mt-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary rounded-full" 
            style={{
              animation: 'loadingProgress 2s ease-in-out forwards',
              transform: 'translateX(-100%)'
            }}
          >
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes loadingProgress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `
      }} />
    </div>
  );
};

export default LoadingSpinner;