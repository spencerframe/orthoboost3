import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function NavLink({ to, isActive, children }) {
  return (
    <Link
      to={to}
      className={cn(
        "transition duration-200 py-0 md:py-2",
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      )}
    >
      {children}
    </Link>
  );
}
