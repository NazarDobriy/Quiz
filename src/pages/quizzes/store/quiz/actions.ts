import { createAction, props } from '@ngrx/store';

import { IQuiz } from 'src/pages/quizzes/providers/quiz.service';

export const getQuiz = createAction('[Quiz] Get Quiz', props<{ id: number }>());
export const getQuizSuccess = createAction(
  '[Quiz] Get Quiz success',
  props<{ quiz: IQuiz }>()
);
export const getQuizFailure = createAction(
  '[Quiz] Get Quiz failure',
  props<{ error: string }>()
);
