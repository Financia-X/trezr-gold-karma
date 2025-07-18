import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Coins, 
  Activity, 
  CreditCard, 
  Brain, 
  Trophy, 
  Zap,
  PiggyBank,
  Shield,
  Smartphone,
  Calculator
} from "lucide-react";

const FeaturesGrid = () => {
  const featureCategories = [
    {
      title: "Build Wealth & Save Smart",
      color: "text-secondary",
      bgColor: "border-secondary/20",
      features: [
        {
          icon: TrendingUp,
          title: "Round-up & Auto-investing",
          description: "Every purchase rounds up and invests the spare change automatically",
          highlight: "₹7 daily = ₹25,000 yearly"
        },
        {
          icon: Coins,
          title: "Digital Gold, Silver, ETFs",
          description: "Diversified portfolio with precious metals and market investments",
          highlight: "Real assets, real growth"
        },
        {
          icon: PiggyBank,
          title: "Spendvesting System",
          description: "Choose to invest instead of impulse buying - earn bonus gold",
          highlight: "Turn temptation into wealth"
        }
      ]
    },
    {
      title: "Stay Financially Fit",
      color: "text-primary",
      bgColor: "border-primary/20",
      features: [
        {
          icon: Activity,
          title: "WHI Score",
          description: "Your real-time Wealth Health Index - like a credit score for your entire financial life",
          highlight: "Track every improvement"
        },
        {
          icon: Target,
          title: "Budget Tracker",
          description: "Smart spend analytics that learn your patterns and suggest optimizations",
          highlight: "AI-powered insights"
        },
        {
          icon: CreditCard,
          title: "Credit Card Coaching",
          description: "Optimize utilization, track payments, and boost your credit score systematically",
          highlight: "+50 points average boost"
        }
      ]
    },
    {
      title: "Be Rewarded for Good Deeds",
      color: "text-gold",
      bgColor: "border-gold/20",
      features: [
        {
          icon: Brain,
          title: "Julia AI Milestone Engine",
          description: "Personalized goals and nudges that reward every responsible financial action",
          highlight: "Your financial coach"
        },
        {
          icon: Trophy,
          title: "Community Leaderboard",
          description: "Compete with friends and see who's building wealth the smartest. Anonymous rankings keep it fun.",
          highlight: "Social wealth building"
        },
        {
          icon: Coins,
          title: "Digital Gold Rewards",
          description: "Earn real gold for paying on time, staying on budget, and investing consistently",
          highlight: "2.5% average cashback"
        }
      ]
    },
    {
      title: "Everything in One Place",
      color: "text-foreground",
      bgColor: "border-border",
      features: [
        {
          icon: Zap,
          title: "Lightning-Fast UPI",
          description: "Hyper-fast payments with automatic financial insights and investment suggestions",
          highlight: "Pay smarter, not just faster"
        },
        {
          icon: Calculator,
          title: "Tax Tracking",
          description: "Automated tax optimization and savings suggestions throughout the year",
          highlight: "Never miss deductions"
        },
        {
          icon: Smartphone,
          title: "Personalized Alerts",
          description: "Proactive notifications that help you make better financial decisions in real-time",
          highlight: "Always one step ahead"
        }
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            ✨ Features That Transform
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Finance Finally Feels Like
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Your favorite game.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four powerful systems working together to make you richer, smarter, and more financially confident.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featureCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`glass-card ${category.bgColor} hover:scale-[1.02] transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${category.color} flex items-center gap-3`}>
                  <div className={`w-3 h-3 rounded-full bg-current`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="group">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg glass-card ${category.bgColor} group-hover:scale-110 transition-all duration-300`}>
                        <feature.icon className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {feature.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {feature.highlight}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-primary p-8 border-primary/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              "Get rewarded for being on time, not just online."
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Your chai habit could fund your first ETF.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;