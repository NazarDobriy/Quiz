import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IResultsState } from "./state";
import { IQuizResult } from "src/pages/quizzes/providers/quiz.service";

export const selectFeature = createFeatureSelector<IResultsState>('results');

export const selectResults = createSelector(selectFeature, (state: IResultsState): IQuizResult[] => state.results);
export const selectIsLoading = createSelector(selectFeature, (state: IResultsState): boolean => state.isLoading);
export const selectError = createSelector(selectFeature, (state: IResultsState): string | null => state.error);
