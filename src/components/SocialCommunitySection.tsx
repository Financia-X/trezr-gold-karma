import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Trophy, Target, Sparkles } from "lucide-react";

const SocialCommunitySection = () => {
  const communityPosts = [
    {
      name: "Aarav",
      action: "just invested ₹1,000 via Spendvesting",
      icon: TrendingUp,
      badge: "💸",
      color: "from-primary/20 to-secondary/20"
    },
    {
      name: "Riya",
      action: "completed her 21-Day Money Challenge",
      icon: Trophy,
      badge: "🔥",
      color: "from-gold/20 to-orange-500/20"
    },
    {
      name: "Arjun",
      action: "saved ₹5,000 this month with auto-savings",
      icon: Target,
      badge: "⭐",
      color: "from-secondary/20 to-primary/20"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Social Finance</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Money Is Better Together
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join a social community of people who save, invest, and challenge each other to grow.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          {communityPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <Card 
                key={index}
                className={`glass-card p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r ${post.color}`}
              >
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/30">
                    <AvatarFallback className="bg-gradient-primary text-white font-bold">
                      {post.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-white">{post.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {post.badge}
                      </Badge>
                    </div>
                    <p className="text-white/80">{post.action}</p>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="gradient-primary hover:scale-[1.02] transition-all duration-300 px-8 py-6 text-lg font-semibold animate-glow shadow-lg shadow-primary/30"
          >
            Join the Financia Club →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialCommunitySection;
