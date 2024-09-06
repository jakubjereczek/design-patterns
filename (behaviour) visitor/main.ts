import { Car, Bicycle, Bus, Lorry, IElement } from './Verhicle';
import { HTMLExportVisitor, InsuranceCalculatorVisitor } from './Visitor';

const cars: Car[] = [
  new Car(15000, 2, 'BMW', 35000, 220, 'diesel'),
  new Car(50000, 4, 'Toyota', 25000, 150, 'hybrid'),
  new Car(120000, 8, 'Honda', 15000, 130, 'petrol'),
  new Car(7000, 1, 'Tesla', 60000, 300, 'electric'),
];

const bicycles: Bicycle[] = [
  new Bicycle(2, 500, 'mountain'),
  new Bicycle(1, 800, 'road'),
  new Bicycle(3, 400, 'city'),
  new Bicycle(4, 600, 'mountain'),
];

const buses: Bus[] = [
  new Bus(200000, 10, 60),
  new Bus(150000, 8, 50),
  new Bus(100000, 5, 40),
  new Bus(250000, 12, 70),
];

const lorries: Lorry[] = [
  new Lorry(5, 80000, 15, 350),
  new Lorry(7, 60000, 20, 400),
  new Lorry(3, 100000, 25, 450),
  new Lorry(8, 50000, 18, 300),
];

const verhicles: IElement[] = [...cars, ...bicycles, ...buses, ...lorries];

const insuranceVisitor = new InsuranceCalculatorVisitor();

for (const verhicle of verhicles) {
  const res = verhicle.accept(insuranceVisitor);

  console.log(`Insurance for ${verhicle.toString()}`, res);
}

const exportVisitor = new HTMLExportVisitor();

for (const verhicle of verhicles) {
  const res = verhicle.accept(exportVisitor);

  console.log(`Export for ${verhicle.toString()}`, res);
}
