import { Car, Bicycle, Bus, Lorry, IElement } from './Verhicle';

export interface Visitor<T = any> {
  visit(entry: IElement): T;
}

export class InsuranceCalculatorVisitor implements Visitor<number> {
  visit(entry: IElement): number {
    if (entry instanceof Car) {
      const basePremium = entry.value * 0.05;
      const mileageFactor = entry.mileage > 100000 ? 1.2 : 1.0;
      const ageFactor = entry.age > 5 ? 1.3 : 1.0;
      const brandFactor = entry.brand === 'BMW' ? 1.5 : 1.0;
      const enginePowerFactor = entry.enginePower > 200 ? 1.4 : 1.0;
      const fuelFactor =
        entry.fuelType === 'diesel'
          ? 1.1
          : entry.fuelType === 'electric'
          ? 0.8
          : 1.0;

      return (
        basePremium *
        mileageFactor *
        ageFactor *
        brandFactor *
        enginePowerFactor *
        fuelFactor
      );
    } else if (entry instanceof Bicycle) {
      const basePremium = entry.value * 0.02;
      const ageFactor = entry.age > 3 ? 1.2 : 1.0;
      const typeFactor = entry.type === 'mountain' ? 1.3 : 1.0;

      return basePremium * ageFactor * typeFactor;
    } else if (entry instanceof Bus) {
      const basePremium = 500;
      const mileageFactor = entry.mileage > 200000 ? 1.5 : 1.0;
      const ageFactor = entry.age > 10 ? 1.5 : 1.0;
      const passengerCapacityFactor = entry.passengerCapacity > 50 ? 1.4 : 1.0;

      return basePremium * mileageFactor * ageFactor * passengerCapacityFactor;
    } else if (entry instanceof Lorry) {
      const basePremium = entry.value * 0.04;
      const ageFactor = entry.age > 7 ? 1.4 : 1.0;
      const cargoCapacityFactor = entry.cargoCapacity > 20 ? 1.3 : 1.0;
      const enginePowerFactor = entry.enginePower > 300 ? 1.5 : 1.0;

      return basePremium * ageFactor * cargoCapacityFactor * enginePowerFactor;
    }

    throw new Error('Unsupported IElement');
  }
}

export class HTMLExportVisitor implements Visitor<string> {
  visit(entry: IElement): string {
    if (entry instanceof Car) {
      return `
        <div class="car">
          <h2>Car</h2>
          <p>Brand: ${entry.brand}</p>
          <p>Mileage: ${entry.mileage} km</p>
          <p>Age: ${entry.age} years</p>
          <p>Value: $${entry.value}</p>
          <p>Engine Power: ${entry.enginePower} HP</p>
          <p>Fuel Type: ${entry.fuelType}</p>
        </div>`;
    } else if (entry instanceof Bicycle) {
      return `
        <div class="bicycle">
          <h2>Bicycle</h2>
          <p>Type: ${entry.type}</p>
          <p>Age: ${entry.age} years</p>
          <p>Value: $${entry.value}</p>
        </div>`;
    } else if (entry instanceof Bus) {
      return `
        <div class="bus">
          <h2>Bus</h2>
          <p>Mileage: ${entry.mileage} km</p>
          <p>Age: ${entry.age} years</p>
          <p>Passenger Capacity: ${entry.passengerCapacity} passengers</p>
        </div>`;
    } else if (entry instanceof Lorry) {
      return `
        <div class="lorry">
          <h2>Lorry</h2>
          <p>Age: ${entry.age} years</p>
          <p>Value: $${entry.value}</p>
          <p>Cargo Capacity: ${entry.cargoCapacity} tons</p>
          <p>Engine Power: ${entry.enginePower} HP</p>
        </div>`;
    }
    throw new Error('Unsupported IElement');
  }
}
