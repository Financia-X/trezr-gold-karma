import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowRight, CheckCircle2, TrendingUp, CreditCard, Target } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-destructive/30 text-destructive">
            💸 Finance is broken for our generation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Financia Makes Finance Simple, Fun and Rewarding</span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            {/* Problem Side */}
            <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-3">
                <AlertTriangle className="h-7 w-7" />
                The Problem
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Late payments destroying your credit score",
                "Random spending with no growth strategy", 
                "Financial apps that judge, don't guide",
                "No rewards for doing the right thing",
                "Investing feels complicated and scary"
              ].map((problem, index) => (
                <Card key={index} className="glass-card border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{problem}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex lg:hidden justify-center my-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-destructive to-secondary rounded-full"></div>
          </div>
          <div className="hidden lg:flex justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <ArrowRight className="h-12 w-12 text-primary animate-pulse" />
              <div className="absolute inset-0 h-12 w-12 text-primary/20 animate-ping">
                <ArrowRight className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7" />
                The Financia Way
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: CreditCard, text: "Helps you pay on time", color: "text-secondary" },
                { icon: TrendingUp, text: "Encourages good credit habits", color: "text-primary" },
                { icon: Target, text: "Automates smart investing", color: "text-secondary" },
                { icon: CheckCircle2, text: "Rewards you with real gold", color: "text-gold" }
              ].map((solution, index) => (
                <Card key={index} className="glass-card border-secondary/20 hover:border-secondary/40 transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <solution.icon className={`h-5 w-5 ${solution.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-medium">{solution.text}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="gradient-gold p-6 border-gold/30 mt-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gold-foreground mb-2">
                  It's like your money grew a brain and a conscience.
                </h4>
                <p className="text-gold-foreground/80">
                  Smart, ethical, and always working for your future.
                </p>
              </div>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;