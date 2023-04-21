export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug: {current:string};
  body:[object]
  mainImage: MainImage;
  author: Author;
}
interface Author {
  name: string;
  image: string;
}
interface MainImage {
  asset: {
    url: string;
  };
}
