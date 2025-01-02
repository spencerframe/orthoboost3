// Convert full size image URL to thumbnail
export function getThumbnailUrl(url) {
  // Add Unsplash thumbnail parameters
  if (url.includes('unsplash.com')) {
    return `${url}&w=400&q=75`;
  }
  return url;
}