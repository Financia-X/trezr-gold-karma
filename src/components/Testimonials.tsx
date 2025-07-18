import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
      profession: "Designer",
      location: "Delhi",
      quote: "I love rewards but couldn't invest due to lack of knowledge.",
      story: "I want to start investing but don't know where to begin. Also, where did all my money go this month? I need a financial buddy to guide me.",
      need: "Investment Guide",
      avatar: "AP"
    },
    {
      name: "Karan M.",
      age: 29,
      profession: "Consultant",
      location: "Pune",
      quote: "Couldn't invest due to lack of time.",
      story: "I'm always busy with work and don't have time to research investments. I need something that invests for me automatically.",
      need: "Auto Investing",
      avatar: "KM"
    },
    {
      name: "Sneha T.",
      age: 25,
      profession: "Teacher",
      location: "Chennai",
      quote: "Didn't know where to invest.",
      story: "There are so many investment options - SIP, FD, Gold, ETF. I get confused and end up not investing at all. Need simple guidance.",
      need: "Clear Guidance",
      avatar: "ST"
    },
    {
      name: "Arjun K.",
      age: 30,
      profession: "Engineer",
      location: "Hyderabad",
      quote: "Don't know where my money is gone.",
      story: "Every month I wonder where all my salary went. I need better expense tracking and insights into my spending habits.",
      need: "Expense Tracking",
      avatar: "AK"
    },
    {
      name: "Isha R.",
      age: 27,
      profession: "Product Manager",
      location: "Gurgaon",
      quote: "Need a financial buddy.",
      story: "Managing finances feels lonely and overwhelming. I want an AI assistant that understands my goals and guides me like a friend.",
      need: "AI Guidance",
      avatar: "IR"
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
            💬 This is what users wanted - we heard you
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Users Wanted
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real people who needed a better financial companion.
          </p>
        </div>

        {/* User Stories Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {userNeeds.map((user, index) => (
            <Card key={index} className={`glass-card border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 ${
              index % 7 === 0 ? 'md:col-span-2' : 
              index % 5 === 0 ? 'lg:row-span-2' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="border-2 border-primary/30">
                    <AvatarFallback className="gradient-primary text-primary-foreground font-bold">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{user.name}</h4>
                      <span className="text-sm text-muted-foreground">• {user.age}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{user.profession} • {user.location}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg font-medium mb-3 leading-relaxed">
                  "{user.quote}"
                </blockquote>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {user.story}
                </p>
                
                <Badge className="gradient-secondary border-secondary/30">
                  {user.need}
                </Badge>
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