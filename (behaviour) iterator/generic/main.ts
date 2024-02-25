import { Collection } from "./Collection";

const collection = new Collection<number>();
collection.add(1);
collection.add(2);
collection.add(3);

const loopIterator = collection.createIterator('loop');
console.log(loopIterator.next()); // Output: 1
console.log(loopIterator.next()); // Output: 2
console.log(loopIterator.next()); // Output: 3
console.log(loopIterator.next()); // Output: 1
console.log(loopIterator.prev()); // Output: 3

const staticIterator = collection.createIterator('static');
console.log(staticIterator.next()); // Output: 1
console.log(staticIterator.next()); // Output: 2
console.log(staticIterator.next()); // Output: 3
console.log(staticIterator.next()); // Output: 3
console.log(staticIterator.prev()); // Output: 2