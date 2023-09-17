import { Component } from './File';

/** composite */
export class Folder implements Component {
  constructor(
    private name: string,
    public idx: string,
    private children: Component[],
  ) {}

  add(component: Component) {
    this.children.push(component);
  }

  remove(component: Component) {
    this.children = this.children.filter(
      (child) => child.idx !== component.idx,
    );
  }

  getChildren() {
    return this.children;
  }

  getSize(): number {
    let totalSize = 0;
    for (const child of this.children) {
      totalSize += child.getSize();
    }

    return totalSize;
  }

  getName(): string {
    return this.name;
  }

  getInfo(): string {
    return `Folder: ${this.getName()}, total size: ${this.getSize()} bytes`;
  }

  display(indentation: string = ''): void {
    console.log(indentation + this.getInfo());
    for (const child of this.children) {
      if (child instanceof File) {
        console.log(indentation + ' ' + child.getInfo());
      } else if (child instanceof Folder) {
        child.display(indentation + ' ');
      }
    }
  }
}
