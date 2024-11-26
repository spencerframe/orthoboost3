import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              OrthoBoost
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</Link>
            <a href="#results" className="text-gray-700 hover:text-blue-600 transition">Results</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <Link 
              to="/schedule"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:opacity-90 transition"
            >
              <Phone size={18} />
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}