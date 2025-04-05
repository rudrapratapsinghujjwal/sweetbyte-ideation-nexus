
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GlucoHubDashboard from "./pages/GlucoHub/GlucoHubDashboard";
import IdeasPage from "./pages/GlucoHub/IdeasPage";
import NewIdeaPage from "./pages/GlucoHub/NewIdeaPage";
import FructoNetDashboard from "./pages/FructoNet/FructoNetDashboard";
import MarketplacePage from "./pages/FructoNet/MarketplacePage";
import MeetingsPage from "./pages/FructoNet/MeetingsPage";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* GlucoHub (Innovator) Routes */}
      <Route path="/glucohub" element={<GlucoHubDashboard />} />
      <Route path="/glucohub/ideas" element={<IdeasPage />} />
      <Route path="/glucohub/ideas/new" element={<NewIdeaPage />} />
      
      {/* FructoNet (Investor) Routes */}
      <Route path="/fructonet" element={<FructoNetDashboard />} />
      <Route path="/fructonet/marketplace" element={<MarketplacePage />} />
      <Route path="/fructonet/meetings" element={<MeetingsPage />} />
      
      {/* Fallback for unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
