import { Injectable } from '@angular/core';

import { mockId } from '@a-tests/consts/test-consts';

@Injectable()
export class MockLocalStorageService {
  get(_key: string): string | null {
    return mockId;
  }

  has(_key: string): boolean {
    return false;
  }

  set(_key: string, _value: string): void {}
}
