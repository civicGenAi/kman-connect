import { PublicNavbar } from "./PublicNavbar";
import { Footer } from "./Footer";

export const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <PublicNavbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);
