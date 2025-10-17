import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center z-10 space-y-8">
        {/* Logo with glow effect */}
        <div className="mb-12 animate-float">
          <div className="inline-block glow-border rounded-2xl p-8 glass-card animate-glow">
            <h1 className="text-7xl md:text-9xl font-orbitron font-black text-gradient">
              lik
            </h1>
          </div>
        </div>

        {/* Company name */}
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light">
          LiskCell
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-exo">
          Creative AI-Powered Music & Technology
        </p>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-exo">
          Founded by <span className="text-gradient-blue font-semibold">liskasYR</span> • 
          Innovating the future of music and AI
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="glow-border-hover bg-transparent backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground font-orbitron text-lg px-8 py-6 transition-all duration-300"
          >
            Explore Our World
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-primary animate-pulse-glow" />
      </button>
    </section>
  );
};
