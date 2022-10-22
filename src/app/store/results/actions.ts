import { createAction, props } from "@ngrx/store";

import { IQuizResult } from "src/pages/quizzes/providers/quiz.service";

export const getResults = createAction('[Quizzes Results] Get Quizzes Results');
export const getResultsSuccess = createAction('[Quizzes Results] Get Quizzes Results success', props<{ results: IQuizResult[]; }>());
export const getResultsFailure = createAction('[Quizzes Results] Get Quizzes Results failure', props<{ error: string; }>());
