import { OnlinePayment } from "./OnlinePayment";
import { BlikPayment, PayPalPayment } from "./PaymentMethod";

const paypal = new PayPalPayment('username@gmail.com');
const blik = new BlikPayment('500600700');

const payment = new OnlinePayment(paypal);
const payment2 = new OnlinePayment(blik);

payment.pay(10);
payment.refund(10);

payment2.pay(5);
payment2.refund(5);



















