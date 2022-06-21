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

    mockAngularFireDatabase.list<IQuiz>('quizzes').valueChanges().subscribe((quizzes: IQuiz[]) => {
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

    mockAngularFireDatabase.list<IQuizTheme>('quiz_themes').valueChanges().subscribe((quizThemes: IQuizTheme[]) => {
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

    mockAngularFireDatabase.object<IQuiz>(`quizzes/1`).valueChanges().subscribe((quiz: IQuiz | null) => {
      quiz ? expect(quiz).toEqual(mockQuizzes[1]) : expect(quiz).toEqual(null);
      done();
    });
  });


  // it('should retrieve quiz by id from db', (done: DoneFn) => {
  //   mockQuizzesApiService.getQuizById.and.returnValue(Promise.resolve(dummyQuizzes[0]));
  //   mockQuizzesApiService.getQuizById(1).then((quiz: IQuiz) => {
  //     expect(quiz).toEqual(dummyQuizzes[0]);
  //     done();
  //   })
  // });

  // it('should retrieve quizzes results from db', (done: DoneFn) => {
  //   mockQuizzesApiService.getAllPassedQuizzes.and.returnValue(Promise.resolve(dummyQuizResults));
  //   mockQuizzesApiService.getAllPassedQuizzes().then((quizResults: IQuizResult[]) => {
  //     expect(quizResults.length).toBe(3);
  //     expect(quizResults).toEqual(dummyQuizResults);
  //     done();
  //   })
  // });

  // it('should retrieve quiz answers by id from db', (done: DoneFn) => {
  //   mockQuizzesApiService.getQuizAnswersById.and.returnValue(Promise.resolve(dummyQuizResults[1]));
  //   mockQuizzesApiService.getQuizAnswersById(1).then((quizResult: IQuizResult | null) => {
  //     if (quizResult) {
  //       expect(quizResult).toEqual(dummyQuizResults[1]);
  //     } else {
  //       expect(quizResult).toEqual(null);
  //     }
  //     done();
  //   })
  // });

});
