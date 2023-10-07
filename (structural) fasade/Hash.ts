import { Encryption, MD5, SHA256, SHA512 } from './Algorithms';

type HashPurpose =
  | 'checking-file-integrity'
  | 'hash-password'
  | 'secure-data-protection';

/* fasade */
/* An example of isolating multiple dependencies within a single facade class. */
export class Hash {
  public getHashByItsPurpose(purpose: HashPurpose, payload: string) {
    const Algorithm = this.getAlgorithm(purpose);

    return Algorithm.hashData(payload);
  }

  private getAlgorithm(purpose: HashPurpose) {
    switch (purpose) {
      case 'checking-file-integrity':
        return MD5;
      case 'hash-password':
        return SHA256;
      case 'secure-data-protection':
        return SHA512;
    }
  }

  public checkFileIntegrity(fileData: string, hash: string): boolean {
    return MD5.verifyHash(fileData, hash);
  }

  public secureData(data: string): string {
    const encryptedData = Encryption.encrypt(data);
    return MD5.hashData(encryptedData);
  }
}