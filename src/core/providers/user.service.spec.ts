import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';
import { mockId } from '@a-tests/consts/test-consts';
import { MockLocalStorageService } from '@a-tests/providers/mock-local-storage.service';

describe('UserService', () => {
  let service: UserService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: LocalStorageService,
          useClass: MockLocalStorageService
        },
      ],
    });

    service = TestBed.inject(UserService);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get id', () => {
    expect(service.id).toEqual(mockId);
  });

  it('should check id', () => {
    expect(service.hasId).toBeFalsy();
  });

  it('should set id', () => {
    spyOn(localStorageService, 'set');
    service.generateId();
    expect(localStorageService.set).toHaveBeenCalled();
  });
});
