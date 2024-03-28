import { Product } from './product.model';

export interface Cart {
  items: CartItem[];
  quantity: number;
  total: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  total: number;
}
