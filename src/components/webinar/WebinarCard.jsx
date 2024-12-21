import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { WebinarMetadata } from "../../types/webinar";
import { formatDateTime } from "../../utils/webinar-utils";

interface WebinarCardProps {
  webinar: WebinarMetadata;
}

export function WebinarCard({ webinar }: WebinarCardProps) {
  // console.log("webinar:", webinar);
  return (
    <Link
      to={`/webinars/${webinar.slug}`}
      className='group'
    >
      <article className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
        <div className='aspect-video relative overflow-hidden'>
          <img
            src={webinar.featuredImage}
            alt={webinar.title}
            className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute top-4 left-4'>
            <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium'>FREE WEBINAR</span>
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-wrap gap-2 mb-3'>
            {webinar.tags.map((tag) => (
              <span
                key={tag}
                className='px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className='text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors'>{webinar.title}</h2>
          <div className='flex items-center text-gray-600 mb-4'>
            <Calendar className='w-4 h-4 mr-2' />
            <span className='text-sm'>{formatDateTime(webinar.date, webinar.time)}</span>
          </div>
          <div className='flex items-center space-x-3 mb-4'>
            {(webinar.hosts || []).map((host) => (
              <div
                key={host.name}
                className='flex items-center space-x-3'
              >
                <img
                  src={host.image}
                  alt={host.name}
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <p className='font-medium'>{host.name}</p>
                  <p className='text-sm text-gray-600'>{host.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='text-gray-700 line-clamp-2'>{webinar.snippet}</p>
        </div>
      </article>
    </Link>
  );
}
