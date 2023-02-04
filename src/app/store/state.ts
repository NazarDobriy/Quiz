import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IQuizState } from "src/pages/quizzes/store/quiz/state";
import { IQuizzesState } from "../../pages/quizzes/store/quizzes/state";

export interface IAppState {
  quiz: IQuizState;
  quizzes: IQuizzesState<IQuiz>;
}
