
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png"
                alt="Basil Consulting"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-semibold">Basil Consulting</span>
            </div>
            <p className="text-gray-600 mb-6">
              Transforming data into strategic assets for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-basil-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-basil-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-basil-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-basil-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-basil-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-basil-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-basil-500 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  123 Business Avenue, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-basil-500 mr-3" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-basil-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-basil-500 mr-3" />
                <a href="mailto:info@basilconsulting.com" className="text-gray-600 hover:text-basil-500 transition-colors">
                  info@basilconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Basil Consulting. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
