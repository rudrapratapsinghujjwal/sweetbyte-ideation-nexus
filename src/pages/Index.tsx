
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./LandingPage";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Optional: Redirect to landing page if needed
    // navigate("/");
  }, [navigate]);

  // Render the landing page directly
  return <LandingPage />;
};

export default Index;
