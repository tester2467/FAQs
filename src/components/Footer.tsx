import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <span className="ml-3 text-xl font-bold">PackagingPro</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for custom packaging solutions. Quality materials, competitive pricing, fast turnaround times.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link to="/custom-plastic-bags" className="text-gray-300 hover:text-white transition-colors">Custom Plastic Bags</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Request Quote</Link></li>
              <li><Link to="/artwork-guidelines" className="text-gray-300 hover:text-white transition-colors">Artwork Guidelines</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">1-800-555-0123</p>
                  <p className="text-gray-400">Sales & Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">quotes@packagingpro.com</p>
                  <p className="text-gray-400">Get a quote</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">123 Industrial Blvd</p>
                  <p className="text-white">Manufacturing City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Mon-Fri: 8AM-6PM EST</p>
                  <p className="text-gray-400">24/7 Quote System</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PackagingPro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;