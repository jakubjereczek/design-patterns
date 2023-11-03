/** internal state, a flyweight */
export class CharacterDefinition {
  constructor(
    private name: string,
    private strength: number,
    private charisma: number,
    private intelligence: number,
    private imageUrl: string,
  ) {}
  
  public getName() {
    return this.name;
  }

  public getImageUrl() {
    return this.imageUrl;
  }

  public getLevels() {
    return {
      strength: this.strength,
      charisma: this.charisma,
      intelligence: this.intelligence,
    }
  }

}

/** external state */
interface CharacterState {
  name: string;
  age: number;
  level: number;
  points: number;
  inventory: string[];
  quests: string[];
  lastOnline: Date;
}
export class Character {
  private name: string;
  private age: number;
  private level: number;
  private points: number;
  private inventory: string[];
  private quests: string[];
  private lastOnline: Date;

  constructor(
    private characterDefinition: CharacterDefinition,
    {
      name,
      age,
      level,
      points,
      inventory,
      quests,
      lastOnline
    }: CharacterState,
  ) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.points = points;
    this.inventory = inventory;
    this.quests = quests;
    this.lastOnline = lastOnline;
  }

  public fight(enemy: Character): boolean {
    const { 
      charisma, 
      intelligence, 
      strength
    } = this.characterDefinition.getLevels();
    const { 
      charisma: enemyCharisma, 
      intelligence: enemyIntelligence, 
      strength: enemyStrength
    } = enemy.characterDefinition.getLevels();

    const playerTotal = (charisma + intelligence + strength) + (this.level * 0.5) 
    const enemyTotal = enemyCharisma + enemyIntelligence + enemyStrength + (enemy.level * 0.5);
    const playerDiceRoll = Math.floor(Math.random() * 20) + 1; 
    const enemyDiceRoll = Math.floor(Math.random() * 20) + 1;

    return playerTotal + playerDiceRoll > enemyTotal + enemyDiceRoll;
  }

  public addItemToInventory(item: string) {
    this.inventory.push(item);
  }

  public removeItemFromInventory(item: string) {
    const index = this.inventory.indexOf(item);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }
}
