import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbs } from '@/utils/internal-linking';

export function Breadcrumbs({ path }) {
  const breadcrumbs = generateBreadcrumbs(path);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-500 hover:text-blue-600">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {crumb.isLast ? (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            ) : (
              <Link 
                to={crumb.path}
                className="text-gray-500 hover:text-blue-600"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}