import { IQuiz } from '@a-pages/quizzes/types/quiz.type';
import { IQuizTheme } from '../types/theme.type';

export const initialQuiz: IQuiz = {
  id: 0,
  title: '',
  subtitle: '',
  group: '',
  questions: [],
};

export const initialQuizTheme: IQuizTheme = {
  primaryTextClass: '',
  secondaryTextClass: '',
  secondaryActiveTextClass: '',
  numberTextClass: '',
  numberBackgroundClass: '',
  backgroundClass: '',
  btnsBackgroundClass: '',
  btnsTextClass: '',
  radioButtonColor: '',
  titleTextClass: '',
  personName: ''
};
