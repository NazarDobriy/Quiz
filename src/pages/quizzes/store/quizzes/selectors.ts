import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IQuizzesState } from "./state";
import { IPaginationScheme, IQuiz, IQuizResult } from "src/pages/quizzes/providers/quiz.service";

export const selectFeature = createFeatureSelector<IQuizzesState<IQuiz>>('quizzes');

export const selectQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): IQuiz[] => quizzes.data);
export const selectIsLoadingQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): boolean => quizzes.isLoading);
export const selectErrorQuizzes = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): string | null => quizzes.error);
export const selectQuizzesScheme = createSelector(selectFeature, ({ quizzes }: IQuizzesState<IQuiz>): IPaginationScheme<IQuiz> => quizzes.scheme);

export const selectQuizzesResults = createSelector(selectFeature, ({ results }: IQuizzesState<IQuiz>): IQuizResult[] => results.data);
export const selectIsLoadingQuizzesResults = createSelector(selectFeature, ({ results }: IQuizzesState<IQuiz>): boolean => results.isLoading);
export const selectErrorQuizzesResults = createSelector(selectFeature, ({ results }: IQuizzesState<IQuiz>): string | null => results.error);
