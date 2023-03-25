import { IPaginationScheme, IQuiz, IQuizResult } from "../../types/quiz.type";

export interface IQuizzesState<T> {
  quizzes: {
    isLoading: boolean;
    data: IQuiz[];
    error: string | null;
    scheme: IPaginationScheme<T>;
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
    error: null,
    scheme: {
      count: 0,
      offset: 0,
      total: 0,
      data: []
    }
  },
  results: {
    isLoading: false,
    data: [],
    error: null
  }
}
