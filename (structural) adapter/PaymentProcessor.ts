export interface PaymentProcessor {
  processPayment(amount: number): void;
}

export function completePayment(payment: PaymentProcessor, amount: number) {
  payment.processPayment(amount);
}
