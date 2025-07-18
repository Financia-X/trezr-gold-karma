import Navbar from "@/components/Navbar";
import TrezrHero from "@/components/TrezrHero";
import CommunityLeaderboard from "@/components/CommunityLeaderboard";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import MicroinvestingPower from "@/components/MicroinvestingPower";
import HabitEngine from "@/components/HabitEngine";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TrezrHero />
      
      <SectionSeparator />
      <ProblemSolution />
      
      <SectionSeparator />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <SectionSeparator />
      <div id="features">
        <FeaturesGrid />
      </div>
      
      <SectionSeparator />
      <HabitEngine />
      
      <SectionSeparator />
      <MicroinvestingPower />
      
      <SectionSeparator />
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <SectionSeparator />
      <ComparisonTable />
      
      <SectionSeparator />
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
