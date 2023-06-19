import { AudioFile, File, ImageFile, VideoFile } from "./File";

export abstract class FileFactory {
  abstract createFile(fileName: string): File;
}

export class AudioFileFactory extends FileFactory {
  createFile(fileName: string): File {
    return new AudioFile(fileName);
  }
}

export class ImageFileFactory extends FileFactory {
  createFile(fileName: string): File {
    return new ImageFile(fileName);
  }
}

export class VideoFileFactory extends FileFactory {
  createFile(fileName: string): File {
    return new VideoFile(fileName);
  }
}