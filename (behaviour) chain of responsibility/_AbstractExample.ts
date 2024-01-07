interface HandlerRequest {
  id: string;
  payload: any;
}

interface Handler {
  setNext(handler: Handler): void;
  handle(request: HandlerRequest): void;
}

class BaseHandler implements Handler {
  private next: Handler | undefined;
  constructor(protected name: string) {}

  setNext(handler: Handler): void {
    this.next = handler;
  }

  handle(request: HandlerRequest): void {
    if (this.next) {
      this.next.handle(request);
    }
  }
}

class ConcreteHandler extends BaseHandler {
  handle(request: HandlerRequest): void {
    if (this.canHandle(request)) {
      // We can also handle it in such a way that we can handle it ourselves or pass it on - for next handler.
    } else {
      super.handle(request);
    }
  }

  private canHandle(request: HandlerRequest): boolean {
    return Math.random() > 0.01;
  }
}

const handler = new ConcreteHandler('a');
const handler2 = new ConcreteHandler('b');
const handler3 = new ConcreteHandler('c');
const handler4 = new ConcreteHandler('d');
const handler5 = new ConcreteHandler('e');
handler.setNext(handler2);
handler2.setNext(handler3);
handler3.setNext(handler4);
handler4.setNext(handler5);

handler.handle({ id: '0', payload: { name: 'name' } });
