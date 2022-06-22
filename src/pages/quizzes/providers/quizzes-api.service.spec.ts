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
    mockAngularFireDatabase.object.and.returnValue({
      valueChanges(): Observable<IQuiz> {
        return of(mockQuizzes[1]);
      }
    } as AngularFireObject<IQuiz>);

    mockAngularFireDatabase.object<IQuiz>('quizzes/1').valueChanges().subscribe((quiz: IQuiz | null) => {
      quiz ? expect(quiz).toEqual(mockQuizzes[1]) : expect(quiz).toEqual(null);
      done();
    });
  });

  it('should retrieve quizzes results from db', (done: DoneFn) => {
    mockAngularFireDatabase.list.and.returnValue({
      valueChanges(): Observable<IQuizResult[]> {
        return of(mockQuizResults);
      }
    } as AngularFireList<IQuizResult>);

    mockAngularFireDatabase.list<IQuizResult>('quiz_answers').valueChanges().subscribe((quizResults: IQuizResult[]) => {
      expect(quizResults).toEqual(mockQuizResults);
      expect(quizResults.length).toBe(mockQuizResults.length);
      done();
    });
  });

  it('should retrieve quiz answers by id from db', (done: DoneFn) => {
    mockAngularFireDatabase.object.and.returnValue({
      valueChanges(): Observable<IQuizResult> {
        return of(mockQuizResults[0]);
      }
    } as AngularFireObject<IQuizResult>);

    mockAngularFireDatabase.object<IQuizResult>('quiz_answers/0').valueChanges().subscribe((quizResult: IQuizResult | null) => {
      quizResult ? expect(quizResult).toEqual(mockQuizResults[0]) : expect(quizResult).toEqual(null);
      done();
    });
  });

});
