import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlatformService,
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    });
    service = TestBed.inject(PlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check browser mode', () => {
    expect(service.isBrowser).toBeTruthy();
  });

  it('should check server mode', () => {
    expect(service.isServer).toBeFalsy();
  });
});
