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
import { useEffect } from 'react';
// No need to import App.css here as we're now importing it in main.tsx

const queryClient = new QueryClient();

const App = () => {
  // Set document title and force favicon refresh
  useEffect(() => {
    // Set the document title
    document.title = "Basil Consulting";
    
    // Force favicon refresh by removing and re-adding the links
    const links = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    links.forEach(link => link.remove());
    
    // Add the favicon links with the correct paths
    const iconLinks = [
      { rel: 'icon', href: '/favicon.ico?v=7', sizes: 'any' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png?v=7', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png?v=7', sizes: '16x16' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=7', sizes: '180x180' }
    ];
    
    iconLinks.forEach(({ rel, type, href, sizes }) => {
      const link = document.createElement('link');
      link.rel = rel;
      if (type) link.type = type;
      link.href = href;
      if (sizes) link.sizes = sizes;
      document.head.appendChild(link);
    });
  }, []);

  return (
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
};

export default App;
