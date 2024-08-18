export interface PaymentStrategy {
  pay(amount: number): boolean;
}

export class CreditCardPaymentStrategy implements PaymentStrategy {
  constructor(
    private name: string,
    private number: string,
    private cvv: string,
    private expiry: string,
  ) {}

  pay(amount: number) {
    const result = this.process();
    if (result) {
      console.log(`Payment: ${amount}pln (credit card transaction)`);
    } else {
      console.log('Payment failed.');
    }
    return result;
  }

  process() {
    if (this.name && this.number && this.cvv.length === 3 && this.expiry) {
      return true;
    }
    return false;
  }
}


export class BitcoinPaymentStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Payment: ${amount}pln (bitcoin transaction)`);
    return true;
  }
}

export class CashPaymentStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Payment: ${amount}pln (cash transaction)`);
    return true;
  }
}
