import { createAction, props } from '@ngrx/store';

import { IQuiz, IPaginationScheme, IQuizResult } from '@a-pages/quizzes/types/quiz.type';

export const getQuizzes = createAction('[Quizzes] Get Quizzes');
export const getQuizzesSuccess = createAction(
  '[Quizzes] Get Quizzes success',
  props<{ quizzes: IQuiz[] }>()
);
export const getQuizzesFailure = createAction(
  '[Quizzes] Get Quizzes failure',
  props<{ error: string }>()
);

export const getQuizzesScheme = createAction(
  '[Quizzes] Get Quizzes Scheme',
  props<{ offset: number; count: number }>()
);
export const getQuizzesSchemeSuccess = createAction(
  '[Quizzes] Get Quizzes Scheme success',
  props<{ scheme: IPaginationScheme<IQuiz> }>()
);
export const getQuizzesSchemeFailure = createAction(
  '[Pagination Quizzes] Get Quizzes Scheme failure',
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
