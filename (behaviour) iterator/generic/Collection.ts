import { TIterator } from './Iterator'

export class Collection<TItem> {
  private items: TItem[];

  constructor() {
    this.items = [];
  }

  add(item: TItem): void {
    this.items.push(item);
  }

  remove(item: TItem): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getSize() {
    return this.items.length;
  }

  getByIndex(index: number) {
    return this.items[index];
  }

  createIterator(type: 'loop' | 'static'): TIterator<TItem> {
    if (type === 'loop') {
      return new LoopCollectionIterator(this);
    } else if (type === 'static') {
      return new StaticCollectionIterator(this);
    } else {
      throw new Error('Invalid iterator type');
    }
  }
}

export class LoopCollectionIterator<TItem> implements TIterator<TItem> {
  public index: number = -1;

  constructor(private collection: Collection<TItem>) {}

  next(): TItem {
    const size = this.collection.getSize();
    if (this.index >= size - 1) {
      this.index = -1;
    }
    const currentItem = this.collection.getByIndex(++this.index);
    if (!currentItem) {
      throw new Error('The collection is empty or index is out of bounds.');
    }
    return currentItem;
  }

  prev(): TItem {
    const size = this.collection.getSize();
    if (this.index <= 0) {
      this.index = size;
    }
    const currentItem = this.collection.getByIndex(--this.index);
    if (!currentItem) {
      throw new Error('The collection is empty or index is out of bounds.');
    }
    return currentItem;
  }
}

export class StaticCollectionIterator<TItem> implements TIterator<TItem> {
  public index: number = -1;

  constructor(private collection: Collection<TItem>) {}

  next(): TItem {
    return this.collection.getByIndex(
      this.index >= this.collection.getSize() - 1 ? this.index : ++this.index,
    );
  }

  prev(): TItem {
    return this.collection.getByIndex(
      this.index === 0 ? this.index : --this.index,
    );
  }
}

