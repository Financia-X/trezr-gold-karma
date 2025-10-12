import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, Wallet, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect & Setup",
      description: "Link your bank account securely and set your investment preferences. Takes less than 2 minutes.",
      details: "• Bank-grade security\n• Instant verification\n• Choose your risk level",
      color: "text-primary",
      bgColor: "border-primary/30",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Wallet,
      title: "Auto-Invest Smart",
      description: "Our AI automatically rounds up purchases and invests in diversified portfolios tailored for you.",
      details: "• Round-up investing\n• AI portfolio management\n• Automatic rebalancing",
      color: "text-accent",
      bgColor: "border-accent/30",
      gradient: "bg-gradient-accent"
    },
    {
      icon: TrendingUp,
      title: "Watch Wealth Grow",
      description: "Track your progress, complete challenges, and celebrate milestones with our community.",
      details: "• Real-time tracking\n• Gamified experience\n• Community challenges",
      color: "text-secondary",
      bgColor: "border-secondary/30",
      gradient: "bg-gradient-success"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            🚀 Simple Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-primary bg-clip-text text-transparent">Financia</span> Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Building wealth has never been this simple. Get started in minutes and watch your money grow automatically.
          </p>
          
          <Card className="glass-card border-primary/20 p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
              "It's like having a financial advisor in your pocket"
            </h3>
            <p className="text-white/70">
              Smart, automated, and always working toward your financial freedom.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`glass-card ${step.bgColor} hover:scale-105 transition-all duration-300 h-full group relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Step Number with Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl ${step.gradient} flex items-center justify-center mx-auto group-hover:animate-bounce shadow-lg`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-sm font-bold text-gold-foreground shadow-lg">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/70 mb-6 text-base leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.split('\n').map((detail, i) => (
                      <div key={i} className={`text-sm ${step.color} font-medium flex items-center gap-2`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        {detail.replace('• ', '')}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse shadow-lg">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;