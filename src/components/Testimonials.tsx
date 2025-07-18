import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const userNeeds = [
    {
      name: "Priya S.",
      age: 24,
      profession: "Software Engineer",
      location: "Bangalore",
      quote: "Typical banking apps are too old and user unfriendly.",
      story: "I need something that actually helps me understand my spending patterns and guides me towards better financial decisions, not just shows me numbers.",
      need: "Better UX",
      avatar: "PS"
    },
    {
      name: "Rohit G.",
      age: 28,
      profession: "Marketing Manager",
      location: "Mumbai",
      quote: "Need some help for tracking my credit cards.",
      story: "Managing multiple credit cards and their due dates is overwhelming. I want something that helps me pay on time and maybe even rewards me for it.",
      need: "Credit Help",
      avatar: "RG"
    },
    {
      name: "Ananya P.",
      age: 26,
      profession: "Content Creator",
      location: "Delhi",
      quote: "I love rewards but couldn't invest due to lack of knowledge.",
      story: "I want to start investing but don't know where to begin. Also, where did all my money go this month? I need a financial buddy to guide me.",
      need: "Investment Guide",
      avatar: "AP"
    }
  ];

  const betaStats = [
    { number: "10,000+", label: "Beta Users" },
    { number: "₹2.5Cr+", label: "Wealth Created" },
    { number: "94%", label: "Pay Bills On Time" },
    { number: "4.8/5", label: "App Store Rating" }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            💬 We Heard You
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            This Is What Users Wanted
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real pain points from real people. We're building the solution you've been asking for.
          </p>
        </div>

        {/* User Needs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {userNeeds.map((user, index) => (
            <Card key={index} className="glass-card border-destructive/20 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-destructive mb-4 group-hover:text-primary transition-colors duration-300" />
                
                {/* Main Quote */}
                <blockquote className="text-lg font-bold mb-4 text-destructive">
                  "{user.quote}"
                </blockquote>
                
                {/* Story */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {user.story}
                </p>
                
                {/* Need Badge */}
                <Badge variant="outline" className="border-primary/30 text-primary mb-4">
                  {user.need}
                </Badge>
                
                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-bold text-muted-foreground">
                      {user.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{user.name}, {user.age}</div>
                    <div className="text-xs text-muted-foreground">
                      {user.profession} • {user.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Preview */}
        <Card className="glass-card border-secondary/20 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Here's How We're Solving This</h3>
            <p className="text-muted-foreground">Building the financial app you actually want to use</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                Simple UI
              </div>
              <div className="text-sm text-muted-foreground">
                Clean, modern design that makes sense
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                Smart Tracking
              </div>
              <div className="text-sm text-muted-foreground">
                Automated credit card & bill management
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                AI Guidance
              </div>
              <div className="text-sm text-muted-foreground">
                Personal financial coach in your pocket
              </div>
            </div>
          </div>
        </Card>

        {/* Community Quote */}
        <div className="text-center mt-16">
          <Card className="gradient-hero border-primary/30 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              "It's not just about your money. It's about your evolution."
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Join a community that celebrates financial growth, supports smart habits, 
              and rewards every step toward wealth building.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;