import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";

const DocsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <ParticleBackground />
      <main className="py-24 px-4 text-center z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            Documentation & Help
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
            Find guides, tutorials, and technical documentation to help you use liskCell effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Section 1 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">User Guide</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Step-by-step instructions for getting started and using core features.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">API Reference</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Full documentation for developers integrating with liskCell's backend.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Troubleshooting</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Common issues and how to resolve them quickly.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Release Notes</h2>
              <p className="text-muted-foreground text-sm font-exo">
                See what's new in each version of liskCell.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;
