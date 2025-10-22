import React from "react";

const MaintenancePage: React.FC = () => {
  return (
    <main className="py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-pink-500 mb-4">
          Maintenance Mode
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
          We're currently upgrading liskCell to serve you better.  
          Please check back soon ✨
        </p>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-zinc-700 border-t-pink-500 rounded-full animate-spin"></div>
          <p className="text-sm text-zinc-400 font-orbitron">System status: Maintenance</p>
        </div>
      </div>
    </main>
  );
};

export default MaintenancePage;
