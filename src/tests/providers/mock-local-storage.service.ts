import { Injectable } from '@angular/core';

import { mockId } from '@a-tests/consts/test-consts';

@Injectable()
export class MockLocalStorageService {
  public get(_key: string): string | null {
    return mockId;
  }

  public has(_key: string): boolean {
    return false;
  }

  public set(_key: string, _value: string): void {}
}
