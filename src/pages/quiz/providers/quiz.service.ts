import { Injectable } from '@angular/core';

export interface CardTheme {
  titleClass: string;
  subtitleClass: string;
  iconSrc: string;
  backgroudClass: string;
}

export interface SimpleQuiz {
  id: number;
  title: string;
  subtitle: string;
}

export interface IQuestion {
  name: string;
  listAnswers: string[];
  correctAnswer: string;
}

export interface IQuiz extends SimpleQuiz {
  name: string;
  listQuestions: IQuestion[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public historicalQuestions: IQuestion[] = [
    {
      name: 'When the city of Lviv received the Magdeburg Law?',
      listAnswers: [
        '1256',
        '1356',
        '1288',
        '1367'
      ],
      correctAnswer: '1356'
    },
    {
      name: 'When hetman Petro Sagaidachny made a military campaign to the city of Kafa?',
      listAnswers: [
        '1607',
        '1588',
        '1616',
        '1618'
      ],
      correctAnswer: '1616'
    },
    {
      name: 'Who led the national leberation war against the Commonwealth?',
      listAnswers: [
        'Bogdan Khmelnitsky',
        'Petro Sagaidachny',
        'Ivan Mazapa',
        'Yurii Khmelnitsky'
      ],
      correctAnswer: 'Bogdan Khmelnitsky'
    },
    {
      name: 'When the national leberation war against the Commonwealth began?',
      listAnswers: [
        '1635',
        '1650',
        '1648',
        '1655'
      ],
      correctAnswer: '1648'
    },
    {
      name: 'When World War I began?',
      listAnswers: [
        '1915',
        '1938',
        '1939',
        '1914'
      ],
      correctAnswer: '1914'
    },
    {
      name: 'Who headed Central Council of Ukraine?',
      listAnswers: [
        'Pavlo Skoropadsky',
        'Mykola Hrushevsky',
        'Ivan Franko',
        'Taras Shevchenko'
      ],
      correctAnswer: 'Mykola Hrushevsky'
    },
    {
      name: 'When the industrialization started?',
      listAnswers: [
        '1930',
        '1925',
        '1940',
        '1927'
      ],
      correctAnswer: '1925'
    },
    {
      name: 'When independence was proclaimed in Ukraine?',
      listAnswers: [
        '1991',
        '1990',
        '1940',
        '1927'
      ],
      correctAnswer: '1991'
    },
    {
      name: 'Who became the first president of Ukraine?',
      listAnswers: [
        'Leonid Kravchuk',
        'Leonid Kuchma',
        'Petro Poroshenko',
        'Volodymyr Zelenskyy'
      ],
      correctAnswer: 'Leonid Kravchuk'
    },
    {
      name: 'When the Budapest Memorandum was signed?',
      listAnswers: [
        '1990',
        '2000',
        '1994',
        '1995'
      ],
      correctAnswer: '1994'
    }
  ];

  public quizCards: IQuiz[] = [
    {
      id: 1,
      title: '10 Qusstions',
      subtitle: 'Emoji Bands Quiz!',
      name: 'History',
      listQuestions: this.historicalQuestions
    },
    {
      id: 2,
      title: '10 Qusstions',
      subtitle: 'Easter Emoji Quiz: Can You Get 100 Percent?',
      name: 'History',
      listQuestions: this.historicalQuestions
    },
    {
      id: 3,
      title: '10 Qusstions',
      subtitle: 'London Underground & Tube Station Emoji Quiz',
      name: 'History',
      listQuestions: this.historicalQuestions
    },
    {
      id: 4,
      title: '10 Qusstions',
      subtitle: 'Trivia Quiz: Guess The WWE Star From The Emoji!',
      name: 'History',
      listQuestions: this.historicalQuestions
    },
    {
      id: 5,
      title: '10 Qusstions',
      subtitle: 'What Emoji Am I? Quiz',
      name: 'History',
      listQuestions: this.historicalQuestions
    }
  ];

  public cardThemes: CardTheme[] = [
    {
      titleClass: 'text-primary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Mili.svg',
      backgroudClass: 'bg-success'
    },
    {
      titleClass: 'text-primary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Meg.svg',
      backgroudClass: 'bg-error'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-bright',
      iconSrc: 'assets/img/Steven.svg',
      backgroudClass: 'bg-accent'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-primary',
      iconSrc: 'assets/img/Mili.svg',
      backgroudClass: 'bg-bright'
    },
    {
      titleClass: 'text-secondary',
      subtitleClass: 'text-primary',
      iconSrc: 'assets/img/Steven.svg',
      backgroudClass: 'bg-warning'
    }
  ];

  constructor() { }

  public getQuizzes(): SimpleQuiz[] {
    return this.quizCards;
  }

}
