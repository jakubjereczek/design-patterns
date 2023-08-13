import {
  SquarePaymentProcessorAdapter,
  SquarePaymentService,
  StripePaymentProcessorAdapter,
  StripePaymentService,
} from './PaymentService';
import { PaymentProcessor, completePayment } from './PaymentProcessor';

const paypalPaymentProcessor: PaymentProcessor = {
  processPayment: function (amount: number): void {
    console.log('Processing Paypal payment of ' + amount);
  },
};

const stripeService: StripePaymentService = {
  createCharge: function (amount: number): void {
    console.log('Creating Stripe charge payment of ' + amount);
  },
  perform3DSecureCheck: function (): void {
    console.log('Performing 3D Secure check for Stripe payment');
  },
};
const stripePaymentProcessor = new StripePaymentProcessorAdapter(stripeService);

const squareService: SquarePaymentService = {
  initiatePayment: function (amount: number): void {
    console.log('Initiating Square payment of ' + amount);
  },
  verifyPayment: function (): void {
    console.log('Verifing Square payment')
  },
};
const squarePaymentProcessor = new SquarePaymentProcessorAdapter(squareService);

completePayment(paypalPaymentProcessor, 10);
completePayment(stripePaymentProcessor, 10);
completePayment(squarePaymentProcessor, 10);
