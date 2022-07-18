import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Environment, LocalStorage } from 'src/utils';

@Injectable()
export class LocalStorageServer {

  private readonly storage: Storage = new LocalStorage();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const env = new Environment(this.platformId);
    if (env.isBrowser) {
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

  public clear() {
    this.storage.clear();
  }

}
