interface Prototype<TShape = any> {
  clone(): TShape;
}

abstract class Shape<TShape = any> implements Prototype<TShape> {
  abstract type: string;
  constructor() {}

  abstract calcArea(): number;

  clone(): TShape {
    return Object.create(this) as TShape;
  }
}

export class Circle extends Shape<Circle> {
  type = 'circle';

  constructor(public radius: number) {
    super();
  }

  calcArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Shape<Rectangle> {
  type = 'rectangle';

  constructor(public width: number, public height: number) {
    super();
  }

  calcArea(): number {
    return this.width * this.height;
  }
}

export class ShapeRegistry {
  private prototypes: Record<string, Shape> = {};

  registerShape<T extends Shape>(key: string, shape: T) {
    this.prototypes[key] = shape;
  }

  getShapeByItsKey<T extends Shape>(key: string): T {
    return this.prototypes[key].clone();
  }

  getShapesByType<T extends Shape>(type: string): T[] {
    return Object.values(this.prototypes).filter(
      (shape) => shape.type === type,
    ) as T[];
  }
}

