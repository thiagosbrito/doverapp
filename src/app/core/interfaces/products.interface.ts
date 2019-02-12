interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  dateOfPurchase: string;
  description: string;
  imageUrl?: string;
  specs?: any[];
}

interface Products extends Array<Product> {}

export {
  Product,
  Products
};
