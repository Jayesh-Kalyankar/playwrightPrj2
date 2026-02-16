export class TestContext {
  private static data = new Map<string, any>();

  static set(key: string, value: any) {
    this.data.set(key, value);
  }

  static get<T>(key: string): T {
    return this.data.get(key);
  }

  static clear() {
    this.data.clear();
  }
}
