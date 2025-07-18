import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: 24,
      profession: "Software Engineer",
      location: "Bangalore",
      quote: "Feels like my money has a coach now.",
      story: "I used to stress about every expense. Now Trezr guides me, rewards me for good choices, and I've built ₹45,000 in just 8 months without even thinking about it.",
      goldEarned: "₹1,240",
      avatar: "PS"
    },
    {
      name: "Rohit Gupta",
      age: 28,
      profession: "Marketing Manager",
      location: "Mumbai",
      quote: "I got rewarded for paying my credit card bill? Game-changer.",
      story: "My credit score went from 680 to 745 in 6 months. Plus I earn gold every time I pay on time. It's like getting paid to be responsible!",
      goldEarned: "₹890",
      avatar: "RG"
    },
    {
      name: "Ananya Patel",
      age: 26,
      profession: "Content Creator",
      location: "Delhi",
      quote: "No more guilt. Just smart habits and real returns.",
      story: "My irregular income used to make budgeting impossible. Julia AI adapted to my freelance lifestyle and helped me save ₹80,000 for my first home down payment.",
      goldEarned: "₹2,150",
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
          <Badge variant="outline" className="mb-4 border-gold/30 text-gold">
            💬 Beta Love & Real Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people, real results, real wealth created through better financial habits.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4 group-hover:text-gold transition-colors duration-300" />
                
                {/* Main Quote */}
                <blockquote className="text-lg font-bold mb-4 gradient-primary bg-clip-text text-transparent">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Story */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {testimonial.story}
                </p>
                
                {/* Gold Earned Badge */}
                <Badge className="gradient-gold border-gold/30 mb-4">
                  <Star className="h-3 w-3 mr-1" />
                  {testimonial.goldEarned} Gold Earned
                </Badge>
                
                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.profession} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beta Stats */}
        <Card className="glass-card border-secondary/20 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Beta Program Results</h3>
            <p className="text-muted-foreground">Real impact from our early adopters</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {betaStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
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