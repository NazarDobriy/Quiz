import { IQuiz } from "src/pages/quizzes/providers/quiz.service";

export interface IQuizzesState {
  isLoading: boolean;
  quizzes: IQuiz[];
  error: string | null;
}

export const quizzesInitialState: IQuizzesState = {
  quizzes: [],
  isLoading: false,
  error: null
}
