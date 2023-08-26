/** abstraction */

import { PaymentMethod } from './PaymentMethod';

export class OnlinePayment {
  constructor(protected paymentMethod: PaymentMethod) {} // bridge

  // delegates tasks to an implementation object associated with them
  pay(amount: number) {
    this.paymentMethod.validatePayment(amount);
    this.paymentMethod.processPayment(amount);
  }

  refund(amount: number) {
    this.paymentMethod.validateRefund(amount);
    this.paymentMethod.processRefund(amount);
  }
}

export class ExtendedOnlinePayment extends OnlinePayment {
  checkAvailability(): boolean {
    return this.paymentMethod.checkConnection();
  }
}
