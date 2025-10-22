import React from "react";

const AiModelsPage: React.FC = () => {
  return (
    <main className="py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
          AI Models
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
          Choose an AI model to interact with liskCell's intelligence engine
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Model Card 1 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">liskGPT</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              General-purpose conversational model for creative and technical tasks.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90">
              Launch
            </button>
          </div>

          {/* Model Card 2 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">liskVision</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              Visual intelligence model for image analysis and generation.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:opacity-90">
              Launch
            </button>
          </div>

          {/* Model Card 3 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">liskForm</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              Smart form-filling assistant for structured data and automation.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold hover:opacity-90">
              Launch
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AiModelsPage;
