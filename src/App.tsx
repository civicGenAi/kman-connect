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
import DealFlow from "./pages/investor/DealFlow";
import Portfolio from "./pages/investor/Portfolio";
import Network from "./pages/investor/Network";
import Reports from "./pages/investor/Reports";
import StartupDashboard from "./pages/startup/Dashboard";
import StartupProfile from "./pages/startup/Profile";
import StartupInvestors from "./pages/startup/Investors";
import FindMentor from "./pages/startup/FindMentor";
import MentorDashboard from "./pages/mentor/Dashboard";
import MentorProfile from "./pages/mentor/Profile";
import MentorSessions from "./pages/mentor/Sessions";
import MentorMentees from "./pages/mentor/Mentees";
import MentorResources from "./pages/mentor/Resources";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminStartups from "./pages/admin/Startups";
import AdminInvestors from "./pages/admin/Investors";
import AdminMentors from "./pages/admin/Mentors";
import AdminDeals from "./pages/admin/Deals";
import AdminKYC from "./pages/admin/KYC";
import AdminPayments from "./pages/admin/Payments";
import MessagesPage from "./pages/Messages";
import DealRoomPage from "./pages/DealRoom";
import SettingsPage from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

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
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/investor/dashboard" element={<InvestorDashboard />} />
            <Route path="/investor/deals" element={<DealFlow />} />
            <Route path="/investor/portfolio" element={<Portfolio />} />
            <Route path="/investor/network" element={<Network />} />
            <Route path="/investor/reports" element={<Reports />} />
            <Route path="/investor/messages" element={<MessagesPage />} />
            <Route path="/investor/settings" element={<SettingsPage />} />
            <Route path="/investor/*" element={<InvestorDashboard />} />

            <Route path="/startup/dashboard" element={<StartupDashboard />} />
            <Route path="/startup/profile" element={<StartupProfile />} />
            <Route path="/startup/investors" element={<StartupInvestors />} />
            <Route path="/startup/mentors" element={<FindMentor />} />
            <Route path="/startup/deal-room" element={<DealRoomPage />} />
            <Route path="/startup/messages" element={<MessagesPage />} />
            <Route path="/startup/settings" element={<SettingsPage />} />
            <Route path="/startup/*" element={<StartupDashboard />} />

            <Route path="/mentor/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor/profile" element={<MentorProfile />} />
            <Route path="/mentor/sessions" element={<MentorSessions />} />
            <Route path="/mentor/mentees" element={<MentorMentees />} />
            <Route path="/mentor/resources" element={<MentorResources />} />
            <Route path="/mentor/messages" element={<MessagesPage />} />
            <Route path="/mentor/settings" element={<SettingsPage />} />
            <Route path="/mentor/*" element={<MentorDashboard />} />

            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/startups" element={<AdminStartups />} />
            <Route path="/admin/investors" element={<AdminInvestors />} />
            <Route path="/admin/mentors" element={<AdminMentors />} />
            <Route path="/admin/deals" element={<AdminDeals />} />
            <Route path="/admin/kyc" element={<AdminKYC />} />
            <Route path="/admin/payments" element={<AdminPayments />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
