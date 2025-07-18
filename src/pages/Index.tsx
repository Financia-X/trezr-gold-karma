import TrezrHero from "@/components/TrezrHero";
import ProblemSolution from "@/components/ProblemSolution";
import SectionSeparator from "@/components/SectionSeparator";
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
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
