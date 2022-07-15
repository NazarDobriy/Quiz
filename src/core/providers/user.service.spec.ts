import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockLocalStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    mockLocalStorageService = jasmine.createSpyObj(['get', 'has', 'set']);

    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: LocalStorageService,
          useValue: mockLocalStorageService
        }
      ]
    });

    service = TestBed.inject(UserService);

    mockLocalStorageService.get.calls.reset();
    mockLocalStorageService.has.calls.reset();
    mockLocalStorageService.set.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get id', () => {
    const id: string = "f252a827174d";
    mockLocalStorageService.get.and.returnValue(id);
    expect(service.id).toEqual(id);
  });

  it('should check id', () => {
    mockLocalStorageService.has.and.returnValue(true);
    expect(service.hasId).toBeTruthy();
  });

  it('should set id', () => {
    service.generateId();
    expect(mockLocalStorageService.set).toHaveBeenCalled();
  });
});
