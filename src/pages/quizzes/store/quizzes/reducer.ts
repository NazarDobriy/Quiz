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
  on(QuizzesActions.getQuizzesScheme, (state): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        isLoading: true
      }
    }
  }),
  on(QuizzesActions.getQuizzesSchemeSuccess, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        isLoading: false,
        scheme: action.scheme
      }
    }
  }),
  on(QuizzesActions.getQuizzesSchemeFailure, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        error: action.error
      }
    }
  }),
  on(QuizzesActions.getQuizzesResults, (state): IQuizzesState<IQuiz> => {
    return {
      ...state,
      results: {
        ...state.results,
        isLoading: true
      }
    }
  }),
  on(QuizzesActions.getQuizzesResultsSuccess, (state, action): IQuizzesState<IQuiz> => {
    return {
      ...state,
      results: {
        ...state.results,
        data: action.results,
        isLoading: false
      }
    }
  }),
  on(QuizzesActions.getQuizzesResultsFailure, (state, action): IQuizzesState<IQuiz> => {
    return  {
      ...state,
      results: {
        ...state.results,
        error: action.error
      }
    }
  })
);
