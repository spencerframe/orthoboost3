import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookCallButtonProps {
  isActive: boolean;
}

export function BookCallButton({ isActive }: BookCallButtonProps) {
  return (
    <Link
      to="/schedule"
      className={cn(
        "bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200",
        isActive && "ring-2 ring-red-400"
      )}
    >
      <Phone size={18} />
      <span>Book a Call</span>
    </Link>
  );
}