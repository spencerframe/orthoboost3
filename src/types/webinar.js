export interface Host {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

export interface WebinarPost {
  title: string;
  date: string;
  time: string;
  description: string;
  featuredImage: string;
  published: boolean;
  tags: string[];
  hosts: Host[];
  benefits: string[];
  registrationUrl: string;
}

export interface WebinarMetadata extends Omit<WebinarPost, 'description'> {
  snippet: string;
  slug: string;
}