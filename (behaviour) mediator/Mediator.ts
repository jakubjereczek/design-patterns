interface Mediator<TEntry extends any> {
  notify(sender: TEntry, event: string): void;
}

export class BookingMediator implements Mediator<BookingMediatorEntry> {
  public hotel = new Hotel(this);
  public reservation = new Reservation(this);
  public payment = new Payment(this);
  public logger = new Logger(this);
  public errors = new Errors(this);

  public notify(sender: BookingMediatorEntry, event: string): void {
    if (sender instanceof Hotel) {
      if (event === 'booked') {
        this.logger.log('Hotel: Room has been booked.');
        this.payment.processPayment();
        this.hotel.updateAvailability();
      } else if (event === 'error') {
        this.errors.handle('No rooms available.');
      }
    } else if (sender instanceof Reservation) {
      if (event === 'reserve') {
        this.hotel.bookRoom();
      }
    } else if (sender instanceof Payment) {
      if (event === 'processed') {
        this.logger.log('Payment: Payment processed successfully.');
        this.reservation.confirmReservation();
      } else if (event === 'failed') {
        this.errors.handle('Payment failed.');
      }
    } else if (sender instanceof Logger) {
      this.logger.log(event);
    } else if (sender instanceof Errors) {
      this.logger.log('Error: ' + event);
    }
  }
}

abstract class BookingMediatorEntry {
  constructor(protected mediator: BookingMediator) {}
}

class Hotel extends BookingMediatorEntry {
  private rooms: number = 10;

  public bookRoom() {
    if (this.rooms > 0) {
      this.rooms--;
      this.mediator.notify(this, 'booked');
    } else {
      this.mediator.notify(this, 'error');
    }
  }

  public updateAvailability() {
    console.log(`Hotel: Rooms left: ${this.rooms}`);
  }
}

class Reservation extends BookingMediatorEntry {
  public makeReservation() {
    console.log('Reservation: Making a reservation.');
    this.mediator.notify(this, 'reserve');
  }

  public confirmReservation() {
    console.log('Reservation: Reservation confirmed.');
  }
}

class Payment extends BookingMediatorEntry {
  public processPayment() {
    console.log('Payment: Processing payment.');
    if (Math.random() > 0.5) {
      setTimeout(() => this.mediator.notify(this, 'processed'), 1000);
    } else {
      setTimeout(() => this.mediator.notify(this, 'failed'), 1000);
    }
  }
}

class Logger extends BookingMediatorEntry {
  public log(message: string) {
    console.log('Logger: ' + message);
  }
}

class Errors extends BookingMediatorEntry {
  public handle(message: string) {
    this.mediator.notify(this, message);
  }
}
