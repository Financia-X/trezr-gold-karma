import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-app-mockup.jpg";

const TrezrHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Card className="glass-card p-4 border-primary/30">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium">+₹250 Gold Earned</span>
          </div>
        </Card>
      </div>
      
      <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: "2s" }}>
        <Card className="glass-card p-4 border-secondary/30">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">12% Growth</span>
          </div>
        </Card>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Card className="glass-card p-4 border-gold/30">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium">Credit Score +15</span>
          </div>
        </Card>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">AI-Powered Finance</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="gradient-primary bg-clip-text text-transparent font-extrabold">
                    Wealth That Grows
                  </span>
                  <br />
                  <span className="text-foreground font-light">With Every Good</span>
                  <br />
                  <span className="gradient-gold bg-clip-text text-transparent font-black italic">
                    Habit.
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-light">
                    Build wealth through small, consistent habits.
                  </p>
                  <p className="text-lg lg:text-xl gradient-gold bg-clip-text text-transparent font-semibold">
                    Every bill paid. Every rupee saved. Every smart choice rewarded.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground font-normal">
                    Your AI-powered financial companion that turns good habits into real wealth.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <form action="https://formspree.io/f/xwpbggnw" method="POST" className="w-full max-w-md">
                <Button 
                  type="submit"
                  size="lg" 
                  className="gradient-primary hover:scale-[1.02] transition-all duration-300 px-8 py-6 text-lg font-semibold animate-glow w-full"
                >
                  Join the Waitlist
                </Button>
              </form>
            </div>

            {/* Habit Building Features */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
              <div>
                <div className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">Auto</div>
                <div className="text-sm text-muted-foreground">Habit Tracking</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">Smart</div>
                <div className="text-sm text-muted-foreground">Micro-investing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Real</div>
                <div className="text-sm text-muted-foreground">Gold Rewards</div>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-background/10 to-background/5 backdrop-blur-sm rounded-3xl border border-primary/20">
              <img 
                src={heroMockup} 
                alt="Trezr App Interface" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 gradient-primary opacity-30 blur-3xl rounded-3xl animate-pulse" />
            <div className="absolute inset-0 gradient-hero opacity-10 blur-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrezrHero;