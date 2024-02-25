import { Injectable } from '@angular/core';

import { mockId } from '@a-tests/consts/test-consts';

@Injectable()
export class MockUserService {
  get id(): string | null {
    return mockId;
  }

  get hasId(): boolean {
    return false;
  }

  generateId(): void {}
}
