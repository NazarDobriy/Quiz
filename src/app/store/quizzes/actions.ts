import { createAction, props } from '@ngrx/store';

import {
  IPaginationScheme,
  IQuiz,
  IQuizResult,
} from 'src/pages/quizzes/providers/quiz.service';

export const getQuizzes = createAction('[Quizzes] Get Quizzes');
export const getQuizzesSuccess = createAction(
  '[Quizzes] Get Quizzes success',
  props<{ quizzes: IQuiz[] }>()
);
export const getQuizzesFailure = createAction(
  '[Quizzes] Get Quizzes failure',
  props<{ error: string }>()
);

export const getPaginationQuizzes = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes',
  props<{ offset: number; count: number }>()
);
export const getPaginationQuizzesSuccess = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes success',
  props<{ paginationQuizzes: IPaginationScheme<IQuiz> }>()
);
export const getPaginationQuizzesFailure = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes failure',
  props<{ error: string }>()
);

export const getQuizzesResults = createAction('[Quizzes Results] Get Quizzes Results');
export const getQuizzesResultsSuccess = createAction(
  '[Quizzes Results] Get Quizzes Results success',
  props<{ results: IQuizResult[] }>()
);
export const getQuizzesResultsFailure = createAction(
  '[Quizzes Results] Get Quizzes Results failure',
  props<{ error: string }>()
);
