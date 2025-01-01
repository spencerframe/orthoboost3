import { BookOpen, Video, PlayCircle } from 'lucide-react';
import { getNextWebinar } from '@/utils/webinar-utils';

export const getNavLinks = async () => {
  const nextWebinar = await getNextWebinar();

  const freeStuffChildren = [
    {
      icon: BookOpen,
      to: "/blog",
      label: "Marketing Blog",
      description: "Expert tips and strategies",
    },
    {
      icon: Video,
      to: "/webinars",
      label: "Webinar Replays",
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

  return [
    { path: "/services", label: "Services" },
    { path: "/how-it-works", label: "How It Works" },
    {
      path: "#",
      label: "Free Resources",
      children: freeStuffChildren,
    }
  ];
};