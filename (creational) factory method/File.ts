
export interface File {
  open: () => void;
  close: () => void;
}

export class AudioFile implements File {
  constructor(public fileName: string) {}

  open = () => {
    console.log(`[AudioFile]: open ${this.fileName}`)
  };

  close = () => {
    console.log(`[AudioFile]: close ${this.fileName}`)
  };
  
}

export class ImageFile implements File {
  constructor(public fileName: string) {}

  open = () => {
    console.log(`[ImageFile]: open ${this.fileName}`)
  };

  close = () => {
    console.log(`[ImageFile]: close ${this.fileName}`)
  };
  
}

export class VideoFile implements File {
  constructor(public fileName: string) {}

  open = () => {
    console.log(`[VideoFile]: open ${this.fileName}`)
  };

  close = () => {
    console.log(`[VideoFile]: close ${this.fileName}`)
  };
  
}
