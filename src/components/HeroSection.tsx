import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import liskCellLogo from '@/assets/liskcell-logo.png';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
      <div className="text-center z-10 space-y-8">
        {/* Logo with glow effect */}
        <div className="mb-12 animate-float">
          <div className="inline-block glow-border rounded-2xl p-8 glass-card animate-glow">
            <img
              src={liskCellLogo}
              alt="LiskCell Logo"
              className="h-32 md:h-48 object-contain"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-3xl text-silver-light max-w-2xl mx-auto font-exo font-semibold">
          Popular Game Development Company
        </p>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-exo">
          Creating gaming experiences that excite millions of players worldwide
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="glow-border-hover bg-transparent backdrop-blur-sm text-foreground hover:bg-muted hover:text-foreground font-orbitron text-lg px-8 py-6 transition-all duration-300"
          >
            Discover More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-silver animate-pulse-glow" />
      </button>
    </section>
  );
};
