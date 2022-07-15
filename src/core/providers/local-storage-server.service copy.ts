import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  public clear(): void {}
  public getItem(key: string): string | null { return null; }
  public key(index: number): string | null { return null; }
  public removeItem(key: string): void {}
  public setItem(key: string, value: string): void {}
}

@Injectable()
export class LocalStorageServerService {

  private isBrowser: boolean = false;
  private readonly storage: Storage = new LocalStorage();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.storage = localStorage;
    }
  }

  public get(key: string): string | null {
    return this.storage.getItem(key);
  }

  public has(key: string): boolean {
    return !!this.storage.getItem(key);
  }

  public set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public remove(key: string): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }

}
