import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface KmanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<string, string> = {
  primary: "gradient-gold text-secondary-foreground font-semibold shadow-md hover:shadow-xl hover:brightness-110",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  ghost: "bg-transparent hover:bg-muted text-foreground",
  danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 text-sm rounded-full",
  lg: "px-8 py-3.5 text-base rounded-full",
};

export const KmanButton = forwardRef<HTMLButtonElement, KmanButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 btn-press disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
KmanButton.displayName = "KmanButton";
