export interface ProjectGallery {
  small_logo: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  images: ProjectGallery;
  uri: string;
}
