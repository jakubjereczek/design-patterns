import { FileManager } from './FileManager';
import { Folder } from './Folder';

const root = new Folder('root', 'folder01', []);
const fileManager = new FileManager(root);

fileManager.createFile(512, 'documents', 'txt', 'file01');
fileManager.createFile(1024, 'photo1', 'png', 'file02');
fileManager.createFile(2048, 'photo2', 'png', 'file03');

const folder = fileManager.createFolder('musics', 'folder02');

fileManager.createFile(768, 'documents', 'jpg', 'file04', folder);
fileManager.createFile(768, 'photo3', 'png', 'file05', folder);
const folder2 = fileManager.createFolder('docs', 'folder03', folder);

fileManager.createFile(2048, 'documents', 'jpg', 'file04', folder2);
fileManager.createFile(640, 'photo3', 'png', 'file05', folder2);

fileManager.getInfo();
/**
 * Folder: root, Size: 7808 bytes
 *   File: documents.txt, Size: 512 bytes
 *   File: photo1.png, Size: 1024 bytes
 *   File: photo2.png, Size: 2048 bytes
 *   Folder: musics, Size: 4224 bytes
 *     File: documents.jpg, Size: 768 bytes
 *     File: photo3.png, Size: 768 bytes
 *     Folder: docs, Size: 2688 bytes
 *       File: documents.jpg, Size: 2048 bytes
 *       File: photo3.png, Size: 640 bytes
 */
