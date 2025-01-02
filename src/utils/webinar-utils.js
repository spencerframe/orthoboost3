export async function getAllWebinars() {
  const webinarModules = import.meta.glob('/src/webinars/*.jsx', { eager: true });
  const webinars = [];

  for (const path in webinarModules) {
    const module = webinarModules[path];
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

  // Sort webinars by date and time descending (most recent first)
  return webinars.sort((a, b) => {
    const dateTimeA = new Date(a.date + ' ' + a.time);
    const dateTimeB = new Date(b.date + ' ' + b.time);
    return dateTimeB.getTime() - dateTimeA.getTime();
  });
}

export async function getNextWebinar() {
  const webinars = await getAllWebinars();
  const now = new Date();
  
  // Find the next upcoming webinar (first future webinar in the sorted list)
  return webinars.reverse().find(webinar => {
    const webinarDate = new Date(webinar.date + ' ' + webinar.time);
    return webinarDate > now;
  }) || null;
}

export function formatDateTime(date, time) {
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
