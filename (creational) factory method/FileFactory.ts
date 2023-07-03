import { AudioFile, File, ImageFile, VideoFile } from "./File";

type CreateFileArgs = Omit<File, 'open' | 'close' | 'play'| 'pause'>

export abstract class FileFactory {
  abstract createFile(args: CreateFileArgs): File;
}

export class AudioFileFactory extends FileFactory {
  createFile({
    fileName,
    size,
    codec,
    bitrate,
    channels,
  }: CreateFileArgs): File {
    return new AudioFile(fileName, size, codec, bitrate, channels);
  }
}

export class ImageFileFactory extends FileFactory {
  createFile({
    fileName,
    size,
    codec,
    bitrate,
    channels,
  }: CreateFileArgs): File {
    return new ImageFile(fileName, size, codec, bitrate, channels);
  }
}

export class VideoFileFactory extends FileFactory {
  createFile({
    fileName,
    size,
    codec,
    bitrate,
    channels,
  }: CreateFileArgs): File {
    return new VideoFile(fileName, size, codec, bitrate, channels);
  }
}

