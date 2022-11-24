import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as QuizzesActions from '../../app/store/quizzes/actions';
import * as QuizzesSelectors from '../../app/store/quizzes/selectors';
import * as ResultsActions from '../../app/store/results/actions';
import * as ResultsSelectors from '../../app/store/results/selectors';
import { IPaginationScheme, IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class StoreService {
  public quizzes$: Observable<IQuiz[]> = this.store.select(QuizzesSelectors.selectQuizzes);
  public quizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectErrorQuizzes);
  public isLoadingQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoadingQuizzes);

  public paginationQuizzes$: Observable<IPaginationScheme<IQuiz>> = this.store.select(QuizzesSelectors.selectPaginationQuizzes);
  public paginationQuizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectErrorPaginationQuizzes);
  public isLoadingPaginationQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoadingPaginationQuizzes);

  public results$: Observable<IQuizResult[]> = this.store.select(ResultsSelectors.selectResults);
  public resultsError$: Observable<string | null> = this.store.select(ResultsSelectors.selectError);
  public isLoadingResults$: Observable<boolean> = this.store.select(ResultsSelectors.selectIsLoading);

  constructor(private store: Store) { }

  public dispatchQuizzes(): void {
    this.store.dispatch(QuizzesActions.getQuizzes());
  }

  public dispatchResults(): void {
    this.store.dispatch(ResultsActions.getResults());
  }

  public dispatchPaginationQuizzes(offset: number, count: number): void {
    this.store.dispatch(QuizzesActions.getPaginationQuizzes({ offset: offset, count: count}));
  }
}
