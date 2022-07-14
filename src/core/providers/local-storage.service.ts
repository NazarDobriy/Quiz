import { Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

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
export class LocalStorageService {

  private storage: Storage = new LocalStorage();

  constructor() {
    AppComponent.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
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
