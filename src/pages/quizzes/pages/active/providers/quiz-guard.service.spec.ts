import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { QuizGuardService } from './quiz-guard.service';
import { QuizService } from '@a-pages/quizzes/providers/quiz.service';
import { MockQuizService } from '@a-tests/providers/mock-quiz.service';

describe('QuizGuardService', () => {
  let service: QuizGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizGuardService,
        { provide: DialogService, useValue: {} },
        { provide: QuizService, useClass: MockQuizService },
      ],
    });
    service = TestBed.inject(QuizGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
