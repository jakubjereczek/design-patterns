import { Command } from './Command';

// receiver
export class TextEditor {
  constructor(
    public textContent: string,
    public lastEdited: Date,
    public fontSize: number,
    public fontWeight: 'normal' | 'bold',
    public textColor: string,
    public textTransform: 'normal' | 'lowercase' | 'uppercase',
    public lineSpacing: number,
  ) {}

  getInfo() {
    return {
      textContent: this.textContent,
      lastEdited: this.lastEdited,
      fontSize: this.fontSize,
      fontWeight: this.fontWeight,
      textColor: this.textColor,
      textTransform: this.textTransform,
      lineSpacing: this.lineSpacing,
    };
  }

  clone() {
    return new TextEditor(
      this.textColor,
      this.lastEdited,
      this.fontSize,
      this.fontWeight,
      this.textColor,
      this.textTransform,
      this.lineSpacing,
    );
  }
}

// commands
export class UppercaseCommand implements Command<TextEditor> {
  private previousState: TextEditor;
  constructor(private receiver: TextEditor) {
    this.previousState = receiver.clone();
  }

  execute(): void {
    this.receiver.textTransform = 'uppercase';
    this.receiver.lastEdited = new Date();
  }

  undo(): void {
    Object.assign(this.receiver, this.previousState);
  }
}

export class BoldCommand implements Command<TextEditor> {
  private previousState: TextEditor;
  constructor(private receiver: TextEditor) {
    this.previousState = receiver.clone();
  }

  execute(): void {
    this.receiver.fontWeight = 'bold';
    this.receiver.lastEdited = new Date();
  }

  undo(): void {
    Object.assign(this.receiver, this.previousState);
  }
}

export class FontSizeCommand implements Command<TextEditor> {
  private previousState: TextEditor;
  constructor(
    private receiver: TextEditor,
    private args: { increase: boolean } | { decrease: boolean },
  ) {
    this.previousState = receiver.clone();
  }

  execute(): void {
    if ('increase' in this.args) {
      this.receiver.fontSize *= 1.25;
    } else {
      this.receiver.fontSize *= 0.75;
    }
    this.receiver.lastEdited = new Date();
  }

  undo(): void {
    Object.assign(this.receiver, this.previousState);
  }
}
