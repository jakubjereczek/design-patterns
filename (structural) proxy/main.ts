import { CacheService } from './CacheService';
import { Service } from './Service';

class DataManager {
  constructor(private service: Service) {}

  public async getInfo() {
    return [
      await this.service.getPlayerInfo(),
      await this.service.getEnemyInfo(),
    ];
  }
}

class App {
  public static init() {
    const dataService = new Service();
    const dataProxy = new CacheService(dataService);
    const manager = new DataManager(dataProxy);
    manager.getInfo();
  }
}

App.init();
