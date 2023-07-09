import { Character, Mage, Warrior } from './Character';
import { Bow, Fireball, Sword, Weapon } from './Weapon';

export interface CharacterFactory {
  createCharacter: (
    name: string,
    strength: number,
    dexterity: number,
    level: number,
  ) => Character;
  createWeapon: () => Weapon;
}

export class WarriorCharacterFactory implements CharacterFactory {
  createCharacter = (
    name: string,
    strength: number,
    dexterity: number,
    level: number,
  ) => {
    return new Warrior(name, strength, 100, dexterity, level);
  };
  createWeapon = () => {
    return new Sword('Excalibur');
  };
}

export class MageCharacterFactory implements CharacterFactory {
  createCharacter = (
    name: string,
    strength: number,
    dexterity: number,
    level: number,
  ) => {
    return new Mage(name, strength, 85, dexterity, level);
  };
  createWeapon = () => {
    return new Fireball('Powerhouse');
  };
}

export class ArcherCharacterFactory implements CharacterFactory {
  createCharacter = (
    name: string,
    strength: number,
    dexterity: number,
    level: number,
  ) => {
    return new Mage(name, strength, 85, dexterity, level);
  };
  createWeapon = () => {
    return new Bow('Apollo');
  };
}
