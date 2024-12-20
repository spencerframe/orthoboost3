export interface BlogPost {
  title: string;
  date: string;
  snippet: string;
  content: string;
  featuredImage: string;
  published: boolean;
  tags: string[];
}

export interface BlogMetadata {
  title: string;
  date: string;
  snippet: string;
  featuredImage: string;
  published: boolean;
  tags: string[];
  slug: string;
}