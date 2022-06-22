import { IQuiz, IQuizResult } from "./pages/quizzes/providers/quiz.service";
import { IQuizTheme } from "./pages/quizzes/providers/theme.service";

export const mockQuizzes: IQuiz[] = [
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
