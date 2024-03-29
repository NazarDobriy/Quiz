import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';

import { QuizzesApiService } from './quizzes-api.service';
import { IQuizTheme } from '@a-pages/quizzes/types/theme.type';
import { IPaginationScheme, IQuiz, IQuizResult } from '@a-pages/quizzes/types/quiz.type';
import { UserService } from '@a-core/providers/user.service';
import { mockQuizzes, mockQuizThemes, mockQuizResults } from '@a-tests/consts/test-consts';
import { MockUserService } from '@a-tests/providers/mock-user.service';

describe('ApiService', () => {
  let service: QuizzesApiService;
  let mockAngularFireDatabase: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockAngularFireDatabase = jasmine.createSpyObj(['list', 'object']);

    TestBed.configureTestingModule({
      providers: [
        QuizzesApiService,
        { provide: UserService, useClass: MockUserService },
        { provide: AngularFireDatabase, useValue: mockAngularFireDatabase }
      ]
    });
    service = TestBed.inject(QuizzesApiService);

    mockAngularFireDatabase.list.calls.reset();
    mockAngularFireDatabase.object.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve quizzes from db', (done: DoneFn) => {
    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuiz[]> {
        return of(mockQuizzes);
      }
    } as AngularFireList<IQuiz>);

    service.getAllQuizzes().then((quizzes: IQuiz[]) => {
      expect(quizzes).toEqual(mockQuizzes);
      expect(quizzes.length).toBe(mockQuizzes.length);
      done();
    });
  });

  it('should retrieve paginated quizzes from db', (done: DoneFn) => {
    const offset: number = 2, count = 5;
    const mockQuizScheme: IPaginationScheme<IQuiz> = {
      count: 5,
      offset: 2,
      total: 15,
      data: mockQuizzes
    };

    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuiz[]> {
        return of(mockQuizzes);
      }
    } as AngularFireList<IQuiz>);

    service.getPaginatedQuizzes(offset, count).then((scheme: IPaginationScheme<IQuiz>) => {
      expect(scheme).toEqual(mockQuizScheme);
      expect(scheme.count).toEqual(mockQuizScheme.count);
      expect(scheme.offset).toEqual(mockQuizScheme.offset);
      expect(scheme.total).toEqual(mockQuizScheme.total);
      expect(scheme.data.length).toBe(mockQuizzes.length);
      expect(scheme.data).toBe(mockQuizzes);
      done();
    });
  });

  it('should retrieve quiz themes from db', (done: DoneFn) => {
    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuizTheme[]> {
        return of(mockQuizThemes);
      }
    } as AngularFireList<IQuizTheme>);

    service.getAllQuizThemes().then((quizThemes: IQuizTheme[]) => {
      expect(quizThemes).toEqual(mockQuizThemes);
      expect(quizThemes.length).toBe(mockQuizThemes.length);
      done();
    });
  });

  it('should retrieve quiz by id from db', (done: DoneFn) => {
    const id: number = 1, index: number = 0;

    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuiz[]> {
        return of(mockQuizzes);
      }
    } as AngularFireList<IQuiz>);

    service.getQuizById(id).then((quiz: IQuiz) => {
      expect(quiz.id).toBe(id);
      expect(quiz).toEqual(mockQuizzes[index]);
      done();
    });
  });

  it('should retrieve quizzes results from db', (done: DoneFn) => {
    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuizResult[]> {
        return of(mockQuizResults);
      }
    } as AngularFireList<IQuizResult>);

    service.getQuizzesResults().then((quizResults: IQuizResult[]) => {
      expect(quizResults).toEqual(mockQuizResults);
      expect(quizResults.length).toBe(mockQuizResults.length);
      done();
    });
  });

  it('should retrieve quiz answers by id from db', (done: DoneFn) => {
    const id: number = 0;

    mockAngularFireDatabase.object.and.returnValue({
      valueChanges(): Observable<IQuizResult> {
        return of(mockQuizResults[id]);
      }
    } as AngularFireObject<IQuizResult>);

    service.getQuizResultById(id).then((quizResult: IQuizResult | null) => {
      expect(quizResult).toEqual(mockQuizResults[id]);
      done();
    });
  });
});
