import { File, TextFile } from './File';
import { Folder } from './Folder';

/** client */
export class FileManager {
  constructor(private root: Folder) {}

  createFile(
    size: number,
    name: string,
    ext: string,
    idx: string,
    encoding = 'none',
    folder?: Folder,
  ): File {
    const object = encoding !== 'none'
      ? new TextFile(size, name, ext, idx, encoding)
      : new File(size, name, ext, idx);
    if (folder) {
      folder.add(object);
    } else {
      this.root.add(object);
    }

    return object;
  }

  createFolder(name: string, idx: string, folder?: Folder): Folder {
    const object = new Folder(name, idx, []);
    if (folder) {
      folder.add(object);
    } else {
      this.root.add(object);
    }

    return object;
  }

  display() {
    this.root.display();
  }
}
