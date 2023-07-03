export interface File {
  fileName: string;
  size: number;
  codec: string;
  bitrate: number;
  channels: number;
  open: () => void;
  close: () => void;
  play?: () => void;
  pause?: () => void;
}

export class AudioFile implements File {
  constructor(
    public fileName: string,
    public size: number,
    public codec: string,
    public bitrate: number,
    public channels: number,
  ) {}

  open = () => {
    console.log(`[AudioFile]: Opening ${this.fileName}...`);
  };

  close = () => {
    console.log(`[AudioFile]: Closing ${this.fileName}...`);
  };

  play = () => {
    console.log(`[AudioFile]: Playing ${this.fileName}...`);
  };

  pause = () => {
    console.log(`[AudioFile]: Pausing ${this.fileName}...`);
  };
}

export class ImageFile implements File {
  constructor(
    public fileName: string,
    public size: number,
    public codec: string,
    public bitrate: number,
    public channels: number,
  ) {}

  open = () => {
    console.log(`[ImageFile]: Opening ${this.fileName}...`);
  };

  close = () => {
    console.log(`[ImageFile]: Closing ${this.fileName}...`);
  };

  play = () => {
    throw new Error(
      `[ImageFile]: Cannot play ${this.fileName}. Image files do not support playback.`,
    );
  };

  pause = () => {
    throw new Error(
      `[ImageFile]: Cannot pause ${this.fileName}. Image files do not support playback.`,
    );
  };
}

export class VideoFile implements File {
  constructor(
    public fileName: string,
    public size: number,
    public codec: string,
    public bitrate: number,
    public channels: number,
  ) {}

  open = () => {
    console.log(`[VideoFile]: opening ${this.fileName}...`);
  };

  close = () => {
    console.log(`[VideoFile]: closing ${this.fileName}...`);
  };

  play = () => {
    console.log(`[VideoFile]: playing ${this.fileName}...`);
  };

  pause = () => {
    console.log(`[VideoFile]: pausing ${this.fileName}...`);
  };
}