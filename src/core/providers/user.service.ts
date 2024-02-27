import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {
  get hasId(): boolean {
    return this.localStorageService.has('uuid');
  }

  get id(): string | null {
    return this.localStorageService.get('uuid');
  }

  constructor(private localStorageService: LocalStorageService) {}

  generateId(): void {
    this.localStorageService.set('uuid', uuidv4());
  }
}
