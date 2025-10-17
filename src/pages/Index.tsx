import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ReleasesSection } from '@/components/ReleasesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ReleasesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
