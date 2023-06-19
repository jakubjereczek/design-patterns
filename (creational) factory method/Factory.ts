import { File } from "./File";
import {  AudioFileFactory, FileFactory, ImageFileFactory, VideoFileFactory } from "./FileFactory";

export enum FileType {
  Audio, 
  Image,
  Video
}

export class Factory {
  private fileFactory: FileFactory;

  constructor() {}

  init(fileType: FileType) {
    switch (fileType) {
      case FileType.Audio:
        this.fileFactory = new AudioFileFactory();
        break;
      case FileType.Image:
        this.fileFactory = new ImageFileFactory();
        break;
      case FileType.Video:
        this.fileFactory = new VideoFileFactory();
        break;
      default:
        throw new Error("Invalid file type");
    }
  }

  createFile(fileName: string): File {
    return this.fileFactory.createFile(fileName);
  }
}