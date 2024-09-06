import { Visitor } from './Visitor';

export interface IElement {
  accept<T>(entry: Visitor<T>): T;

  toString(): string;
}

export class Car implements IElement {
  constructor(
    public mileage: number,
    public age: number,
    public brand: string,
    public value: number,
    public enginePower: number,
    public fuelType: string,
  ) {}

  accept(entry: Visitor) {
    return entry.visit(this);
  }

  toString(): string {
    return `Car ${this.brand} (age: ${this.age})`;
  }
}

export class Bicycle implements IElement {
  constructor(public age: number, public value: number, public type: string) {}
  accept(entry: Visitor) {
    return entry.visit(this);
  }

  toString(): string {
    return `Bicycle ${this.type} (age: ${this.age})`;
  }
}

export class Bus implements IElement {
  constructor(
    public mileage: number,
    public age: number,
    public passengerCapacity: number,
  ) {}

  accept(entry: Visitor) {
    return entry.visit(this);
  }

  toString(): string {
    return `Bus (age: ${this.age}, for ${this.passengerCapacity} passengers)`;
  }
}

export class Lorry implements IElement {
  constructor(
    public age: number,
    public value: number,
    public cargoCapacity: number,
    public enginePower: number,
  ) {}

  accept(entry: Visitor) {
    return entry.visit(this);
  }

  toString(): string {
    return `Lorry (age: ${this.age}, ${this.cargoCapacity} capacity)`;
  }
}
