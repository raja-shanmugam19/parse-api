export class Environment {
  static get port(): number {
    return 8080;
  }

  static get v1Url(): string {
    return '/api/v1/parse';
  }

  static get v2Url(): string {
    return '/api/v2/parse';
  }
}
export default Environment;
