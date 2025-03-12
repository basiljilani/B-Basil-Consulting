import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AnalyticsInsights from "./pages/AnalyticsInsights";
import SecurityCompliance from "./pages/SecurityCompliance";
import CustomSolutions from "./pages/CustomSolutions";
import DataInfrastructure from "./pages/DataInfrastructure";
import CaseStudies from "./pages/CaseStudies";
import WhitePapers from "./pages/WhitePapers";
import Documentation from "./pages/Documentation";
import Webinars from "./pages/Webinars";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
// No need to import App.css here as we're now importing it in main.tsx

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Solution pages */}
          <Route path="/solutions/analytics-insights" element={<AnalyticsInsights />} />
          <Route path="/solutions/security-compliance" element={<SecurityCompliance />} />
          <Route path="/solutions/custom-solutions" element={<CustomSolutions />} />
          <Route path="/solutions/data-infrastructure" element={<DataInfrastructure />} />
          
          {/* Resource pages */}
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/white-papers" element={<WhitePapers />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Redirects for old paths */}
          <Route path="/contact" element={<Navigate to="/" replace />} />
          <Route path="/services/analytics-insights" element={<Navigate to="/solutions/analytics-insights" replace />} />
          <Route path="/services/security-compliance" element={<Navigate to="/solutions/security-compliance" replace />} />
          <Route path="/services/custom-solutions" element={<Navigate to="/solutions/custom-solutions" replace />} />
          <Route path="/services/data-infrastructure" element={<Navigate to="/solutions/data-infrastructure" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
