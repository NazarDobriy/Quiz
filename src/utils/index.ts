import { isPlatformBrowser } from "@angular/common";
import { Inject, PLATFORM_ID } from "@angular/core";

export class Environment {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return !isPlatformBrowser(this.platformId);
  }
}

export class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  public clear(): void {}
  public getItem(key: string): string | null { return null; }
  public key(index: number): string | null { return null; }
  public removeItem(key: string): void {}
  public setItem(key: string, value: string): void {}
}
