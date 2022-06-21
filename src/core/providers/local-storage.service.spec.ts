import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    localStorage.setItem('name', 'John');
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get value by key', () => {
    const value: string | null = service.get('name');
    value ? expect(value).toEqual('John') : expect(value).toEqual(null);
  });

  it('should check value by key', () => {
    expect(service.has('name')).toBeTruthy();
  });

  it('should set value by key', () => {
    service.set('name', 'Nazar');
    expect(localStorage.getItem('name')).toEqual('Nazar');
  });

  it('should remove value by key', () => {
    service.remove('name');
    expect(localStorage.getItem('name')).toEqual(null);
  });

  it('should clear storage', () => {
    service.clear();
    expect(localStorage.length).toBe(0);
  });
  
});
