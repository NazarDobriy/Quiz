import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as QuizzesActions from '../../pages/quizzes/store/quizzes/actions';
import * as QuizzesSelectors from '../../pages/quizzes/store/quizzes/selectors';
import { IPaginationScheme, IQuiz, IQuizResult } from 'src/pages/quizzes/providers/quiz.service';

@Injectable()
export class QuizzesStoreService {
  public quizzes$: Observable<IQuiz[]> = this.store.select(QuizzesSelectors.selectQuizzes);
  public quizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectErrorQuizzes);
  public isLoadingQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoadingQuizzes);

  public paginationQuizzes$: Observable<IPaginationScheme<IQuiz>> = this.store.select(QuizzesSelectors.selectPaginationQuizzes);
  public paginationQuizzesError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectErrorPaginationQuizzes);
  public isLoadingPaginationQuizzes$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoadingPaginationQuizzes);

  public quizzesResults$: Observable<IQuizResult[]> = this.store.select(QuizzesSelectors.selectQuizzesResults);
  public quizzesResultsError$: Observable<string | null> = this.store.select(QuizzesSelectors.selectErrorQuizzesResults);
  public isLoadingQuizzesResults$: Observable<boolean> = this.store.select(QuizzesSelectors.selectIsLoadingQuizzesResults);

  constructor(private store: Store) { }

  public getQuizzes(): void {
    this.store.dispatch(QuizzesActions.getQuizzes());
  }

  public getQuizzesResults(): void {
    this.store.dispatch(QuizzesActions.getQuizzesResults());
  }

  public getPaginationQuizzes(offset: number, count: number): void {
    this.store.dispatch(QuizzesActions.getPaginationQuizzes({ offset: offset, count: count}));
  }
}
