export const Host = {
  name: '',
  title: '',
  image: '',
  bio: ''
};

export const WebinarPost = {
  title: '',
  date: '',
  time: '',
  description: '',
  featuredImage: '',
  published: false,
  tags: [],
  hosts: [],
  benefits: [],
  registrationUrl: ''
};

export const WebinarMetadata = {
  ...WebinarPost,
  snippet: '',
  slug: ''
};