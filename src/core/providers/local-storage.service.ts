import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

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
