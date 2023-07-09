import { AudioFile, File, ImageFile, VideoFile } from './File';

type CreateFileArgs = Omit<File, 'open' | 'close' | 'play' | 'pause'>;

export class FileFactory {
  static createFile({
    fileName,
    size,
    codec,
    bitrate,
    channels,
  }: CreateFileArgs): File {
    if (fileName.endsWith('.mp3')) {
      return new AudioFile(fileName, size, codec, bitrate, channels);
    } else if (fileName.endsWith('png')) {
      return new ImageFile(fileName, size, codec, bitrate, channels);
    } else if (fileName.endsWith('wav')) {
      return new VideoFile(fileName, size, codec, bitrate, channels);
    }

    throw new Error('Unsupported fileType');
  }
}
