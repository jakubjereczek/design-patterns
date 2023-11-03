import { Character, CharacterDefinition } from "./Character";

export class CharacterFactory {
  static definitions: CharacterDefinition[];

  static getCharacterDefinition(
    name: string, 
    strength: number,
    charisma: number,
    intelligence: number,
    imageUrl: string,
  ) {
    let definition = this.definitions.find((def) => {
      const characterName = def.getName();
      return characterName === name;
    });

    if (!definition) {
      definition = new CharacterDefinition(
        name, 
        strength, 
        charisma, 
        intelligence, 
        imageUrl
      );
      this.definitions.push(definition);
    }
    return definition;
  }

  static createCharacter(
    characterName: string,     
    strength: number,
    charisma: number,
    intelligence: number,
    imageUrl: string, 
    name: string) {
    return new Character(
      CharacterFactory.getCharacterDefinition(
        characterName, 
        strength, 
        charisma, 
        intelligence, 
        imageUrl
    ), {
      name,
      age: 1,
      level: 1,
      points: 100,
      inventory: [],
      quests: [],
      lastOnline: new Date()
    })
  }
}
