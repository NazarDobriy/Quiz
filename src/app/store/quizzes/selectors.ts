import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IQuiz } from "src/pages/quizzes/providers/quiz.service";
import { IQuizzesState } from "./state";

export const selectFeature = createFeatureSelector<IQuizzesState>('quizzes');

export const selectQuizzes = createSelector(selectFeature, (state: IQuizzesState): IQuiz[] => state.quizzes);
export const selectIsLoading = createSelector(selectFeature, (state: IQuizzesState): boolean => state.isLoading);
export const selectError = createSelector(selectFeature, (state: IQuizzesState): string | null => state.error);
