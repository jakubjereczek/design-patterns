export interface Weapon {
  name: string;
  accuracy: number;
  attackPower: number;
}

export class Sword implements Weapon {
  name: string;
  accuracy: number;
  attackPower: number;

  constructor(name: string) {
    this.name = name;
    this.accuracy = 0.9;
    this.attackPower = 10;
  }
}

export class Bow implements Weapon {
  name: string;
  accuracy: number;
  attackPower: number;

  constructor(name: string) {
    this.name = name;
    this.accuracy = 0.65;
    this.attackPower = 15;
  }
}

export class Fireball implements Weapon {
  name: string;
  accuracy: number;
  attackPower: number;

  constructor(name: string) {
    this.name = name;
    this.accuracy = 0.3;
    this.attackPower = 30;
  }
}

