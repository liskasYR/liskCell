import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";

const Wiki: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <ParticleBackground />
      <main className="py-24 px-4 text-center z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            liskCell Wiki
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
            Explore documentation, guides, and internal knowledge about the liskCell platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Section 1 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Getting Started</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Learn how to set up your account, connect models, and begin using liskCell.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Model Capabilities</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Understand what each AI model can do and how to use them effectively.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Security & Privacy</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Read about how your data is protected and how liskCell ensures safe usage.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Advanced Tools</h2>
              <p className="text-muted-foreground text-sm font-exo">
                Dive into developer tools, APIs, and integrations with external platforms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wiki;
