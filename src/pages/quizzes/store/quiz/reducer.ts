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
  }),
  on(QuizActions.getQuizResult, (state): IQuizState => {
    return {
      ...state,
      result: {
        ...state.result,
        isLoading: true
      }
    };
  }),
  on(QuizActions.getQuizResultSuccess, (state, action): IQuizState => {
    return {
      ...state,
      result: {
        ...state.result,
        isLoading: false,
        data: action.result
      }
    };
  }),
  on(QuizActions.getQuizResultFailure, (state, action): IQuizState => {
    return {
      ...state,
      result: {
        ...state.result,
        error: action.error
      }
    };
  })
);
