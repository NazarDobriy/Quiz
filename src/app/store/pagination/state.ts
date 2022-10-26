import { IPaginationScheme, IQuiz } from "src/pages/quizzes/providers/quiz.service";

export interface IPaginationState<T> {
  paginationData: IPaginationScheme<T>;
  isLoading: boolean;
  error: string | null;
}

export const paginationInitialState: IPaginationState<IQuiz> = {
  paginationData: {
    count: 0,
    offset: 0,
    total: 0,
    data: []
  },
  isLoading: false,
  error: null
}
