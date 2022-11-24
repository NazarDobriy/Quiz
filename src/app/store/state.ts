import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IQuizzesState } from "../../pages/quizzes/store/quizzes/state";

export interface IAppState {
  quizzes: IQuizzesState<IQuiz>;
}
