// Mock data for the entire KMAN platform

export interface Investor {
  id: string;
  name: string;
  location: string;
  deployed: number;
  avatar: string;
  sectors: string[];
}

export interface Startup {
  id: string;
  name: string;
  sector: string;
  stage: string;
  oneLiner: string;
  fundingGoal: number;
  fundingRaised: number;
  initials: string;
  color: string;
  image?: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  hoursMentored: number;
  sessions: number;
  rate: string;
  available: boolean;
  initials: string;
  color: string;
}

export const investors: Investor[] = [
  { id: "1", name: "James Makonda", location: "Dar es Salaam", deployed: 127500, avatar: "JM", sectors: ["AgriTech", "FinTech"] },
  { id: "2", name: "Fatuma Nkosi", location: "Nairobi", deployed: 85000, avatar: "FN", sectors: ["EdTech", "HealthTech"] },
  { id: "3", name: "Robert Ochieng", location: "Kampala", deployed: 210000, avatar: "RO", sectors: ["FinTech", "Logistics"] },
];

export const startupImages: Record<string, string> = {};

export const startups: Startup[] = [
  { id: "1", name: "TanzaFarm", sector: "AgriTech", stage: "Seed", oneLiner: "Smart farming solutions for Tanzanian smallholders", fundingGoal: 150000, fundingRaised: 67500, initials: "TF", color: "bg-emerald-500" },
  { id: "2", name: "SwahiliPay", sector: "FinTech", stage: "Pre-seed", oneLiner: "Mobile-first payments for East African merchants", fundingGoal: 300000, fundingRaised: 216000, initials: "SP", color: "bg-blue-500" },
  { id: "3", name: "NjiaLearn", sector: "EdTech", stage: "Idea", oneLiner: "Personalized learning paths for African students", fundingGoal: 80000, fundingRaised: 22400, initials: "NL", color: "bg-violet-500" },
  { id: "4", name: "AfyaLink", sector: "HealthTech", stage: "Seed", oneLiner: "Connecting patients to healthcare providers digitally", fundingGoal: 200000, fundingRaised: 122000, initials: "AL", color: "bg-rose-500" },
  { id: "5", name: "SafariLogix", sector: "Logistics", stage: "Pre-seed", oneLiner: "AI-powered logistics for last-mile delivery", fundingGoal: 120000, fundingRaised: 18000, initials: "SL", color: "bg-amber-600" },
  { id: "6", name: "KiliFood", sector: "FoodTech", stage: "Seed", oneLiner: "Farm-to-table marketplace for organic produce", fundingGoal: 90000, fundingRaised: 79200, initials: "KF", color: "bg-teal-500" },
  { id: "7", name: "BongoCash", sector: "FinTech", stage: "Seed", oneLiner: "Micro-lending platform for informal traders", fundingGoal: 250000, fundingRaised: 100000, initials: "BC", color: "bg-indigo-500" },
  { id: "8", name: "MaziwaFresh", sector: "AgriTech", stage: "Pre-seed", oneLiner: "Cold chain solutions for dairy farmers", fundingGoal: 180000, fundingRaised: 45000, initials: "MF", color: "bg-cyan-500" },
  { id: "9", name: "DawaBot", sector: "HealthTech", stage: "Idea", oneLiner: "AI health assistant for rural communities", fundingGoal: 100000, fundingRaised: 12000, initials: "DB", color: "bg-pink-500" },
  { id: "10", name: "ShuleHub", sector: "EdTech", stage: "Seed", oneLiner: "School management SaaS for East Africa", fundingGoal: 130000, fundingRaised: 78000, initials: "SH", color: "bg-orange-500" },
  { id: "11", name: "TransAfrica", sector: "Logistics", stage: "Pre-seed", oneLiner: "Cross-border freight optimization", fundingGoal: 200000, fundingRaised: 60000, initials: "TA", color: "bg-lime-600" },
  { id: "12", name: "SolarJua", sector: "CleanTech", stage: "Seed", oneLiner: "Solar energy solutions for off-grid homes", fundingGoal: 175000, fundingRaised: 105000, initials: "SJ", color: "bg-yellow-500" },
];

