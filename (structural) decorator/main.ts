import {
  AsteriskDecorator,
  Stringify,
  Transformer,
  UppercaseDecorator,
  VowelCountDecorator,
} from './Stringify';

let stringier: Stringify = new Transformer();
stringier = new UppercaseDecorator(stringier);
stringier = new VowelCountDecorator(stringier);
stringier = new AsteriskDecorator(stringier);

console.log(stringier.decorate('Example Test To Decorate')); // EXAMPLE*TEST*TO*DECORATE (9 vowels)
