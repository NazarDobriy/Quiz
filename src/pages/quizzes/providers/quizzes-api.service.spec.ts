import { TestBed } from '@angular/core/testing';

import { QuizzesApiService } from './quizzes-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IQuiz, IQuizResult } from './quiz.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { UserService } from 'src/core/providers/user.service';
import { LocalStorageService } from 'src/core/providers/local-storage.service';
import { IQuizTheme } from './theme.service';
import { Observable, of } from 'rxjs';
import { mockQuizResults, mockQuizThemes, mockQuizzes } from 'src/mock-data';

describe('ApiService', () => {
  let service: QuizzesApiService;
  let mockAngularFireDatabase: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    mockAngularFireDatabase = jasmine.createSpyObj(['list', 'object']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        QuizzesApiService,
        LocalStorageService,
        {
          provide: AngularFireDatabase,
          useValue: mockAngularFireDatabase
        }
      ]
    });
    service = TestBed.inject(QuizzesApiService);
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
      expect(quiz.id).toEqual(mockQuizzes[index].id);
      done();
    });
  });

  it('should retrieve quizzes results from db', (done: DoneFn) => {
    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuizResult[]> {
        return of(mockQuizResults);
      }
    } as AngularFireList<IQuizResult>);

    service.getAllPassedQuizzes().then((quizResults: IQuizResult[]) => {
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

    service.getQuizAnswersById(id).then((quizResult: IQuizResult | null) => {
      expect(quizResult).toEqual(mockQuizResults[id]);
      done();
    });
  });

});