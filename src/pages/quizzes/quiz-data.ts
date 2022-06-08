import { IQuizTheme } from "./providers/theme.service";
import { IQuestion, IQuiz } from "./providers/quiz.service";

export const QUIZ_THEMES: IQuizTheme[] = [
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
    titleTextClass: 'text-secondary',
    primaryTextClass: 'text-primary',
    secondaryTextClass: 'text-primary',
    secondaryActiveTextClass: 'text-bright',
    numberTextClass: 'text-primary',
    numberBackgroundClass: 'bg-warning',
    backgroundClass: 'bg-bright',
    btnsBackgroundClass: 'bg-error',
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
    numberBackgroundClass: 'bg-error',
    backgroundClass: 'bg-warning',
    btnsBackgroundClass: 'bg-accent',
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
      { id: '0', text: '1256' },
      { id: '1', text: '1356' },
      { id: '2', text: '1288' },
      { id: '3', text: '1367' }
    ],
    correctAnswer: '1'
  },
  {
    name: 'When hetman Petro Sagaidachny made a military campaign to the city of Kafa?',
    answers: [
      { id: '0', text: '1607' },
      { id: '1', text: '1588' },
      { id: '2', text: '1616' },
      { id: '3', text: '1618' }
    ],
    correctAnswer: '2'
  },
  {
    name: 'Who led the national liberation war against the Commonwealth?',
    answers: [
      { id: '0', text: 'Bogdan Khmelnitsky' },
      { id: '1', text: 'Petro Sagaidachny' },
      { id: '2', text: 'Ivan Mazapa' },
      { id: '3', text: 'Yurii Khmelnitsky' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'When the national liberation war against the Commonwealth began?',
    answers: [
      { id: '0', text: '1635' },
      { id: '1', text: '1650' },
      { id: '2', text: '1648' },
      { id: '3', text: '1655' }
    ],
    correctAnswer: '2'
  },
  {
    name: 'When World War I began?',
    answers: [
      { id: '0', text: '1915' },
      { id: '1', text: '1938' },
      { id: '2', text: '1939' },
      { id: '3', text: '1914' }
    ],
    correctAnswer: '3'
  },
  {
    name: 'Who headed Central Council of Ukraine?',
    answers: [
      { id: '0', text: 'Pavlo Skoropadsky' },
      { id: '1', text: 'Mykola Hrushevsky' },
      { id: '2', text: 'Ivan Franko' },
      { id: '3', text: 'Taras Shevchenko' }
    ],
    correctAnswer: '1'
  },
  {
    name: 'When the industrialization started?',
    answers: [
      { id: '0', text: '1930' },
      { id: '1', text: '1925' },
      { id: '2', text: '1940' },
      { id: '3', text: '1927' }
    ],
    correctAnswer: '1'
  },
  {
    name: 'When independence was proclaimed in Ukraine?',
    answers: [
      { id: '0', text: '1991' },
      { id: '1', text: '1990' },
      { id: '2', text: '1940' },
      { id: '3', text: '1927' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'Who became the first president of Ukraine?',
    answers: [
      { id: '0', text: 'Leonid Kravchuk' },
      { id: '1', text: 'Leonid Kuchma' },
      { id: '2', text: 'Petro Poroshenko' },
      { id: '3', text: 'Volodymyr Zelenskyy' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'When the Budapest Memorandum was signed?',
    answers: [
      { id: '0', text: '1990' },
      { id: '1', text: '2000' },
      { id: '2', text: '1994' },
      { id: '3', text: '1995' }
    ],
    correctAnswer: '2'
  }
];

export const MATHEMATICAL_QUESTIONS: IQuestion[] = [
  {
    name: 'Simplify the expression 0.8b^9 : 8b^3, where b not = 0',
    answers: [
      { id: '0', text: '0.1b^6' },
      { id: '1', text: '10b^6' },
      { id: '2', text: '0.1b^3' },
      { id: '3', text: '10b^3' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'Solve the equation: (x + 1) * (2x - 3) = 0',
    answers: [
      { id: '0', text: '-3; 1' },
      { id: '1', text: '-1.5; 1' },
      { id: '2', text: '-1; 3' },
      { id: '3', text: '-1; 1.5' }
    ],
    correctAnswer: '3'
  },
  {
    name: 'Which of the following numbers is the solution of the inequality |x| > 3?',
    answers: [
      { id: '0', text: '3' },
      { id: '1', text: '1' },
      { id: '2', text: '-8' },
      { id: '3', text: '-3' }
    ],
    correctAnswer: '2'
  },
  {
    name: 'Simplify the expression (1 - sin^2(a) * tg^2(a))',
    answers: [
      { id: '0', text: 'sin(2a)' },
      { id: '1', text: 'cos(2a)' },
      { id: '2', text: 'sin^2(a)' },
      { id: '3', text: 'ctg^2(a)' }
    ],
    correctAnswer: '2'
  },
  {
    name: 'Reduce the fraction (a^2 - b^2) / (a^2 - a * b)',
    answers: [
      { id: '0', text: '(a + b) / a' },
      { id: '1', text: '(a - b) / a' },
      { id: '2', text: 'b / a' },
      { id: '3', text: 'b' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'Which of the following intervals belongs to the number log2(1/3)',
    answers: [
      { id: '0', text: '(-inf; -3)' },
      { id: '1', text: '(-3; -1)' },
      { id: '2', text: '(-1; 1)' },
      { id: '3', text: '(1; 3)' }
    ],
    correctAnswer: '1'
  },
  {
    name: 'Which of the following intervals belongs to the root of the equation: 2^(x + 3) - 3 * 2^x = 10 * sqrt(2)?',
    answers: [
      { id: '0', text: '(-inf; 0)' },
      { id: '1', text: '[0; 5)' },
      { id: '2', text: '[0.5; 1)' },
      { id: '3', text: '[1; 2)' }
    ],
    correctAnswer: '3'
  },
  {
    name: 'Which is derived from the number?',
    answers: [
      { id: '0', text: '0' },
      { id: '1', text: '1' },
      { id: '2', text: 'inf' },
      { id: '3', text: '-1' }
    ],
    correctAnswer: '0'
  },
  {
    name: 'Which is derived from the sin(a)?',
    answers: [
      { id: '0', text: '0' },
      { id: '1', text: '1' },
      { id: '2', text: 'cos(x)' },
      { id: '3', text: '-cos(x)' }
    ],
    correctAnswer: '3'
  },
  {
    name: 'Which is derived from the cos(a)?',
    answers: [
      { id: '0', text: '0' },
      { id: '1', text: '1' },
      { id: '2', text: '-cos(x)' },
      { id: '3', text: '-sin(x)' }
    ],
    correctAnswer: '2'
  }
];

export const QUIZ_CARDS: IQuiz[] = [
  {
    id: 1,
    title: '10 Questions',
    subtitle: 'Emoji Bands',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 2,
    title: '10 Questions',
    subtitle: 'Easter Emoji Quiz: Can You Get 100 Percent?',
    group: 'mathematical',
    questions: MATHEMATICAL_QUESTIONS
  },
  {
    id: 3,
    title: '10 Questions',
    subtitle: 'London Underground & Tube Station Emoji',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 4,
    title: '10 Questions',
    subtitle: 'Trivia Quiz: Guess The WWE Star From The Emoji!',
    group: 'historical',
    questions: HISTORICAL_QUESTIONS
  },
  {
    id: 5,
    title: '10 Questions',
    subtitle: 'What Emoji Am I?',
    group: 'mathematical',
    questions: MATHEMATICAL_QUESTIONS
  }
];
