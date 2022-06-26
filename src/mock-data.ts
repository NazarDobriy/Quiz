import { IDialogConfig } from "./pages/quizzes/pages/active/providers/dialog.service";
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

export const mockDialogConfig: IDialogConfig = {
  title: "Cancel",
  message: "Are you sure you want to exit?",
  dismissText: "No",
  confirmText: "Yes"
};
