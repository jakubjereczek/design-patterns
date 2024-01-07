import { AbstractHandler } from './AbstractHandler';
import { Order, sampleOrder } from './Order';
import {
  AvailabilityProcessor,
  PaymentProcessor,
  ValidationProcessor,
} from './Processors';

const orderProcessor: AbstractHandler<Order> = new AvailabilityProcessor();
orderProcessor
  .setNext(new PaymentProcessor())
  .setNext(new ValidationProcessor());

const isProcessCompleted = orderProcessor.handle(sampleOrder);

console.log('orderProcessor isProcessCompleted', isProcessCompleted);
