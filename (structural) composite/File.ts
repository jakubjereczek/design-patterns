export interface Component {
  idx: string;
  getSize(): number;
  getName(): string;
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
}