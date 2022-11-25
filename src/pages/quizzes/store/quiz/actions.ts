import { createAction, props } from '@ngrx/store';

import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

export const getQuiz = createAction('[Quiz] Get Quiz', props<{ id: number }>());
export const getQuizSuccess = createAction(
  '[Quiz] Get Quiz success',
  props<{ quiz: IQuiz }>()
);
export const getQuizFailure = createAction(
  '[Quiz] Get Quiz failure',
  props<{ error: string }>()
);

export const getQuizResult = createAction('[Quiz Result] Get Quiz Result', props<{ id: number }>());
export const getQuizResultSuccess = createAction(
  '[Quiz Result] Get Quiz Result success',
  props<{ result: IQuizResult | null }>()
);
export const getQuizResultFailure = createAction(
  '[Quiz Result] Get Quiz Result failure',
  props<{ error: string }>()
);
