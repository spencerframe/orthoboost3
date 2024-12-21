import { WebinarMetadata, WebinarPost } from '@/types/webinar';

export async function getAllWebinars(): Promise<WebinarMetadata[]> {
  const webinarModules = import.meta.glob('/src/webinars/*.jsx');
  const webinars: WebinarMetadata[] = [];

  for (const path in webinarModules) {
    const module = await webinarModules[path]();
    const slug = path.replace('/src/webinars/', '').replace('.jsx', '');
    
    if (module.metadata && module.metadata.published) {
      const { description, ...metadata } = module.metadata;
      webinars.push({
        ...metadata,
        snippet: description.slice(0, 150) + '...',
        slug
      });
    }
  }

  return webinars.sort((a, b) => new Date(a.date + ' ' + a.time).getTime() - new Date(b.date + ' ' + b.time).getTime());
}

export async function getNextWebinar(): Promise<WebinarMetadata | null> {
  const webinars = await getAllWebinars();
  const now = new Date();
  
  return webinars.find(webinar => {
    const webinarDate = new Date(webinar.date + ' ' + webinar.time);
    return webinarDate > now;
  }) || null;
}

export function formatDateTime(date: string, time: string): string {
  return new Date(`${date} ${time}`).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York'
  });
}