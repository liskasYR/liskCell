import liskCellLogo from '@/assets/liskcell-logo.png';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative z-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <img
              src={liskCellLogo}
              alt="LiskCell Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground font-exo">
            © 2025 LiskCell. All rights reserved.
          </p>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground/50 font-exo italic max-w-md mx-auto pt-4">
            Thank you for being part of our journey – together we'll continue to create and play! ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
