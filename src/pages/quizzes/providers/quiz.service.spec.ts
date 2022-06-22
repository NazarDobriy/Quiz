import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mockQuizResults, mockQuizzes } from 'src/mock-data';
import { Duration } from 'src/models/duration';
import { ScoreComponent } from '../pages/active/components/score/score.component';

import { IQuiz, IQuizResult, QuizService } from './quiz.service';
import { QuizzesApiService } from './quizzes-api.service';

describe('QuizService', () => {
  const id: number = 1, index: number = 0;

  let service: QuizService;
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;

  beforeEach(() => {
    mockQuizzesApiService = jasmine.createSpyObj([
      'getAllQuizzes',
      'getAllPassedQuizzes',
      'getQuizById',
      'getQuizAnswersById',
      'setQuizAnswers',
    ]);
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

  it('should finish quiz', () => {
    const start: Date = new Date(), end: Date = new Date();
    end.setMinutes(start.getMinutes() + 45);
    const duration: Duration = new Duration(start, end);
    service.finishQuiz(mockQuizzes[0], mockQuizResults[0].answers, duration);
    expect(service.completed).toBeTruthy();
  });

  it('should calculate quiz result', () => {
    const correctAnswers = service.calcQuizResult(mockQuizzes[0], mockQuizResults[0].answers);
    expect(correctAnswers).toBe(3);
  });
});
