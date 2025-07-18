import { Sparkles, TrendingUp, Target } from "lucide-react";

const SectionSeparator = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-8 left-1/4 animate-float">
        <Sparkles className="h-8 w-8 text-gold opacity-60" />
      </div>
      <div className="absolute bottom-8 right-1/3 animate-float" style={{ animationDelay: "2s" }}>
        <TrendingUp className="h-6 w-6 text-secondary opacity-60" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <Target className="h-12 w-12 text-primary opacity-40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Smart Habits. Real Rewards. Lasting Wealth.
          </h3>
          <p className="text-lg text-muted-foreground">
            Every good financial decision becomes a stepping stone to your brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSeparator;