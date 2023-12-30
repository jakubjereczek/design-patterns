/*
The Chain of Responsibility pattern connects objects in a chain, where each object contains a field storing a reference to the next object in the chain.
Each object in the chain decides whether to pass the request further down the chain or to end the process.
*/


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
      super.handle(request);
    } else {
      throw new Error(`Unable to serve - ${this.name}`);
    }
  }

  private canHandle(request: HandlerRequest): boolean {
    return Math.random() > 0.01;
  }
}

const handler = new ConcreteHandler('step1');
const handler2 = new ConcreteHandler('step2');
const handler3 = new ConcreteHandler('step3');
const handler4 = new ConcreteHandler('step4');
const handler5 = new ConcreteHandler('step5');
handler.setNext(handler2);
handler2.setNext(handler3);
handler3.setNext(handler4);
handler4.setNext(handler5);

try {
  handler.handle({ id: '0', payload: { name: 'name' } });
} catch (err) {
  console.warn('err', err);
}
