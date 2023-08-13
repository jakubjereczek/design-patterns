import { PaymentProcessor } from "./PaymentProcessor";

export interface PaypalPaymentService extends PaymentProcessor {}

export interface StripePaymentService {
  createCharge(amount: number): void;
  perform3DSecureCheck(): void;
}

export interface SquarePaymentService {
  initiatePayment(amount: number): void;
  verifyPayment(): void;
}

export class StripePaymentProcessorAdapter implements PaymentProcessor {
  constructor(private adapteePaymentService: StripePaymentService) {}

  processPayment(amount: number): void {
    this.adapteePaymentService.createCharge(amount);
    this.adapteePaymentService.perform3DSecureCheck();
  }
}

export class SquarePaymentProcessorAdapter implements PaymentProcessor {
  constructor(private adapteePaymentService: SquarePaymentService) {}

  processPayment(amount: number): void {
    this.adapteePaymentService.initiatePayment(amount);
    this.adapteePaymentService.verifyPayment();
  }
}
