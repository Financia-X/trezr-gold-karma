import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coins, Calculator, TrendingUp, Sparkles } from "lucide-react";

const MicroinvestingPower = () => {
  const [dailyAmount, setDailyAmount] = useState(10);
  const [timeframe, setTimeframe] = useState(1);

  const calculateReturns = () => {
    const yearlyInvestment = dailyAmount * 365 * timeframe;
    const goldBonus = yearlyInvestment * 0.025; // 2.5% gold bonus
    const marketReturns = yearlyInvestment * 0.12 * timeframe; // 12% annual returns
    const totalWealth = yearlyInvestment + goldBonus + marketReturns;
    
    return {
      invested: yearlyInvestment,
      goldBonus: Math.round(goldBonus),
      marketReturns: Math.round(marketReturns),
      totalWealth: Math.round(totalWealth)
    };
  };

  const results = calculateReturns();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gold/30 text-gold">
            💰 The Power of Small Steps
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-gold bg-clip-text text-transparent">Small Steps.</span>
            <br />
            Big Money.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You won't miss ₹7, but your future self will thank you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Explanation */}
          <div className="space-y-8">
            <Card className="glass-card border-secondary/20 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Coins className="h-7 w-7 text-secondary" />
                How Microinvesting Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Financia rounds up your daily transactions</p>
                    <p className="text-sm text-muted-foreground">₹43 coffee becomes ₹50, ₹7 invested</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Invests them silently in diversified portfolio</p>
                    <p className="text-sm text-muted-foreground">Mutual funds, ETFs, digital gold & silver</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Rewards mindful spending with bonus gold</p>
                    <p className="text-sm text-muted-foreground">Average 2.5% extra returns for good habits</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gradient-primary p-6 border-primary/30">
              <blockquote className="text-xl font-bold text-primary-foreground mb-4">
                "Budget smarter. Invest invisibly. Live better."
              </blockquote>
              <p className="text-primary-foreground/80">
                As you spend mindfully, you also grow habitually richer.
              </p>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="glass-card border-secondary/20 p-4 text-center">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-lg font-bold">12%</div>
                <div className="text-xs text-muted-foreground">Avg Returns</div>
              </Card>
              <Card className="glass-card border-gold/20 p-4 text-center">
                <Sparkles className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-lg font-bold">2.5%</div>
                <div className="text-xs text-muted-foreground">Gold Bonus</div>
              </Card>
              <Card className="glass-card border-primary/20 p-4 text-center">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold">₹7</div>
                <div className="text-xs text-muted-foreground">Avg Daily</div>
              </Card>
            </div>
          </div>

          {/* Right: Calculator */}
          <Card className="glass-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl gradient-gold bg-clip-text text-transparent flex items-center gap-3">
                <Calculator className="h-7 w-7 text-gold" />
                Wealth Calculator
              </CardTitle>
              <p className="text-muted-foreground">See how small amounts create big wealth</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="daily-amount">Daily Investment</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">₹</span>
                    <Input
                      id="daily-amount"
                      type="number"
                      value={dailyAmount}
                      onChange={(e) => setDailyAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="timeframe">Years</Label>
                  <Input
                    id="timeframe"
                    type="number"
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 p-4 glass-card border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Invested</span>
                  <span className="text-lg font-bold">₹{results.invested.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold">Gold Bonus (2.5%)</span>
                  <span className="text-lg font-bold text-gold">+₹{results.goldBonus.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Market Returns</span>
                  <span className="text-lg font-bold text-secondary">+₹{results.marketReturns.toLocaleString()}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Wealth</span>
                  <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                    ₹{results.totalWealth.toLocaleString()}
                  </span>
                </div>
              </div>

              <Card className="gradient-gold p-4 border-gold/30">
                <p className="text-gold-foreground font-medium text-center">
                  <strong>₹{(results.totalWealth - results.invested).toLocaleString()}</strong> extra wealth
                  just by doing the right things!
                </p>
              </Card>

              <Button className="w-full gradient-primary hover:scale-105 transition-all duration-300">
                Start Microinvesting Today
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-muted-foreground">
            "Financia users earn an average{" "}
            <span className="gradient-gold bg-clip-text text-transparent">2.5% extra in Digital Gold</span>
            {" "}just by doing the right things."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MicroinvestingPower;