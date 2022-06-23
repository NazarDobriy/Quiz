import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { mockQuizResults, mockQuizzes } from 'src/mock-data';
import { Duration } from 'src/models/duration';
import { ScoreComponent } from '../pages/active/components/score/score.component';

import { IQuiz, IQuizResult, QuizService } from './quiz.service';
import { QuizzesApiService } from './quizzes-api.service';

describe('QuizService', () => {
  let duration: Duration;
  const id: number = 1, index: number = 0;
  const start: Date = new Date(), end: Date = new Date();

  let service: QuizService;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;

  beforeEach(() => {
    mockQuizzesApiService = jasmine.createSpyObj([
      'getAllQuizzes',
      'getAllPassedQuizzes',
      'getQuizById',
      'getQuizAnswersById',
      'setQuizAnswers',
    ]);
    mockRouter = jasmine.createSpyObj(['navigateByUrl']);

    end.setMinutes(start.getMinutes() + 45);
    duration = new Duration(start, end);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: 'quizzes/active/:id/score', component: ScoreComponent }]
        )
      ],
      providers: [
        QuizService,
        {
          provide: QuizzesApiService,
          useValue: mockQuizzesApiService
        },
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    });
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get quizzes', (done: DoneFn) => {
    mockQuizzesApiService.getAllQuizzes.and.returnValue(Promise.resolve(mockQuizzes));
    service.getQuizzes().then((quizzes: IQuiz[]) => {
      expect(quizzes).toEqual(mockQuizzes);
      expect(quizzes.length).toBe(mockQuizzes.length);
      done();
    });
  });

  it('should get only passed quizzes', (done: DoneFn) => {
    mockQuizzesApiService.getAllPassedQuizzes.and.returnValue(Promise.resolve(mockQuizResults));
    service.getPassedQuizzes().then((quizResults: IQuizResult[]) => {
      expect(quizResults).toEqual(mockQuizResults);
      expect(quizResults.length).toBe(mockQuizResults.length);
      done();
    });
  });

  it('should get quiz by id', (done: DoneFn) => {
    mockQuizzesApiService.getQuizById.and.returnValue(Promise.resolve(mockQuizzes[index]));
    service.getQuizById(id).then((quiz: IQuiz) => {
      expect(quiz.id).toBe(id);
      expect(quiz).toEqual(mockQuizzes[index]);
      done();
    });
  });

  it('should get quiz answers by id', (done: DoneFn) => {
    mockQuizzesApiService.getQuizAnswersById.and.returnValue(Promise.resolve(mockQuizResults[id]));
    service.getQuizAnswersById(id).then((quizResult: IQuizResult | null) => {
      expect(quizResult).toEqual(mockQuizResults[id]);
      done();
    });
  });

  it('should finish quiz check completed', () => {
    service.finishQuiz(mockQuizzes[0], mockQuizResults[0].answers, duration);
    expect(service.completed).toBeTruthy();
  });

  it('should call setQuizAnswers with correct params after quiz finish', () => {
    const correctAnswers: number = service.calcQuizResult(
      mockQuizzes[0],
      mockQuizResults[0].answers
    );

    service.finishQuiz(mockQuizzes[0], mockQuizResults[0].answers, duration);

    expect(mockQuizzesApiService.setQuizAnswers).toHaveBeenCalled();
    expect(mockQuizzesApiService.setQuizAnswers).toHaveBeenCalledWith(
      mockQuizzes[0].id,
      mockQuizResults[0].answers,
      correctAnswers,
      duration
    );
  });

  it('should check router redirection after finish quiz', () => {
    service.finishQuiz(mockQuizzes[0], mockQuizResults[0].answers, duration);
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(`/quizzes/active/${mockQuizzes[0].id}/score`);
  });

  it('should calculate quiz result', () => {
    const correctAnswers: number = service.calcQuizResult(
      mockQuizzes[0],
      mockQuizResults[0].answers
    );
    expect(correctAnswers).toBe(1);
  });
});