export const mentors: Mentor[] = [
  { id: "1", name: "Dr. Amina Rashidi", title: "FinTech Expert", company: "M-Pesa Foundation", expertise: ["FinTech", "Scale-ups", "East Africa"], rating: 4.9, hoursMentored: 94, sessions: 47, rate: "Free", available: true, initials: "AR", color: "bg-kman-gold" },
  { id: "2", name: "Samuel Kiprotich", title: "AgriTech Advisor", company: "Kenya AgriVentures", expertise: ["AgriTech", "Scale-ups", "Impact"], rating: 4.7, hoursMentored: 67, sessions: 34, rate: "$50/hr", available: true, initials: "SK", color: "bg-emerald-500" },
  { id: "3", name: "Grace Mwangi", title: "Marketing Strategist", company: "BrandAfrica Co.", expertise: ["Marketing", "Brand", "Growth"], rating: 4.8, hoursMentored: 82, sessions: 41, rate: "Pro Bono", available: false, initials: "GM", color: "bg-violet-500" },
  { id: "4", name: "Hassan Juma", title: "Legal & Compliance", company: "EAC Legal Partners", expertise: ["Legal", "Compliance", "Investment Law"], rating: 4.6, hoursMentored: 45, sessions: 22, rate: "$75/hr", available: true, initials: "HJ", color: "bg-blue-500" },
  { id: "5", name: "Esther Okello", title: "Product Management", company: "TechStars Africa", expertise: ["Product", "UX", "Startups"], rating: 4.9, hoursMentored: 110, sessions: 55, rate: "Free", available: true, initials: "EO", color: "bg-rose-500" },
  { id: "6", name: "David Kimani", title: "Impact Investor", company: "Novastar Ventures", expertise: ["Impact Investing", "ESG", "Due Diligence"], rating: 4.5, hoursMentored: 38, sessions: 19, rate: "$100/hr", available: false, initials: "DK", color: "bg-teal-500" },
  { id: "7", name: "Zainab Mohammed", title: "Operations Expert", company: "Jumia Tanzania", expertise: ["Operations", "Logistics", "E-commerce"], rating: 4.7, hoursMentored: 56, sessions: 28, rate: "Pro Bono", available: true, initials: "ZM", color: "bg-indigo-500" },
  { id: "8", name: "Peter Waweru", title: "Finance & Fundraising", company: "Savannah Fund", expertise: ["Finance", "Fundraising", "Venture Capital"], rating: 4.8, hoursMentored: 73, sessions: 36, rate: "$60/hr", available: true, initials: "PW", color: "bg-amber-600" },
  { id: "9", name: "Lilian Achieng", title: "HealthTech Specialist", company: "Africa Health Holdings", expertise: ["HealthTech", "Telemedicine", "Regulatory"], rating: 4.6, hoursMentored: 42, sessions: 21, rate: "Free", available: true, initials: "LA", color: "bg-pink-500" },
];

export const sectorColors: Record<string, string> = {
  AgriTech: "bg-emerald-100 text-emerald-700",
  FinTech: "bg-blue-100 text-blue-700",
  EdTech: "bg-violet-100 text-violet-700",
  HealthTech: "bg-rose-100 text-rose-700",
  Logistics: "bg-amber-100 text-amber-700",
  FoodTech: "bg-teal-100 text-teal-700",
  CleanTech: "bg-yellow-100 text-yellow-700",
};

export const stageColors: Record<string, string> = {
  Idea: "bg-muted text-muted-foreground",
  "Pre-seed": "bg-blue-50 text-blue-600",
  Seed: "bg-primary/10 text-primary",
};
