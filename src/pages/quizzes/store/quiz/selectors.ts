import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IQuizState } from "./state";
import { IQuiz } from "src/pages/quizzes/providers/quiz.service";

export const selectFeature = createFeatureSelector<IQuizState>('quiz');

export const selectQuizzes = createSelector(selectFeature, ({ quiz }: IQuizState): IQuiz => quiz.data);
export const selectIsLoadingQuizzes = createSelector(selectFeature, ({ quiz }: IQuizState): boolean => quiz.isLoading);
export const selectErrorQuizzes = createSelector(selectFeature, ({ quiz }: IQuizState): string | null => quiz.error);
