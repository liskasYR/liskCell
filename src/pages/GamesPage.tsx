import React from "react";

const GamesPage: React.FC = () => {
  return (
    <main className="py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
          AI Games
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
          Play creative and intelligent games powered by liskCell's AI engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Game 1 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Word Wizard</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              Challenge the AI to a word association battle. Who's more creative?
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold hover:opacity-90">
              Play Now
            </button>
          </div>

          {/* Game 2 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Logic Lab</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              Solve puzzles and riddles with the AI. Test your reasoning skills.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:opacity-90">
              Play Now
            </button>
          </div>

          {/* Game 3 */}
          <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-orbitron font-bold text-silver-light mb-2">Story Sprint</h2>
            <p className="text-muted-foreground text-sm font-exo mb-4">
              Build a story together with the AI — one sentence at a time.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold hover:opacity-90">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamesPage;
