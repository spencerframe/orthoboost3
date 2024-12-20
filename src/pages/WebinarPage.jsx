import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Gift } from 'lucide-react';
import { formatDateTime } from '@/utils/webinar-utils';
import IframeResizer from 'iframe-resizer-react';

export default function WebinarPage() {
  const { slug } = useParams();
  const [webinar, setWebinar] = useState(null);

  useEffect(() => {
    const loadWebinar = async () => {
      try {
        const module = await import(`../webinars/${slug}.jsx`);
        setWebinar(module);
      } catch (error) {
        console.error('Failed to load webinar:', error);
      }
    };

    if (slug) {
      loadWebinar();
    }
  }, [slug]);

  if (!webinar) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const WebinarContent = webinar.default;
  return <WebinarContent />;
}
