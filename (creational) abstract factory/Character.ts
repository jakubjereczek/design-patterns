export interface Character {
  name: string;
  strength: number;
  health: number;
  dexterity: number;
  level: number;
  attack: () => void;
  fight: (target: Character) => void;
  heal: () => void;
}

export class Warrior implements Character {
  name: string;
  strength: number;
  health: number;
  dexterity: number;
  level: number;

  constructor(name: string, strength: number, health: number, dexterity: number, level: number) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.dexterity = dexterity;
    this.level = level;
  }

  attack() {
    console.log("Warrior attacks with a sword.");
  }

  fight(target: Character) {
    console.log(`Warrior fights against ${target.name}.`);
  }

  heal() {
    console.log("Warrior heals wounds.");
  }
}

export class Mage implements Character {
  name: string;
  strength: number;
  health: number;
  dexterity: number;
  level: number;

  constructor(name: string, strength: number, health: number, dexterity: number, level: number) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.dexterity = dexterity;
    this.level = level;
  }

  attack() {
    console.log("Mage attacks with a spell.");
  }

  fight(target: Character) {
    console.log(`Mage fights against ${target.name}.`);
  }

  heal() {
    console.log("Mage uses healing magic.");
  }
}

export class Archer implements Character {
  name: string;
  strength: number;
  health: number;
  dexterity: number;
  level: number;

  constructor(name: string, strength: number, health: number, dexterity: number, level: number) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.dexterity = dexterity;
    this.level = level;
  }

  attack() {
    console.log("Archer attacks with a bow.");
  }

  fight(target: Character) {
    console.log(`Archer fights against ${target.name}.`);
  }

  heal() {
    console.log("Archer bandages wounds.");
  }
}