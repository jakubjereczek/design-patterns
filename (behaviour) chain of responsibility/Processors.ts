import { AbstractHandler } from './AbstractHandler';
import { Order } from './Order';

class AvailabilityProcessor extends AbstractHandler<Order> {
  public handle(data: Order): boolean {
    console.log(
      'AvailabilityProcessor :: Check whether the product limit has not been reached.',
    );

    if (data.products.length >= 3) {
      return false;
    }
    return super.handle(data); // Condition met, pass to the next handler
  }
}

class PaymentProcessor extends AbstractHandler<Order> {
  public handle(data: Order): boolean {
    console.log('PaymentProcessor :: Check if the order has been paid.');

    if (data.isPaid) {
      return false;
    }
    if (data.paymentMethod !== 'Credit Card') {
      return false;
    }
    return super.handle(data);
  }
}

class ValidationProcessor extends AbstractHandler<Order> {
  public handle(data: Order): boolean {
    console.log(
      'ValidationProcessor :: Check whether the necessary data has been provided.',
    );

    if (!data.customerName) {
      return false;
    }
    if (!data.shippingAddress) {
      return false;
    }
    // etc...
    return super.handle(data);
  }
}

export { AvailabilityProcessor, PaymentProcessor, ValidationProcessor };
