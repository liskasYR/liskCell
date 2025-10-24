import React from "react";

const AiLandingPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <iframe
        src="https://liskchat.lovable.app/chat"
        title="liskChat"
        className="w-full h-full border-none"
        allow="clipboard-write"
      />
    </div>
  );
};

export default AiLandingPage;
