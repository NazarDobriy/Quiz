import { createReducer, on } from "@ngrx/store";

import { IPaginationState, paginationInitialState } from "./state";
import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import * as PaginationActions from './actions';

export const paginationReducer = createReducer(
  paginationInitialState,
  on(PaginationActions.getPaginationQuizzes, (state): IPaginationState<IQuiz> => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(PaginationActions.getPaginationQuizzesSuccess, (state, action): IPaginationState<IQuiz> => {
    return {
      ...state,
      isLoading: false,
      paginationData: action.paginationQuizzes
    }
  }),
  on(PaginationActions.getPaginationQuizzesFailure, (state, action): IPaginationState<IQuiz> => {
    return {
      ...state,
      error: action.error
    }
  })
);
