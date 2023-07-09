import { FileFactory } from './FileFactory';

const audio = FileFactory.createFile({
  fileName: 'audio.mp3',
  size: 3000000,
  codec: 'MP3',
  bitrate: 128,
  channels: 2,
});
audio.open();
audio.close();

const video = FileFactory.createFile({
  fileName: 'video.mp4',
  size: 5000000,
  codec: 'H.264',
  bitrate: 5000,
  channels: 0,
});
video.open();
video.close();
