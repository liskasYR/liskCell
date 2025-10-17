export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative z-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-3xl font-orbitron font-bold text-gradient">
              lik
            </h3>
            <p className="text-lg text-silver-light font-orbitron">
              LiskCell
            </p>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground font-exo">
            © 2025 LiskCell. All rights reserved.
          </p>
          
          {/* Credit */}
          <p className="text-sm text-muted-foreground/70 font-exo">
            Designed by <span className="text-primary font-semibold">liskasYR</span>
          </p>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground/50 font-exo italic max-w-md mx-auto pt-4">
            Innovating at the intersection of artificial intelligence and creative expression
          </p>
        </div>
      </div>
    </footer>
  );
};
