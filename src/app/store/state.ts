import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IPaginationState } from "./pagination/state";
import { IQuizzesState } from "./quizzes/state";
import { IResultsState } from "./results/state";

export interface IAppState {
  quizzes: IQuizzesState;
  results: IResultsState;
  pagination: IPaginationState<IQuiz>;
}
