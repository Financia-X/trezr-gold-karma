import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Gift, Target, Medal, Crown } from "lucide-react";

const CommunityLeaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Priya S.",
      points: 12450,
      avatar: "PS",
      badge: "💎",
      growth: "+2.1k"
    },
    {
      rank: 2,
      name: "Arjun K.",
      points: 11890,
      avatar: "AK",
      badge: "🏆",
      growth: "+1.8k"
    },
    {
      rank: 3,
      name: "Sneha M.",
      points: 10230,
      avatar: "SM",
      badge: "⭐",
      growth: "+1.5k"
    },
    {
      rank: 4,
      name: "You",
      points: 8760,
      avatar: "YU",
      badge: "🎯",
      growth: "+980",
      isCurrentUser: true
    }
  ];

  const userStats = [
    {
      icon: Gift,
      value: "124",
      label: "Rewards Earned",
      color: "text-gold"
    },
    {
      icon: Target,
      value: "8,760",
      label: "Total Points",
      color: "text-primary"
    },
    {
      icon: Medal,
      value: "12",
      label: "Badges",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Trophy className="h-4 w-4 mr-2" />
            Community Leaderboard
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Finance Finally Feels Like
            </span>
            <br />
            <span className="text-white">A Game You Always Win</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands building wealth through healthy financial habits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Leaderboard */}
          <Card className="glass-card border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Crown className="h-5 w-5 text-gold" />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaderboardData.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    user.isCurrentUser 
                      ? 'bg-primary/20 border border-primary/30 shadow-lg shadow-primary/20' 
                      : 'bg-muted/20 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      user.rank === 1 ? 'bg-gold text-gold-foreground' :
                      user.rank === 2 ? 'bg-muted text-muted-foreground' :
                      user.rank === 3 ? 'bg-secondary/20 text-secondary' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {user.rank === 1 ? '👑' : `#${user.rank}`}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center font-bold text-sm">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {user.name}
                          <span className="text-lg">{user.badge}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.points.toLocaleString()} points
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-semibold text-secondary">
                      {user.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      this week
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* User Stats & Daily Challenge */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {userStats.map((stat) => (
                <Card key={stat.label} className="glass-card border-muted/20 text-center p-4">
                  <div className="flex flex-col items-center gap-2">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Daily Challenge */}
            <Card className="glass-card border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-success opacity-20 rounded-full blur-2xl" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-success flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Daily Challenge</h3>
                      <p className="text-sm text-muted-foreground">5-day streak</p>
                    </div>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    +500 pts
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-secondary font-semibold">2/5 completed</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full w-2/5 transition-all duration-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Complete today's saving goal to maintain your streak
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLeaderboard;