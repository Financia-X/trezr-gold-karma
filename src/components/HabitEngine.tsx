import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Target, Trophy, Zap, CheckCircle2, Coins } from "lucide-react";

const HabitEngine = () => {
  const milestones = [
    {
      icon: CheckCircle2,
      goal: "Pay 3 bills on time this month",
      reward: "₹250 in digital gold",
      progress: 2,
      total: 3,
      color: "text-secondary",
      bgColor: "border-secondary/20"
    },
    {
      icon: Target,
      goal: "Stay under budget for 5 days",
      reward: "Unlock bonus ETF reward",
      progress: 3,
      total: 5,
      color: "text-primary",
      bgColor: "border-primary/20"
    },
    {
      icon: Trophy,
      goal: "Avoid impulse spend this week",
      reward: "Get cashback in silver",
      progress: 5,
      total: 7,
      color: "text-gold",
      bgColor: "border-gold/20"
    }
  ];

  const aiInsights = [
    "You're ₹847 away from your monthly savings goal - one less food delivery and you're there! 🎯",
    "Your credit utilization dropped to 23% - perfect! Keep it below 30% for another week to unlock ₹100 gold. 💳",
    "Coffee spending up 40% this week. Switch to home brew for 3 days = ₹180 saved + ₹50 bonus investment! ☕"
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            🧠 AI-Powered Habit Engine
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Finance Finally Feels Like
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">A Game You Always Win</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Julia AI sets personalized goals, tracks your progress, and rewards every step forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Julia AI Chat Interface */}
          <div>
            <Card className="glass-card border-primary/20 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" />
                  Julia AI - Your Financial Coach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="glass-card border-primary/20 p-3 rounded-lg flex-1">
                      <p className="text-sm">
                        Great job paying your credit card on time! You've earned ₹50 in digital gold. 
                        Your next milestone: Stay under budget for 2 more days to unlock a bonus ETF investment! 🎯
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="glass-card border-secondary/20 p-3 rounded-lg max-w-xs">
                      <p className="text-sm">How much gold have I earned this month?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary-foreground">You</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="glass-card border-gold/20 p-3 rounded-lg flex-1">
                      <p className="text-sm">
                        You've earned ₹425 in digital gold this month! 🏆 
                        That's from 3 on-time payments (₹150), staying under budget for 8 days (₹200), 
                        and 2 successful spendvesting moments (₹75). Keep it up!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gold">
                  <Zap className="h-6 w-6" />
                  Smart Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-3 glass-card border-border rounded-lg">
                    <p className="text-sm">{insight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right: Community Leaderboard & Milestones */}
          <div className="space-y-8">
            {/* Community Leaderboard */}
            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gold">
                  <Trophy className="h-6 w-6" />
                  Top Performers
                </CardTitle>
                <p className="text-muted-foreground">Join thousands building wealth through healthy financial habits</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 glass-card border-gold/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-xs font-bold">PS</div>
                      <div>
                        <div className="font-semibold">Priya S. 💎</div>
                        <div className="text-sm text-muted-foreground">12,450 points</div>
                      </div>
                    </div>
                    <div className="text-secondary font-bold">+2.1k this week</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 glass-card border-secondary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-success flex items-center justify-center text-xs font-bold">#2</div>
                      <div>
                        <div className="font-semibold">Arjun K. 🏆</div>
                        <div className="text-sm text-muted-foreground">11,890 points</div>
                      </div>
                    </div>
                    <div className="text-secondary font-bold">+1.8k this week</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 glass-card border-primary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold">#3</div>
                      <div>
                        <div className="font-semibold">Sneha M. ⭐</div>
                        <div className="text-sm text-muted-foreground">10,230 points</div>
                      </div>
                    </div>
                    <div className="text-secondary font-bold">+1.5k this week</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 gradient-primary rounded-lg border border-primary/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">#4</div>
                      <div>
                        <div className="font-semibold text-primary-foreground">You 🎯</div>
                        <div className="text-sm text-primary-foreground/80">8,760 points</div>
                      </div>
                    </div>
                    <div className="text-gold font-bold">+980 this week</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">124</div>
                    <div className="text-xs text-muted-foreground">Rewards Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8,760</div>
                    <div className="text-xs text-muted-foreground">Total Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">12</div>
                    <div className="text-xs text-muted-foreground">Badges</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Milestones */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Active Milestones
                </CardTitle>
                <p className="text-muted-foreground">Your current financial challenges</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`p-4 glass-card ${milestone.bgColor} rounded-lg`}>
                    <div className="flex items-start gap-3 mb-3">
                      <milestone.icon className={`h-5 w-5 ${milestone.color} mt-1`} />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{milestone.goal}</h4>
                        <p className={`text-sm ${milestone.color} font-medium`}>{milestone.reward}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{milestone.progress}/{milestone.total}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            milestone.color.includes('secondary') ? 'bg-secondary' :
                            milestone.color.includes('gold') ? 'bg-gold' : 'bg-primary'
                          }`}
                          style={{ width: `${(milestone.progress / milestone.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {milestone.progress === milestone.total && (
                      <Badge className="mt-3 gradient-gold border-gold/30">
                        <Coins className="h-3 w-3 mr-1" />
                        Completed!
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <Card className="glass-card border-gold/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold gradient-gold bg-clip-text text-transparent mb-4">
              "Finance finally feels like a game — one where you always win."
            </h3>
            <p className="text-muted-foreground text-lg">
              Every responsible action is rewarded. Every milestone reached makes you richer.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HabitEngine;