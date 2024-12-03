import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
  ];

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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition duration-200",
                  isActive(link.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/schedule"
              className={cn(
                "bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:opacity-90 transition",
                isActive('/schedule') && "ring-2 ring-blue-400"
              )}
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