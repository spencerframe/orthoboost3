import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function NavLink({ to, isActive, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "transition duration-200",
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      )}
    >
      {children}
    </Link>
  );
}