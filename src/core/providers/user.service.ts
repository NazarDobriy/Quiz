import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService) { }

  get id(): string | null {
    return this.localStorageService.get("uuid");
  }

  get hasId(): boolean {
    return this.localStorageService.has("uuid");
  }

  public generateId(): void {
    this.localStorageService.set("uuid", uuidv4());
  }

}
