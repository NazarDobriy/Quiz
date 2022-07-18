import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
