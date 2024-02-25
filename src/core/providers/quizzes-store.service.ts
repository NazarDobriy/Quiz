import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as QuizzesActions from '@a-pages/quizzes/store/quizzes/actions';
import * as QuizzesSelectors from '@a-pages/quizzes/store/quizzes/selectors';

@Injectable()
export class QuizzesStoreService {
  quizzes$ = this.store.select(QuizzesSelectors.selectQuizzes);
  quizzesError$ = this.store.select(QuizzesSelectors.selectErrorQuizzes);
  isLoadingQuizzes$ = this.store.select(QuizzesSelectors.selectIsLoadingQuizzes);
  quizzesScheme$ = this.store.select(QuizzesSelectors.selectQuizzesScheme);

  quizzesResults$ = this.store.select(QuizzesSelectors.selectQuizzesResults);
  quizzesResultsError$ = this.store.select(QuizzesSelectors.selectErrorQuizzesResults);
  isLoadingQuizzesResults$ = this.store.select(QuizzesSelectors.selectIsLoadingQuizzesResults);

  constructor(private store: Store) { }

  getQuizzes(): void {
    this.store.dispatch(QuizzesActions.getQuizzes());
  }

  getQuizzesResults(): void {
    this.store.dispatch(QuizzesActions.getQuizzesResults());
  }

  getQuizzesScheme(offset: number, count: number): void {
    this.store.dispatch(QuizzesActions.getQuizzesScheme({ offset, count}));
  }
}
