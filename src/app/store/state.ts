import { IQuiz } from "src/pages/quizzes/types/quiz.type";
import { IQuizState } from "src/pages/quizzes/store/quiz/state";
import { IQuizzesState } from "../../pages/quizzes/store/quizzes/state";

export interface IAppState {
  quiz: IQuizState;
  quizzes: IQuizzesState<IQuiz>;
}
