import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  let itemKey: string = 'name';
  let itemValue: string = 'John';

  beforeEach(() => {
    localStorage.setItem(itemKey, itemValue);
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject(LocalStorageService);
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
    service.set(itemKey, 'Tom');
    expect(localStorage.getItem(itemKey)).toEqual('Tom');
  });

});
