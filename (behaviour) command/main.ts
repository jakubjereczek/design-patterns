
import { Invoker, compose } from './Command';
import {
  BoldCommand,
  FontSizeCommand,
  TextEditor,
  UppercaseCommand,
} from './TextEditor';

const textEditor = new TextEditor(
  'Sample text content',
  new Date(),
  16,
  'normal',
  '#000000',
  'normal',
  1.5,
);

// case 1
const invoker = new Invoker<TextEditor>();
console.log('startup', textEditor.getInfo());
invoker.executeCommand(new UppercaseCommand(textEditor));
console.log('after uppercase', textEditor.getInfo());
invoker.executeCommand(new BoldCommand(textEditor));
console.log('after bold', textEditor.getInfo());
invoker.undoCommand();
console.log('clear bold', textEditor.getInfo());
invoker.undoCommand();
console.log('clear uppercase', textEditor.getInfo());

// case 2
const invoker2 = new Invoker<TextEditor>();
console.log('startup', textEditor.getInfo());
invoker2.executeCommand(new UppercaseCommand(textEditor));
console.log('after uppercase', textEditor.getInfo());
invoker2.executeCommand(
  compose<TextEditor>([
    new BoldCommand(textEditor),
    new FontSizeCommand(textEditor, { increase: true }),
    new FontSizeCommand(textEditor, { increase: true }),
    new FontSizeCommand(textEditor, { increase: true }),
  ]),
);
console.log('after composed', textEditor.getInfo());
invoker2.undoCommand();
invoker2.undoCommand();
console.log('multiple undo', textEditor.getInfo())