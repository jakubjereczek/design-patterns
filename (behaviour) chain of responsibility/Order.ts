export interface Order {
  orderId: number;
  customerName: string;
  products: string[];
  totalAmount: number;
  shippingAddress: string;
  orderDate: Date;
  isPaid: boolean;
  paymentMethod: string;
}

export const sampleOrder: Order = {
  orderId: 1,
  customerName: Math.random() > 0.5 ? '' : 'John Doe',
  products:
    Math.random() > 0.5
      ? ['Product A', 'Product B', 'Product C']
      : ['Product A'],
  totalAmount: 150.0,
  shippingAddress: '123 Main Street, Cityville',
  orderDate: new Date(),
  isPaid: Math.random() > 0.5,
  paymentMethod: 'Credit Card',
};