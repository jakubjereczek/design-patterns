export interface IHandler<TStructure> {
  setNext(handler: IHandler<TStructure>): void;
  handle(request: TStructure): boolean;
}

export class AbstractHandler<TStructure extends any> {
  private next: IHandler<TStructure>;

  public setNext(handler: IHandler<TStructure>): IHandler<TStructure> {
    this.next = handler;
    return handler;
  }

  public handle(data: TStructure): boolean {
    if (this.next) {
      return this.next.handle(data);
    }
    return true;
  }
}
