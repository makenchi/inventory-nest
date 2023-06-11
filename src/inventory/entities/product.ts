interface Sizes {
  size: 'P' | 'M' | 'G' | 'GG' | 'XG' | 'XGG';
}
  
interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  sizes: Sizes[];
  author: string;
  metatags: string[];
  slug: string;
}