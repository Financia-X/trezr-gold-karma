import { Sparkles, Zap, Target, Trophy } from "lucide-react";

const SectionSeparator = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center gap-6 max-w-md w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/20 flex-1"></div>
        <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-primary/30 shadow-lg shadow-primary/10">
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-gradient-gold animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/20 flex-1"></div>
      </div>
    </div>
  );
};

export default SectionSeparator;