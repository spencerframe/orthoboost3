import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { BookCallButton } from './BookCallButton';
import { FreeStuffDropdown } from './FreeStuffDropdown';

export function MobileMenu({ isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/how-it-works", label: "How It Works" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-white z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col items-center space-y-6 p-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    isActive={isActive(link.path)}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="py-4">
                  <FreeStuffDropdown />
                </div>
                <BookCallButton isActive={isActive("/schedule")} />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}