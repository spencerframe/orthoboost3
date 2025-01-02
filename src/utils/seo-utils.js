// Default SEO values
export const DEFAULT_SEO = {
  title: "OrthoBoost - Orthodontic Marketing & Lead Generation",
  description: "Join 300+ successful orthodontic practices across the US and Canada. Our comprehensive solution combines expert marketing with 24/7 scheduling to ensure no lead ever slips through the cracks.",
  image: "https://www.startorthoboost.com/images/facebook-ads-vs-google-ads-og.png",
  url: "https://www.startorthoboost.com",
};

// Generate structured data for blog posts
export function generateBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.featuredImage,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: "Dr. Tyler Coles",
      url: "https://www.startorthoboost.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "OrthoBoost",
      logo: {
        "@type": "ImageObject",
        url: "https://www.startorthoboost.com/images/logo.png"
      }
    }
  };
}

// Generate structured data for webinars
export function generateWebinarSchema(webinar) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: webinar.title,
    description: webinar.description,
    startDate: `${webinar.date}T${webinar.time}`,
    image: webinar.featuredImage,
    performer: {
      "@type": "Person",
      name: webinar.host.name
    },
    organizer: {
      "@type": "Organization",
      name: "OrthoBoost",
      url: "https://www.startorthoboost.com"
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: webinar.registrationUrl
    }
  };
}