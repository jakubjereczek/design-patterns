import { FileType, createFile } from "./Factory";

const factory = createFile(FileType.Audio);
const audioFile = factory.createFile({
  fileName: "audio.mp3",
  size: 3000000,
  codec: "MP3",
  bitrate: 128,
  channels: 2,
});
audioFile.open();
audioFile.close();

const factory2 = createFile(FileType.Video);
const mediaFile = factory2.createFile({
  fileName: "video.mp4",
  size: 5000000, 
  codec: "H.264",
  bitrate: 5000, 
  channels: 0,
});
mediaFile.open();
mediaFile.close();
