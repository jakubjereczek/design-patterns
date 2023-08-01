export class APIConnection {
  private static instance: APIConnection | null;

  private constructor() {}

  static getInstance() {
    if (!APIConnection.instance) {
      APIConnection.instance = new APIConnection();
    }
    return APIConnection.instance;
  }

  public query(payload: string) {}
}
