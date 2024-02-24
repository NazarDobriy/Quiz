import { initialQuiz } from "@a-pages/quizzes/consts/quizzes.const";
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
    data: initialQuiz,
    error: null
  },
  result: {
    isLoading: false,
    data: null,
    error: null
  }
}
