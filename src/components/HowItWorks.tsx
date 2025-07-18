import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, Wallet, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect your bank & cards",
      description: "Secure, instant connection to all your financial accounts. Bank-grade encryption keeps everything safe.",
      details: "• Link multiple banks & cards\n• Complete data privacy\n• Real-time sync",
      color: "text-secondary",
      bgColor: "border-secondary/20"
    },
    {
      icon: Wallet,
      title: "Spend & Save like you normally do",
      description: "No behavior change needed. Trezr works silently in the background, analyzing and optimizing.",
      details: "• Automatic round-ups\n• Smart categorization\n• Habit tracking",
      color: "text-primary",
      bgColor: "border-primary/20"
    },
    {
      icon: TrendingUp,
      title: "Earn & Grow automatically",
      description: "Watch your wealth grow through microinvesting, rewards, and smart financial decisions.",
      details: "• Digital gold rewards\n• Auto-investments\n• Credit score boosts",
      color: "text-gold",
      bgColor: "border-gold/20"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">
            🚀 Simple. Automatic. Profitable.
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How Trezr Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Three simple steps to transform your financial life forever.
          </p>
          
          <Card className="glass-card border-primary/20 p-6 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              "It's like your money grew a brain and a conscience."
            </h3>
            <p className="text-muted-foreground">
              Smart, ethical, and always working for your future.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`glass-card ${step.bgColor} hover:scale-105 transition-all duration-300 h-full group`}>
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-full glass-card ${step.bgColor} flex items-center justify-center mx-auto group-hover:animate-bounce`}>
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <div className={`text-sm ${step.color} font-mono whitespace-pre-line`}>
                    {step.details}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
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