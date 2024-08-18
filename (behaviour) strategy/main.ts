import {
  BitcoinPaymentStrategy,
  CashPaymentStrategy,
  CreditCardPaymentStrategy,
  PaymentStrategy,
} from './PaymentStrategy';

class PaymentContext {
  private strategy: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  pay(amount: number) {
    this.strategy.pay(amount);
  }
}

const paymentContext = new PaymentContext();

paymentContext.setStrategy(new CreditCardPaymentStrategy('jakubj', '1003 7012 1004 9642', '223', '03/2027'));
paymentContext.setStrategy(new BitcoinPaymentStrategy());
paymentContext.setStrategy(new CashPaymentStrategy());

paymentContext.pay(100); // Payment: 100pln (cash transaction)
