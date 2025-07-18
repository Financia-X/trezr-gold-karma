import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Shield, Zap, Trophy, Target, Gift } from "lucide-react";
import heroIsometric from "@/assets/hero-isometric.png";

const TrezrHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(262_83%_65%_/_0.1),transparent_70%)]" />
      
      {/* Animated Gaming Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Card className="glass-card p-4 border-gold/30 shadow-lg shadow-gold/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <Trophy className="h-4 w-4 text-gold-foreground" />
            </div>
            <div>
              <div className="text-sm font-bold text-gold">Level Up!</div>
              <div className="text-xs text-muted-foreground">+₹250 Gold Earned</div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: "2s" }}>
        <Card className="glass-card p-4 border-secondary/30 shadow-lg shadow-secondary/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-success flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-secondary">Streak Bonus</div>
              <div className="text-xs text-muted-foreground">7 days strong!</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Card className="glass-card p-4 border-primary/30 shadow-lg shadow-primary/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-primary">Achievement</div>
              <div className="text-xs text-muted-foreground">Credit Score +15</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="absolute top-60 right-32 animate-float" style={{ animationDelay: "1s" }}>
        <Card className="glass-card p-3 border-accent/30 shadow-lg shadow-accent/20">
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Daily Reward</span>
          </div>
        </Card>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">AI-Powered Gaming Finance</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-white font-extrabold">
                    Turn Money Into
                  </span>
                  <br />
                  <span className="gradient-primary bg-clip-text text-transparent font-black">
                    Your Favorite
                  </span>
                  <br />
                  <span className="gradient-gold bg-clip-text text-transparent font-black italic">
                    Game
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-medium">
                    Level up your finances with <span className="text-secondary font-bold">achievements</span>, 
                    <span className="text-gold font-bold"> rewards</span>, and 
                    <span className="text-primary font-bold"> real wealth building</span>.
                  </p>
                  <p className="text-lg text-white/70 max-w-xl">
                    Every habit completed earns points. Every point builds wealth. 
                    Every level unlocks financial freedom.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <form action="https://formspree.io/f/xwpbggnw" method="POST" className="w-full max-w-md">
                <Button 
                  type="submit"
                  size="lg" 
                  className="gradient-primary hover:scale-[1.02] transition-all duration-300 px-8 py-6 text-lg font-semibold animate-glow w-full shadow-lg shadow-primary/30"
                >
                  Start Your Financial Game
                </Button>
              </form>
            </div>

            {/* Gaming Features Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-gold-foreground" />
                </div>
                <div className="text-lg font-bold text-gold">Achievements</div>
                <div className="text-sm text-muted-foreground">Unlock rewards</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-success flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-secondary">Challenges</div>
                <div className="text-sm text-muted-foreground">Daily quests</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-primary">Level Up</div>
                <div className="text-sm text-muted-foreground">Real wealth</div>
              </div>
            </div>
          </div>

          {/* Right Isometric Illustration */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <img 
                src={heroIsometric} 
                alt="Financial Gaming Levels" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px hsl(262 83% 65% / 0.3))' }}
              />
            </div>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-gold opacity-10 blur-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrezrHero;