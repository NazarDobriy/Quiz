import { TestBed } from '@angular/core/testing';

import { ScoreGuardService } from './score-guard.service';
import { QuizStoreService } from '@a-core/providers/quiz-store.service';

describe('ScoreGuardService', () => {
  let service: ScoreGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ScoreGuardService,
        { provide: QuizStoreService, useValue: {} }
      ]
    });
    service = TestBed.inject(ScoreGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
