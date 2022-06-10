import { TestBed } from '@angular/core/testing';

import { QuizzesApiService } from './quizzes-api.service';

describe('ApiService', () => {
  let service: QuizzesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
