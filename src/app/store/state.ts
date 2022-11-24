import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IQuizzesState } from "./quizzes/state";

export interface IAppState {
  quizzes: IQuizzesState<IQuiz>;
}
