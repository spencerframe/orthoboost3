import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";
import { BookCallButton } from "./BookCallButton";

export function MobileMenu({ isActive, navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
  console.log('navLinks:', navLinks);
}, [ navLinks ])

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 text-gray-600 hover:text-blue-600 transition-colors'
        aria-label='Toggle menu'
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "slide", damping: 25, stiffness: 300 }}
            className='fixed left-0 w-screen top-0 h-screen bg-white z-50 shadow-2xl'
          >
            <div className='flex flex-col h-full'>
              <div className='flex justify-end p-4'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-2 text-gray-600 hover:text-blue-600 transition-colors'
                  aria-label='Close menu'
                >
                  <X size={24} />
                </button>
              </div>

              <nav className='flex flex-col justify-between h-full px-4'>
                <div className='flex flex-col space-y-6'>
                  {navLinks?.map((link) => (
                    <div key={link.path}>
                      {link.children ? (
                        <div>
                          <button
                            onClick={() => setExpandedItem(expandedItem === link.path ? null : link.path)}
                            className="flex items-center justify-between w-full text-left text-lg"
                          >
                            <span className="text-gray-700 hover:text-blue-600 transition-colors">
                              {link.label}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                expandedItem === link.path ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItem === link.path && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-4"
                              >
                                <div className="pl-4 pt-2 space-y-4">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.to}
                                      to={child.to}
                                      className="flex items-start space-x-3"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <child.icon className="mt-1.5 w-5 h-5 text-gray-600 flex-shrink-0" />
                                      <div>
                                        <p className="text-gray-700 hover:text-blue-600 transition-colors text-lg">{child.label}</p>
                                        <p className="text-gray-500">{child.description}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink
                          to={link.path}
                          isActive={isActive(link.path)}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pb-4 w-full">
                  <div onClick={() => setIsOpen(false)}>
                    <BookCallButton isActive={isActive("/schedule")} fullWidth />
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
