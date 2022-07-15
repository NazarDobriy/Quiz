import { TestBed } from '@angular/core/testing';

import { LocalStorageServerService } from './local-storage-server.service copy';

describe('LocalStorageService', () => {
  let service: LocalStorageServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageServerService]
    });
    service = TestBed.inject(LocalStorageServerService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

});
