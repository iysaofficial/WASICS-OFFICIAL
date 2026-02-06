import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import ScheduleSection from "@/components/ScheduleSection";
import OrganizedBySection from "@/components/OrganizedBySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OrganizedBySection />
      <CategoriesSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
};

export default Index;
