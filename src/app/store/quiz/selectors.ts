import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IPaginationScheme, IQuiz, IQuizResult } from "src/pages/quizzes/providers/quiz.service";
import { IQuizTheme } from "src/pages/quizzes/providers/theme.service";
import { QuizState } from "./state";

export const selectQuizFeature = createFeatureSelector<QuizState>('quiz');

export const selectQuiz = createSelector(selectQuizFeature, (state: QuizState) => state.quiz);

export const selectQuizzes = createSelector(selectQuizFeature, (state: QuizState): IQuiz[] => state.quizzes);

export const selectTheme = createSelector(selectQuizFeature, (state: QuizState): IQuizTheme => state.theme);

export const selectThemes = createSelector(selectQuizFeature, (state: QuizState): IQuizTheme[] => state.themes);

export const selectCorrectAnswers = createSelector(selectQuizFeature, (state: QuizState): string[] => state.correctAnswers);

export const selectResult = createSelector(selectQuizFeature, (state: QuizState): IQuizResult | null => state.result);

export const selectPaginationScheme = createSelector(selectQuizFeature, (state: QuizState): IPaginationScheme<IQuiz> => state.paginationScheme);
