
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GlucoHubDashboard from "./pages/GlucoHub/GlucoHubDashboard";
import IdeasPage from "./pages/GlucoHub/IdeasPage";
import NewIdeaPage from "./pages/GlucoHub/NewIdeaPage";
import IdeaDetailsPage from "./pages/GlucoHub/IdeaDetailsPage";
import EditIdeaPage from "./pages/GlucoHub/EditIdeaPage";
import FructoNetDashboard from "./pages/FructoNet/FructoNetDashboard";
import MarketplacePage from "./pages/FructoNet/MarketplacePage";
import MeetingsPage from "./pages/FructoNet/MeetingsPage";
import FructoIdeaDetailsPage from "./pages/FructoNet/IdeaDetailsPage";
import ScheduleMeetingPage from "./pages/FructoNet/ScheduleMeetingPage";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* GlucoHub (Innovator) Routes */}
      <Route path="/glucohub" element={<GlucoHubDashboard />} />
      <Route path="/glucohub/ideas" element={<IdeasPage />} />
      <Route path="/glucohub/ideas/new" element={<NewIdeaPage />} />
      <Route path="/glucohub/ideas/:id" element={<IdeaDetailsPage />} />
      <Route path="/glucohub/ideas/:id/edit" element={<EditIdeaPage />} />
      
      {/* FructoNet (Investor) Routes */}
      <Route path="/fructonet" element={<FructoNetDashboard />} />
      <Route path="/fructonet/marketplace" element={<MarketplacePage />} />
      <Route path="/fructonet/marketplace/:id" element={<FructoIdeaDetailsPage />} />
      <Route path="/fructonet/marketplace/:id/schedule" element={<ScheduleMeetingPage />} />
      <Route path="/fructonet/meetings" element={<MeetingsPage />} />
      
      {/* Fallback for unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
