import { Factory, FileType } from "./Factory";

const factory = new Factory();

factory.init(FileType.Audio);
const audioFile = factory.createFile("audio.mp3");
audioFile.open();
audioFile.close();

factory.init(FileType.Image);
const imageFile = factory.createFile("image.jpg");
imageFile.open();
imageFile.close();

factory.init(FileType.Video);
const videoFile = factory.createFile("video.mp4");
videoFile.open();
videoFile.close();