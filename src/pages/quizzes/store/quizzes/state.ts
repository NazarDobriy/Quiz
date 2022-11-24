import { IPaginationScheme, IQuiz, IQuizResult } from "src/pages/quizzes/providers/quiz.service";

export interface IQuizzesState<T> {
  quizzes: {
    isLoading: boolean;
    data: IQuiz[];
    error: string | null;
  },
  pagination: {
    isLoading: boolean;
    data: IPaginationScheme<T>;
    error: string | null;
  },
  results: {
    isLoading: boolean;
    data: IQuizResult[],
    error: string | null;
  }
}

export const quizzesInitialState: IQuizzesState<IQuiz> = {
  quizzes: {
    data: [],
    isLoading: false,
    error: null
  },
  pagination: {
    data: {
      count: 0,
      offset: 0,
      total: 0,
      data: []
    },
    isLoading: false,
    error: null
  },
  results: {
    isLoading: false,
    data: [],
    error: null
  }
}
