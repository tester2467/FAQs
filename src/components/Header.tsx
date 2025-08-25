import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+1-800-555-0123" className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span>1-800-555-0123</span>
              </a>
              <a href="mailto:quotes@packagingpro.com" className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span>quotes@packagingpro.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <span>Fast Quotes • Free Samples • 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">PackagingPro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600 font-medium' : ''}`}
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link to="/custom-plastic-bags" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      <div className="font-medium">Custom Plastic Bags</div>
                      <div className="text-xs text-gray-500 mt-1">Retail, food service, promotional</div>
                    </Link>
                    <Link to="/custom-boxes" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      <div className="font-medium">Custom Boxes</div>
                      <div className="text-xs text-gray-500 mt-1">Shipping, retail, display boxes</div>
                    </Link>
                    <Link to="/custom-labels" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      <div className="font-medium">Custom Labels</div>
                      <div className="text-xs text-gray-500 mt-1">Product, shipping, promotional</div>
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/capabilities" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/capabilities') ? 'text-blue-600 font-medium' : ''}`}
              >
                Capabilities
              </Link>
              <Link 
                to="/faq" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/faq') ? 'text-blue-600 font-medium' : ''}`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600 font-medium' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/quote">Get Quote</Link>
              </Button>
              <Button size="sm" asChild>
                <a href="tel:+1-800-555-0123">Call Now</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/custom-plastic-bags" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Custom Plastic Bags
                </Link>
                <Link 
                  to="/capabilities" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Capabilities
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/quote" onClick={() => setIsOpen(false)}>Get Quote</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="tel:+1-800-555-0123">Call Now</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;