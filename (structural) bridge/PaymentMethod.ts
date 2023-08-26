/** implementation */

export interface PaymentMethod {
  checkConnection(): boolean;
  validatePayment(amount: number): void;
  processPayment(amount: number): void;
  validateRefund(amount: number): void;
  processRefund(amount: number): void;
  getPaymentInfo(): string;
}

export class PayPalPayment implements PaymentMethod {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  checkConnection(): boolean {
    if (Math.random() > 0.5) {
      return true;
    }
    return false;
  }

  validatePayment(amount: number) {
    console.log('PayPal validate payment');
  }

  processPayment(amount: number) {
    console.log('PayPal process payment');
  }

  validateRefund(amount: number) {
    console.log('PayPal validate refund');
  }

  processRefund(amount: number) {
    console.log('PayPal process refund');
  }

  getPaymentInfo() {
    return this.email;
  }
}

export class BlikPayment implements PaymentMethod {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  checkConnection(): boolean {
    if (Math.random() > 0.2) {
      return true;
    }
    return false;
  }

  validatePayment(amount: number) {
    console.log('BLIK validate payment');
  }

  processPayment(amount: number) {
    console.log('BLIK process payment');
  }

  validateRefund(amount: number) {
    console.log('BLIK validate refund');
  }

  processRefund(amount: number) {
    console.log('BLIK process refund');
  }

  getPaymentInfo() {
    return `BLIK: ${this.phoneNumber}`;
  }
}
