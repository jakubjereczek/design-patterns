import { IService, Service } from './Service';

interface Cache {
  [key: string]: { data: any; timestamp: number };
}

/* proxy */
export class CacheService implements IService {
  private cache: Cache = {};
  playerInfo: any;

  constructor(private service: Service) {}

  /* both methods return getPlayerInfo response or cached value of this method */
  public async getPlayerInfo() {
    const key = 'player-info';
    return this.validCache(key, async (key) => {
      this.cache[key] = {
        data: await this.service.getPlayerInfo(),
        timestamp: new Date().getTime(),
      };
      return this.cache[key].data; // return service getPlayerInfo response
    });
  }
  public async getEnemyInfo() {
    const key = 'enemy-info';
    return this.validCache(key, async (key) => {
      this.cache[key] = {
        data: await this.service.getEnemyInfo(), // return service getPlayerInfo response
        timestamp: new Date().getTime(),
      };
      return this.cache[key].data;
    });
  }
  public getVersion(): string {
    return this.service.getVersion();
  }

  private validCache<T>(key: string, cb: (key: string) => T) {
    if (this.cache[key]) {
      const { data, timestamp } = this.cache['player-info'];
      const currentTime = new Date().getTime();
      const timeDifference = (currentTime - timestamp) / 1000 / 60; // difference in minutes

      if (timeDifference < 10) {
        return data;
      }
    }
    return cb(key);
  }
}
