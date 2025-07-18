import TrezrHero from "@/components/TrezrHero";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import MicroinvestingPower from "@/components/MicroinvestingPower";
import HabitEngine from "@/components/HabitEngine";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TrezrHero />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <MicroinvestingPower />
      <HabitEngine />
      <Testimonials />
      <ComparisonTable />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
