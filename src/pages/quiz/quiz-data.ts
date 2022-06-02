import { IQuizTheme } from "./providers/theme.service";
import { IDialogExit, IQuestion, IQuiz } from "./providers/quiz.service";

export const DIALOG_EXIT_DATA: IDialogExit = {
  title: "Leave",
  message: "Are you sure you want to exit and cancel the quiz? Your answers will not be saved.",
  textBack: "Back to quiz",
  textMainPage: "Go on main page"
};

export const QUIZ_THEMES: IQuizTheme[] = [
  {
    titleTextClass: 'text-primary',
    primaryTextClass: 'text-bright',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-bright',
    numberTextClass: 'text-primary',
    numberBackgroudClass: 'bg-warning',
    backgroudClass: 'bg-success',
    btnsBackgroudClass: 'bg-accent',
    btnsTextClass: 'text-bright',
    radioButtonColor: 'accent-error',
    iconSrc: 'assets/img/Mili.svg',
    personName: 'Mili'
  },
  {
    titleTextClass: 'text-primary',
    primaryTextClass: 'text-bright',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-bright',
    numberTextClass: 'text-primary',
    numberBackgroudClass: 'bg-warning',
    backgroudClass: 'bg-error',
    btnsBackgroudClass: 'bg-accent',
    btnsTextClass: 'text-bright',
    radioButtonColor: 'accent-accent',
    iconSrc: 'assets/img/Meg.svg',
    personName: 'Meg'
  },
  {
    titleTextClass: 'text-secondary',
    primaryTextClass: 'text-bright',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-bright',
    numberTextClass: 'text-primary',
    numberBackgroudClass: 'bg-warning',
    backgroudClass: 'bg-accent',
    btnsBackgroudClass: 'bg-error',
    btnsTextClass: 'text-bright',
    radioButtonColor: 'accent-error',
    iconSrc: 'assets/img/Steven.svg',
    personName: 'Steven'
  },
  {
    titleTextClass: 'text-secondary',
    primaryTextClass: 'text-primary',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-bright',
    numberTextClass: 'text-primary',
    numberBackgroudClass: 'bg-warning',
    backgroudClass: 'bg-bright',
    btnsBackgroudClass: 'bg-error',
    btnsTextClass: 'text-bright',
    radioButtonColor: 'accent-error',
    iconSrc: 'assets/img/Mili.svg',
    personName: 'Mili'
  },
  {
    titleTextClass: 'text-secondary',
    primaryTextClass: 'text-primary',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-accent',
    numberTextClass: 'text-bright',
    numberBackgroudClass: 'bg-error',
    backgroudClass: 'bg-warning',
    btnsBackgroudClass: 'bg-accent',
    btnsTextClass: 'text-primary',
    radioButtonColor: 'accent-error',
    iconSrc: 'assets/img/Steven.svg',
    personName: 'Steven'
  }
];

export const HISTORICAL_QUESTIONS: IQuestion[] = [
  {
    name: 'When the city of Lviv received the Magdeburg Law?',
    answers: [
      '1256',
      '1356',
      '1288',
      '1367'
    ],
    correctAnswer: '1356'
  },
  {
    name: 'When hetman Petro Sagaidachny made a military campaign to the city of Kafa?',
    answers: [
      '1607',
      '1588',
      '1616',
      '1618'
    ],
    correctAnswer: '1616'
  },
  {
    name: 'Who led the national leberation war against the Commonwealth?',
    answers: [
      'Bogdan Khmelnitsky',
      'Petro Sagaidachny',
      'Ivan Mazapa',
      'Yurii Khmelnitsky'
    ],
    correctAnswer: 'Bogdan Khmelnitsky'
  },
  {
    name: 'When the national leberation war against the Commonwealth began?',
    answers: [
      '1635',
      '1650',
      '1648',
      '1655'
    ],
    correctAnswer: '1648'
  },
  {
    name: 'When World War I began?',
    answers: [
      '1915',
      '1938',
      '1939',
      '1914'
    ],
    correctAnswer: '1914'
  },
  {
    name: 'Who headed Central Council of Ukraine?',
    answers: [
      'Pavlo Skoropadsky',
      'Mykola Hrushevsky',
      'Ivan Franko',
      'Taras Shevchenko'
    ],
    correctAnswer: 'Mykola Hrushevsky'
  },
  {
    name: 'When the industrialization started?',
    answers: [
      '1930',
      '1925',
      '1940',
      '1927'
    ],
    correctAnswer: '1925'
  },
  {
    name: 'When independence was proclaimed in Ukraine?',
    answers: [
      '1991',
      '1990',
      '1940',
      '1927'
    ],
    correctAnswer: '1991'
  },
  {
    name: 'Who became the first president of Ukraine?',
    answers: [
      'Leonid Kravchuk',
      'Leonid Kuchma',
      'Petro Poroshenko',
      'Volodymyr Zelenskyy'
    ],
    correctAnswer: 'Leonid Kravchuk'
  },
  {
    name: 'When the Budapest Memorandum was signed?',
    answers: [
      '1990',
      '2000',
      '1994',
      '1995'
    ],
    correctAnswer: '1994'
  }
];

