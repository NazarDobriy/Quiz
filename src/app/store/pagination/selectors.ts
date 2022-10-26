import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IPaginationState } from "./state";
import { IPaginationScheme, IQuiz } from "src/pages/quizzes/providers/quiz.service";

export const selectFeature = createFeatureSelector<IPaginationState<IQuiz>>('pagination');

export const selectPaginationQuizzes = createSelector(selectFeature, (state: IPaginationState<IQuiz>): IPaginationScheme<IQuiz> => state.paginationData);
export const selectIsLoading = createSelector(selectFeature, (state: IPaginationState<IQuiz>): boolean => state.isLoading);
export const selectError = createSelector(selectFeature, (state: IPaginationState<IQuiz>): string | null => state.error);
