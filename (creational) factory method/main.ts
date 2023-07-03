import { FileType, createFile } from "./Factory";

const factory = createFile(FileType.Audio);
const audioFile = factory.createFile("audio.mp3");
audioFile.open();
audioFile.close();

const factory2 = createFile(FileType.Video);
const mediaFile = factory2.createFile("video.mp4");
mediaFile.open();
mediaFile.close();
