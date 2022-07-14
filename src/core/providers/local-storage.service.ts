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

  private storage: Storage = localStorage;

  constructor() {
    AppComponent.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

}
