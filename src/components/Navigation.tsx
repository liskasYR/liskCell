import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import liskCellLogo from '@/assets/liskcell-logo.png';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand - Left side */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <img
              src={liskCellLogo}
              alt="LiskCell Logo"
              className="h-10 object-contain group-hover:animate-pulse-glow transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary font-orbitron transition-colors duration-300"
            >
              ABOUT US
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('support')}
              className="text-foreground hover:text-primary font-orbitron transition-colors duration-300"
            >
              SUPPORT
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50 space-y-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="w-full text-left text-foreground hover:text-primary font-orbitron transition-colors duration-300"
            >
              ABOUT US
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('support')}
              className="w-full text-left text-foreground hover:text-primary font-orbitron transition-colors duration-300"
            >
              SUPPORT
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
