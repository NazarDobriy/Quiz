import { createAction, props } from '@ngrx/store';
import { IPaginationScheme, IQuiz } from 'src/pages/quizzes/providers/quiz.service';

export const getPaginationQuizzes = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes',
  props<{ offset: number; count: number; }>()
);
export const getPaginationQuizzesSuccess = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes success',
  props<{ paginationQuizzes: IPaginationScheme<IQuiz>; }>()
);
export const getPaginationQuizzesFailure = createAction(
  '[Pagination Quizzes] Get Pagination Quizzes failure',
  props<{ error: string; }>()
);
