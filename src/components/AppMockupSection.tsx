import { Card } from "@/components/ui/card";
import { PieChart, TrendingUp, CreditCard } from "lucide-react";

const AppMockupSection = () => {
  const screens = [
    {
      title: "Net Worth Dashboard",
      description: "Pie chart showing assets vs liabilities",
      icon: PieChart,
      caption: "Assets + Liabilities = Real Financial Clarity"
    },
    {
      title: "Liabilities Tab",
      description: "Total interest paid till date on credit cards + loans",
      icon: CreditCard,
      caption: "Know your true wealth, not just your balance"
    },
    {
      title: "Investments Tab",
      description: "Total returns gained, broken down by asset type (MFs, Gold, FDs)",
      icon: TrendingUp,
      caption: "Watch your wealth compound in real-time"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            See Your Wealth Like Never Before
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Track everything in one place — from savings and investments to credit cards and loans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <Card 
                key={index}
                className="glass-card p-8 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{screen.title}</h3>
                    <p className="text-white/70">{screen.description}</p>
                  </div>

                  {/* Mock Screen Display */}
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/40" />
                  </div>

                  <p className="text-sm font-medium text-primary italic">
                    "{screen.caption}"
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppMockupSection;
