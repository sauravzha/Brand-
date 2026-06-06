import { useEffect, useState } from "react";
import logo from "@/assets/brandyatra-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Digital marketing is not the art of selling a product. It is the art of making people change their minds.",
  "Content is fire, social media is gasoline.",
  "The best marketing doesn't feel like marketing.",
  "Creativity is intelligence having fun.",
  "Simplicity is the ultimate sophistication.",
  "Your brand is what people say about you when you're not in the room.",
  "Marketing is no longer about the stuff you make, but the stories you tell.",
  "A brand is a voice, and a product is a souvenir.",
  "People don’t buy products. They buy emotions, experiences, and connections.",
  "Great brands don’t speak the loudest—they speak the clearest.",
  "Make it simple, but significant.",
  "If content is king, consistency is the kingdom.",
  "Don’t create for everyone. Create for someone.",
  "Design is the silent ambassador of your brand.",
  "Authenticity is the most powerful form of currency in the digital world.",
  "Your story is your superpower—use it wisely.",
  "Every interaction is an opportunity to build trust.",
  "Creativity is thinking up new things. Innovation is doing them.",
  "Marketing is about forming relationships, not transactions.",
  "The future belongs to brands that listen.",
  "When you stop learning, you stop leading.",
  "Good content informs. Great content transforms.",
  "A strategy without creativity is just a plan. Creativity gives it life.",
  "The smallest detail can create the biggest brand moment.",
  "Your brand is a promise—deliver it every day.",
  "Innovation begins at the edge of your comfort zone."
];

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 600);
    }, 4000); // Increased to 4 seconds for reading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${isExiting ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="relative flex flex-col items-center max-w-md px-4">
        {/* Animated glow effect */}
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-3xl" />
        </div>

        {/* Logo with animations */}
        <div className="relative animate-float mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
          <img
            src={logo}
            alt="Brand यात्रा"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10 animate-scale-in"
            style={{
              filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.5))",
            }}
          />
        </div>

        {/* Loading text */}
        <div className="text-center space-y-6 relative z-10 w-full">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient animate-fade-in">
              Brand यात्रा
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground animate-fade-in delay-100 mt-2">
              Preparing your digital journey...
            </p>
          </div>

          {/* Quote */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-sm sm:text-base text-foreground/80 italic font-medium animate-fade-in delay-200 px-4">
              "{quote}"
            </p>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto relative">
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
            <div
              className="h-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-full animate-[width_4s_ease-in-out_forwards]"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
