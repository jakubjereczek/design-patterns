class GameState {
  constructor(
    public level: number,
    public health: number,
    public mana: number,
    public experience: number,
    public strength: number,
    public agility: number,
    public intelligence: number,
    public inventory: string[],
    public position: { x: number; y: number },
    public mapExplored: { x: number; y: number }[],
  ) {}
}

class GameMemento {
  private state: GameState;

  constructor(state: GameState) {
    this.state = new GameState(
      state.level,
      state.health,
      state.mana,
      state.experience,
      state.strength,
      state.agility,
      state.intelligence,
      [...state.inventory],
      { ...state.position },
      state.mapExplored.map((me) => ({ ...me })),
    );
  }

  getState() {
    return this.state;
  }
}

class Game {
  private state: GameState;

  constructor() {
    this.state = new GameState(
      1,
      100,
      50,
      2000,
      15,
      12,
      18,
      ['Sword', 'Shield', 'Health Potion'],
      { x: 0, y: 0 },
      [{ x: 0, y: 0 }],
    );
  }

  __makeSnapshot(): GameMemento {
    return new GameMemento(this.state);
  }

  __restore(snapshot: GameMemento) {
    this.state = snapshot.getState();
  }

  displayState() {
    return this.state;
  }

  // game methods
  setLevel(level: number) {
    this.state.level = level;
  }

  setHealth(health: number) {
    this.state.health = health;
  }

  setMana(mana: number) {
    this.state.mana = mana;
  }

  setExperience(experience: number) {
    this.state.experience = experience;
  }

  setStrength(strength: number) {
    this.state.strength = strength;
  }

  setAgility(agility: number) {
    this.state.agility = agility;
  }

  setIntelligence(intelligence: number) {
    this.state.intelligence = intelligence;
  }

  addItem(item: string) {
    this.state.inventory.push(item);
  }

  removeItem(item: string) {
    const index = this.state.inventory.indexOf(item);
    if (index !== -1) {
      this.state.inventory.splice(index, 1);
    }
  }

  move(x: number, y: number) {
    this.state.position.x += x;
    this.state.position.y += y;
  }

  exploreMap(x: number, y: number) {
    this.state.mapExplored.push({ x, y });
  }
}

export class GameCaretaker {
  private originator: Game = new Game();
  private history: GameMemento[] = [];

  getOriginator() {
    return this.originator;
  }

  save() {
    this.history.push(this.originator.__makeSnapshot());
  }

  undo() {
    const memento = this.history.pop();
    if (memento) {
      this.originator.__restore(memento);
    }
  }
}
