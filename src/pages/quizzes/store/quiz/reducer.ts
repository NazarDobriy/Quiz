import { createReducer, on } from '@ngrx/store';

import * as QuizActions from './actions';
import { IQuizState, quizInitialState } from './state';

export const quizReducer = createReducer(
  quizInitialState,
  on(QuizActions.getQuiz, (state): IQuizState => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        isLoading: true
      }
    };
  }),
  on(QuizActions.getQuizSuccess, (state, action): IQuizState => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        isLoading: false,
        data: action.quiz
      }
    };
  }),
  on(QuizActions.getQuizFailure, (state, action): IQuizState => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        error: action.error
      }
    };
  })
);
