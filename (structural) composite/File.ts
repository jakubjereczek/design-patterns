export interface Component {
  idx: string;
  getSize(): number;
  getName(): string;
  getInfo(): string;
}

/** leaf */
export class File implements Component {
  constructor(
    private size: number,
    private name: string,
    private ext: string,
    public idx: string,
  ) {}

  getSize(): number {
    return this.size;
  }

  getName(): string {
    return `${this.name}.${this.ext}`;
  }

  getInfo(): string {
    return `File: ${this.getName()}, size: ${this.getSize()} bytes`;
  }
}

export class TextFile extends File {
  constructor(
    size: number,
    name: string,
    ext: string,
    idx: string,
    private encoding: string,
  ) {
    super(size, name, ext, idx);
  }

  getEncoding(): string {
    return this.encoding;
  }

  getInfo(): string {
    return `TextFile: ${this.getName()}, size: ${this.getSize()} bytes, encoding: ${this.getEncoding()}`;
  }
}