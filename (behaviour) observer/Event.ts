export interface IEventListener<T> {
  update(data: Partial<T>): void;
}

export class EventManager<T> {
  private listeners: {
    [eventName: string]: Array<IEventListener<T>>;
  } = {};

  subscribe(eventName: string, listener: IEventListener<T>) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listener);
  }

  unsubscribe(eventName: string, listener: IEventListener<T>) {
    if (!this.listeners[eventName]) {
      return;
    }
    const idx = this.listeners[eventName].findIndex((l) => l === listener);
    if (idx !== -1) {
      this.listeners[eventName].splice(idx, 1);
    }
  }

  notify(eventName: string, data: Partial<T>) {
    if (!this.listeners[eventName]) {
      return;
    }
    this.listeners[eventName].forEach((listener) => listener.update(data));
  }
}
