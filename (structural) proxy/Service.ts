export interface IService {
  playerInfo: any;
  getPlayerInfo(): Promise<any>;
  getEnemyInfo(): Promise<any>;
  getVersion(): any;
}

export class Service implements IService {
  playerInfo: any;

  public async getPlayerInfo() {
    // api all
    return {}
  }
  public async getEnemyInfo() {
    // api call
    return {}
  }
  public getVersion() {
    return 'v1.0.4'
  }
}