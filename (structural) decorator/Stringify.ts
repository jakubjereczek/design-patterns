export interface Stringify {
  decorate(message: string): string;
}

export class Transformer implements Stringify {
  decorate(message: string): string {
    return message;
  }
}

abstract class StringifyDecorator implements Stringify {
  constructor(protected wrapper: Stringify) {}

  decorate(message: string): string {
    return this.wrapper.decorate(message);
  }
}

export class UppercaseDecorator extends StringifyDecorator {
  decorate(text: string): string {
    return this.wrapper.decorate(text.toUpperCase());
  }
}

export class VowelCountDecorator extends StringifyDecorator {
  decorate(text: string): string {
    const vowels = text
      .toLowerCase()
      .split('')
      .filter((char) => 'aeiou'.includes(char));
    return `${this.wrapper.decorate(text)} (${vowels.length} vowels)`;
  }
}

export class AsteriskDecorator extends StringifyDecorator {
  decorate(text: string): string {
    return this.wrapper.decorate(text.replace(/ /g, '*'));
  }
}
