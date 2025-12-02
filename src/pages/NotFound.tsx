import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container px-4 text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-orange-500 animate-pulse">
              404
            </h1>
            <div className="absolute -top-12 -right-12 animate-float" style={{ animationDelay: '0.5s' }}>
              <Compass className="w-24 h-24 text-primary/20" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Lost in <span className="text-gradient">Space?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
            The page you're looking for seems to have drifted into a black hole. Let's get you back on course.
          </p>

          <Link to="/">
            <Button className="h-12 px-8 text-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50 group">
              <Home className="mr-2 w-5 h-5" />
              Return to Base
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
