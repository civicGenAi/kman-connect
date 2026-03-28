import { cn } from "@/lib/utils";
import { Startup, sectorColors, stageColors } from "@/data/mockData";
import { KmanBadge } from "./KmanBadge";
import { KmanButton } from "./KmanButton";
import { ArrowRight } from "lucide-react";

// Import startup images
import tanzafarmImg from "@/assets/startups/tanzafarm.jpg";
import swahilipayImg from "@/assets/startups/swahilipay.jpg";
import njialearnImg from "@/assets/startups/njialearn.jpg";
import afyalinkImg from "@/assets/startups/afyalink.jpg";
import safarilogixImg from "@/assets/startups/safarilogix.jpg";
import kilifoodImg from "@/assets/startups/kilifood.jpg";

const startupImageMap: Record<string, string> = {
  "1": tanzafarmImg,
  "2": swahilipayImg,
  "3": njialearnImg,
  "4": afyalinkImg,
  "5": safarilogixImg,
  "6": kilifoodImg,
};

interface StartupCardProps {
  startup: Startup;
  className?: string;
  onView?: () => void;
}

export const StartupCard = ({ startup, className, onView }: StartupCardProps) => {
  const progress = Math.round((startup.fundingRaised / startup.fundingGoal) * 100);
  const image = startupImageMap[startup.id];

  return (
    <div className={cn(
      "group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
      className
    )}>
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={startup.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn("h-full w-full flex items-center justify-center text-3xl font-bold text-card", startup.color)}>
            {startup.initials}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <KmanBadge variant="custom" className={cn(sectorColors[startup.sector], "backdrop-blur-sm")}>{startup.sector}</KmanBadge>
          <KmanBadge variant="custom" className={cn(stageColors[startup.stage], "backdrop-blur-sm")}>{startup.stage}</KmanBadge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-card", startup.color)}>
            {startup.initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-foreground truncate">{startup.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{startup.oneLiner}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-semibold text-foreground">${startup.fundingRaised.toLocaleString()} <span className="text-muted-foreground font-normal">/ ${startup.fundingGoal.toLocaleString()}</span></span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full gradient-gold transition-all duration-700" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">{progress}% funded</p>
        </div>

        <KmanButton variant="ghost" size="sm" className="w-full justify-center" onClick={onView}>
          View Deal <ArrowRight className="h-4 w-4" />
        </KmanButton>
      </div>
    </div>
  );
};
