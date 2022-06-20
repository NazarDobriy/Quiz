import { TestBed } from '@angular/core/testing';

import { QuizzesApiService } from './quizzes-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IQuiz, IQuizResult } from './quiz.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { UserService } from 'src/core/providers/user.service';
import { LocalStorageService } from 'src/core/providers/local-storage.service';
import { IQuizTheme } from './theme.service';

describe('ApiService', () => {
  let service: QuizzesApiService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [
        QuizzesApiService,
        AngularFireDatabase,
        UserService,
        LocalStorageService
      ]
    });
    service = TestBed.inject(QuizzesApiService);
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve quizzes from db', (done: DoneFn) => {
    const dummyQuizzes: IQuiz[] = [
      {
        "id": 1,
        "title": "10 Questions",
        "subtitle": "Emoji Bands",
        "group": "historical",
        "questions": []
      },
      {
        "id": 2,
        "title": "10 Questions",
        "subtitle": "Easter Emoji Quiz: Can You Get 100 Percent?",
        "group": "mathematical",
        "questions": []
      },
      {
        "id": 3,
        "title": "10 Questions",
        "subtitle": "London Underground & Tube Station Emoji",
        "group": "historical",
        "questions": []
      },
      {
        "id": 4,
        "title": "10 Questions",
        "subtitle": "Trivia Quiz: Guess The WWE Star From The Emoji!",
        "group": "historical",
        "questions": []
      },
      {
        "id": 5,
        "title": "10 Questions",
        "subtitle": "What Emoji Am I?",
        "group": "mathematical",
        "questions": []
      }
    ];

    service.getAllQuizzes().then((quizzes: IQuiz[]) => {

      for (const quiz of quizzes) {
        quiz.questions = [];
      }

      expect(quizzes.length).toBe(5);
      expect(quizzes).toEqual(dummyQuizzes);
      done();
    });
  });

  it('should retrieve quiz themes from db', (done: DoneFn) => {
    const dummyQuizThemes: IQuizTheme[] = [
      {
        "titleTextClass": "text-primary",
        "primaryTextClass": "text-bright",
        "secondaryTextClass": "text-primary",
        "secondaryActiveTextClass": "text-bright",
        "numberTextClass": "text-primary",
        "numberBackgroundClass": "bg-warning",
        "backgroundClass": "bg-success",
        "btnsBackgroundClass": "bg-accent",
        "btnsTextClass": "text-bright",
        "radioButtonColor": "accent-error",
        "iconSrc": "assets/img/Mili.svg",
        "personName": "Mili"
      },
      {
        "titleTextClass": "text-primary",
        "primaryTextClass": "text-bright",
        "secondaryTextClass": "text-primary",
        "secondaryActiveTextClass": "text-bright",
        "numberTextClass": "text-primary",
        "numberBackgroundClass": "bg-warning",
        "backgroundClass": "bg-error",
        "btnsBackgroundClass": "bg-accent",
        "btnsTextClass": "text-bright",
        "radioButtonColor": "accent-accent",
        "iconSrc": "assets/img/Meg.svg",
        "personName": "Meg"
      },
      {
        "titleTextClass": "text-secondary",
        "primaryTextClass": "text-bright",
        "secondaryTextClass": "text-primary",
        "secondaryActiveTextClass": "text-bright",
        "numberTextClass": "text-primary",
        "numberBackgroundClass": "bg-warning",
        "backgroundClass": "bg-accent",
        "btnsBackgroundClass": "bg-error",
        "btnsTextClass": "text-bright",
        "radioButtonColor": "accent-error",
        "iconSrc": "assets/img/Steven.svg",
        "personName": "Steven"
      },
      {
        "titleTextClass": "text-secondary",
        "primaryTextClass": "text-primary",
        "secondaryTextClass": "text-primary",
        "secondaryActiveTextClass": "text-bright",
        "numberTextClass": "text-primary",
        "numberBackgroundClass": "bg-warning",
        "backgroundClass": "bg-bright",
        "btnsBackgroundClass": "bg-error",
        "btnsTextClass": "text-bright",
        "radioButtonColor": "accent-error",
        "iconSrc": "assets/img/Mili.svg",
        "personName": "Mili"
      },
      {
        "titleTextClass": "text-secondary",
        "primaryTextClass": "text-primary",
        "secondaryTextClass": "text-primary",
        "secondaryActiveTextClass": "text-accent",
        "numberTextClass": "text-bright",
        "numberBackgroundClass": "bg-error",
        "backgroundClass": "bg-warning",
        "btnsBackgroundClass": "bg-accent",
        "btnsTextClass": "text-primary",
        "radioButtonColor": "accent-error",
        "iconSrc": "assets/img/Steven.svg",
        "personName": "Steven"
      }
    ];

    service.getAllQuizThemes().then((quizThemes: IQuizTheme[]) => {
      expect(quizThemes.length).toBe(5);
      expect(quizThemes).toEqual(dummyQuizThemes);
      done();
    });
  });

  it('should retrieve quiz by id from db', (done: DoneFn) => {
    const dummyQuiz: IQuiz = {
      "id": 2,
      "title": "10 Questions",
      "subtitle": "Easter Emoji Quiz: Can You Get 100 Percent?",
      "group": "mathematical",
      "questions": []
    };

    service.getQuizById(2).then((quiz: IQuiz) => {
      quiz.questions = [];
      expect(quiz).toEqual(dummyQuiz);
      done();
    });
  });

  it('should retrieve quiz answers by id from db', (done: DoneFn) => {
    userService.generateId();

    const dummyQuizResult: IQuizResult = {
      answers: ['2', '1', '2', '1', '2', '1', '2', '3', '1', '2'],
      correct: 3,
      seconds: 12
    };

    service.setQuizAnswers(
      4,
      dummyQuizResult.answers,
      dummyQuizResult.correct,
      dummyQuizResult.seconds
    );

    service.getQuizAnswersById(4).then((quizResult: IQuizResult | null) => {
      if (quizResult) {
        expect(quizResult).toEqual(dummyQuizResult);
      } else {
        expect(quizResult).toEqual(null);
      }
      done();
    });
  });

  it('should retrieve passed quizzes from db', (done: DoneFn) => {
    userService.generateId();

    const dummyPassedQuizzes: IQuizResult[] = [
      {
        answers: ['2', '1', '2', '3', '1', '2', '1', '0', '2', '2'],
        correct: 3,
        seconds: 11
      },
      {
        answers: ['2', '1', '2', '1', '2', '1', '2', '3', '1', '2'],
        correct: 3,
        seconds: 12
      }
    ];

    for (let i = 0; i < dummyPassedQuizzes.length; i++) {
      service.setQuizAnswers(
        i + 1,
        dummyPassedQuizzes[i].answers,
        dummyPassedQuizzes[i].correct,
        dummyPassedQuizzes[i].seconds
      );
    }

    service.getAllPassedQuizzes().then((passedQuizzes: IQuizResult[]) => {
      expect(passedQuizzes.length).toBe(2);
      expect(passedQuizzes).toEqual(dummyPassedQuizzes);
      done();
    });
  });
});
