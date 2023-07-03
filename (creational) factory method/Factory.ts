import { AudioFileFactory, FileFactory, ImageFileFactory, VideoFileFactory } from "./FileFactory";

export enum FileType {
  Audio, 
  Image,
  Video
}

export function createFile(fileType: FileType): FileFactory {
  if (fileType === FileType.Audio) {
    return new AudioFileFactory();
  } else if (fileType === FileType.Image) {
    return new ImageFileFactory();
  } else if (fileType === FileType.Video) {
    return new VideoFileFactory();
  }
  throw new Error("Invalid file type");
}

