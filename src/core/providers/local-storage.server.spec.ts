import { TestBed } from '@angular/core/testing';

import { LocalStorageServer } from './local-storage.server';
import { PlatformService } from './platform.service';


describe('LocalStorageServer', () => {
  let service: LocalStorageServer;

  const mockPlatformService = {
    get isBrowser(): boolean {
      return false;
    }
  };

  let itemKey: string = 'car';
  let itemValue: string = 'Ford';

  beforeEach(() => {
    localStorage.setItem(itemKey, itemValue);
    spyOnProperty(mockPlatformService, 'isBrowser', 'get').and.returnValue(true);

    TestBed.configureTestingModule({
      providers: [
        LocalStorageServer,
        {
          provide: PlatformService,
          useValue: mockPlatformService
        }
      ]
    });
    service = TestBed.inject(LocalStorageServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get value by key', () => {
    expect(service.get(itemKey)).toEqual(itemValue);
  });

  it('should check get key after delete', () => {
    localStorage.removeItem(itemKey);
    expect(service.get(itemKey)).toEqual(null);
  });

  it('should check value by key', () => {
    expect(service.has(itemKey)).toBeTruthy();
  });

  it('should set value by key', () => {
    service.set(itemKey, 'Tesla');
    expect(localStorage.getItem(itemKey)).toEqual('Tesla');
  });

  it('should remove value by key', () => {
    service.remove(itemKey);
    expect(localStorage.getItem(itemKey)).toEqual(null);
  });

  it('should clear storage', () => {
    service.clear();
    expect(localStorage.length).toBe(0);
  });

});
