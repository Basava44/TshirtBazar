export interface Product {
  id: number;
  name: string;
  type: string;
  actualPrice: number;
  discountedPrice: number;
  img: string;
  size: { type: string; stock: number }[];
  selectedSize: string;
  wishlist: boolean;
  cart: boolean;
  rating: number;
  idealFor: string; //M(male)/F(female)/B(both)
  images?: string[];
}
