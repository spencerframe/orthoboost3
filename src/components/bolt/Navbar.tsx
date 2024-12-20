import { useLocation } from 'react-router-dom';
import { NavLink } from '@/components/navigation/NavLink';
import { BookCallButton } from '@/components/navigation/BookCallButton';
import { Logo } from '@/components/navigation/Logo';
import { FreeStuffDropdown } from '@/components/navigation/FreeStuffDropdown';

const navLinks = [
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
];

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                isActive={isActive(link.path)}
              >
                {link.label}
              </NavLink>
            ))}
            <FreeStuffDropdown />
            <BookCallButton isActive={isActive('/schedule')} />
          </div>
        </div>
      </div>
    </nav>
  );
}