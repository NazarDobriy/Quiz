import { IQuizzesState } from "./quizzes/state";
import { IResultsState } from "./results/state";

export interface IAppState {
  quizzes: IQuizzesState;
  results: IResultsState;
}
