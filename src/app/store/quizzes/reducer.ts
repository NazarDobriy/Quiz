import { createReducer, on } from '@ngrx/store';

import * as QuizzesActions from './actions';
import { IQuizzesState, quizzesInitialState } from './state';
import { IQuiz } from 'src/pages/quizzes/providers/quiz.service';

export const quizzesReducer = createReducer(
  quizzesInitialState,
  on(QuizzesActions.getQuizzes, (state): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        isLoading: true
      }
    };
  }),
  on(QuizzesActions.getQuizzesSuccess, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        isLoading: false,
        data: action.quizzes
      }
    };
  }),
  on(QuizzesActions.getQuizzesFailure, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        error: action.error
      }
    };
  }),
  on(QuizzesActions.getPaginationQuizzes, (state): IQuizzesState<IQuiz> => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        isLoading: true
      }
    }
  }),
  on(QuizzesActions.getPaginationQuizzesSuccess, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        isLoading: false,
        data: action.paginationQuizzes
      }
    }
  }),
  on(QuizzesActions.getPaginationQuizzesFailure, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        error: action.error
      }
    }
  })
);
