import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Sparkles } from "lucide-react";

const LearnSection = () => {
  const videos = [
    {
      title: "What is Compound Interest?",
      duration: "3 min",
      thumbnail: "from-primary/30 to-secondary/30"
    },
    {
      title: "How Credit Scores Work",
      duration: "5 min",
      thumbnail: "from-gold/30 to-orange-500/30"
    },
    {
      title: "Top 3 Mutual Funds for Beginners",
      duration: "7 min",
      thumbnail: "from-secondary/30 to-primary/30"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-secondary/30 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium">Financial Literacy</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Learn Money, Not Jargon
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Bite-sized videos, quizzes, and AI explanations — so you actually understand your finances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {videos.map((video, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
            >
              <div className={`relative h-48 bg-gradient-to-br ${video.thumbnail} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <PlayCircle className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0">
                  {video.duration}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white text-center">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-white/60">
            Powered by <span className="text-primary font-semibold">Julia AI</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
