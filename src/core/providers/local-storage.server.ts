import { Injectable } from '@angular/core';
import { LocalStorage } from '@a-utils/index';
import { PlatformService } from './platform.service';

@Injectable()
export class LocalStorageServer {

  private readonly storage: Storage = new LocalStorage();

  constructor(private platformService: PlatformService) {
    if (this.platformService.isBrowser) {
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
