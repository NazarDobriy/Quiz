import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IQuizzesState } from "./quizzes/state";
import { IResultsState } from "./results/state";

export interface IAppState {
  quizzes: IQuizzesState<IQuiz>;
  results: IResultsState;
}
