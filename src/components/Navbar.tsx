import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const solutionsLinks = [
  { name: "Data Infrastructure", path: "/solutions/data-infrastructure" },
  { name: "Security & Compliance", path: "/solutions/security-compliance" },
  { name: "Custom Solutions", path: "/solutions/custom-solutions" },
  { name: "Analytics & Insights", path: "/solutions/analytics-insights" },
];

const resourcesLinks = [
  { name: "Case Studies", path: "/resources/case-studies" },
  { name: "White Papers", path: "/resources/white-papers" },
  { name: "Documentation", path: "/resources/documentation" },
  { name: "Webinars", path: "/resources/webinars" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const location = useLocation();
  
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location.pathname]);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
    if (resourcesDropdownOpen) setResourcesDropdownOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
    if (solutionsDropdownOpen) setSolutionsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white",
        isScrolled 
          ? "shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] py-3" 
          : "py-4 hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.07)]"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png"
              alt="Basil Consulting"
              className="h-9 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">Basil Consulting</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={toggleSolutionsDropdown}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors",
                  solutionsDropdownOpen
                    ? "text-basil-500"
                    : "text-gray-600 hover:text-basil-500"
                )}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-basil-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={toggleResourcesDropdown}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors",
                  resourcesDropdownOpen
                    ? "text-basil-500"
                    : "text-gray-600 hover:text-basil-500"
                )}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-basil-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="https://basilconsulting.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-basil-500 transition-colors"
            >
              Blog
            </a>
            
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-basil-500 transition-colors"
            >
              About Us
            </Link>
            
            <a
              href="mailto:info@basilconsulting.com"
              className="text-sm font-medium text-gray-600 hover:text-basil-500 transition-colors"
            >
              Contact
            </a>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-basil-500 text-basil-500 hover:bg-basil-50"
              asChild
            >
              <Link to="/signin">
                Sign In
              </Link>
            </Button>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-sm">
              <a href="mailto:info@basilconsulting.com">
                Get Started
              </a>
            </Button>
          </div>
          
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-basil-500 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)]"
          >
            <Container>
              <div className="pt-2 pb-4 space-y-1">
                <div>
                  <button
                    onClick={toggleSolutionsDropdown}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                  >
                    Solutions
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {solutionsDropdownOpen && (
                    <div className="pl-4">
                      {solutionsLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setSolutionsDropdownOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    onClick={toggleResourcesDropdown}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                  >
                    Resources
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {resourcesDropdownOpen && (
                    <div className="pl-4">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setResourcesDropdownOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <a
                  href="https://basilconsulting.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                >
                  Blog
                </a>
                
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                >
                  About Us
                </Link>
                
                <a
                  href="mailto:info@basilconsulting.com"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-basil-600 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </a>
                
                <div className="pt-4 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-basil-500 text-basil-500 hover:bg-basil-50"
                    asChild
                  >
                    <Link to="/signin">
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                    <a href="mailto:info@basilconsulting.com">
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
