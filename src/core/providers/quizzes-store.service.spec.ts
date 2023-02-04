import { TestBed } from '@angular/core/testing';

import { QuizzesStoreService } from './quizzes-store.service';

describe('QuizzesStoreService', () => {
  let service: QuizzesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzesStoreService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
