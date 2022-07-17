import { TestBed } from '@angular/core/testing';

import { LocalStorageServer } from './local-storage.server';


describe('LocalStorageServer', () => {
  let service: LocalStorageServer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageServer]
    });
    service = TestBed.inject(LocalStorageServer);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

});
