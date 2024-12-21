import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, BookOpen, Video, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WebinarMetadata } from "@/types/webinar";
import { getNextWebinar } from "@/utils/webinar-utils";

export function FreeStuffDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [nextWebinar, setNextWebinar] = useState(null);

  useEffect(() => {
    const loadNextWebinar = async () => {
      const webinar = await getNextWebinar();
      setNextWebinar(webinar);
    };
    loadNextWebinar();
  }, []);

  const menuItems = [
    {
      icon: BookOpen,
      to: "/blog",
      label: "Marketing Blog",
      description: "Expert tips and strategies",
    },
    {
      icon: Video,
      to: "/webinars",
      label: "Free Webinars",
      description: "Live training sessions",
    },
    ...(nextWebinar
      ? [
          {
            icon: PlayCircle,
            to: `/webinars/${nextWebinar.slug}`,
            label: "Next Webinar",
            description: nextWebinar.title,
            highlight: true,
          },
        ]
      : []),
  ];

  return (
    <div className='relative'>
      <button
        className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Free Resources</span>
        <ChevronDown
          className='w-4 h-4 transition-transform duration-200'
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          // <div className='border-4 border-red-500 pt-5'>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className='absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className='p-2'>
                {menuItems.map((item) => (
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
          // </div>
        )}
      </AnimatePresence>
    </div>
  );
}
