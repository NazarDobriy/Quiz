import { createAction, props } from '@ngrx/store';

import { IQuiz } from 'src/pages/quizzes/providers/quiz.service';

export const getQuizzes = createAction('[Quizzes] Get Quizzes');
export const getQuizzesSuccess = createAction('[Quizzes] Get Quizzes success', props<{ quizzes: IQuiz[]; }>());
export const getQuizzesFailure = createAction('[Quizzes] Get Quizzes failure', props<{ error: string; }>());
