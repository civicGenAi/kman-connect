import { KmanSidebar } from "./KmanSidebar";
import { KmanNavbar } from "./KmanNavbar";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen w-full">
    <KmanSidebar />
    <div className="flex-1 flex flex-col md:ml-64">
      <KmanNavbar />
      <main className="flex-1 p-4 md:p-6 bg-background">
        {children}
      </main>
    </div>
  </div>
);
