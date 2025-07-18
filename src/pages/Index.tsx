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
      <CommunityLeaderboard />
      
      <SectionSeparator />
      <ProblemSolution />
      
      <SectionSeparator />
      <FeaturesGrid />
      
      <SectionSeparator />
      <HowItWorks />
      
      <SectionSeparator />
      <MicroinvestingPower />
      
      <SectionSeparator />
      <HabitEngine />
      
      <SectionSeparator />
      <Testimonials />
      
      <SectionSeparator />
      <ComparisonTable />
      
      <SectionSeparator />
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
