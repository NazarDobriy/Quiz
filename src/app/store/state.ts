import { IQuiz } from "@a-pages/quizzes/types/quiz.type";
import { IQuizState } from "@a-pages/quizzes/store/quiz/state";
import { IQuizzesState } from "@a-pages/quizzes/store/quizzes/state";

export interface IAppState {
  quiz: IQuizState;
  quizzes: IQuizzesState<IQuiz>;
}
