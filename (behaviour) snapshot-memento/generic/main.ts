interface Memento {
  restore(): void;
}

interface Originator<TState, TMemento extends Memento> {
  save(): TMemento;
  setState(state: TState): void;
  getState(): TState;
}

interface DocumentState {
  text: string;
  fontFamily: string;
}

class DocumentMemento implements Memento {
  constructor(
    private originator: Originator<DocumentState, DocumentMemento>,
    private state: DocumentState,
  ) {
    this.originator = originator;
    this.state = { ...state };
  }

  restore() {
    this.originator.setState(this.state);
  }
}

export class DocumentOriginator implements Originator<DocumentState, DocumentMemento> {
  private state: DocumentState = {
    text: '',
    fontFamily: '',
  };

  save(): DocumentMemento {
    return new DocumentMemento(this, this.state);
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

abstract class Caretaker<TState, TMemento extends Memento> {
  protected history: TMemento[] = [];

  constructor(protected originator: Originator<TState, TMemento>) {}
}

export class DocumentCaretaker extends Caretaker<DocumentState, DocumentMemento> {
  update(state: DocumentState) {    
    this.history.push(this.originator.save());
    this.originator.setState(state);
  }

  undo() {
    this.history.pop()?.restore();
  }
  
  getCurrentState(): DocumentState {
    return this.originator.getState();
  }
}

