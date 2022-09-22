import { IPaginationScheme, IQuiz, IQuizResult } from "src/pages/quizzes/providers/quiz.service";
import { IQuizTheme } from "src/pages/quizzes/providers/theme.service";

export interface QuizState {
  quiz: IQuiz;
  quizzes: IQuiz[];
  theme: IQuizTheme;
  themes: IQuizTheme[];
  correctAnswers: string[];
  result: IQuizResult | null;
  paginationScheme: IPaginationScheme<IQuiz>;
}

export const quizInitialState: QuizState = {
  quiz: {
    id: 0,
    title: '',
    subtitle: '',
    group: '',
    questions: []
  },
  quizzes: [],
  theme: {
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
  },
  themes: [],
  correctAnswers: [],
  result: null,
  paginationScheme: {
    count: 0,
    offset: 0,
    total: 0,
    data: []
  }
}
