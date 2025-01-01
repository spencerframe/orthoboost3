import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DropdownMenu({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative z-[1000]'>
      <button
        className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-0 md:py-4'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{label}</span>
        <ChevronDown
          className='w-4 h-4 transition-transform duration-200'
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className='absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className='p-2'>
              {items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    flex items-start space-x-3 p-3 rounded-lg transition-colors
                    ${item.highlight ? "bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100" : "hover:bg-gray-50"}
                  `}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 ${item.highlight ? "text-blue-600" : "text-gray-600"}`} />
                  <div>
                    <p className={`text-sm font-medium ${item.highlight ? "text-blue-600" : "text-gray-900"}`}>
                      {item.label}
                      {item.highlight && " →"}
                    </p>
                    <p className='text-xs text-gray-500'>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}