import { createReducer, on } from '@ngrx/store';

import { IQuizzesState, quizzesInitialState } from './state';
import * as QuizzesActions from './actions';

export const quizzesReducer = createReducer(
  quizzesInitialState,
  on(QuizzesActions.getQuizzes, (state): IQuizzesState => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(QuizzesActions.getQuizzesSuccess, (state, action): IQuizzesState => {
    return {
      ...state,
      isLoading: false,
      quizzes: action.quizzes
    };
  }),
  on(QuizzesActions.getQuizzesFailure, (state, action): IQuizzesState => {
    return {
      ...state,
      error: action.error
    };
  })
);