export const MATHEMATICAL_QUESTIONS: IQuestion[] = [
  {
    name: 'Simplify the expression 0.8b^9 : 8b^3, where b not = 0',
    answers: [
      '0.1b^6',
      '10b^6',
      '0.1b^3',
      '10b^3'
    ],
    correctAnswer: '0.1b^6'
  },
  {
    name: 'Solve the equation: (x + 1) * (2x - 3) = 0',
    answers: [
      '-3; 1',
      '-1.5; 1',
      '-1; 3',
      '-1; 1.5'
    ],
    correctAnswer: '-1; 1.5'
  },
  {
    name: 'Which of the following numbers is the solution of the inequality |x| > 3?',
    answers: [
      '3',
      '1',
      '-8',
      '-3'
    ],
    correctAnswer: '-8'
  },
  {
    name: 'Simplify the expression (1 - sin^2(a) * tg^2(a))',
    answers: [
      'sin(2a)',
      'cos(2a)',
      'sin^2(a)',
      'ctg^2(a)'
    ],
    correctAnswer: 'sin^2(a)'
  },
  {
    name: 'Reduce the fraction (a^2 - b^2) / (a^2 - a * b)',
    answers: [
      '(a + b) / a',
      '(a - b) / a',
      'b / a',
      'b'
    ],
    correctAnswer: '(a + b) / a'
  },
  {
    name: 'Which of the following intervals belongs to the number log2(1/3)',
    answers: [
      '(-inf; -3)',
      '(-3; -1)',
      '(-1; 1)',
      '(1; 3)'
    ],
    correctAnswer: '(-3; -1)'
  },
  {
    name: 'Which of the following intervals belongs to the root of the equation: 2^(x + 3) - 3 * 2^x = 10 * sqrt(2)?',
    answers: [
      '(-inf; 0)',
      '[0; 5)',
      '[0.5; 1)',
      '[1; 2)'
    ],
    correctAnswer: '[1; 2)'
  },
  {
    name: 'Which is derived from the number?',
    answers: [
      '0',
      '1',
      'inf',
      '-1'
    ],
    correctAnswer: '0'
  },
  {
    name: 'Which is derived from the sin(a)?',
    answers: [
      '0',
      '1',
      'cos(x)',
      '-cos(x)'
    ],
    correctAnswer: '-cos(x)'
  },
  {
    name: 'Which is derived from the cos(a)?',
    answers: [
      '0',
      '1',
      '-cos(x)',
      '-sin(x)'
    ],
    correctAnswer: '-cos(x)'
  }
];

export const QUIZ_CARDS: IQuiz[] = [
  {
    id: 1,
    title: '10 Qusstions',
    subtitle: 'Emoji Bands',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 2,
    title: '10 Qusstions',
    subtitle: 'Easter Emoji Quiz: Can You Get 100 Percent?',
    group: 'mathematical',
    questions: MATHEMATICAL_QUESTIONS
  },
  {
    id: 3,
    title: '10 Qusstions',
    subtitle: 'London Underground & Tube Station Emoji',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 4,
    title: '10 Qusstions',
    subtitle: 'Trivia Quiz: Guess The WWE Star From The Emoji!',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 5,
    title: '10 Qusstions',
    subtitle: 'What Emoji Am I?',
    group: 'mathematical',
    questions: MATHEMATICAL_QUESTIONS
  }
];
