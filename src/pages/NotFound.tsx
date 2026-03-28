import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { KmanButton } from "@/components/kman/KmanButton";
import { Home, ArrowLeft, Search, Mountain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setMounted(true);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary grain-overlay relative overflow-hidden px-4">
      {/* Background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-[150px]" />

      {/* Mountain silhouette */}
      <svg className="absolute bottom-0 left-0 w-full h-40 md:h-64" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
        <path d="M0 200L120 180C180 170 240 160 360 140C420 130 480 120 540 115C600 110 660 108 720 105C780 100 840 98 900 100C960 102 1020 108 1080 115C1140 122 1200 130 1260 145C1320 160 1380 170 1440 180V200H0Z" fill="hsl(40, 100%, 49%)" fillOpacity="0.08" />
        <path d="M0 200L100 185C200 175 300 170 400 155C500 142 600 130 700 125C800 120 900 122 1000 130C1100 138 1200 150 1300 165C1400 175 1440 185 1440 190V200H0Z" fill="hsl(207, 43%, 14%)" fillOpacity="0.5" />
      </svg>

      <div className={`relative z-10 text-center max-w-lg transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center justify-center mb-6">
          <Mountain className="h-12 w-12 text-primary" />
        </div>

        <h1 className="text-8xl md:text-9xl font-display font-bold shimmer mb-4">404</h1>

        <h2 className="text-xl md:text-2xl font-display font-bold text-secondary-foreground mb-3">
          Trail Not Found
        </h2>

        <p className="text-secondary-foreground/60 mb-8 leading-relaxed">
          Looks like this path doesn't lead to the summit. The page you're looking for may have been moved or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <KmanButton variant="primary" size="lg">
              <Home className="h-4 w-4" /> Back to Home
            </KmanButton>
          </Link>
          <button onClick={() => window.history.back()}>
            <KmanButton variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
              <ArrowLeft className="h-4 w-4" /> Go Back
            </KmanButton>
          </button>
        </div>

        <div className="mt-10 glass rounded-2xl p-4 max-w-xs mx-auto">
          <div className="flex items-center gap-2 text-sm text-secondary-foreground/50">
            <Search className="h-4 w-4" />
            <span className="font-mono text-xs truncate">{location.pathname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
