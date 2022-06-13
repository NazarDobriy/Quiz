import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService) { }
}
