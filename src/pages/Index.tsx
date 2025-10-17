import { Navigation } from '@/components/Navigation';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ReleasesSection } from '@/components/ReleasesSection';
import { ContactSection } from '@/components/ContactSection';
import { SupportSection } from '@/components/SupportSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ReleasesSection />
        <ContactSection />
        <SupportSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
