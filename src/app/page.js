"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-dark-300 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[5%] w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <HeroSection />
          <AchievementsSection />
          <ServicesSection />
          <AboutSection />
          <ProcessSection />
          <ProjectsSection />
          {/* <TestimonialsSection /> */}
          <EmailSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
