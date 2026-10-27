import { useEffect, useState } from "react";
import logo from "@/assets/brandyatra-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Elegant quick reveal (1.2s total)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 400);
    }, 1200);

    return () => clearTimeout(exitTimer);
  }, [onLoadingComplete]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(onLoadingComplete, 200);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background cursor-pointer select-none transition-all duration-400 ${
        isExiting ? "opacity-0 pointer-events-none scale-[1.02]" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Logo with clean fade/scale */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <img
            src={logo}
            alt="Brand यात्रा"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain relative z-10 animate-fade-in"
          />
        </div>

        {/* Brand identity */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-poppins">
            Brand<span className="text-primary">यात्रा</span>
          </h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Performance & Brand Architecture
          </p>
        </div>

        {/* Minimalist pulse line */}
        <div className="w-32 h-[2px] bg-muted rounded-full overflow-hidden mt-6 relative">
          <div className="h-full bg-primary rounded-full animate-[shimmer_1.2s_infinite] w-full" />
        </div>

        <span className="text-[10px] text-muted-foreground/60 mt-4 tracking-wide">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
