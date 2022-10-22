import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';
import * as QuizzesActions from '../../app/store/quizzes/actions';
import * as QuizzesSelectors from '../../app/store/quizzes/selectors';
import * as ResultsActions from '../../app/store/results/actions';
import * as ResultsSelectors from '../../app/store/results/selectors';

@Injectable()
export class StoreService {
  public quizzes$: Observable<IQuiz[]> = this.store.select(QuizzesSelectors.selectQuizzes);
  public quizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectError);
  public isLoadingQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoading);

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
}
