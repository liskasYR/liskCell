import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// עמודים
import Index from "./pages/Index";
import AiModelsPage from "./pages/AiModelsPage";
import DocsPage from "./pages/DocsPage";
import FormsPage from "./pages/FormsPage";
import GamesPage from "./pages/GamesPage";
import Wiki from "./pages/Wiki";
import NotFound from "./pages/NotFound";
import AiLandingPage from "./pages/AiLandingPage"; // עמוד /AI

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/models" element={<AiModelsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/AI" element={<AiLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
