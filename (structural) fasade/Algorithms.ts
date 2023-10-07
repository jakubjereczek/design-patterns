import { createHash } from 'crypto';

export class MD5 {
  static hashData(payload: string) {
    return createHash('md5').update(payload, 'utf8').digest('hex');
  }

  static verifyHash(data: string, hash: string): boolean {
    const computedHash = MD5.hashData(data);
    return computedHash === hash;
  }
}

export class SHA256 {
  static hashData(payload: string) {
    return createHash('sha256').update(payload, 'utf8').digest('hex');
  }
}

export class SHA512 {
  static hashData(payload: string) {
    return createHash('sha512').update(payload, 'utf8').digest('hex');
  }
}

export class Encryption {
  static encrypt(data: string): string {
    return `Encrypted '${data}'`;
  }
}
