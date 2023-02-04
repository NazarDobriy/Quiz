import { TestBed } from '@angular/core/testing';

import { QuizStoreService } from './quiz-store.service';

describe('QuizStoreService', () => {
  let service: QuizStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizStoreService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
