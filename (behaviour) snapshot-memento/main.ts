import { GameCaretaker } from "./Game";

const caretaker = new GameCaretaker();
const game = caretaker.getOriginator();

console.log('Initial State: ', game.displayState());

caretaker.save();

game.setLevel(2);
game.setHealth(80);
game.setMana(60);
game.setExperience(2500);
game.setStrength(20);
game.setAgility(15);
game.setIntelligence(22);
game.addItem('Magic Wand');
game.removeItem('Sword');
game.move(5, -5);
game.exploreMap(3, 2);

console.log('State after modifications: ', game.displayState());

caretaker.save();

game.setHealth(40);
game.addItem('Healing Potion');

console.log('State after further modifications: ', game.displayState());

caretaker.undo();

console.log('State after undo: ', game.displayState());

caretaker.undo();

console.log('State after another undo:', game.displayState());
