import { Hash } from "./Hash";

const hashFacade = new Hash();

hashFacade.getHashByItsPurpose('checking-file-integrity', 'payload');
hashFacade.checkFileIntegrity('file1', 'payload');
hashFacade.secureData('payload');
