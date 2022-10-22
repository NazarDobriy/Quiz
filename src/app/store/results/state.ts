import { IQuizResult } from "src/pages/quizzes/providers/quiz.service";

export interface IResultsState {
  isLoading: boolean;
  results: IQuizResult[];
  error: string | null;
}

export const resultsInitialState: IResultsState = {
  isLoading: false,
  results: [],
  error: null
}
