import { useLocation } from "react-router-dom";
import { PublicNavbar } from "./PublicNavbar";
import { Footer } from "./Footer";
import { NetworkCanvas } from "./NetworkCanvas";
import { CustomCursor } from "./CustomCursor";
import { SpotlightEffect } from "./SpotlightEffect";

const PUBLIC_ROUTES = ["/", "/about", "/startups", "/mentors", "/investors", "/how-it-works", "/apply"];

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isPublic = PUBLIC_ROUTES.some(r => pathname === r || pathname === r + "/");

  return (
    <div className="min-h-screen flex flex-col cosmic-theme">
      {isPublic && (
        <>
          <NetworkCanvas />
          <CustomCursor />
          <SpotlightEffect />
        </>
      )}
      <PublicNavbar />
      <main className="flex-1 pt-16 relative z-[2]">{children}</main>
      <Footer />
    </div>
  );
};
