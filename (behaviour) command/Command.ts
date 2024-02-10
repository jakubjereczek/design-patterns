export interface Command<T> {
  execute(): void;
  undo(): void;
}

export class Invoker<T> {
  private history: Command<T>[] = [];

  executeCommand(command: Command<T>): void {
    command.execute();
    this.history.push(command);
  }

  undoCommand(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

export const compose = <T,>(commands: Command<T>[]): Command<T> => {
  return new class ComposedCommand implements Command<T> {
    private invoker: Invoker<T> = new Invoker<T>();

    execute(): void {
      for (const command of commands) {
        this.invoker.executeCommand(command);
      }
    }

    undo(): void {
      for (let i = commands.length - 1; i >= 0; i--) {
        this.invoker.undoCommand();
      }
    }
  };
};