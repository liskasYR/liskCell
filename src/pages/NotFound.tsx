import React from "react";

const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white text-center px-6">
      <h1 className="text-6xl font-orbitron font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-muted-foreground font-exo mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90 transition-all duration-300"
      >
        Back to Home
      </a>
    </main>
  );
};

export default NotFound;
