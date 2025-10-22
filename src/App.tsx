import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import AiModelsPage from "./pages/AiModelsPage";
import FormsPage from "./pages/FormsPage";
import Wiki from "./pages/Wiki";
import GamesPage from "./pages/GamesPage";
import DocsPage from "./pages/DocsPage";
import MaintenancePage from "./pages/MaintenancePage";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/models" element={<AiModelsPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
