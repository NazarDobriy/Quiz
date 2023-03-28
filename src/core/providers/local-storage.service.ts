import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  public clear(): void {
    localStorage.clear();
  }

  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
