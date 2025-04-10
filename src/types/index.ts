
export interface Product {
  id: number;
  name: string;
  description: string;
  albumList: string[];
  collaborations?: string[];
  image: string;
  audioSample?: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'new' | 'processing' | 'shipped' | 'cancelled';
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
  };
  createdAt: Date;
}
