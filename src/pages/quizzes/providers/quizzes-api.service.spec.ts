import { TestBed } from '@angular/core/testing';

import { QuizzesApiService } from './quizzes-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IQuiz, IQuizResult } from './quiz.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UserService } from 'src/core/providers/user.service';
import { LocalStorageService } from 'src/core/providers/local-storage.service';
import { IQuizTheme } from './theme.service';

describe('ApiService', () => {
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;
  let mockAngularFireDatabase: jasmine.SpyObj<AngularFireDatabase>;

  let dummyQuizzes: IQuiz[] = [
    {
      id: 1,
      title: 'Music is the best',
      subtitle: 'Music questions',
      group: 'bang',
      questions: []
    },
    {
      id: 2,
      title: 'Nature is a part of life',
      subtitle: 'Nature questions',
      group: 'animals',
      questions: []
    }
  ];

  let dummyQuizThemes: IQuizTheme[] = [
    {
      titleTextClass: 'text-primary',
      primaryTextClass: 'text-bright',
      secondaryTextClass: 'text-primary',
      secondaryActiveTextClass: 'text-bright',
      numberTextClass: 'text-primary',
      numberBackgroundClass: 'bg-warning',
      backgroundClass: 'bg-success',
      btnsBackgroundClass: 'bg-accent',
      btnsTextClass: 'text-bright',
      radioButtonColor: 'accent-error',
      iconSrc: 'assets/img/Mili.svg',
      personName: 'Mili'
    },
    {
      titleTextClass: 'text-secondary',
      primaryTextClass: 'text-bright',
      secondaryTextClass: 'text-primary',
      secondaryActiveTextClass: 'text-bright',
      numberTextClass: 'text-primary',
      numberBackgroundClass: 'bg-warning',
      backgroundClass: 'bg-accent',
      btnsBackgroundClass: 'bg-error',
      btnsTextClass: 'text-bright',
      radioButtonColor: 'accent-error',
      iconSrc: 'assets/img/Steven.svg',
      personName: 'Steven'
    },
    {
      titleTextClass: 'text-primary',
      primaryTextClass: 'text-bright',
      secondaryTextClass: 'text-primary',
      secondaryActiveTextClass: 'text-bright',
      numberTextClass: 'text-primary',
      numberBackgroundClass: 'bg-warning',
      backgroundClass: 'bg-error',
      btnsBackgroundClass: 'bg-accent',
      btnsTextClass: 'text-bright',
      radioButtonColor: 'accent-accent',
      iconSrc: 'assets/img/Meg.svg',
      personName: 'Meg'
    }
  ];

  let dummyQuizResults: IQuizResult[] = [
    {
      answers: ['1', '3', '3', '0', '1', '2', '1', '0', '2', '3'],
      correct: 2,
      seconds: 12
    },
    {
      answers: ['1', '2', '3', '1', '1', '3', '1', '0', '2', '1'],
      correct: 4,
      seconds: 48
    },
    {
      answers: ['0', '0', '3', '1', '1', '0', '1', '0', '3', '2'],
      correct: 7,
      seconds: 248
    }
  ];

  beforeEach(() => {
    mockQuizzesApiService = jasmine.createSpyObj([
      'getAllQuizzes',
      'getAllQuizThemes',
      'getQuizById',
      'getQuizAnswersById',
      'getAllPassedQuizzes'
    ]);

    mockAngularFireDatabase = jasmine.createSpyObj(['']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        LocalStorageService,
        {
          provide: QuizzesApiService,
          useValue: mockQuizzesApiService
        },
        {
          provide: AngularFireDatabase,
          useValue: mockAngularFireDatabase
        }
      ]
    });
  });

  it('should be created', () => {
    expect(mockQuizzesApiService).toBeTruthy();
  });

  it('should retrieve quizzes from db', (done: DoneFn) => {
    mockQuizzesApiService.getAllQuizzes.and.returnValue(Promise.resolve(dummyQuizzes));
    mockQuizzesApiService.getAllQuizzes().then((quizzes: IQuiz[]) => {
      expect(quizzes.length).toBe(2);
      expect(quizzes).toEqual(dummyQuizzes);
      done();
    })
  });

  it('should retrieve quiz themes from db', (done: DoneFn) => {
    mockQuizzesApiService.getAllQuizThemes.and.returnValue(Promise.resolve(dummyQuizThemes));
    mockQuizzesApiService.getAllQuizThemes().then((quizThemes: IQuizTheme[]) => {
      expect(quizThemes.length).toBe(3);
      expect(quizThemes).toEqual(dummyQuizThemes);
      done();
    })
  });

  it('should retrieve quiz by id from db', (done: DoneFn) => {
    mockQuizzesApiService.getQuizById.and.returnValue(Promise.resolve(dummyQuizzes[0]));
    mockQuizzesApiService.getQuizById(1).then((quiz: IQuiz) => {
      expect(quiz).toEqual(dummyQuizzes[0]);
      done();
    })
  });

  it('should retrieve quizzes results from db', (done: DoneFn) => {
    mockQuizzesApiService.getAllPassedQuizzes.and.returnValue(Promise.resolve(dummyQuizResults));
    mockQuizzesApiService.getAllPassedQuizzes().then((quizResults: IQuizResult[]) => {
      expect(quizResults.length).toBe(3);
      expect(quizResults).toEqual(dummyQuizResults);
      done();
    })
  });

  it('should retrieve quiz answers by id from db', (done: DoneFn) => {
    mockQuizzesApiService.getQuizAnswersById.and.returnValue(Promise.resolve(dummyQuizResults[1]));
    mockQuizzesApiService.getQuizAnswersById(1).then((quizResult: IQuizResult | null) => {
      if (quizResult) {
        expect(quizResult).toEqual(dummyQuizResults[1]);
      } else {
        expect(quizResult).toEqual(null);
      }
      done();
    })
  });

});
