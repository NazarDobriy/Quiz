import { IQuiz, IQuizResult } from "./pages/quizzes/providers/quiz.service";
import { IQuizTheme } from "./pages/quizzes/providers/theme.service";

export const mockQuizzes: IQuiz[] = [
  {
    id: 1,
    title: 'Music is the best',
    subtitle: 'Music questions',
    group: 'bang',
    questions: [
      {
        "name": "When the city of Lviv received the Magdeburg Law?",
        "answers": [
          {
            "id": '0',
            "text": "1256"
          },
          {
            "id": '1',
            "text": "1356"
          },
          {
            "id": '2',
            "text": "1288"
          },
          {
            "id": '3',
            "text": "1367"
          }
        ],
        "correctAnswer": '1'
      },
      {
        "name": "When hetman Petro Sagaidachny made a military campaign to the city of Kafa?",
        "answers": [
          {
            "id": '0',
            "text": "1607"
          },
          {
            "id": '1',
            "text": "1588"
          },
          {
            "id": '2',
            "text": "1616"
          },
          {
            "id": '3',
            "text": "1618"
          }
        ],
        "correctAnswer": '2'
      },
      {
        "name": "Who led the national liberation war against the Commonwealth?",
        "answers": [
          {
            "id": '0',
            "text": "Bogdan Khmelnitsky"
          },
          {
            "id": '1',
            "text": "Petro Sagaidachny"
          },
          {
            "id": '2',
            "text": "Ivan Mazapa"
          },
          {
            "id": '3',
            "text": "Yurii Khmelnitsky"
          }
        ],
        "correctAnswer": '0'
      },
      {
        "name": "When the national liberation war against the Commonwealth began?",
        "answers": [
          {
            "id": '0',
            "text": "1635"
          },
          {
            "id": '1',
            "text": "1650"
          },
          {
            "id": '2',
            "text": "1648"
          },
          {
            "id": '3',
            "text": "1655"
          }
        ],
        "correctAnswer": '2'
      },
      {
        "name": "When World War I began?",
        "answers": [
          {
            "id": '0',
            "text": "1915"
          },
          {
            "id": '1',
            "text": "1938"
          },
          {
            "id": '2',
            "text": "1939"
          },
          {
            "id": '3',
            "text": "1914"
          }
        ],
        "correctAnswer": '3'
      },
      {
        "name": "Who headed Central Council of Ukraine?",
        "answers": [
          {
            "id": '0',
            "text": "Pavlo Skoropadsky"
          },
          {
            "id": '1',
            "text": "Mykola Hrushevsky"
          },
          {
            "id": '2',
            "text": "Ivan Franko"
          },
          {
            "id": '3',
            "text": "Taras Shevchenko"
          }
        ],
        "correctAnswer": '1'
      },
      {
        "name": "When the industrialization started?",
        "answers": [
          {
            "id": '0',
            "text": "1930"
          },
          {
            "id": '1',
            "text": "1925"
          },
          {
            "id": '2',
            "text": "1940"
          },
          {
            "id": '3',
            "text": "1927"
          }
        ],
        "correctAnswer": '1'
      },
      {
        "name": "When independence was proclaimed in Ukraine?",
        "answers": [
          {
            "id": '0',
            "text": "1991"
          },
          {
            "id": '1',
            "text": "1990"
          },
          {
            "id": '2',
            "text": "1940"
          },
          {
            "id": '3',
            "text": "1927"
          }
        ],
        "correctAnswer": '0'
      },
      {
        "name": "Who became the first president of Ukraine?",
        "answers": [
          {
            "id": '0',
            "text": "Leonid Kravchuk"
          },
          {
            "id": '1',
            "text": "Leonid Kuchma"
          },
          {
            "id": '2',
            "text": "Petro Poroshenko"
          },
          {
            "id": '3',
            "text": "Volodymyr Zelenskyy"
          }
        ],
        "correctAnswer": '0'
      },
      {
        "name": "When the Budapest Memorandum was signed?",
        "answers": [
          {
            "id": '0',
            "text": "1990"
          },
          {
            "id": '1',
            "text": "2000"
          },
          {
            "id": '2',
            "text": "1994"
          },
          {
            "id": '3',
            "text": "1995"
          }
        ],
        "correctAnswer": '2'
      }
    ]
  },
  {
    id: 2,
    title: 'Nature is a part of life',
    subtitle: 'Nature questions',
    group: 'animals',
    questions: []
  }
];

export const mockQuizThemes: IQuizTheme[] = [
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
    personName: 'mili'
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
    personName: 'meg'
  }
];

export const mockQuizResults: IQuizResult[] = [
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
