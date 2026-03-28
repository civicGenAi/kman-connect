import { cn } from "@/lib/utils";
import { Mentor } from "@/data/mockData";
import { KmanCard } from "./KmanCard";
import { KmanBadge } from "./KmanBadge";
import { KmanButton } from "./KmanButton";
import { Star, Calendar } from "lucide-react";

interface MentorCardProps {
  mentor: Mentor;
  className?: string;
  onBook?: () => void;
}

export const MentorCard = ({ mentor, className, onBook }: MentorCardProps) => (
  <KmanCard className={cn("flex flex-col gap-4", className)}>
    <div className="flex items-start gap-3">
      <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-card", mentor.color)}>
        {mentor.initials}
      </div>
      <div className="min-w-0">
        <h3 className="font-display font-bold text-foreground">{mentor.name}</h3>
        <p className="text-sm text-muted-foreground">{mentor.title}</p>
        <p className="text-xs text-muted-foreground">{mentor.company}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {mentor.expertise.map((tag) => (
        <KmanBadge key={tag} variant="slate">{tag}</KmanBadge>
      ))}
    </div>
    <div className="flex items-center gap-4 text-sm">
      <span className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-primary text-primary" /> {mentor.rating}
      </span>
      <span className="flex items-center gap-1 text-muted-foreground">
        <Calendar className="h-4 w-4" /> {mentor.sessions} sessions
      </span>
      <KmanBadge variant={mentor.available ? "green" : "red"}>
        {mentor.available ? "Available" : "Booked"}
      </KmanBadge>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{mentor.rate}</span>
      <KmanButton variant="outline" size="sm" onClick={onBook}>
        Book Session
      </KmanButton>
    </div>
  </KmanCard>
);
