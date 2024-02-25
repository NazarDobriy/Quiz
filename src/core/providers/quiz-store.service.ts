import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as QuizActions from '@a-pages/quizzes/store/quiz/actions';
import * as QuizSelectors from '@a-pages/quizzes/store/quiz/selectors';

@Injectable()
export class QuizStoreService {
  quiz$ = this.store.select(QuizSelectors.selectQuiz);
  quizError$ = this.store.select(QuizSelectors.selectErrorQuiz);
  isLoadingQuiz$ = this.store.select(QuizSelectors.selectIsLoadingQuiz);
  quizQuestionsLength$ = this.store.select(QuizSelectors.selectQuizQuestionsLength);

  quizResult$ = this.store.select(QuizSelectors.selectQuizResult);
  quizResultError$ = this.store.select(QuizSelectors.selectErrorQuizResult);
  isLoadingQuizResult$ = this.store.select(QuizSelectors.selectIsLoadingQuizResult);
  quizResultScore$ = this.store.select(QuizSelectors.selectQuizResultScore);
  quizResultSeconds$ = this.store.select(QuizSelectors.selectQuizResultSeconds);

  constructor(private store: Store) { }

  getQuiz(id: number): void {
    this.store.dispatch(QuizActions.getQuiz({ id }));
  }

  getQuizResult(id: number): void {
    this.store.dispatch(QuizActions.getQuizResult({ id }));
  }
}
