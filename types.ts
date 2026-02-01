
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  // icon is optional to allow links to use either an icon or an image
  icon?: string;
  type: 'primary' | 'secondary' | 'warning' | 'store' | 'success';
  image?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price?: string;
  store: string;
  imageUrl: string;
  affiliateUrl: string;
}

export interface ProductSection {
  title: string;
  products: ProductItem[];
}