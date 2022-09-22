import { createSelector } from "@ngrx/store";

import { IPaginationScheme, IQuiz, IQuizResult } from "src/pages/quizzes/providers/quiz.service";
import { IQuizTheme } from "src/pages/quizzes/providers/theme.service";
import { State } from "../state";
import { QuizState } from "./state";

export const quizState = (state: State): QuizState => state.quiz;

export const selectQuiz = createSelector(quizState, (state: QuizState): IQuiz => state.quiz);

export const selectQuizzes = createSelector(quizState, (state: QuizState): IQuiz[] => state.quizzes);

export const selectTheme = createSelector(quizState, (state: QuizState): IQuizTheme => state.theme);

export const selectThemes = createSelector(quizState, (state: QuizState): IQuizTheme[] => state.themes);

export const selectCorrectAnswers = createSelector(quizState, (state: QuizState): string[] => state.correctAnswers);

export const selectResult = createSelector(quizState, (state: QuizState): IQuizResult | null => state.result);

export const selectPaginationScheme = createSelector(quizState, (state: QuizState): IPaginationScheme<IQuiz> => state.paginationScheme);
