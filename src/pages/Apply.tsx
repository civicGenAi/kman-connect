import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { ArrowRight } from "lucide-react";

const ApplyPage = () => (
  <PublicLayout>
    <section className="bg-secondary grain-overlay py-24 relative">
      <div className="container relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">Get Started with KMAN</h1>
        <p className="text-lg text-secondary-foreground/70 mb-8">Whether you're a startup seeking funding or an investor looking for opportunities, we've got you covered.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register"><KmanButton variant="primary" size="lg">Create Account <ArrowRight className="h-4 w-4" /></KmanButton></Link>
          <Link to="/login"><KmanButton variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">Sign In</KmanButton></Link>
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default ApplyPage;
