import React from "react";

const MaintenancePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white text-center px-6">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">האתר בתחזוקה</h1>
      <p className="text-lg text-zinc-300 mb-6">
        אנחנו עובדים על שדרוגים ושיפורים.  
        חזור אלינו בקרוב ✨
      </p>
      <div className="w-12 h-12 border-4 border-zinc-700 border-t-pink-500 rounded-full animate-spin"></div>
    </main>
  );
};

export default MaintenancePage;
