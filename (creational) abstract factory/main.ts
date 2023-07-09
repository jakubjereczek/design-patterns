import { Character } from './Character';
import {
  ArcherCharacterFactory,
  CharacterFactory,
  MageCharacterFactory,
  WarriorCharacterFactory,
} from './CharacterFactory';
import { Weapon } from './Weapon';

class Personality {
  private factory: CharacterFactory;
  public character: Character;
  public weapon: Weapon;

  getCharacterFactoryByTrait(trait: PersonalityTraits) {
    switch (trait) {
      case 'charisma':
        return new WarriorCharacterFactory();
      case 'intelligence':
        return new MageCharacterFactory();
      case 'dexterity':
        return new ArcherCharacterFactory();
    }
  }

  constructor(trait: PersonalityTraits) {
    this.factory = this.getCharacterFactoryByTrait(trait);
  }

  create(name: string, strength: number, dexterity: number, level: number) {
    this.character = this.factory.createCharacter(
      name,
      strength,
      dexterity,
      level,
    );
    this.weapon = this.factory.createWeapon();
  }
}

type PersonalityTraits = 'dexterity' | 'intelligence' | 'charisma';

const personality1 = new Personality('dexterity');
personality1.create('John', 100, 1, 1);
personality1.character.attack();
console.log(personality1.weapon.name, personality1.character.name);

const personality2 = new Personality('intelligence');
personality2.create('John', 100, 1, 1);
personality2.character.attack();
console.log(personality2.weapon.name, personality2.character.name);

const personality3 = new Personality('charisma');
personality3.create('John', 100, 1, 1);
personality3.character.attack();
console.log(personality3.weapon.name, personality3.character.name);
