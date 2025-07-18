import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sparkles, TrendingUp, Shield, Users, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const benefits = [
    {
      icon: TrendingUp,
      title: "Start Building Wealth",
      description: "Every transaction becomes an investment opportunity"
    },
    {
      icon: Shield,
      title: "Improve Your Credit",
      description: "Smart coaching that boosts your score systematically"
    },
    {
      icon: Sparkles,
      title: "Earn Real Gold",
      description: "Get rewarded for every good financial decision"
    },
    {
      icon: Users,
      title: "Join the Movement",
      description: "Be part of India's financial transformation"
    }
  ];

  const trustIndicators = [
    "Bank-grade security",
    "RBI guidelines compliant",
    "10,000+ satisfied users",
    "4.8★ App Store rating"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-16 w-16 text-gold opacity-30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <TrendingUp className="h-20 w-20 text-secondary opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold/30 text-gold">
            🚀 Your Financial Evolution Starts Now
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Experience the
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">Difference?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of finance.
            Smart habits. Real rewards. Lasting wealth.
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="glass-card border-primary/20 max-w-4xl mx-auto mb-16">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  What You Get When You Join Trezr
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg glass-card border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: Sign Up Form */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                  <p className="text-muted-foreground">
                    Join the waitlist and be among the first to experience the future of finance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      size="lg" 
                      className="gradient-primary hover:scale-105 transition-all duration-300 px-6"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full gradient-primary hover:scale-105 transition-all duration-300 animate-glow"
                  >
                    Join the Movement
                  </Button>
                  
                </div>

                {/* Bonus */}
                <Card className="gradient-gold border-gold/30 p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-gold-foreground" />
                    <div className="text-gold-foreground">
                      <p className="font-semibold text-sm">Early Bird Bonus</p>
                      <p className="text-xs opacity-80">Get ₹500 gold when you complete your first week!</p>
                    </div>
                  </div>
                </Card>

                <p className="text-xs text-muted-foreground text-center">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                  No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Quote */}
        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-bold leading-relaxed">
              <span className="text-muted-foreground">"</span>
              <span className="gradient-primary bg-clip-text text-transparent">
                You're already spending.
              </span>
              <br />
              <span className="gradient-gold bg-clip-text text-transparent">
                Now start winning.
              </span>
              <span className="text-muted-foreground">"</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;