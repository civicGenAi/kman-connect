import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AboutPage from "./pages/About";
import StartupsPage from "./pages/Startups";
import MentorsPage from "./pages/Mentors";
import InvestorsPage from "./pages/Investors";
import ApplyPage from "./pages/Apply";
import InvestorDashboard from "./pages/investor/Dashboard";
import StartupDashboard from "./pages/startup/Dashboard";
import MentorDashboard from "./pages/mentor/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import MessagesPage from "./pages/Messages";
import DealRoomPage from "./pages/DealRoom";
import SettingsPage from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/startups" element={<StartupsPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/investor/dashboard" element={<InvestorDashboard />} />
            <Route path="/investor/deals" element={<InvestorDashboard />} />
            <Route path="/investor/portfolio" element={<InvestorDashboard />} />
            <Route path="/investor/messages" element={<MessagesPage />} />
            <Route path="/investor/settings" element={<SettingsPage />} />
            <Route path="/investor/*" element={<InvestorDashboard />} />

            <Route path="/startup/dashboard" element={<StartupDashboard />} />
            <Route path="/startup/deal-room" element={<DealRoomPage />} />
            <Route path="/startup/messages" element={<MessagesPage />} />
            <Route path="/startup/settings" element={<SettingsPage />} />
            <Route path="/startup/*" element={<StartupDashboard />} />

            <Route path="/mentor/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor/sessions" element={<MentorDashboard />} />
            <Route path="/mentor/mentees" element={<MentorDashboard />} />
            <Route path="/mentor/messages" element={<MessagesPage />} />
            <Route path="/mentor/settings" element={<SettingsPage />} />
            <Route path="/mentor/*" element={<MentorDashboard />} />

            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/*" element={<AdminDashboard />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
