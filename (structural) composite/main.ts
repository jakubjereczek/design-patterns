import { FileManager } from './FileManager';
import { Folder } from './Folder';

const root = new Folder('root', 'folder01', []);
const fileManager = new FileManager(root);

fileManager.createFile(512, 'doc1', 'txt', 'file01', 'UTF-8');
fileManager.createFile(1024, 'photo1', 'png', 'file02');
fileManager.createFile(2048, 'photo2', 'png', 'file03');

const folder = fileManager.createFolder('musics', 'folder02');

fileManager.createFile(768, 'doc2', 'txt', 'file04', 'UTF-8', folder);
fileManager.createFile(768, 'photo3', 'png', 'file05', 'none', folder);
const folder2 = fileManager.createFolder('docs', 'folder03', folder);

fileManager.createFile(2048, 'doc3', 'txt', 'file04', 'UTF-8', folder2);
fileManager.createFile(640, 'photo3', 'png', 'file05', 'none', folder2);

fileManager.display();
/**
 * Folder: root, total size: 7808 bytes
 *  TextFile: doc1.txt, size: 512 bytes, encoding: UTF-8
 *  File: photo1.png, size: 1024 bytes
 *  File: photo2.png, size: 2048 bytes
 *  Folder: musics, total size: 4224 bytes
 *   TextFile: doc2.txt, size: 768 bytes, encoding: UTF-8
 *   File: photo3.png, size: 768 bytes 
 *   Folder: docs, total size: 2688 bytes
 *     TextFile: doc3.txt, size: 2048 bytes, encoding: UTF-8
 *     File: photo3.png, size: 640 bytes
 */
