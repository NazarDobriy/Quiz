import { IQuiz, IQuizResult } from "@a-pages/quizzes/types/quiz.type";

export interface IQuizState {
  quiz: {
    isLoading: boolean;
    data: IQuiz;
    error: string | null;
  },
  result: {
    isLoading: boolean;
    data: IQuizResult | null;
    error: string | null;
  }
}

export const quizInitialState: IQuizState = {
  quiz: {
    isLoading: false,
    data: {
      id: 0,
      title: '',
      subtitle: '',
      group: '',
      questions: []
    },
    error: null
  },
  result: {
    isLoading: false,
    data: null,
    error: null
  }
}
