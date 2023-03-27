import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IQuizState } from "./state";
import { IQuiz, IQuizResult } from "@a-pages/quizzes/types/quiz.type";

export const selectFeature = createFeatureSelector<IQuizState>('quiz');

export const selectQuiz = createSelector(selectFeature, ({ quiz }: IQuizState): IQuiz => quiz.data);
export const selectIsLoadingQuiz = createSelector(selectFeature, ({ quiz }: IQuizState): boolean => quiz.isLoading);
export const selectErrorQuiz = createSelector(selectFeature, ({ quiz }: IQuizState): string | null => quiz.error);
export const selectQuizQuestionsLength = createSelector(selectFeature, ({ quiz }: IQuizState): number => quiz.data.questions.length);

export const selectQuizResult = createSelector(selectFeature, ({ result }: IQuizState): IQuizResult | null => result.data);
export const selectIsLoadingQuizResult = createSelector(selectFeature, ({ result }: IQuizState): boolean => result.isLoading);
export const selectErrorQuizResult = createSelector(selectFeature, ({ result }: IQuizState): string | null => result.error);
export const selectQuizResultScore = createSelector(selectFeature, ({ result }: IQuizState): number => result.data?.correct || 0);
export const selectQuizResultSeconds = createSelector(selectFeature, ({ result }: IQuizState): number => result.data?.seconds || 0);
