import { quizInitialState, QuizState } from "./state";

export function quizReducer(state = quizInitialState, action: any): QuizState {
  console.log(action);
  return state;
};
