import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IQuizzesState } from "./state";
import { IPaginationScheme, IQuiz } from "src/pages/quizzes/providers/quiz.service";

export const selectFeature = createFeatureSelector<IQuizzesState<IQuiz>>('quizzes');

export const selectQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): IQuiz[] => quizzes.data);
export const selectIsLoadingQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): boolean => quizzes.isLoading);
export const selectErrorQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): string | null => quizzes.error);

export const selectPaginationQuizzes = createSelector(selectFeature, ({ pagination }: IQuizzesState<IQuiz>): IPaginationScheme<IQuiz> => pagination.data);
export const selectIsLoadingPaginationQuizzes = createSelector(selectFeature, ({ pagination }: IQuizzesState<IQuiz>): boolean => pagination.isLoading);
export const selectErrorPaginationQuizzes = createSelector(selectFeature, ({ pagination }: IQuizzesState<IQuiz>): string | null => pagination.error);
