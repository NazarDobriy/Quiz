import { Injectable } from '@angular/core';

import { PlatformService } from './platform.service';
import { LocalStorage } from '@a-utils/index';

@Injectable()
export class LocalStorageServer {

  private readonly storage = new LocalStorage();

  constructor(private platformService: PlatformService) {
    if (this.platformService.isBrowser) {
      this.storage = localStorage;
    }
  }

  clear(): void {
    this.storage.clear();
  }

  get(key: string): string | null {
    return this.storage.getItem(key);
  }

  has(key: string): boolean {
    return !!this.storage.getItem(key);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

}
