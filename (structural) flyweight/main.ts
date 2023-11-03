import { CharacterFactory } from "./CharacterFactory";

const characters = [
  {
    name: 'Warrior',
    strength: 55,
    charisma: 35,
    intelligence: 5,
    imageUrl: '',
  },
    {
    name: 'Wizzard',
    strength: 12,
    charisma: 35,
    intelligence: 90,
    imageUrl: ''
  }
] as const;


const char1 = CharacterFactory.createCharacter(
  characters[0].name,
  characters[0].strength,
  characters[0].charisma,
  characters[0].intelligence,
  characters[0].imageUrl,
  'Unstopable Warrior 01'
);
const char2 = CharacterFactory.createCharacter(
  characters[0].name,
  characters[0].strength,
  characters[0].charisma,
  characters[0].intelligence,
  characters[0].imageUrl,
  'Unstopable Warrior 02'
);
const char3 = CharacterFactory.createCharacter(
  characters[1].name,
  characters[1].strength,
  characters[1].charisma,
  characters[1].intelligence,
  characters[1].imageUrl,
  'Amazing Wizard 02'
);