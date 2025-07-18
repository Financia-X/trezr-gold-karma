import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      feature: "AI Habit Milestones",
      paytm: false,
      cred: false,
      zerodha: false,
      trezr: true,
      highlight: true
    },
    {
      feature: "Spendvesting Rewards",
      paytm: false,
      cred: false,
      zerodha: false,
      trezr: true,
      highlight: true
    },
    {
      feature: "Credit Bill Coaching",
      paytm: true,
      cred: true,
      zerodha: false,
      trezr: true,
      highlight: false
    },
    {
      feature: "Microinvesting",
      paytm: false,
      cred: false,
      zerodha: true,
      trezr: "Enhanced",
      highlight: true
    },
    {
      feature: "WHI Score",
      paytm: false,
      cred: false,
      zerodha: false,
      trezr: true,
      highlight: true
    },
    {
      feature: "Digital Gold Rewards",
      paytm: false,
      cred: "Limited",
      zerodha: false,
      trezr: true,
      highlight: false
    },
    {
      feature: "UPI Payments",
      paytm: true,
      cred: false,
      zerodha: false,
      trezr: true,
      highlight: false
    },
    {
      feature: "Investment Options",
      paytm: "Basic",
      cred: false,
      zerodha: "Advanced",
      trezr: "AI-Guided",
      highlight: true
    },
    {
      feature: "Gamification",
      paytm: false,
      cred: "Basic",
      zerodha: false,
      trezr: "Full System",
      highlight: true
    },
    {
      feature: "Personal Finance AI",
      paytm: false,
      cred: false,
      zerodha: false,
      trezr: true,
      highlight: true
    }
  ];

  const renderFeatureValue = (value: boolean | string, isCompetitor = false) => {
    if (value === true) {
      return <Check className={`h-5 w-5 ${isCompetitor ? 'text-muted-foreground' : 'text-secondary'}`} />;
    } else if (value === false) {
      return <X className="h-5 w-5 text-muted-foreground" />;
    } else {
      return (
        <span className={`text-sm font-medium ${isCompetitor ? 'text-muted-foreground' : 'text-primary'}`}>
          {value}
        </span>
      );
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            📊 How We Compare
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Trezr?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just compete — we revolutionize how you think about money.
          </p>
        </div>

        {/* Mobile-first responsive table */}
        <Card className="glass-card border-primary/20 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center gradient-primary bg-clip-text text-transparent">
              Feature Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 text-muted-foreground">Paytm</th>
                    <th className="text-center p-4 text-muted-foreground">CRED</th>
                    <th className="text-center p-4 text-muted-foreground">Zerodha</th>
                    <th className="text-center p-4 font-semibold gradient-primary bg-clip-text text-transparent">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-4 w-4 text-gold" />
                        Trezr
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border hover:bg-muted/20 transition-colors duration-200 ${
                        row.highlight ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{row.feature}</span>
                          {row.highlight && (
                            <Badge variant="secondary" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="text-center p-4">
                        {renderFeatureValue(row.paytm, true)}
                      </td>
                      <td className="text-center p-4">
                        {renderFeatureValue(row.cred, true)}
                      </td>
                      <td className="text-center p-4">
                        {renderFeatureValue(row.zerodha, true)}
                      </td>
                      <td className="text-center p-4">
                        <div className="flex justify-center">
                          {renderFeatureValue(row.trezr)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="glass-card border-secondary/20 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI-First Approach</h3>
              <p className="text-muted-foreground text-sm">
                While others track, we transform. Julia AI doesn't just show data — she changes behavior.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-gold/20 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Reward System</h3>
              <p className="text-muted-foreground text-sm">
                The only app that pays you real gold for being financially responsible. Good habits = Real wealth.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Complete Ecosystem</h3>
              <p className="text-muted-foreground text-sm">
                Payments, investments, coaching, rewards — everything in one beautiful, intelligent platform.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-primary border-primary/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Join thousands who've discovered that managing money can be rewarding, intelligent, and actually fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="gradient-gold border-gold/30 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Average 2.5% Gold Cashback
              </Badge>
              <Badge className="bg-secondary border-secondary/30 px-4 py-2">
                <Check className="h-4 w-4 mr-2" />
                15+ Credit Score Boost
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;