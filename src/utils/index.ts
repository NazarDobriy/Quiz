export class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  public clear(): void {}
  public getItem(key: string): string | null { return null; }
  public key(index: number): string | null { return null; }
  public removeItem(key: string): void {}
  public setItem(key: string, value: string): void {}
}
