import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";

const AiLandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <ParticleBackground />
      <main className="z-10 relative flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-silver-light mb-6">
          LiskGPT – Next-Gen AI Assistant
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mb-6"></div>
        <p className="text-lg md:text-xl text-muted-foreground font-exo max-w-2xl mb-8">
          Chat with our intelligent assistant, powered by liskCell's creative engine. Ask questions, get help, and explore ideas.
        </p>
        <a
          href="https://liskchat.lovable.app/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90 transition-all duration-300"
        >
          Launch Chat
        </a>
      </main>
    </div>
  );
};

export default AiLandingPage;
