import { Circle, Rectangle, ShapeRegistry } from "./ShapeRegistry";

const shapeRegistry = new ShapeRegistry();

const rectangle = new Rectangle(4, 6);
const circle = new Circle(12);

shapeRegistry.registerShape('rectangle-1', rectangle);
shapeRegistry.registerShape('circle-1', circle);

const circle1 = shapeRegistry.getShapeByItsKey<Circle>('circle-1');
const circle2 = circle1.clone();
circle2.radius = 24;

const rectangle1 = shapeRegistry.getShapeByItsKey<Rectangle>('rectangle-1');

console.log(circle2.calcArea()); // 1809 
console.log(circle1.calcArea()); // 452

console.log(rectangle1.calcArea()); // 24